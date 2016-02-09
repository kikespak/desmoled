    var done=0;  
$(window).scroll(function () {
           var fromTop = $(window).scrollTop();console.log('done is '+done)
           var scrollPercentage = 100 * $(window).scrollTop() / ($('#circlecontainer').height() - $(window).height());
           console.log(scrollPercentage);
    if(scrollPercentage<=-271){$('#footer').addClass("show");}else{$('#footer').removeClass("show");}
           if (scrollPercentage <= -71.3) {
               document.getElementById('blackheader').setAttribute('style','height:87px;border-bottom:5vw solid transparent;border-left:100vw solid #1a1a1a');
               if(done==0){document.getElementById('header').setAttribute('style', 'opacity:0;margin-top:-30px')}
               if (scrollPercentage <= -72.3) {done=1
                   if(done==1){ document.getElementById('header').setAttribute('style', 'opacity:1;margin-top:23px;background:transparent;    transform: translateX(-195px);');}
                   document.getElementById('header').style.position = "fixed";
               } else {done=0;
                   document.getElementById('header').style.position = "absolute";
               }
           } else {
              document.getElementById('header').setAttribute('style', '');
               document.getElementById('blackheader').setAttribute('style','height:0px;border-bottom:0vw solid transparent;border-left:100vw solid #1a1a1a');
           }
           $("#circlecontainer").css('margin', '-' + (fromTop/3) + 'px 0px 0px 0px');
    $("#infographic").css('margin',   (fromTop / 2) + 'px 0px 0px 0px');

       });
window.number=0;
function myInit(){
    setInterval(slide,10000)
}
function slide(){
    number=number+1
    document.getElementById('vetrina').style.backgroundImage="url('img/"+number+".jpg')";
    if(number==5){number=0;}
}
