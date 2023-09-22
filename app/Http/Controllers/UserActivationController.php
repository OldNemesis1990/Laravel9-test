<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\User;
use App\Events\AccountApporval;

use Log;

class UserActivationController extends Controller
{
    // userActivation controller is protected by middleware for admin only
    public function userActivation($user_id, $token) {
        
        $user = User::find($user_id);

        $user->activated = 1;

        $user_update = $user->save();

        try{
            if($user_update) {
                event(new AccountApporval($user));

                return to_route('dashboard');
            }

        } catch (\Exception $e) {
            Log::error($e->getMessage());
        }
        
        $check_role = Auth::user()->hasRole('admin');
        
        return Inertia::render('Dashboard', [
            'isAdmin' => $check_role,
        ]);
    }
}
