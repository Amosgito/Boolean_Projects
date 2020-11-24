<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;

class PostController extends Controller {
    
    public function index() {

        $posts = Post::all();

        return view('home', compact('posts'));
    }

    public function create() {
        
        return view('create-post');
    }

    public function store(Request $request) {

        $data = $request-> all();
        $data = Post::create($data);

        $data = $request -> validate([

            'name' => 'required',
            'description' => 'required',
            'likes' => 'required',
            'shares' => 'required'
        ]);
        
        return redirect() -> route('post-index');
    }

    
}
