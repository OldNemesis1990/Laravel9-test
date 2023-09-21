<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;
use App\Mail\AccountActivationRequest;

use Log;

class SendAccountActivationEmail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $user;
    protected $userInfo;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($user, $userInfo)
    {
        $this->user = $user;
        $this->userInfo = $userInfo;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        try{
            Log::info($this->user);
            Mail::to(config('mail.admin_email'))->send(new AccountActivationRequest($this->user, $this->userInfo));

        } catch(\Exception $e) {
            Log::error($e->getMessage());
        }
    }
}
