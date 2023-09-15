<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

//specify belongsto which model
use App\Models\UserInterest;
use Illuminate\Database\Relations\BelongsTo;

class Interest extends Model
{
    use HasFactory;

    protected $fillable = [
        'interest_name'
    ];

    public function userInterests(): BelongsTo
    {
        return $this->belongsTo(UserInterest::class);
    }
}
