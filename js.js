   function slowScroll(id) {
      $('html, body').animate({
        scrollTop: $(id).offset().top
      }, 500);
    }

    $(document).on("scroll", function () {
      if($(window).scrollTop() === 0)
        $("header").removeClass("fixed");
      else
        $("header").attr("class", "fixed");
    });

var countDownDate=new Date ("June 10, 2020 00:00:00").getTime();
var countDownFunction=setInterval(function(){

   var now=new Date ().getTime();

   var distance=countDownDate -now;

   var days=Math.floor(distance/(1000*60*60*24));
   var  hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
   var minutes=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
   var seconds=Math.floor((distance%(1000*60))/1000);


   document.getElementById("timer").innerHTML= days +"д "+ hours+ "ч " + minutes+ "м " +seconds + "с "
   

   if (distance<0) {
    clearInterval(countDownFunction);
    document.getElementById("timer").innerHTML ="время истекло"  
   }
  

},1000);



    