<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Auth::routes();


Route::get('/', 'HomeController@index')->name('home');
Route::get('/show/{id}', 'HomeController@show') -> name('emp-show');
Route::get('/delete/{id}', 'LoggedController@destroy') -> name('emp-delete');
Route::get('/create', 'LoggedController@create') -> name('emp-create');
Route::post('/store', 'LoggedController@store') -> name('emp-store');
Route::get('/edit/{id}', 'LoggedController@edit') -> name('emp-edit');
Route::post('/update/{id}', 'LoggedController@update') -> name('emp-update');