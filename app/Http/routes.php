<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

//use Illuminate/Support/Facades/Mail;

$app->get('/', function () use ($app) {
    return view('home');
});

$app->get('/application', function () use ($app) {
    return view('application');
});

$app->post('/send', function () use ($app) {
    return view('send');
});



