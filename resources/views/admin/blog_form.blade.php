@extends('admin.app')

@section('title' , 'Admin Panel Add New Blog')

@section('content')
    <div class="col-lg-12 col-12 layout-spacing">
        <div class="statbox widget box box-shadow">
            <div class="widget-header">
                <div class="row">
                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                        <h4>إضافه مدونه جديده</h4>
                 </div>
        </div>
        <form action="" method="post" enctype="multipart/form-data" >
            @csrf
            <div class="custom-file-container" data-upload-id="myFirstImage">
                <label>{{ __('messages.upload') }} ({{ __('messages.single_image') }}) <a href="javascript:void(0)" class="custom-file-container__image-clear" title="Clear Image">x</a></label>
                <label class="custom-file-container__custom-file" >
                    <input type="file" required name="image" class="custom-file-container__custom-file__custom-file-input" accept="image/*">
                    <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
                    <span class="custom-file-container__custom-file__custom-file-control"></span>
                </label>
                <div class="custom-file-container__image-preview"></div>
            </div>            
            <div class="form-group mb-4">
                <label for="image_alt">عنوان الصوره</label>
                <input required type="text" name="image_alt" class="form-control" id="image_alt" placeholder="عنوان الصوره" value="" >
            </div>
            <div class="form-group mb-4">
                <label for="first_title">العنوان الاول</label>
                <input required type="text" name="first_title" class="form-control" id="first_title" placeholder="العنوان الاول" value="" >
            </div>
            <div class="form-group mb-4">
                <label for="second_title">العنوان الثاني</label>
                <input required type="text" name="second_title" class="form-control" id="second_title" placeholder="العنوان الثاني" value="" >
            </div>
            <div class="form-group mb-4">
                <label for="third_title">العنوان الثالث</label>
                <input required type="text" name="third_title" class="form-control" id="third_title" placeholder="العنوان الثالث" value="" >
            </div>
            <div class="form-group mb-4">
                <label for="browser_title">عنوان البراوزر</label>
                <input required type="text" name="browser_title" class="form-control" id="browser_title" placeholder="عنوان البراوزر" value="" >
            </div>
            <div class="form-group mb-4">
                <label for="keywords">KeyWords (يرجي وضع , بين كل واحده واخري) </label>
                <input required type="text" name="keywords" class="form-control" id="keywords" placeholder="KeyWords" value="" >
            </div>
            <div class="form-group mb-4">
                <label for="tags">Tags (يرجي وضع - بين كل واحده واخري) </label>
                <input required type="text" name="tags" class="form-control" id="tags" placeholder="Tags" value="" >
            </div>

            <div class="form-group mb-4">
                <label for="meta_description"> Meta Description </label>
                <input required type="text" name="meta_description" class="form-control" id="meta_description" placeholder="Meta Description" value="" >
            </div>
            <div class="form-group mb-4">
                <label for="small_description"> وصف سريع </label>
                <input required type="text" name="small_description" class="form-control" id="small_description" placeholder="وصف سريع" value="" >
            </div>
            <div class="form-group mb-4">
                <label for="category"> القسم </label>
                <select name="category_id" class="form-control" >
                    <option selected disabled >إختر</option>
                    @foreach ($data['categories'] as $category)
                        <option value="{{ $category->id }}" >{{ $category->title_ar }}</option>
                    @endforeach
                </select>
            </div>
            <div class="form-group mb-4 arabic-direction" >
                <label for="demo1">الوصف</label>
                <textarea id="editor-ck-en" required name="description" class="form-control"  rows="5"></textarea>
            </div>
            <div class="form-group mb-4">
                <label for="written_by"> أسم كاتب المقال </label>
                <input required type="text" name="written_by" class="form-control" id="written_by" placeholder="إسم كاتب المقال" value="<?=Auth::user()->name?> " >
            </div>      

            <div class="form-group mb-4">
                <label for="in_header"> عرض في الهيدر ؟ </label>
                &nbsp;
                <input  type="checkbox" name="in_header"  id="in_header" placeholder="عرض في الهيدر" value="1" >
            </div>      

            <div class="form-group mb-4">
                <label for="in_home">  عرض في الرئيسيه ؟ </label>
                &nbsp;
                <input  type="checkbox" name="in_home"  id="in_home" placeholder="عرض في الرئيسيه" value="1" >
            </div>      

            <div class="form-group mb-4">
                <label for="is_news"> خبر ؟ </label>
                &nbsp;
                <input  type="checkbox" name="is_news"  id="is_news" placeholder="خبر ؟" value="1" >
            </div>      
            
            <input type="submit" value="{{ __('messages.submit') }}" class="btn btn-primary">
        </form>
    </div>
@endsection