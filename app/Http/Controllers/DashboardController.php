<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use App\Models\User;
use App\Models\UserInfo;
use App\Models\Interest;
use Inertia\Inertia;

use Log;

class DashboardController extends Controller
{
    public function view(Request $request) {
        // Check if user is admin

        $check_role = $request->user()->hasRole('admin');
        $data = [];

        if($check_role) {
            $users = User::with('userinfo', 'interest')
            ->whereDoesntHave('roles', function ($query) {
                $query->where('name', 'admin');
            })->get();

            $data['users'] = $users;
        } else {
            $current_user = User::where('id', Auth::user()->id)->with(['userinfo', 'interest'])->first();
            $currentInterests = $current_user->interest->pluck('interest_name')->toArray();

            $users = User::where('id', '!=', Auth::user()->id)->with(['userinfo', 'interest'])->whereDoesntHave('roles', function ($query) {
                $query->where('name', 'admin');
            })->whereHas('interest', function ($query) use ($currentInterests) {
                // Filter users who have at least one shared interest
                $query->whereIn('interest_name', $currentInterests);
            })->withCount(['interest' => function ($query) use ($currentInterests) {
                // Count the number of shared interests
                $query->whereIn('interest_name', $currentInterests);
            }])->orderByDesc('interest_count')
            ->get();

            $data['users'] = $users;
        }

        return Inertia::render('Dashboard', [
            'user' => $request->user(),
            'data' => $data,
            'isAdmin' => $check_role,
            'message' => ''
        ]);
    }

    public function viewEditUser($user_id) {
        $user = User::where('id',$user_id)->with(['userinfo', 'interest'])->first();
        $user_interest = $user->interest->pluck('interest_name')->toArray();
        $user->user_interest = $user_interest;

        return Inertia::render('EditUser', [
            'user' => $user,
        ]);
    }

    public function updateUser(Request $request, $user_id) {
        $user = User::find($user_id);

        if (!$user) {
            // Handle the case where the user with $user_id is not found
            // return redirect()->back();
        }

        // Retrieve the associated UserInfo
        $userInfo = UserInfo::where('user_id', $user_id)->first();

        if (!$userInfo) {
            // Handle the case where the user's UserInfo is not found
            // return redirect()->back();
        }

        // Validate the request data
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'surname' => 'required|string|max:255',
            'mobile_number' => 'required|max:14',
            'birth_date' => 'required|date',
            'language' => 'required|string|max:255',
        ]);

        // Update the User model using fill
        $user->fill($validatedData);
        $user->save();

        // Update the UserInfo model using fill
        $userInfo->fill($validatedData);
        $userInfo->save();

        $userInterests = Interest::where('user_id', $user_id)->get();
        $userInterests->each->delete();

        foreach ($request->interests as $interestName) {
            $interest = new Interest();
            $interest->user_id = $user_id;
            $interest->interest_name = $interestName;
            $interest->save();
        }

        $user = User::where('id',$user_id)->with(['userinfo', 'interest'])->first();

        return Inertia::render('EditUser', [
            'message' => 'Profile updated successfully.',
            'user' => $user,
        ]);
    }

    // Method to view the user information for updating
    public function viewUser() {
        $user = Auth::user();

        $user = User::where('id', $user->id)->with(['userinfo', 'interest'])->first();
        $user_interest = $user->interest->pluck('interest_name')->toArray();
        $user->user_interest = $user_interest;

        return Inertia::render('EditUser', [
            'user' => $user
        ]);
    }

}
