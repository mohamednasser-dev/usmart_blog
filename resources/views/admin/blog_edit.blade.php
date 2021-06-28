@extends('admin.app')

@section('title' , 'Admin Panel Add New Blog')

@section('content')
    <div class="col-lg-12 col-12 layout-spacing">
        <div class="statbox widget box box-shadow">
            <div class="widget-header">
                <div class="row">
                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                        <h4>تعديل مدونه </h4>
                 </div>
        </div>
        <form action="" method="post" enctype="multipart/form-data" >
            @csrf
            <div class="form-group mb-4">
                <label for="">{{ __('messages.current_image') }}</label><br>
                <img src="https://res.cloudinary.com/dqthprijd/image/upload/w_100,q_100/v1586068288/{{ $data['blog']['image'] }}"  />
            </div>
            <div class="custom-file-container" data-upload-id="myFirstImage">
                <label>{{ __('messages.upload') }} ({{ __('messages.single_image') }}) <a href="javascript:void(0)" class="custom-file-container__image-clear" title="Clear Image">x</a></label>
                <label class="custom-file-container__custom-file" >
                    <input type="file"  name="image" class="custom-file-container__custom-file__custom-file-input" accept="image/*">
                    <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
                    <span class="custom-file-container__custom-file__custom-file-control"></span>
                </label>
                <div class="custom-file-container__image-preview"></div>
            </div>            
            <div class="form-group mb-4">
                <label for="image_alt">عنوان الصوره</label>
                <input required type="text" name="image_alt" class="form-control" id="image_alt" placeholder="عنوان الصوره" value="{{ $data['blog']['image_alt'] }}" >
            </div>
            <div class="form-group mb-4">
                <label for="first_title">العنوان الاول</label>
                <input required type="text" name="first_title" class="form-control" id="first_title" placeholder="العنوان الاول" value="{{ $data['blog']['first_title'] }}" >
            </div>
            <div class="form-group mb-4">
                <label for="second_title">العنوان الثاني</label>
                <input required type="text" name="second_title" class="form-control" id="second_title" placeholder="العنوان الثاني" value="{{ $data['blog']['second_title'] }}" >
            </div>
            <div class="form-group mb-4">
                <label for="third_title">العنوان الثالث</label>
                <input required type="text" name="third_title" class="form-control" id="third_title" placeholder="العنوان الثالث" value="{{ $data['blog']['third_title'] }}" >
            </div>
            <div class="form-group mb-4">
                <label for="browser_title">عنوان البراوزر</label>
                <input required type="text" name="browser_title" class="form-control" id="browser_title" placeholder="عنوان البراوزر" value="{{ $data['blog']['browser_title'] }}" >
            </div>
            <div class="form-group mb-4">
                <label for="keywords">KeyWords (يرجي وضع , بين كل واحده واخري) </label>
                <input required type="text" name="keywords" class="form-control" id="keywords" placeholder="KeyWords" value="{{ $data['blog']['keywords'] }}" >
            </div>
            <div class="form-group mb-4">
                <label for="tags">Tags (يرجي وضع - بين كل واحده واخري) </label>
                <input required type="text" name="tags" class="form-control" id="tags" placeholder="Tags" value="{{ $data['blog']['tags'] }}" >
            </div>

            <div class="form-group mb-4">
                <label for="meta_description"> Meta Description </label>
                <input required type="text" name="meta_description" class="form-control" id="meta_description" placeholder="Meta Description" value="{{ $data['blog']['meta_description'] }}" >
            </div>
            <div class="form-group mb-4">
                <label for="small_description"> وصف سريع </label>
                <input required type="text" name="small_description" class="form-control" id="small_description" placeholder="وصف سريع" value="{{ $data['blog']['small_description'] }}" >
            </div>
            <div class="form-group mb-4">
                <label for="category"> القسم </label>
                <select name="category_id" class="form-control" >
                    <option selected disabled >إختر</option>
                    @foreach ($data['categories'] as $category)
                        <option {{($data['blog']['category_id'] == $category->id)? "selected" : "" }} value="{{ $category->id }}" >{{ $category->title_ar }}</option>
                    @endforeach
                </select>
            </div>
            <div class="form-group mb-4 arabic-direction" >
                <label for="demo1">الوصف</label>
                <textarea id="editor-ck-en" required name="description" class="form-control"  rows="5">{{ $data['blog']['description'] }}</textarea>
            </div>
            <div class="form-group mb-4">
                <label for="written_by"> أسم كاتب المقال </label>
                <input required type="text" name="written_by" class="form-control" id="written_by" placeholder="إسم كاتب المقال" value="{{ $data['blog']['written_by'] }}" >
            </div>      

            <div class="form-group mb-4">
                <label for="in_header"> عرض في الهيدر ؟ </label>
                &nbsp;
                <input {{($data['blog']['in_header'])? "checked" : "" }} type="checkbox" name="in_header"  id="in_header" placeholder="عرض في الهيدر" value="1" >
            </div>      

            <div class="form-group mb-4">
                <label for="in_home">  عرض في الرئيسيه ؟ </label>
                &nbsp;
                <input {{($data['blog']['in_home'])? "checked" : "" }}  type="checkbox" name="in_home"  id="in_home" placeholder="عرض في الرئيسيه" value="1" >
            </div>      

            <div class="form-group mb-4">
                <label for="is_news"> خبر ؟ </label>
                &nbsp;
                <input {{($data['blog']['is_news'])? "checked" : "" }} type="checkbox" name="is_news"  id="is_news" placeholder="خبر ؟" value="1" >
            </div>      
            
            <input type="submit" value="{{ __('messages.submit') }}" class="btn btn-primary">
        </form>
    </div>
@endsection