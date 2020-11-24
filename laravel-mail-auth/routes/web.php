<?php

use Illuminate\Support\Facades\Route;


Auth::routes();

Route::get('/', 'HomeController@index')->name('home');
Route::get('/show/{id}', 'HomeController@show') -> name('post-show');
Route::get('/delete/{id}', 'LoggedController@destroy') -> name('post-delete');
Route::get('/create', 'LoggedController@create') -> name('post-create');
Route::post('/store', 'LoggedController@store') -> name('post-store');