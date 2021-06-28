<?php
namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Admin\AdminController;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use JD\Cloudder\Facades\Cloudder;
use Illuminate\Support\Facades\DB;
use App\Admin;
use App\Permission;
use App\AdminPermission;
use Illuminate\Support\Facades\Auth;


class ManagerController extends AdminController{
    
    // get add manager page
    public function AddGet(){
        $data['permissions'] = Permission::get();
        return view('admin.manager_form' , ['data' => $data]);
    }

   // post add manager
   public function AddPost(Request $request){
        $check_manager_mail = Admin::where('email' , $request->email)->first();
        if($check_manager_mail){
            return redirect('admin-panel/managers/add')->with('status', 'Email Exists Before');
        }

        $manager = new Admin();
        $manager->name = $request->name;
        $manager->email = $request->email;
        $manager->password = Hash::make($request->password);       
        $manager->save();
        return redirect('/admin-panel/managers/show');
   }
   
   // get all managers
   public function show(Request $request){
     $data['managers']  = Admin::orderBy('id' , 'desc')->get(); 
     return view('admin.managers' , ['data' => $data]);
   }

   // get edit manager page
   public function edit(Request $request){
     $data['manager'] = Admin::find($request->id);

      return view('admin.manager_edit' , ['data' => $data]);
   }

   // post edit manager
   public function EditPost(Request $request){
        $check_manager_email = Admin::where('email' , $request->email)->where('id' , '!=' , $request->id)->first();
        if($check_manager_email){
            return redirect('/admin-panel/managers/edit/'.$request->id)->with('status' , 'Email Exists Before');
        }
        
        $current_manager = Admin::find($request->id);
        $current_manager->name = $request->name;
        $current_manager->email = $request->email;
        if($request->password){ 
            $current_manager->password = Hash::make($request->password);
        }

        $current_manager->save();
        return redirect('/admin-panel/managers/show');
   }

   // delete manager
   public function delete(Request $request){
        $manager = Admin::find($request->id);
        if($manager){
            $manager->delete();
        }
        return redirect()->back();
   }
   
}