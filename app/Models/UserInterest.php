<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

//specify belongsto which model
use App\Models\User;
use App\Models\Interest;
use Illuminate\Database\Relations\BelongsTo;
use Illuminate\Database\Relations\HasMany;

class UserInterest extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'user_id',
        'interest_id'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function interest(): HasMany
    {
        return $this->hasMany(Interest::class);
    }
}
