
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