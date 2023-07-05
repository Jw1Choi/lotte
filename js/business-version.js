const testbody = document.getElementById('test_body');
testbody.innerHTML = `
<div class="main">
<div class="inner">
    <div class="title" style="">
     
        <!-- <img src="./img/gov.png" style="width:150px"> -->
   <img src="./img/logo.png" style="width:250px">
        <h1 class="wow fadeInUp"><span style="color:yellow">저신용자 분들을 위한</span><br>장기렌트 출고 가능 여부와<br>맞춤 프로모션을<br>한번에 알려드립니다.</h1><br>
        <a href="#sec05" class="scroll box">
            <span class="timer">
                실시간 기준 | <span class="today_date2" style="bottom:0;"></span> 
                </script> ( <span id="countdown1"></span>)
            
            </span>
        </a> <br><br>
    </div>
    <img src="img/bg4.png" class="bg" style="opacity: 0.6;">
    <img src="img/main4.png" class="img-main wow fadeInUp">
    <ul class="listWrap">
        <li class="wow fadeInUp">
            <div class="blink" style="color:yellow">
               저신용자 맞춤<br>출고 가능 여부 조회<br>
            <!-- <span class="num">국내차, 외제차</span> -->
            </div>
        </li>
        <li class="wow fadeInUp" data-wow-delay=".1s">
            <div>
                즉시 출고<br>
                최소 <span class="num">7</span>일 이내<br>
            </div>
     
        </li>
        <li class="wow fadeInUp" data-wow-delay=".2s">
            <div>
                현재 페이지 신청자<br>
             <u style="color:yellow">추가 할인 적용</u>
            </div>
        </li>
    </ul>
    <!-- <div class="wow fadeIn">
        <a href="#sec05" class="scroll btn-main">
            안심대출 신청하기
        </a>
    </div> -->
</div>
</div>
<!-- end main -->




<!-- contents -->
<div class="contentsWrap">








<div class="sec02 contents">
    <ul class="inner">
        <li class="wow fadeInUp">
            <div class="title">출고 가능 여부 무료 조회</div>
            <div class="txt">
                - 오늘 기준 (<span class="today_date" style="bottom:0;"></span>) 의 출고 기준 조회<br><br>
                - 저신용자 맞춤 출고 가능 조회를 진행해드립니다.<br><br>
                <span class="blink" >- 무료로 진행되니 부담없이 신청주세요. </span><br><br>
                - 국내, 수입차 전차종 견적도 추가할인해 드립니다.
            </div>
        </li><br>
        <li class="wow fadeInUp" data-wow-delay=".1s">
            <div class="title">신청 대상 및 신청방법</div>
            <div class="txt">
            <br>
                <span style="bottom:0px;">신청대상: </span> 24세 이상 현재 페이지 신청자<br><br>
                <span style="bottom:0px;">신청방법: </span> 하단 신청란에 신청 가능<br><br>
                <span class="blink" > 출고가 가능하게 끔 도와드리기 위하여<br>전화를 통해 가장 도움되는 조건을 안내드립니다.</span><br>
            </div>
        </li>
        <li class="wow fadeInUp" data-wow-delay=".2s">
            <div class="title">구매 조건</div>
            <div class="txt">
                장기렌트 / 신차리스 모두 가능
            </div>
        </li>
    </ul>
</div>





  
</form>




<div class="form-box" id="fm-box">
    <div class="inner">
        <h1 class="form-top-title">출고 가능 여부 조회 신청하기</h1>
        <div class="form-box-inner">
            <form action="" id="form_e11" method="POST" target="hidden_iframe11"  onsubmit="dll();kakaoPixel('7504569149976260948').purchase('purchase');submitted=true;">

                <div class="form-box-tb-out">
                <br>
                    <table class="form-box-tb">
                        <tbody>
                            <tr>
                                <th>견적 유형</th>
                                <td>
                               
                                    <select name="entry.34131472" id='car_type' class="form-control" placeholder="견적 유형">

                                        <option value="견적 유형" selected disabled>견적 유형
                                            <option value="장기렌트">장기렌트</option>
                                            <option value="신차리스">신차리스</option>
                                           
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th><!--<i class="fa fa-user" aria-hidden="true"></i>-->차종</th>
                                <td>
                                    <input type='text' name='entry.140519695' id='car' class="form-control" placeholder="차종">
                                </td>
                            </tr>
                        <tr>
                            <th><!--<i class="fa fa-user" aria-hidden="true"></i>-->이름</th>
                            <td>
                                <input type='text' name='entry.583978956' id='name' class="form-control" placeholder="성함" maxlength="4">
                            </td>
                        </tr>
                        <tr>
                            <th><!--<i class="fa fa-phone" aria-hidden="true"></i>-->연락처</th>
                            <td>
                                <input type='text' name='entry.576088086' id='phone' class="form-control" placeholder="휴대폰번호" maxlength="11">
                            </td>
                        </tr>
                        <tr>
                            <!-- <th>지역</th>
                            <td>
                           
                                <select name="entry.272078534" id='id-number' class="form-control" placeholder="해당 지역">

                                    <option value="해당 지역" selected disabled>해당 지역
                                        <option value="서울">서울</option>
                                        <option value="부산">부산</option>
                                        <option value="대구">대구</option>
                                        <option value="인천">인천</option>
                                        <option value="광주">광주</option>
                                        <option value="대전">대전</option>
                                        <option value="울산">울산</option>
                                        <option value="세종">세종</option>
                                        <option value="경기">경기</option>
                                        <option value="강원">강원</option>
                                        <option value="충북">충북</option>
                                        <option value="충남">충남</option>
                                        <option value="전북">전북</option>
                                        <option value="전남">전남</option>
                                        <option value="경북">경북</option>
                                        <option value="경남">경남</option>
                                        <option value="제주">제주</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>통화가능시간</th>
                            <td>
                                <select name="entry.472954139" id='time' class="form-control" placeholder="현재 조건">

                                    <option value="통화가능시간" selected disabled>통화가능시간
                                        <option value="언제나 통화 가능">언제나 통화 가능</option>
                                        <option value="오전 09:00~10:00">오전 09:00 ~ 10:00</option>
                                        <option value="오전 10:00~11:00">오전 10:00 ~ 11:00</option>
                                        <option value="오전 11:00~12:00">오전 11:00 ~ 12:00</option>
                                        <option value="점심 12:00~01:00">점심 12:00 ~ 01:00</option>
                                        <option value="오후 01:00~02:00">오후 01:00 ~ 02:00</option>
                                        <option value="오후 02:00~03:00">오후 02:00 ~ 03:00</option>
                                        <option value="오후 03:00~04:00">오후 03:00 ~ 04:00</option>
                                        <option value="오후 04:00~05:00">오후 04:00 ~ 05:00</option>
                                        <option value="오후 05:00~06:00">오후 05:00 ~ 06:00</option>
                                        <option value="오후 06:00~07:00">오후 06:00 ~ 07:00</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>문의사항</th>
                            <td>
                                <textarea name='entry.1292376548' id='message' class="form-control" placeholder="문의사항을 적어주세요.(선택)" style="min-height:100px"></textarea>
                            </td>
                        </tr> -->
                        <!-- <tr>
                            <th>대출금액</th>
                            <td>
                            <input name='M_items_value_16' type='text' value='' class='ri_16 text_box' placeholder="필요금액을 입력하세요." pattern="\d*"><span class="text_box_text">&nbsp;만원</span>
                            </td>
                        </tr> -->
                        <!-- <tr>
                            <th>!--<i class="fa fa-user" aria-hidden="true"></i>--메모</th>
                            <td>
                                <textarea name="M_data" type="text" class="form-info" placeholder="개인 신용에 어떠한 영향도 끼치지 않으며, 한도안내 후 개인정보는 전부 파기됩니다." onkeyup="cdcheck(this)" onkeydown="cdcheck(this)"></textarea>
                            </td> 
                        </tr>   -->
                        <tr>
                            <td colspan="2" style="border-bottom: none"> 
                                <!-- <span class="red-txt">신용 8~10등급은 접수 불가합니다.</span> -->
                            
                                <input class="submit-btn" type='submit' id='send_message' value='출고 가능 조회하기' disabled style="background-color: #595858;">
                                <input class="submit-btn"  id='send_message1' value='잠시만 기다려주세요.' disabled style="background-color:black;display:none;">
                                <div class="form-agree-box">
                                    <p class="form-info-agree">
                                        <span>
                                           
                                            <input type="checkbox" name="agree11" id="agree11" value="개인정보보호정책 동의" checked>
                                            <label style="color:black; font-weight:300;font-size:13px;margin-top:-3px;" for="agree11">개인정보보호정책</label>
                        
                        
                                            <span class="privacyBtn" style="color:black;font-weight:400; font-size: 13px;margin-top:-3px; " onclick="privacyPopUp()">
                                                [자세히 보기]
                                            </span>
                                        </span>
                                    </p>

                                    <script type="text/javascript">var submitted = false;</script>

                                    <iframe name="hidden_iframe11" id="hidden_iframe11" style="display:none;" onload=""></iframe>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </form>
        </div>
    </div>
</div><!----form-end------>
</div><!-- contentsWrap end -->


<section id="dbscf" style="display:none;" >
<form id="db" name="inputForm" accept-charset="euc-kr" method="post" action="https://dbdbdeep.com/site17/ifr/ifr_save.php">
<input type="hidden" name="ms" value="S00242885B" />
<input type="hidden" name="ca" value="C05120127C" />
<input type="hidden" name="auto_defense" />




<div class="input_title"><span>이름</span><input type="text" name="name" /></div>
<div class="input_title"><span>전화번호</span>
<select type="text" name="tel1" style="width:20%; border:none; border-bottom:1px solid #ccc;" >
<option value="010">010</option>
<option value="011">011</option>
<option value="016">016</option>
<option value="017">017</option>
<option value="018">018</option>
<option value="019">019</option>
</select>-
<input type="text" name="tel2" style="width:20%;" maxlength="4" />-
<input type="text" name="tel3" style="width:20%;" maxlength="4" />
</div>
<div class="input_title"><span>차종</span><input type="text" name="item1" /></div>

<div style="font-size:0.7em;"><input type="checkbox" name="agree" id="agreement"  style="margin:0 0; vertical-align:middle;" checked /><label for="agreement">개인정보 취급 동의</label><a href="javascript:dbdb_pri_popup();">[보기]</a>

</form>

<div class="footer_btn">
<a href="#" onclick="javascript:OnSubmit();">
 <span style="color:#fff">신청하기</span>
    </a>

</section>



<div class="wrap linkWrap">
<div class="sec00 contents" style="padding-top:80px;">
    <div class="inner">
    <p>
    <p class="today_date1"></p>
        현재 <span class="counter" style="bottom:1px;">27</span> 명이 신청 대기 중입니다.
    </p>
    <div class="box_02">
        <div class="box_02_1">
            <div style="position:relative;height:150px;overflow:hidden;">
                <div id="ticker_wrap" style="position: absolute;top:0px;right:0px;width:100%;">
                    <table id="ticker" class="tg">
                    <tbody>
                        <tr>
                            <td class="tg-0lax"><span class="submit_02">그랜저</span></td>
                            <td class="tg-02ax">경기 / 신청 완료</td>
                            <td class="tg-03ax"><span class="submit_03">신청완료</span></td>
                        </tr>
                        <tr>
                            <td class="tg-0lax"><span class="submit_02">카니발</span></td>
                            <td class="tg-02ax">전남 / 신청 완료</td>
                            <td class="tg-03ax"><span class="submit_03">신청완료</span></td>
                        </tr>
                        <tr>
                            <td class="tg-0lax"><span class="submit_02">아이오닉5</span></td>
                            <td class="tg-02ax">서울 / 신청 완료</td>
                            <td class="tg-03ax"><span class="submit_03">신청완료</span></td>
                        </tr>
                        <tr>
                            <td class="tg-0lax"><span class="submit_02">아반떼</span></td>
                            <td class="tg-02ax">인천 / 신청 완료</td>
                            <td class="tg-03ax"><span class="submit_03">신청완료</span></td>
                        </tr>
                        <tr>
                            <td class="tg-0lax"><span class="submit_02">벤츠</span></td>
                            <td class="tg-02ax">경북 / 신청 완료</td>
                            <td class="tg-03ax"><span class="submit_03">신청완료</span></td>
                        </tr>
                        <tr>
                            <td class="tg-0lax"><span class="submit_02">GV80</span></td>
                            <td class="tg-02ax">서울 / 신청 완료</td>
                            <td class="tg-03ax"><span class="submit_03">신청완료</span></td>
                        </tr>
                        <tr>
                            <td class="tg-0lax"><span class="submit_02">신형 그랜저</span></td>
                            <td class="tg-02ax">경남 / 신청 완료</td>
                            <td class="tg-03ax"><span class="submit_03">신청완료</span></td>
                        </tr>
                        <tr>
                            <td class="tg-0lax"><span class="submit_02">벤츠 GLC</span></td>
                            <td class="tg-02ax">서울 / 신청 완료</td>
                            <td class="tg-03ax"><span class="submit_03">신청완료</span></td>
                        </tr>
                        <tr>
                            <td class="tg-0lax"><span class="submit_02">니로</span></td>
                            <td class="tg-02ax">경기 / 신청 완료</td>
                            <td class="tg-03ax"><span class="submit_03">신청완료</span></td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    </div>
</div>
</div>
<div class="bottom">
<footer>
    롯데렌터카 대표이사 최진환<br>

    경기도 안양시 동안구 전파로 88 신원비젼타워 8층 서울본사: 서울시 강남구 테헤란로 422 KT타워 6~9층<br>
    
    사업자등록번호 214-87-79183 통신판매업신고번호 : 제2010-경기안양-420호<br>

    마케팅 대행업체: 플로스 | flosmarketing@naver.com | 서울 영등포구 선유로 53길 22 502호 | 사업자등록번호: 471-09-01112   
</footer>
</div>


<div id="privacy">
<div id="privacyContent">
    <div class="titWrap">
        <span>개인정보취급방침</span>
        <i style="margin-top:-23px !important" class="ion-close-circled closeBtn"></i>
    </div>
    <div style="line-height:1.2" class="conWrap">
        개인정보취급방침<br><br>
        수집하는 개인정보의 항목<br>
        "롯데렌터카"는 적법하고 공정한 수단에 의해서만 개인정보를 수집하며, 회원가입약관 또는 개인정보의 제공, 활용 동의서의 내용에 대해 이용자의 개인정보를 수집하는 경우에 당해<br> 이용자가 동의함 또는 동의하지 않음 버튼을 클릭 하는 등의 이용자의 동의를 얻는 절차를 거칩니다.<br>
        <br>
        수집하는 개인정보 항목<br>
        회사는 회원가입, 상담, 서비스 신청 등등을 위해 아래와 같은 개인정보를 수집하고 있습니다.<br><br>

        ● 수집항목 : 이름 , 휴대전화번호 , 희망 차종, 견적 유형 등 개인맞춤 서비스를 제공하기 위해 수집됩니다.<br>
        ● 개인정보 수집방법 : 신청폼 , 전화를 통한 고객상담.<br>
        <br>
        개인정보의 수집 및 이용목적<br>
        회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.<br><br>
        
        개인정보의 제 3자 제공 및 취급위탁<br>
        회사는 귀하의 개인정보를 (개인정보의 수집목적 및 이용목적)에서 고지한 범위 내에서 사용하며, 동 범위를 초과하여 이용하거나 타인 또는 타기업, 기관에 제공하지 않습니다. 그러나 보다 나은 서비스 제공을 위하여 귀하의 개인정보를 제휴사에게 제공하거나 또는 제휴사와 공유할 수 있습니다. 개인정보를 제공하거나 공유할 경우에는 사전에 귀하의 동의를 구하는 절차를 거치게 되며, 귀하께서 동의하지 않는 경우에는 제휴사에게 제공하거나 제휴사와 공유하지 않습니다.<br><br>
        
        위탁자 : ㈜마케팅이즈, ㈜마루커뮤니케이션, 카카오토카, FLOS MARKETING <br>
        위탁 목적 : 광고를 통한 개인정보 취급 및 보관, 광고/마케팅 업무대행<br>
        위탁 정보의 내용 : 수집되는 정보일체<br>
        위탁 정보의 보유기간 : 수집 및 동의일로부터 3년<br><br>
        
        ● 마케팅 및 광고에 활용<br>
        이벤트 등 광고성 정보 전달<br><br>

        개인정보의 보유 및 이용기간><br>
        원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.<br><br>

        보존 항목 : 이름 , 휴대전화번호 , 차종 등.<br>
        보존 근거 : 고객의요청이 있을시 즉시폐기<br>
        보존 기간 : 3년<br><br>

        그리고 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 아래와 같이 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.<br><br>

        소비자의 불만 또는 분쟁처리에 관한 기록 : 3년 (전자상거래등에서의 소비자보호에 관한 법률)<br>
        신용정보의 수집/처리 및 이용 등에 관한 기록 : 3년 (신용정보의 이용 및 보호에 관한 법률)<br><br>

        개인정보의 파기절차 및 방법<br>
        회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체없이 파기합니다. 파기절차 및 방법은 다음과 같습니다.<br><br>

        ● 파기절차<br>
        신청폼을 통해 입력하신 정보는 목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정 기간 저장된 후 파기되어집니다.<br><br>

        별도 DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 보유되어지는 이외의 다른 목적으로 이용되지 않습니다.<br><br>

        ● 파기방법<br>
        - 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.<br>
        - 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.<br><br>

        
        이용자 및 법정대리인의 권리와 그 행사방법<br>
        이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며 가입해지를 요청할 수도 있습니다.<br><br>

        이용자들의 개인정보 조회,수정을 위해서는 본인 확인 절차를 거치신 후 정정 또는 삭제가 가능합니다.<br><br>

        혹은 개인정보관리책임자에게 서면, 전화 또는 이메일로 연락하시면 지체없이 조치하겠습니다.<br><br>
        
        개인정보관리책임자<br><br>

        회사: FLOS MARKETING<br>
        이름: 최지웅<br>
        이메일: flosmarketing@naver.com<br><br>

        귀하가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다. 또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체없이 통지하여 정정이 이루어지도록 하겠습니다.<br><br>

        회사는 이용자의 요청에 의해 해지 또는 삭제된 개인정보는 "회사가 수집하는 개인정보의 보유 및 이용기간"에 명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.<br><br>


        개인정보에 관한 민원서비스<br>
        회사는 고객의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 관련 부서 및 개인정보관리책임자를 지정하고 있습니다.<br>
        <br>
    귀하께서는 회사의 서비스를 이용하시며 발생하는 모든 개인정보보호 관련 민원을 개인정보관리책임자 혹은 담당부서로 신고하실 수 있습니다. 회사는 이용자들의 신고사항에 대해 신속하게 충분한 답변을 드릴 것입니다.<br><br>

        기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다.<br>
        1.개인분쟁조정위원회 <br>
        2.정보보호마크인증위원회 <br>
        3.대검찰청 인터넷범죄수사센터 <br>
        4.경찰청 사이버테러대응센터 <br />
        <br />

    </div>
</div>
</div>
`;

document.body.appendChild(testbody.content);