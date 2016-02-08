    var done=0;  
$(window).scroll(function () {
           var fromTop = $(window).scrollTop();console.log('done is '+done)
           var scrollPercentage = 100 * $(window).scrollTop() / ($('#vetrina').height() - $(window).height());
           console.log(scrollPercentage);
           if (scrollPercentage <= -234.2) {
               document.getElementById('blackheader').style.display = "block";
               if(done==0){document.getElementById('header').setAttribute('style', 'opacity:0;margin-top:-30px')}
               if (scrollPercentage <= -238.2) {done=1
                   if(done==1){ document.getElementById('header').setAttribute('style', 'opacity:1;margin-top:23px;background:transparent;');}
                   document.getElementById('header').style.position = "fixed";
               } else {done=0;
                   document.getElementById('header').style.position = "absolute";
               }
           } else {
              document.getElementById('header').setAttribute('style', '');
               document.getElementById('blackheader').style.display = "none";
           }
           $("#circlecontainer").css('margin', '-' + (fromTop / 3) + 'px 0px 0px 0px');

       });