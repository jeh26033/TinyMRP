$(document).ready(function(){


  $(".quad").mouseover(function(){
    $(this).addClass('active col-md-10').removeClass('col-md-6');
    $(this).siblings().addClass('inactive col-md-2').removeClass('col-md-6'); 

  }); 
  $(".card-row").mouseover(function(){
    $(this).addClass('activeDiv')
    $(this).siblings().addClass('inactiveDiv'); 
  });
 
   $(".card-row").mouseout(function(){
    $(this).removeClass('activeDiv')
    $(this).siblings().removeClass('inactiveDiv'); 
  });


  $(".quad").mouseout(function(){
    $(this).siblings().removeClass('inactive col-md-2').addClass('col-md-6');
    $(this).removeClass('active col-md-9').addClass('col-md-6');
  });


 });