<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;

class HomeController extends Controller
{


    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index() {
        $posts = Post::all();
        return view('home', compact('posts'));
    }

    public function show($id) {

        $post = Post::findOrFail($id);
        return view('post-show', compact('post'));
    }

    
}
