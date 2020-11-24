<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Employee;
use App\Location;

class EmployeesController extends Controller
{
    public function index() {

        $employees = Employee::all();
        return view('home', compact('employees'));
    }

    public function show($id) {

        $emplo = Employee::findOrFail($id);
        return view('employee', compact('emplo'));
    }

    public function create() {

        $locs = Location::all();
        return view('employee-create', compact('locs'));
    }

    public function store(Request $request) {

        $data = $request -> all();
        $employee = Employee::create($data);
        return redirect() -> route('index-home');
    }

    public function destroy($id) {

        $del = Employee::findOrFail($id);
        $del -> delete();
        return redirect() -> route('index.home');
    }

    public function edit($id) {

        $emp = Employee::findOrFail($id);
        $loc = Location::all();
        return view('employee-update', compact('emp', 'loc'));
    }
}
