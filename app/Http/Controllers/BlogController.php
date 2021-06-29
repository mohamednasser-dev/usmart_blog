<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Helpers\APIHelpers;
use App\Http\Requests\SendContactMessage;
use App\Category;
use App\Blog;
use App\Ad;
use App\Setting;


class BlogController extends Controller
{
    public function getblog(Request $request){
        $blog = Blog::where('url' , $request->url)->first();
        $blog->views  = $blog->views + 1;
        $blog->save();
        $data['blog'] = $blog;
        $data['blog']['tags_array'] = explode("-",$blog['tags']);
        $data['blog']['category'] = Category::find($blog->category_id);

        $data['header_blogs'] = Blog::where('in_header' , 1)->orderBy('id' , 'desc')->get();
        $data['news_blogs'] = Blog::where('is_news' , 1)->orderBy('id' , 'desc')->get();
        $data['selects_blog'] = Blog::limit(4)->inRandomOrder()->get();
        $data['best_blog'] = Blog::limit(2)->inRandomOrder()->get();
        $data['categories'] = Category::where('deleted' , 0)->get();
        for($i = 0; $i < count($data['categories']); $i++){
            $data['categories'][$i]['count'] = Blog::where('category_id' , $data['categories'][$i]['id'])->count();
        }
        $data['related_blogs'] = Blog::where('category_id' , $blog['category_id'])->where('url' , '!=' , $request->url)->limit(4)->get();
        $data['main_ad'] = Ad::inRandomOrder()->first();
        $data['ads'] = Ad::inRandomOrder()->limit(3)->get();
        return view('blog' , ['data' => $data]);
    }

    public function getblogofcategory(Request $request){
        $data['category'] = Category::where('url' , $request->url)->first();
        $data['blogs'] = Blog::where('category_id' , $data['category']['id'])->orderBy('id' , 'desc')->paginate(24);
        $data['social_links'] = Setting::select('facebook' , 'youtube' , 'twitter' , 'instegram' , 'snap_chat')->find(1);
        return view('category' , ['data' => $data]);
    }

    //front blog pages

    public function design_iphone(){
        return view('front.blog.تصميم_تطبيقات_الايفون');
    }

    public function design_android(){
        return view('front.blog.تصميم_تطبيق_اندرويد');
    }

    public function UAE_company(){
        return view('front.blog.شركة_برمجة_تطبيقات_فى_الامارات');
    }

    public function Saudi_company(){
        return view('front.blog.شركة_برمجة_تطبيقات_فى_السعودية');
    }

    public function Qatar_company(){
        return view('front.blog.شركة_برمجة_تطبيقات_فى_قطر');
    }

    public function kuwit_company(){
        return view('front.blog.شركة_برمجة_تطبيقات_فى_الكويت');
    }



}
