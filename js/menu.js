const menu = document.getElementById('menu');
menu.innerHTML = `
<header id="header">

    <div id="topbar">
      <div class="container">
        <div class="social-links">
          <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
          <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
          <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
          <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
        </div>
      </div>
    </div>

    <div class="container">

      <div class="logo float-left">
        <!-- Uncomment below if you prefer to use an image logo -->
        <h1 class="text-light"><a href="../index.html" ><span>FLOS</span></a></h1>
        <!-- <a href="#header" class="scrollto"><img src="./intro/img/logo.png" alt="" class="img-fluid"></a> -->
      </div>

      <nav class="main-nav float-right d-none d-lg-block">
        <ul>
          <li ><a class="list-btn" href="../index.html">홈</a></li>
         
          <li class="drop-down"><a class="list-btn" href="">회사 소개</a>
            <ul>
            <li><a class="list-btn" href="../about.html">FLOS는?</a></li>
            <li><a class="list-btn" href="../motive.html">사업을 시작 이유?</a></li>
              <!-- <li class="drop-down"><a href="#">Drop Down 2</a>
                <ul>
                  <li><a class="list-btn" href="#">Deep Drop Down 1</a></li>
                  <li><a class="list-btn" href="#">Deep Drop Down 2</a></li>
                  <li><a class="list-btn" href="#">Deep Drop Down 3</a></li>
                  <li><a class="list-btn" href="#">Deep Drop Down 4</a></li>
                  <li><a class="list-btn" href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a class="list-btn" href="#">Drop Down 3</a></li>
              <li><a class="list-btn" href="#">Drop Down 4</a></li>
              <li><a class="list-btn" href="#">Drop Down 5</a></li> -->
            </ul>
          </li>
          <li class="drop-down"><a class="list-btn" href="../column/column-event.html">무료 칼럼</a>
            <ul>
              <li><a class="list-btn" href="../column/column-event.html">고객을 확보하는 홈페이지 제작법</a></li>
              <!-- <li class="drop-down"><a href="#">Drop Down 2</a>
                <ul>
                  <li><a class="list-btn" href="#">Deep Drop Down 1</a></li>
                  <li><a class="list-btn" href="#">Deep Drop Down 2</a></li>
                  <li><a class="list-btn" href="#">Deep Drop Down 3</a></li>
                  <li><a class="list-btn" href="#">Deep Drop Down 4</a></li>
                  <li><a class="list-btn" href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a class="list-btn" href="#">Drop Down 3</a></li>
              <li><a class="list-btn" href="#">Drop Down 4</a></li>
              <li><a class="list-btn" href="#">Drop Down 5</a></li> -->
            </ul>
          </li>
         <!-- <li class="drop-down"><a class="list-btn" href="../program.html">제작 과정</a>
          <ul>
            <li><a class="list-btn" href="../column/칼럼1.html">1. 홈페이지 기획</a></li>
            <li><a class="list-btn" href="../column/칼럼1.html">2. 웹 디자인</a></li>
            <li><a class="list-btn" href="../column/칼럼1.html">3. 웹 개발</a></li>
            <li><a class="list-btn" href="../column/칼럼1.html">4. 온라인 광고</a></li>
            <li class="drop-down"><a href="#">Drop Down 2</a>
              <ul>
                <li><a class="list-btn" href="#">Deep Drop Down 1</a></li>
                <li><a class="list-btn" href="#">Deep Drop Down 2</a></li>
                <li><a class="list-btn" href="#">Deep Drop Down 3</a></li>
                <li><a class="list-btn" href="#">Deep Drop Down 4</a></li>
                <li><a class="list-btn" href="#">Deep Drop Down 5</a></li>
              </ul>
            </li>
            <li><a class="list-btn" href="#">Drop Down 3</a></li>
            <li><a class="list-btn" href="#">Drop Down 4</a></li>
            <li><a class="list-btn" href="#">Drop Down 5</a></li> 
          </ul>
        </li> -->
          <li><a class="list-btn" href="../service.html">제공 서비스</a></li>
          <li><a class="list-btn" href="../faq.html">FAQ</a></li>
          
          <li ><a class="imp-btn" href="../column/consulting.html">문의 신청하기</a></li>
        </ul>
      </nav><!-- .main-nav -->
      
    </div>
  </header><!-- #header -->
`;

document.body.appendChild(menu.content);