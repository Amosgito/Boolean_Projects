<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Stanza extends Model
{
    protected $table = 'stanze';

    protected $fillable = [

        'floor',
        'room_number',
        'beds'
    ];
}
