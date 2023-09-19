$(document).ready(function(){
    $('#btn_submit_id').click(function(){
        
       
        $('#btn_submit_id').prop("disabled", true);
        $('#btn_submit_id').css({transition:"1s"});
           $('#btn_submit_id').attr({'disabled' : 'true', 'value' : '잠시만 기다려 주세요.' });
           $('#btn_submit_id').css({background:"#595959"});
           $('#btn_submit_id').css({cursor:"default"});     

    });    

});


function maxLengthCheck(object){
  if (object.value.length > object.maxLength){
    object.value = object.value.slice(0, object.maxLength);
  }    
}


 function form_check(){

    const regex2 = /^[가-힣]+$/;
    const regex = /^[|0-9|]+$/;
    var position = $('[name="상담가능시간"]').val();
    var id = $('[name="나이"]').val();
    var name = $('[name="user_name"]').val();
    var ph1 = $('[name="휴대폰번호1"]').val();
    var ph2 = $('[name="휴대폰번호2"]').val();
    var ph3 = $('[name="휴대폰번호3"]').val(); 
    var agree = $('[name="all_chk"]').is(":checked");

    if(regex2.test(name) && name.length > 1)
    {
        
        if(regex.test(id) && id.length == 2 && id >=24 && id <51)
        {
           
            if(ph1 != null && ph2.length ==4 && ph3.length ==4 && regex.test(ph2) && regex.test(ph3))
            {
            
                if( position != null )
                {
              
                    if (agree == true)
                    {
                        $('#btn_submit_id').css({transition:"1s"});
                       $('#btn_submit_id').prop("disabled", false);
                       $('#btn_submit_id').prop("value", "혜택 지원 신청하기");
                       $('#btn_submit_id').css({background:"#0e3b64"});
                       $('#btn_submit_id').css({cursor:"pointer"});
                    }
                    else
                    {
                        $('#btn_submit_id').css({transition:"1s"});
                        $('#btn_submit_id').prop("disabled", true);
                        $('#btn_submit_id').prop("value", "개인정보 동의를 해주세요");
                        $('#btn_submit_id').css({background:"#595959"});
                        $('#btn_submit_id').css({cursor:"default"});     
                    }
                    
                }
                else if (position == null)
                {
                    $('#btn_submit_id').css({transition:"1s"});
                    $('#btn_submit_id').prop("disabled", true);
                    $('#btn_submit_id').prop("value", "통화 시간을 선택하세요.");
                    $('#btn_submit_id').css({background:"#595959"});
                    $('#btn_submit_id').css({cursor:"default"});     
                }
  
            }
            else if(ph2.length>0 || ph3.length > 0)
            {
                $('#btn_submit_id').css({transition:"1s"});
                $('#btn_submit_id').prop("disabled", true);
                $('#btn_submit_id').prop("value", "전화번호 입력을 확인하세요.");
                $('#btn_submit_id').css({background:"#595959"});
                $('#btn_submit_id').css({cursor:"default"});     
            }
            else
            {
                $('#btn_submit_id').css({transition:"1s"});
                $('#btn_submit_id').prop("disabled", true);
                $('#btn_submit_id').prop("value", "전화번호를 입력하세요.");
                $('#btn_submit_id').css({background:"#595959"});
                $('#btn_submit_id').css({cursor:"default"});     
            }
           
        }
        else if(id.length==0)
        {
       $('#btn_submit_id').css({transition:"1s"});
       $('#btn_submit_id').prop("disabled", true);
       $('#btn_submit_id').prop("value", "나이를 입력하세요.");
       $('#btn_submit_id').css({background:"#595959"});
       $('#btn_submit_id').css({cursor:"default"});     
       }
       else 
       {
       $('#btn_submit_id').css({transition:"1s"});
       $('#btn_submit_id').prop("disabled", true);
       $('#btn_submit_id').prop("value", "24 ~ 50세까지 가능합니다.");
       $('#btn_submit_id').css({background:"#595959"});
       $('#btn_submit_id').css({cursor:"default"});     
       }
       
    }
    else if(name.length>0)
    {
        $('#btn_submit_id').css({transition:"1s"});
        $('#btn_submit_id').prop("disabled", true);
        $('#btn_submit_id').prop("value", "성함 입력을 확인하세요.");
        $('#btn_submit_id').css({background:"#595959"});
        $('#btn_submit_id').css({cursor:"default"});     
    }
    else
    {
        $('#btn_submit_id').css({transition:"1s"});
        $('#btn_submit_id').prop("disabled", true);
        $('#btn_submit_id').prop("value", "성함을 입력하세요.");
        $('#btn_submit_id').css({background:"#595959"});
        $('#btn_submit_id').css({cursor:"default"});     
    }


  
    }


$(function(){

 $('[name="상담가능시간"],[name="나이"],[name="user_name"],[name="휴대폰번호1"],[name="휴대폰번호2"],[name="휴대폰번호3"],[name="all_chk"]').bind("keyup click change",form_check);
})
