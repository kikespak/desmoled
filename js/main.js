
window.number=0;
function myInit(){
    setInterval(slide,10000)
}
function slide(){
    number=number+1
    document.getElementById('vetrina').style.backgroundImage="url('img/"+number+".jpg')";
    if(number==5){number=0;}
}
function checkMobile(){
	var w = window.innerWidth;
   var h = window.innerHeight;
    var b=document.body;
	if(w<h){b.classList.remove('horizontal');b.classList.add('vertical')}else{b.classList.remove('vertical');b.classList.add('horizontal')}
}
function checkInit(){
    var w = window.innerWidth;
   var h = window.innerHeight;
	if(w>=h){
	        var done=0;  
$(window).scroll(function () {
           var fromTop = $(window).scrollTop();console.log('done is '+done)
           var scrollPercentage = 100 * $(window).scrollTop() / ($('#circlecontainer').height() - $(window).height());
           console.log(scrollPercentage);
           if (scrollPercentage <= -71.3) {
               document.getElementById('blackheader').setAttribute('style','height:55px;border-bottom:4vw solid transparent;border-left:100vw solid #1a1a1a');
               if(done==0){document.getElementById('header').setAttribute('style', 'opacity:0;margin-top:-30px')}
               if (scrollPercentage <= -72.3) {done=1
                   if(done==1){ document.getElementById('header').setAttribute('style', 'opacity:1;margin-top:23px;background:transparent;    transform: translate(-195px,-22px);');}
                   document.getElementById('header').style.position = "fixed";
               } else {done=0;
                   document.getElementById('header').style.position = "absolute";
               }
           } else {
              document.getElementById('header').setAttribute('style', '');
               document.getElementById('blackheader').setAttribute('style','height:0px;border-bottom:0vw solid transparent;border-left:100vw solid #1a1a1a');
           }
           $("#circlecontainer").css('margin', '-' + (fromTop/3) + 'px 0px 0px 0px');
    $("#container").css('margin',   (fromTop / 2) + 'px 0px 0px 0px');

       });
	}
}