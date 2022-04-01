function tapOpen(i){

        $('.tab-button').removeClass('orange');
        $('.tab-button').eq(i).addClass('orange');
        
        $('.tab-content').removeClass('show');
        $('.tab-content').eq(i).addClass('show');

}
$('.list').click(function(e){
    tapOpen(e.target.dataset.id);
})

var car = {name:'squre-ring', price:50000}
$('.card').html(`${car.name} / ${car.price}`);



