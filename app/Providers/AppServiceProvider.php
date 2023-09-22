<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Validator;

use Log;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Validator::extend('sa_id', function ($attribute, $value, $parameters, $validator) {
           // Check if the ID number has the correct length (13 characters)
            if (strlen($value) !== 13) {
                return false;
            }

            $oddDigits = [];
            $evenDigits = [];
            $ids = str_split($value, 1);

            foreach ($ids as $index => $id) {
                // mod 2 == 1 is even as array is 0 index based
                if($index % 2 == 1) {
                    $evenDigits[] = $id;
                } else {
                    $oddDigits[] = $id;
                }
            }

            $oddDigits = array_slice($oddDigits, 0, -1);

            $oddSum = array_sum($oddDigits);
            $evenSum = implode("",$evenDigits);
            $evenSum = $evenSum * 2;
            $evenSum = str_split($evenSum, 1);
            $evenSum = array_sum($evenSum);

            $combinedSum = $oddSum + $evenSum;

            $combinedSumSplit = str_split($combinedSum, 1);

            $compareDigit = array_slice($combinedSumSplit, 1);
            $compareDigit = implode("",$compareDigit);
            $compareDigit = 10 - $compareDigit;

            
            if($compareDigit == substr($value, -1)) {
                return true;
            }

            return false;
        });

        Validator::replacer('sa_id', function ($message, $attribute, $rule, $parameters) {
            // Customize the validation error message here
            return "Please provide a valid SA ID";
        });
    }
}
