<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\SecondoModel;
use App\PrimoModel;

class PrimoController extends Controller
{
    public function index() {
 
        return view('home');
    }
    
    public function pippo() {
        
        $paganti = PrimoModel::all();
        
        return view('paganti', compact('paganti'));
    }

    public function pluto() {

        $pagamenti = SecondoModel::all();

        return view('pagamenti',compact('pagamenti'));
    }

    public function destroy($id) {

        $pagamento = SecondoModel::findOrFail($id);
        $pagamento -> delete($id);

        return redirect() -> route('pagamenti');
    }

    public function edit($id) {

        $pagamento = SecondoModel::findOrFail($id);
        return view('pagamenti-edit', compact('pagamento'));
    }

    public function update(Request $request, $id) {

        $data = $request -> all();
        $pagamento = SecondoModel::findOrFail($id);

        $pagamento -> update($data);
        return redirect() -> route('pagamenti');
    }
}
