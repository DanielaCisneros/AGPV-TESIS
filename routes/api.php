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
// get de projecto de vinculacion
Route::get('/combo', 'proyectovinculacion\combosController@show');
Route::get( '/project', 'proyectovinculacion\projectsController@show');

// post proyecto vinculacion
Route::post('/project', 'proyectovinculacion\projectsController@create');

//delete
//Route::delete( '/project', 'proyectovinculacion\projectsController@detroys');


//put
