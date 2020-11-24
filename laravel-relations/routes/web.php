<?php

use Illuminate\Support\Facades\Route;



Route::get('/', 'EmployeesController@index') -> name('index-home');
Route::get('/show/{id}', 'EmployeesController@show') -> name('emp-show');
Route::get('/create', 'EmployeesController@create') -> name('create-new');
Route::post('/store', 'EmployeesController@store') -> name('store-new');
Route::get('/delete{id}', 'EmployeesController@destroy') -> name('emp-delete');
Route::post('/update{id}', 'EmployeesController@edit') -> name('emp-update');