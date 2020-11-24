<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SecondoModel extends Model
{
    protected $table = 'pagamenti';

    protected $fillable = [

        'status',
        'price'
    ];
}
