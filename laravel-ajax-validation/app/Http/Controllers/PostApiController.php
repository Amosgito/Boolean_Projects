<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;

class PostApiController extends Controller
{
    public function getAllData() {

        $posts = Post::all();

        return response() -> json($posts);
    } 

    public function getBestOf() {

        $post = Post::where('likes', '>', 8) -> get();

        return response() -> json($post);

    }
}
