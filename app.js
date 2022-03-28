
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
    if (document.querySelector('#id-input').value == ""){
        alert('아이디를 입력하시오');
        
    }
    if (document.querySelector('#password-input').value == "") {
        alert('비밀번호를 입력하시오');
    }else if(document.querySelector('#password-input').value.length < 6){
        alert('6자 이상의 비밀번호를 입력하세요');
    }
});
