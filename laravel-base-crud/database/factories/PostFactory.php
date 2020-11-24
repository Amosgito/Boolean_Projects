<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use App\Post;
use Faker\Generator as Faker;

$factory->define(Post::class, function (Faker $faker) {
    return [
        
      'title'    => $faker -> title(),        
      'text'     => $faker -> text(),      
      'category' => $faker -> word(),          
      'like'     => $faker -> randomDigit(),     
      'dislike'  => $faker -> randomDigit()
    ];
});
