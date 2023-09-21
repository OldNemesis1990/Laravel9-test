<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\UserInfo;
use App\Providers\RouteServiceProvider;
use App\Events\AccountActivationRequested;
use Illuminate\Auth\Events\Registered;
// use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

use Log;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'surname' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:'.User::class,
            'mobile_number' => 'required|max:14|unique:'.UserInfo::class,
            'sa_id' => 'required|numeric|sa_id|unique:'.UserInfo::class,
            'birth_date' => 'required|date',
            'language' => 'required|string|max:255',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name' => $request->name,
            'surname' => $request->surname,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        $userInfo = UserInfo::create([
            'user_id' => $user->id,
            'mobile_number' => $request->mobile_number,
            'sa_id' => $request->sa_id,
            'birth_date' => $request->birth_date,
            'language' => $request->language,
        ]);

        event(new Registered($user));

        $user->assignRole('user');

        if ($user && $userInfo) {
            event(new AccountActivationRequested($user, $userInfo));
            $message = 'Hi '.$user->name.', welcome to the system. An administrator needs to accept your request before you may login.';
            
            return Inertia::render('Auth/Register', [
                'message' => $message,
            ]);
        }
    }
}
