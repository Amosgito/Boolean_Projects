<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Employee;
use App\Location;

class LoggedController extends Controller
{
    public function __construct() {
        
        $this->middleware('auth');
    }

    public function destroy($id) {

        $emp = Employee::findOrFail($id);
        $emp -> delete();
        return redirect() -> route('home');
    }

    public function create() {

        $cities = Location::all();
        return view('emp-create', compact('cities'));
    }

    public function store(Request $request) {

        $data = $request -> all();
        $employee = Employee::create($data);
        return redirect() -> route('home');
    }

    public function edit($id) {

        $emp = Employee::findOrFail($id);
        $loca = Location::all();
        return view('emp-update', compact('emp','loca'));
    }

    public function update(Request $request, $id) {

        $data = Employee::findOrFail($id);
        $data -> update([
            "name" => $request -> input('name'),
            "lastname" => $request -> input('lastname'),
            "location_id" => $request -> input('location_id')
        ]);
        return redirect() -> route('home');

    }
}
