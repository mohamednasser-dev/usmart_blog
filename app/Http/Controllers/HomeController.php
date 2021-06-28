<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Helpers\APIHelpers;
use App\Http\Requests\SendContactMessage;
use App\Category;
use App\Blog;
use App\Ad;


class HomeController extends Controller
{
    public function index(Request $request){
        $data['categories'] = Category::where('deleted' , 0)->orderBy('id' , 'desc')->get();
        for($i = 0; $i < count($data['categories']); $i++){
            $blogs = Blog::where('category_id' , $data['categories'][$i]['id'])->where('in_home' , 1)->orderBy('id' , 'desc')->limit(4)->get();
            $data['categories'][$i]['blogs'] = $blogs;
            // for($j = 0 ; $j < count($data['categories'][$i]['blogs']) ; $j++){
            //     $data['categories'][$i]['blogs'][$j]['url'] = preg_replace('/\s+/', '_', $journalName);
            // }
        }
        $data['ads'] = Ad::inRandomOrder()->get();
        return view('home' , ['data' => $data]);
    }



}
