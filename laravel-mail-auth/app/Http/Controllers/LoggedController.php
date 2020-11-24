<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;
use App\Mail\UserAction;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Auth;

class LoggedController extends Controller {

    public function __construct() {

        $this->middleware('auth');
    }

    public function destroy($id) {

        $post = Post::findOrFail($id);
        $post -> delete();

        $user = Auth::user();
        $action = 'ha cancellato il post';

        Mail::to('ciao@gmail.com')
        -> send(new UserAction($user, $post, $action));

        return redirect() -> route('home');
    }

    public function create() {

        return view('post-create');
    }

    public function store(Request $request) {

        $data = $request -> all();
        $post = Post::create($data);
        return redirect() -> route('home');
    }
}
