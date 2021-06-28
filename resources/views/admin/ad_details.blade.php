@extends('admin.app')

@section('title' , 'Admin Panel Ad Details')

@section('content')
        <div id="tableSimple" class="col-lg-12 col-12 layout-spacing">
        <div class="statbox widget box box-shadow">
            <div class="widget-header">
            <div class="row">
                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                    <h4>{{ __('messages.ad_details') }}</h4>
                </div>
            </div>
        </div>
        <div class="widget-content widget-content-area">
            <div class="table-responsive"> 
                <table class="table table-bordered mb-4">
                    <tbody>
                            <tr>
                                <td class="label-table" > {{ __('messages.image') }}</td>
                                <td>
                                    <img src="https://res.cloudinary.com/ddcmwwmwk/image/upload/w_100,q_100/v1581928924/{{ $data['ad']['image'] }}"  />
                                </td>
                            </tr>
                            <tr>
                                <td class="label-table" > {{ __('messages.link') }} </td>
                                <td>
                                    <a target="_blank" href="{{ $data['ad']['content'] }}" >
                                        {{ $data['ad']['content'] }}
                                    </a>
                                </td>
                            </tr>                            
                    </tbody>
                </table>
            </div>
        </div>
    </div>  
    
@endsection