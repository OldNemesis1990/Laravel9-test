<!DOCTYPE html>
<html>
<head>
    <title>Account Is Now Active</title>
</head>
<body>
    <p>Hello {{ $user->name }},</p>
    <p>Your account has been approved and you can now access it.</p>
    <p>Please click on the button below to login.</p>
    <a href="{{ env('APP_URL') }}/login">
        <button>Login</button>
    </a>
</body>
</html>