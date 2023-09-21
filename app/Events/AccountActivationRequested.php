<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use App\Jobs\SendAccountActivationEmail;

class AccountActivationRequested
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    protected $user;
    protected $userInfo;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($user, $userInfo)
    {
        $this->user = $user;
        $this->userInfo = $userInfo;

        // Dispatch the email job when the event is constructed
        dispatch(new SendAccountActivationEmail($user, $userInfo));
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('channel-name');
    }
}
