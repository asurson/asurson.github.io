$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>250){
            $('#back').fadeIn('slow');
        }else{
            $('#back').fadeOut('slow');
        }
    });
    $('#back').on('click',function(e){
        $('html,body').animate({scrollTop:0},600,'swing')
    });

     if($(window).width()<=768){
         $('.footer_content h1').on('touchstart',function(){
             $(this).next().slideToggle().end().toggleClass('change')
         })
     }

        


})
