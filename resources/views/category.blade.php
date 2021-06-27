<!-- LTR -->
<!-- <html> -->
<!-- LTR -->
<!-- Start RTL -->
<html dir="rtl">
<!-- End RTL -->
  <head>
      <title>Blog - U Smart</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <link href="https://fonts.googleapis.com/css?family=Cairo&display=swap" rel="stylesheet">
      <!-- Start LTR -->
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css">
      <!-- End LTR -->
      <!-- Start RTL -->
      <link rel="stylesheet" href="https://cdn.rtlcss.com/bootstrap/v4.2.1/css/bootstrap.min.css" integrity="sha384-vus3nQHTD+5mpDiZ4rkEPlnkcyTP+49BhJ4wJeJunw06ZAp+wzzeBPUXr42fi8If" crossorigin="anonymous">
      <link rel="stylesheet" href="/assets/css/portofilo.css">
      <link rel="stylesheet" href="/assets/css/hover.min.css">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.4.0/animate.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css">
      <link rel="stylesheet" href="/assets/css/main.css">
      <!-- End RTL -->
      <style>
          .t-black{
            margin-bottom: 40px;
          }
          .pagination_container nav{
            margin : 0 auto;
          }
      </style>
  </head>
  <body>
    <!-- ============Start nav============ -->
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="/assets/imgs/logo.png">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fa fa-bars"></i>
        </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ">
              <li class="nav-item active">
                <a class="nav-link hvr-icon-pulse-grow hvr-pop" href="#"> <i class="hvr-icon fa fa-circle"></i> الرئيسية</a>
              </li>
              <li class="nav-item">
                <a class="nav-link hvr-icon-pulse-grow hvr-pop" href="#"> <i class="hvr-icon fa fa-circle"></i> من نحن</a>
              </li>
              <!-- =========start drobdown if you need========== -->
              
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle hvr-icon-pulse-grow hvr-pop" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="hvr-icon fa fa-circle"></i>  خدماتنا
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">تصميم وبرمجة تطبيقات الجوال</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">استضافة المواقع</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">موشن جرافيك</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">تصميم وبرمجة المواقع</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">التسويق وإدارة السوشيال ميديا</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">مركز إدارة محتوي التطبيقات</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link hvr-icon-pulse-grow hvr-pop" href="#"> <i class="hvr-icon fa fa-circle"></i> أعمالنا</a>
              </li>
              <li class="nav-item">
                <a class="nav-link hvr-icon-pulse-grow hvr-pop" href="#"> <i class="hvr-icon fa fa-circle"></i> برمجة تطبيقات الموبايل</a>
              </li>
              
              <!-- =========End drobdown if you need========= -->
              <!-- =========start drobdown if you need========== -->
              

              <li class="nav-item">
                <a class="nav-link hvr-icon-pulse-grow hvr-pop" href="#"> <i class="hvr-icon fa fa-circle"></i> اتصل بنا</a>
              </li>
              <!-- =========End drobdown if you need========= -->
            </ul>
            <ul class="navbar-nav mr-auto float-left">
              <li class="nav-item mr-3">
                <a href="#" class="btn btn-danger pr-4 pl-4">اطلب الان</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="fa fa-bars"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
    </nav>
    <!-- ============END nav============ -->


     <!-- ============Start Header============ -->
     <header class="page-header text-center t-white" style="background-image: url('/assets/imgs/header-cover.png');">
       <h2 class="wow fadeInLeft">
يوسمارت افضل شركة برمجة تطبيقات الموبايل بالكويت
</h2>
       <p class="p-3 wow fadeInUp">نقوم بتحويل فكرتك الى تطبيقات قوية و فعالة على منصة الأندرويد و الأيفون</p>
       <button class="btn btn-danger mb-5 pl-5 pr-5 wow fadeIn">اتصل الان</button>
     </header>
     <!-- ============Start Header============ -->
     <div class="container">
       <h1 class="text-center"> كافة الخدمات البرمجية لتطوير وتنمية أعمالك </h1>
       <section class="row pt-5 category_row">
        <div class="row mt-3 p-2 ml-0 mr-0">
          @foreach ($data['blogs'] as $blog)
          <a href="/blog/{{$blog->url}}" class="col-md-3 col-sm-6 p-2 wow fadeInUp border text-left t-black">
            <img class="img-fluid" src="https://res.cloudinary.com/dqthprijd/image/upload/w_450,h_200,c_crop,q_100/v1586068288/{{$blog->image}}" alt="{{$blog->image_alt}}">
            <h4>{{ $blog->first_title }}</h4>
            <p>{{ $blog->small_description }}</p>
            <div class="bg-light mt-2 p-1">بواسطة {{$blog->written_by}}
              <span class="float-right since-ar" >{{ $blog->created_at }}</span>
            </div>
          </a>
          @endforeach

        </div>

       </section>
       <div class="row mt-3 p-2 ml-0 mr-0 pagination_container">
        {{ $data['blogs']->links() }}
      </div>


       <!-- start portofolio section -->
       <section class="pt-5">
          <div class="col-md-12">
            <h1 class="text-center">اعمال نعتز بها</h1>
          </div>
          <div class="row mt-3">
            <div class="col-md-4 col-sm-6 p-2 wow fadeIn">
              <div class="box2">
                  <img class="img-fluid" src="https://via.placeholder.com/500">
                  <div class="box-content">
                      <div class="inner-content">
                          <h3 class="title">عنوان</h3>
                          <span class="post">يوضع عنوان هنا</span>
                          <ul class="icon">
                              <li><a href="#"><i class="fa fa-search"></i></a></li>
                              <li><a href="#"><i class="fa fa-link"></i></a></li>
                          </ul>
                      </div>
                  </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 p-2 wow fadeIn">
                <div class="box2">
                    <img class="img-fluid" src="https://via.placeholder.com/500">
                    <div class="box-content">
                        <div class="inner-content">
                            <h3 class="title">عنوان</h3>
                            <span class="post">يوضع عنوان هنا</span>
                            <ul class="icon">
                                <li><a href="#"><i class="fa fa-search"></i></a></li>
                                <li><a href="#"><i class="fa fa-link"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 p-2 wow fadeIn">
                <div class="box2">
                    <img class="img-fluid" src="https://via.placeholder.com/500">
                    <div class="box-content">
                        <div class="inner-content">
                            <h3 class="title">عنوان</h3>
                            <span class="post">يوضع عنوان هنا</span>
                            <ul class="icon">
                                <li><a href="#"><i class="fa fa-search"></i></a></li>
                                <li><a href="#"><i class="fa fa-link"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </section>
       <!-- end portofolio section -->        
     </div>
     <footer class="mt-5 main-footer t-white">
      <section class="container pt-5">
          <div class="row">
          <div class="col-md-3 col-sm-6 col-sm-6 wow fadeInRight">
            <h3 class="underline d-inline-block">عنوان</h3>
            <ul class="foot-menu p-2">
              <li class="p-2">
                <a class="t-white" href="#">يوضع عنوان هنا</a>
              </li>
              <li class="p-2">
                <a class="t-white" href="#">يوضع عنوان هنا</a>
              </li>
              <li class="p-2">
                <a class="t-white" href="#">يوضع عنوان هنا</a>
              </li>
              <li class="p-2">
                <a class="t-white" href="#">يوضع عنوان هنا</a>
              </li>
              <li class="p-2">
                <a class="t-white" href="#">يوضع عنوان هنا</a>
              </li>
            </ul>
          </div>
          <div class="col-md-3 col-sm-6 col-sm-6 wow fadeIn">
            <h3 class="underline d-inline-block mb-4">يوضع عنوان هنا</h3>
            <div class="media">
              <img src="https://via.placeholder.com/180" class="mr-3" alt="..." width="60">
              <div class="media-body">
                <p class="small"> شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر</p>
              </div>
            </div>
            <div class="media">
              <img src="https://via.placeholder.com/180" class="mr-3" alt="..." width="60">
              <div class="media-body">
                <p class="small"> شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر</p>
              </div>
            </div>
            <div class="media">
              <img src="https://via.placeholder.com/180" class="mr-3" alt="..." width="60">
              <div class="media-body">
                <p class="small"> شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 col-sm-6 wow fadeIn">
            <h3 class="underline d-inline-block">يوضع عنوان هنا</h3>
            <button type="button" class="btn btn-outline-light m-1">يوضع عنوانشسيشس</button>
            <button type="button" class="btn btn-outline-light m-1">يوضع عنوان</button>
            <button type="button" class="btn btn-outline-light m-1">يوضع عنوان</button>
            <button type="button" class="btn btn-outline-light m-1">يوضع عنوانشسيشس يشسيش </button>
            <button type="button" class="btn btn-outline-light m-1">يوضع عنوان</button>
            <button type="button" class="btn btn-outline-light m-1">يوضع عنوان</button>
            <button type="button" class="btn btn-outline-light m-1">يوضع عنوان</button>
            <button type="button" class="btn btn-outline-light m-1">يوضع عنوان</button>
          </div>
          <div class="col-md-3 col-sm-6 col-sm-6 wow fadeInLeft">
            <h3 class="underline d-inline-block">يوضع عنوان هنا</h3>
            <p class="small p-2">لوريم إيبسوم خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني. انتشر بشكل كبير في ستينيّات هذا القرن مع إصدار رقائق "ليتراسيت" (Letraset) البلاستيكية تحوي مقاطع من هذا النص، وعاد لينتشر مرة أخرى مؤخراَ مع ظهور برامج النشر الإلكتروني مثل "ألدوس بايج مايكر" (Aldus PageMaker) والتي حوت أيضاً على نسخ من نص لوريم إيبسوم.</p>
          </div>
        </div>
      </section>
      <section class="row copyright t-white p-4 ">
        <div class="col-md-4 text-left">
          @if($data['social_links']['facebook'])
            <a target="_blank" href="{{$data['social_links']['facebook']}}">
              <img src="/assets/imgs/facebook.png" alt="facebook" width="30">
            </a>
          @endif

          @if($data['social_links']['youtube'])
            <a target="_blank" href="{{$data['social_links']['youtube']}}">
              <img src="/assets/imgs/youtube.png" alt="youtube" width="30">
            </a>
          @endif

        @if($data['social_links']['twitter'])
          <a target="_blank" href="{{$data['social_links']['twitter']}}">
            <img src="/assets/imgs/twitter.png" alt="twitter" width="30">
          </a>
        @endif

      @if($data['social_links']['instegram'])
        <a target="_blank" href="{{$data['social_links']['instegram']}}">
          <img src="/assets/imgs/instegram.webp" alt="instegram" width="30">
        </a>
      @endif

    @if($data['social_links']['snap_chat'])
      <a target="_blank" href="{{$data['social_links']['snap_chat']}}">
        <img src="/assets/imgs/snapchat.webp" alt="snap chat" width="30">
      </a>
    @endif


        </div>
        <div class="col-md-4 text-center">
          <h6>نص نص نص نص</h6>
        </div>
        <div class="col-md-4 text-right">
          <h6>نص نص نص نص</h4>
        </div>
      </section>
    </footer>
    <div class="fixed-bottom bg-light shadow-lg d-lg-none d-md-none">
      <div class="row text-center pt-2 m-0">
        <a class="col-3 p-2 t-black" href="#">
          <img src="/assets/imgs/icons/Directions.svg" alt="Directions">
          <p class="m-0 small">الأتجاهات</p>
        </a>
        <a class="col-3 p-2 t-black" href="#">
          <img src="/assets/imgs/icons/Prices.svg" alt="Prices">
          <p class="m-0 small">عرض سعر</p>
        </a>
        <a class="col-3 p-2 t-black" href="#">
          <img src="/assets/imgs/icons/Whatsapp.svg" alt="Whatsapp">
          <p class="m-0 small">واتساب</p>
        </a>
        <a class="col-3 p-2 t-black" href="#">
          <img src="/assets/imgs/icons/call.svg" alt="call">
          <p class="m-0 small">اتصال</p>
        </a>
      </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.js"></script>
    <script src="/assets/js/moment.js" ></script>
    <script src="/assets/js/main.js"></script>
    <script>
      
      $(".since-ar").each(function(){
        var text = $(this).text();
        var post_date = moment(text)
        post_date.locale('ar')
        var since_time = post_date.fromNow();
        $(this).text(since_time)
      })

      
    </script>

  </body>
</html>