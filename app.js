
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
        alert('하나 이상의 대문자를 입력하세요');
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
