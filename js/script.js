$(function () {
    $('a').on('click',function (event) {
        event.preventDefault
        if(this.hash !==''){
            
            $('html,body').animate({
                scrollTop: $(this.hash).offset().top
            },1900)

        }

    })



    $(window).on('scroll',function () {

       if( $(this).scrollTop() > 350){

           $('#back-to-top').fadeIn(700)

       } else{

           $('#back-to-top').fadeOut(700)

       }
    })

    $('#back-to-top').on('click',function () {

        $('html,body').animate({
            scrollTop: 0,
        },2000)
        
    })

})

$(window).on('load',function () {
     $('.preloader').fadeOut(700)   
})