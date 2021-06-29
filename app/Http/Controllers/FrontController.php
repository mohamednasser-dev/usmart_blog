<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Helpers\APIHelpers;
use App\Http\Requests\SendContactMessage;
use App\Category;
use App\Blog;
use App\Ad;


class FrontController extends Controller
{
    public function index(){
        return view('front.index');
    }

    public function about(){
        return view('front.page-about');
    }

    public function our_works(){
        return view('front.page-our-wroks');
    }

    public function contact(){
        return view('front.contact');
    }

    public function hosting(){
        return view('front.page-hosting');
    }

    public function mobile_applications(){
        return view('front.mobile-applications');
    }

    public function video_ads(){
        return view('front.video-ads');
    }

    public function web_design(){
        return view('front.web-design');
    }

    public function marketing(){
        return view('front.marketing');
    }

    public function page_cms(){
        return view('front.page-cms');
    }

    //Work pages
    public function work_instadeal(){
        return view('front.blog.works.instadeal.index');
    }

    public function work_icome(){
        return view('front.blog.works.icome.index');
    }

    public function work_lacachette(){
        return view('front.blog.works.lacachette.index');
    }

    public function work_mazad(){
        return view('front.blog.works.mazad.index');
    }


}
