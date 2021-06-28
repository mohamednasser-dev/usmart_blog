@extends('admin.app')

@section('title' , 'Admin Panel All Ads')

@section('content')
    <div id="tableSimple" class="col-lg-12 col-12 layout-spacing">
        <div class="statbox widget box box-shadow">
            <div class="widget-header">
            <div class="row">
                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                    <h4>عرض المدونات</h4>
                </div>
            </div>
        </div>
        <div class="widget-content widget-content-area">
            <div class="table-responsive"> 
                <table id="html5-extension" class="table table-hover non-hover" style="width:100%">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>{{ __('messages.image') }}</th>
                            <th> العنوان </th>
                            <th class="text-center">{{ __('messages.edit') }}</th>
                            <th class="text-center" >{{ __('messages.delete') }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php $i = 1; ?>
                        @foreach ($data['blogs'] as $blog)
                            <tr>
                                <td><?=$i;?></td>
                                <td><img src="https://res.cloudinary.com/dqthprijd/image/upload/w_100,q_100/v1586068288/{{ $blog->image }}"  /></td>
                                <td> {{ $blog->first_title }} </td>
                                <td class="text-center blue-color" ><a href="/admin-panel/blogs/edit/{{ $blog->id }}" ><i class="far fa-edit"></i></a></td>
                                <td class="text-center blue-color" ><a onclick="return confirm('Are you sure you want to delete this item?');" href="/admin-panel/blogs/delete/{{ $blog->id }}" ><i class="far fa-trash-alt"></i></a></td>                                
                                <?php $i++; ?>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
        
    </div>  

@endsection