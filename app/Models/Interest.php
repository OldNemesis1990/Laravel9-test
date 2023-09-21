<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

//specify belongsto which model
use App\Models\User;
use Illuminate\Database\Relations\BelongsTo;

class Interest extends Model
{
    use HasFactory;
    public $timestamps = false;

    protected $fillable = [
        'user_id',
        'interest_name'
    ];

    public function userInterests(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
