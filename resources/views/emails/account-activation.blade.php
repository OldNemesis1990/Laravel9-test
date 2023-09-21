<!DOCTYPE html>
<html>
<head>
    <title>Account Activation Request</title>
</head>
<body>
    <p>Hello Admin,</p>
    <p>The user {{ $user->name }}" with email "{{ $user->email }}" has requested account activation.</p>
    <p>Please activate their account.</p>
    <a href="{{env('APP_URL')}}/activate-user/{{$user->id}}-{{$userInfo->sa_id}}"><button>Activate {{$user->name}}'s account</button></a>
</body>
</html>