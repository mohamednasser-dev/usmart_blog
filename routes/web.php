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

// front pages
Route::get('/' , 'FrontController@index')->name('front.home');
Route::get('/about' , 'FrontController@about')->name('front.about');
Route::get('/our_works' , 'FrontController@our_works')->name('front.our_works');
Route::get('/contact' , 'FrontController@contact')->name('front.contact');
Route::get('/hosting' , 'FrontController@hosting')->name('front.hosting');
Route::get('/mobile_applications' , 'FrontController@mobile_applications')->name('front.mobile_applications');
Route::get('/video_ads' , 'FrontController@video_ads')->name('front.video_ads');
Route::get('/web_design' , 'FrontController@web_design')->name('front.web_design');
Route::get('/marketing' , 'FrontController@marketing')->name('front.marketing');
Route::get('/page_cms' , 'FrontController@page_cms')->name('front.page_cms');

// front blog pages

Route::get('/blog/design_iphone' , 'BlogController@design_iphone')->name('front.blog.design_iphone');
Route::get('/blog/design_android' , 'BlogController@design_android')->name('front.blog.design_android');
Route::get('/blog/UAE_company' , 'BlogController@UAE_company')->name('front.blog.UAE_company');
Route::get('/blog/Saudi_company' , 'BlogController@Saudi_company')->name('front.blog.Saudi_company');
Route::get('/blog/Qatar_company' , 'BlogController@Qatar_company')->name('front.blog.Qatar_company');
Route::get('/blog/kuwit_company' , 'BlogController@kuwit_company')->name('front.blog.kuwit_company');

Route::get('/blog' , 'HomeController@index')->name('front.blog');
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



