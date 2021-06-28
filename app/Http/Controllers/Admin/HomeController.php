<?php
namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Admin\AdminController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Category;
use App\Blog;
use App\Ad;

class HomeController extends AdminController{

    // get all contact us messages
    public function show(){
        $data['ads'] = Ad::count();
        $data['blogs'] = Blog::count();
        $data['categories'] = Category::where('deleted' , 0)->count();
        return view('admin.home' , ['data' => $data]);   
    }

}