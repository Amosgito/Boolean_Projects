<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Employee;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $employees = Employee::all();
        return view('home', compact('employees'));
    }

    public function show($id) {

        $emplo = Employee::findOrFail($id);
        return view('emp-show', compact('emplo'));
    }

    
}
