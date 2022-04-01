
$('#login').on('click', function(){
    $('.black-bg').addClass('black-bg-show');
})

$('#close').on('click', function(){
 $('.black-bg').removeClass('black-bg-show');
})
 
 function show() {
     document.querySelector('.list-group').classList.toggle('list-show');
 }

 document.querySelector('.navbar-toggler').addEventListener('click', show);

 $('form').on('submit', function(e){
    e.preventDefault();
    const idValue = document.querySelector('#id-input').value;
    const psdValue = document.querySelector('#password-input').value;
    if (idValue == ""){
        alert('아이디를 입력하시오');
    }
    if (/\S+@S+.\S+/.test(idValue)==false){
        alert('이메일 형식으로입력하시오');
    }
        
    
    if (psdValue == "" ) {
        alert('비밀번호를 입력하시오');
    }else if(psdValue.length < 6){
        alert('6자 이상의 비밀번호를 입력하세요');
    }else if(/[A-Z]/.test(psdValue)==false)
        alert('비밀번호에 하나 이상의 대문자를 입력하세요');
});
let btnCount = 0;
$("#dark-button").on("click", function(){
    btnCount++;
    if(btnCount%2!=0){
    $("#dark-button").html("Light 🔄"); 
}else{
    $("#dark-button").html("Dark 🔄"); 
}

});

let seconds = 5
setInterval(function(){
    
    document.querySelector("#seconds").innerHTML = seconds-1;
    seconds--;
    if(document.querySelector("#seconds").innerText==0){
        $(".alert-danger").hide();
    }
    
    
},1000);

let 지금사진 = 0;
$('.slide-2').on('click', function(){
  $('.slide-container').css('transform', 'translateX(-100vw)');
  
})
$('.slide-1').on('click', function(){
  $('.slide-container').css('transform', 'translateX(0)');
 
})
$('.slide-3').on('click', function(){
  $('.slide-container').css('transform', 'translateX(-200vw)');
  
})


$('.slide-next').on('click', function(){
  if($('.slide-box').length-1 > 지금사진){
          지금사진 += 1;
       }
       $('.slide-container').css('transform', `translateX(-${지금사진}00vw)`);
       
       
     
 })
$('.slide-before').on('click', function(){
  if(1 <= 지금사진){    
      지금사진 -= 1;

  }
  
       $('.slide-container').css('transform', `translateX(-${지금사진}00vw)`);
   
     
 })


    
 $(window).on('scroll', function(){
    if($(window).scrollTop()>100){
      $('.navbar-brand').css('font-size','20px');
    }else if($(window).scrollTop()<100)
      $('.navbar-brand').css('font-size','30px');
   })

   $('.lorem').on('scroll',function(){
     let scrollAmount=$('.lorem').scrollTop();
     let loremAmount= document.querySelector('.lorem').scrollHeight;
     if (scrollAmount+100 == loremAmount){
       alert('you finish reading!');
     }
    
   })
   $(window).on('scroll',function(){
     var windowScroll=document.querySelector('html').scrollTop;
     var windowScrollHeight=document.querySelector('html').scrollHeight;
     $('.scroll-bar').css('width', `${100/(windowScrollHeight-754)*windowScroll}%`);
     
   })
   