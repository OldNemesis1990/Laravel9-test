<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class AccountActivationRequest extends Mailable
{
    use Queueable, SerializesModels;

    protected $user;
    protected $userInfo;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($user, $userInfo)
    {
        $this->user = $user;
        $this->userInfo = $userInfo;
    }

    public function build()
    {
        return $this->subject('Account Activation Request')
        ->view('emails.account-activation')
        ->with(['user' => $this->user, 'userInfo' => $this->userInfo]);
    }

    /**
     * Get the message envelope.
     *
     * @return \Illuminate\Mail\Mailables\Envelope
     */
    public function envelope()
    {
        return new Envelope(
            subject: 'Account Activation Request',
        );
    }

    /**
     * Get the message content definition.
     *
     * @return \Illuminate\Mail\Mailables\Content
     */
    public function content()
    {
        return new Content(
            view: 'emails.account-activation',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array
     */
    public function attachments()
    {
        return [];
    }
}
