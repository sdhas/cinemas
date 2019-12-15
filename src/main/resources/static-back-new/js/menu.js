$(document).ready(function(){
  var wWidth = $(window).width();
  if(wWidth > 768){
  $("ul.bts-nav li").hover(function(){
     $(this).children("ul").slideToggle(400);
  });
}
else{
  $("ul.bts-nav li a").click(function(){
     $(this).next("ul").slideToggle(400);
  });
}
});