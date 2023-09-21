<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

//specify belongsto which model
use App\Models\User;
use Illuminate\Database\Relations\BelongsTo;

class UserInfo extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'user_id',
        'sa_id',
        'mobile_number',
        'birth_date',
        'language'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
