<?php

use Illuminate\Support\Facades\Route;

Route::get('/', 'PrimoController@index');

Route::get('/paganti', 'PrimoController@pippo') -> name('paganti');

Route::get('/pagamenti', 'PrimoController@pluto') -> name('pagamenti');

Route::get('/pagamenti/delete/{id}', 'PrimoController@destroy') -> name('pagamento-delete');

Route::get('/pagamento/edit/{id}', 'PrimoController@edit') -> name('pagamento-edit');

Route::post('/pagamento/update/{id}', 'PrimoController@update') -> name('pagamento-update');