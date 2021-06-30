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
        return view('front.works.instadeal.index');
    }

    public function work_icome(){
        return view('front.works.icome.index');
    }

    public function work_lacachette(){
        return view('front.works.lacachette.index');
    }

    public function work_mazad(){
        return view('front.works.mazad.index');
    }

    public function work_m7lat(){
        return view('front.works.m7lat.index');
    }

    public function work_mostshar(){
        return view('front.works.mostshar.index');
    }

    public function work_order(){
        return view('front.works.order.index');
    }

    public function work_saqr(){
        return view('front.works.saqr.index');
    }

    public function work_ayati(){
        return view('front.works.ayati.index');
    }

    public function work_hope(){
        return view('front.works.hope.index');
    }

    public function work_alezz(){
        return view('front.works.alezz.index');
    }

    public function work_dinar(){
        return view('front.works.dinar.index');
    }

    public function work_diet(){
        return view('front.works.diet.index');
    }

    public function work_bazaar(){
        return view('front.works.bazaar.index');
    }

    public function work_memo(){
        return view('front.works.memo.index');
    }

    public function work_gas(){
        return view('front.works.gas.index');
    }
    public function work_pfs(){
        return view('front.works.pfs.index');
    }


}
