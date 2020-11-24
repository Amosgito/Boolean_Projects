<?php

use Illuminate\Support\Facades\Route;

Route::get('/', 'PostController@index') -> name('post-index');
Route::get('/create', 'PostController@create') -> name('post-create');
Route::post('/store', 'PostController@store') -> name('post-store');

Route::get('/api/posts/all', 'PostApiController@getAllData') -> name('post-all');
Route::get('/api/post/best_of', 'PostApiController@getBestOf') -> name('post-best');