$(function(){
   
    $('.tab-content').not(':first').hide();
     $('.tabs-head .tab').click(function(){
         $('.tabs-head .tab').removeClass('active').eq($(this).index()).addClass('active');
         $('.tab-content').hide().eq($(this).index()).show();
     }).eq(0).addClass('active');


})