var notyet=true;var stillfade=true;var stillfadee=true;var stillfadeee=true;

//function checkVisible(elm) {
//  var rect = elm.getBoundingClientRect();
//  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
//  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
//}
$(window).scroll(function () {
    var defl=document.getElementById('ef-defl');
    var indu=document.getElementById('ef-indu');
    var spor=document.getElementById('ef-spor');
    var refr=document.getElementById('ef-refr');
    if(checkVisible(indu)){indu.classList.remove('imgstart')}else{indu.classList.add('imgstart')};
    if(checkVisible(defl)){defl.classList.remove('imgstart')}else{defl.classList.add('imgstart')};
    if(checkVisible(refr)){refr.classList.remove('imgstart')}else{refr.classList.add('imgstart')}
    if(checkVisible(spor)){spor.classList.remove('imgstart')}else{spor.classList.add('imgstart')}
    
    
    if($(window).scrollTop() + $(window).height() == $(document).height()) {
       if(document.getElementById('citydark')){document.getElementById('citydark').style.opacity=0;}
   }
    var ban=document.getElementById('banner')
    if(document.getElementById('mission')){var mis=document.getElementById('mission');}
    if(document.getElementById('infl')){var infl=document.getElementById('infl');}
    if(document.getElementById('infm')){var infm=document.getElementById('infm');}
    //if(document.getElementById('infl2')){var infll=document.getElementById('infl2');}
    //if(document.getElementById('infm2')){var infmm=document.getElementById('infm2');}
    //if(document.getElementById('infl3')){var inflll=document.getElementById('infl3');}
    //if(document.getElementById('infm3')){var infmmm=document.getElementById('infm3');}
    if(document.getElementById('made')){var infohei=document.getElementById('made').clientHeight;}
    if(ban){var banhei=ban.clientHeight-100;}
    if(mis){var mishei=mis.offsetHeight-450;}
    if(infl){var inflhei=infl.clientHeight-100;}
    if(mishei){var total1=banhei+mishei;}else{var total1=banhei;}
           var fromTop = $(window).scrollTop();
           var scrollPercentage = 100 * $(window).scrollTop() / ($('#circlecontainer').height() - $(window).height());
    if(innerHeight<innerWidth){//$("#one").css('margin-top', '-'+  (fromTop / 6) + 'px');
    //$("#infl").css('opacity',   (fromTop / 100));
    //$("#spacer").css('bottom',  (fromTop / 6) + 'px');
    //$("#total").css('margin-top',   (fromTop / 3) + 'px');
                              }
    //$("#main").css('margin-top', '-'+  (fromTop / 5) + 'px');
    if(stillfade){if(fromTop>=total1+70){infl.style.opacity=0;infm.classList.add('colored');stillfade=false;}}
    //if(stillfadee){if(fromTop>=total1+infohei+400)//{infll.style.opacity=0;infmm.classList.add('colored');document.getElementById('greenliquid').classList.add('finalize');stillfadee=false;}}
    //if(stillfadeee){if(fromTop>=total1+infohei+infohei+400){inflll.style.opacity=0;infmmm.classList.add('colored');stillfadeee=false;}}
    if(notyet){
    if(fromTop>=banhei){notyet=false;document.getElementById('header').classList.toggle('fixed');document.getElementById('tendina').style.color="black";document.getElementById('tendina').classList.toggle('sfondo');
                        var tend=document.getElementsByClassName('tendel');
                       for(var y=0; y<tend.length;y++){
                           tend[y].classList.toggle('tendbla')
                       }
                       }}else{
        if(fromTop<=banhei){notyet=true;document.getElementById('header').classList.toggle('fixed');document.getElementById('tendina').style.color="white";document.getElementById('tendina').classList.toggle('sfondo');
                           var tend=document.getElementsByClassName('tendel');
                       for(var y=0; y<tend.length;y++){
                           tend[y].classList.toggle('tendbla')
                       }
                           }
    }
       });
(function($) {

	skel.init({
		reset: 'full',
		breakpoints: {
			global: {
				href: 'css/style.css',
				containers: 1400,
				grid: { gutters: ['2em', 0] }
			},
			xlarge: {
				media: '(max-width: 1680px)',
				href: 'css/style-xlarge.css',
				containers: 1200
			},
			large: {
				media: '(max-width: 1280px)',
				href: 'css/style-large.css',
				containers: 960,
				grid: { gutters: ['1.5em', 0] },
				viewport: { scalable: false }
			},
			medium: {
				media: '(max-width: 980px)',
				href: 'css/style-medium.css',
				containers: '90%'
			},
			small: {
				media: '(max-width: 736px)',
				href: 'css/style-small.css',
				containers: '90%',
				grid: { gutters: ['1.25em', 0] }
			},
			xsmall: {
				media: '(max-width: 480px)',
				href: 'css/style-xsmall.css',
			}
		},
		plugins: {
			layers: {
				config: {
					mode: 'transform'
				},
				navPanel: {
					animation: 'pushX',
					breakpoints: 'medium',
					clickToHide: true,
					height: '100%',
					hidden: true,
					html: '<div data-action="moveElement" data-args="nav"></div>',
					orientation: 'vertical',
					position: 'top-left',
					side: 'left',
					width: 250
				},
				navButton: {
					breakpoints: 'medium',
					height: '4em',
					html: '<span class="toggle" data-action="toggleLayer" data-args="navPanel"></span>',
					position: 'top-left',
					side: 'top',
					width: '6em'
				}
			}
		}
	});

	$(function() {

		// ...

	});

})(jQuery);
