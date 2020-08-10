<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
<<<<<<< HEAD
Route::get('/combo', 'proyectovinculacion\combosController@show');
=======
Route::get('/combo', 'proyectovinculacion\combosController@show');
>>>>>>> 1d860a31d3c033662eccc5538246c56424094c6f
