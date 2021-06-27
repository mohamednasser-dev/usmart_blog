<?php

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

Route::get('/setlocale/{locale}',function($lang){
    Session::put('locale',$lang);
    return redirect()->back();   
});

Route::get('/' , 'HomeController@index');
Route::get('/blog/{url}' , 'BlogController@getblog');
Route::get('/blog/category/{url}' , 'BlogController@getblogofcategory');




// Dashboard Routes
Route::group([
    'middleware'=>'language',
    'prefix' => "admin-panel",
    'namespace' => "Admin"  
] , function($router){

    Route::get('' ,'HomeController@show');
    Route::get('login' ,  [ 'as' => 'adminlogin', 'uses' => 'AdminController@getlogin']);
    Route::post('login' , 'AdminController@postlogin');
    Route::get('logout' , 'AdminController@logout');
    Route::get('profile' , 'AdminController@profile');
    Route::post('profile' , 'AdminController@updateprofile');    
    Route::get('databasebackup' , 'AdminController@backup');


    // admins routes for dashboard
    Route::group([
        'prefix' => "managers",
    ], function($router){
        Route::get('add' , 'ManagerController@AddGet');
        Route::post('add' , 'ManagerController@AddPost');
        Route::get('show' , 'ManagerController@show');
        Route::get('edit/{id}' , 'ManagerController@edit');
        Route::post('edit/{id}' , 'ManagerController@EditPost');
        Route::get('delete/{id}' , 'ManagerController@delete');
    });




    // Ads Route
    Route::group([
        "prefix" => "ads"
    ],function($router){
        Route::get('add' , 'AdController@AddGet');
        Route::post('add' , 'AdController@AddPost');
        Route::get('show' , 'AdController@show');
        Route::get('edit/{id}' , 'AdController@EditGet');
        Route::post('edit/{id}' , 'AdController@EditPost');
        Route::get('details/{id}' , 'AdController@details');
        Route::get('delete/{id}' , 'AdController@delete');
    });

    // blogs Route
    Route::group([
        "prefix" => "blogs"
    ],function($router){
        Route::get('add' , 'BlogController@AddGet');
        Route::post('add' , 'BlogController@AddPost');
        Route::get('show' , 'BlogController@show');
        Route::get('edit/{id}' , 'BlogController@EditGet');
        Route::post('edit/{id}' , 'BlogController@EditPost');
        Route::get('delete/{id}' , 'BlogController@delete');
    });


        // Setting Route
        Route::get('settings' , 'SettingController@GetSetting');
        Route::post('settings' , 'SettingController@PostSetting');

    // Categories Route
    Route::group([
        "prefix" => "categories"
    ], function($router){
         Route::get('add' , 'CategoryController@AddGet');
         Route::post('add' , 'CategoryController@AddPost');
         Route::get('show' , 'CategoryController@show');
         Route::get('edit/{id}' , 'CategoryController@EditGet');
         Route::post('edit/{id}' , 'CategoryController@EditPost');
         Route::get('delete/{id}' , 'CategoryController@delete');        
    });



});



