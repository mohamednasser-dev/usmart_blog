<?php
namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Admin\AdminController;
use Illuminate\Http\Request;
use JD\Cloudder\Facades\Cloudder;
use Illuminate\Support\Facades\DB;
use App\Blog;
use App\Category;

class BlogController extends AdminController{

    // type get 
    public function AddGet(){
        $data['categories'] = Category::where('deleted' , 0)->orderBy('id' , 'desc')->get();
        return view('admin.blog_form' , ['data' => $data]);
    }

    // get all blogs
    public function show(Request $request){
        $data['blogs'] = Blog::orderBy('id' , 'desc')->get();
        return view('admin.blogs' , ['data' => $data]);
    }

    public function AddPost(Request $request){
        $image_name = $request->file('image')->getRealPath();
        Cloudder::upload($image_name, null);
        $imagereturned = Cloudder::getResult();
        $image_id = $imagereturned['public_id'];
        $image_format = $imagereturned['format'];    
        $image_new_name = $image_id.'.'.$image_format;
        $blog = new Blog();
        $blog->image = $image_new_name;
        $blog->image_alt = $request->image_alt;
        $blog->first_title = $request->first_title;
        $blog->url = preg_replace('/\s+/', '_', $request->first_title);
        $blog->second_title = $request->second_title;
        $blog->third_title = $request->third_title;
        $blog->browser_title = $request->browser_title;
        $blog->keywords = $request->keywords;
        $blog->category_id = $request->category_id;
        $blog->tags = $request->tags;
        $blog->meta_description = $request->meta_description;
        $blog->small_description = $request->small_description;
        $blog->description = $request->description;
        $blog->written_by = $request->written_by;
        $blog->in_header = $request->in_header || 0;
        $blog->in_home = $request->in_home || 0;
        $blog->is_news = $request->is_news || 0;
        $blog->save();
        return redirect('admin-panel/blogs/show'); 
    }

    // get edit page
    public function EditGet(Request $request){
        $data['blog'] = Blog::find($request->id);
        $data['categories'] = Category::where('deleted' , 0)->orderBy('id' , 'desc')->get();
        return view('admin.blog_edit' , ['data' => $data]);
    }

    // post edit ad
    public function EditPost(Request $request){
        $blog = Blog::find($request->id);
        if($request->file('image')){
            $image = $blog->image;
            $publicId = substr($image, 0 ,strrpos($image, "."));    
            Cloudder::delete($publicId);
            $image_name = $request->file('image')->getRealPath();
            Cloudder::upload($image_name, null);
            $imagereturned = Cloudder::getResult();
            $image_id = $imagereturned['public_id'];
            $image_format = $imagereturned['format'];    
            $image_new_name = $image_id.'.'.$image_format;
            $blog->image = $image_new_name;
        }
        $blog->image_alt = $request->image_alt;
        $blog->first_title = $request->first_title;
        $blog->url = preg_replace('/\s+/', '_', $request->first_title);
        $blog->second_title = $request->second_title;
        $blog->third_title = $request->third_title;
        $blog->browser_title = $request->browser_title;
        $blog->keywords = $request->keywords;
        $blog->category_id = $request->category_id;
        $blog->tags = $request->tags;
        $blog->meta_description = $request->meta_description;
        $blog->small_description = $request->small_description;
        $blog->description = $request->description;
        $blog->written_by = $request->written_by;
        $blog->in_header = $request->in_header || 0;
        $blog->in_home = $request->in_home || 0;
        $blog->is_news = $request->is_news || 0;
        $blog->save();
        return redirect('admin-panel/blogs/show');
    }

    // delete blog
    public function delete(Request $request){
        $blog = Blog::find($request->id);
        if($blog){
            $blog->delete();
        }
        return redirect('admin-panel/blogs/show');
    }
    
}