document.addEventListener('DOMContentLoaded', () => {
    

  const tl3 = gsap.timeline({scrollTrigger:{
          trigger:"#first-section",
          scrub: true,
          pin:true,
          start:"top top",
          end:"+=100%",
          markers:false
  }});
  
  tl3.to('#sixth', {
      y: -700,
      duration:6
  })
  .to('#fifth',  {
      y: -500,
      duration:6
  }, '-=6')
  .to('#forth',  {
      y: -400,
      duration:6
  }, '-=6')
  .to('#third',  {
      y: -300,
      duration:6
  }, '-=6')
  .to('#second',  {
      y: -200,
      duration:6
  }, '-=6')
  .to('#first', {
      y: -100,
      duration:6
  }, '-=6')
  .to('.content, .blur', 6, {
      top: '0%'
  }, '-=6')
  .to('.title, nav, .footer-wrapper', 6, {
      y: -600,
  }, '-=6')
  .from('.one', 3, {
      top: '40px',
      autoAlpha: 0
  }, '-=4')
  .from('.two', 3, {
      top: '40px',
      autoAlpha: 0
  }, '-=3.5')
  .from('.three', 3, {
      top: '40px',
      autoAlpha: 0
  }, '-=3.5')
  .from('.four', 3, {
      top: '40px',
      autoAlpha: 0
  }, '-=3.5')
  .from('.text', 3, {
      y: 60,
      autoAlpha: 0
  }, '-=4');


})











var controller = new ScrollMagic.Controller();

 

$(".project").each(function(){
    
    var picOverlay = $(this).find(".overlay");
    var projectInfo = $(this).find(".project-info");
    var smallTitle = $(this).find(".small-title");
    var projectLink = $(this).find(".project-link");
    var title = $(this).find("h4");
    
    
var animateIn = new TimelineMax();
    
animateIn
.fromTo(picOverlay, 2, {skewX:30, scale:1.5}, {skewX:0, xPercent:100, transformOrigin: "0% 100%", ease: Power4.easeOut},"-=1")

.from(projectInfo, 1, {scaleY:0, transformOrigin: "bottom left"}, "-=1.5")

.from(smallTitle, 0.3, {autoAlpha: 0, y:30, ease: Power4.easeOut}, "-=0.8")

.from(projectLink, 0.3, {autoAlpha: 0, y:30, ease: Power4.easeOut}, "-=0.8")

.from(title, 0.3, {autoAlpha: 0, y:30, ease: Power4.easeOut}, "-=0.8")


// Make a scrollMagic Scene

var scene = new ScrollMagic.Scene({
    triggerElement: this,
})


.setTween(animateIn).addTo(controller);

});

var quadrantItems = document.querySelectorAll('.quadrant__item');
var svgs = document.querySelectorAll('svg');
var cube = document.querySelector('.cube');
var closeButton = document.querySelector('.quadrant__item__content--close');
var isInside = false;

var tl = new TimelineLite({paused: true});
tl.timeScale(1.6);

tl.to('.cube', 0.4, {rotation: 45, width: '120px', height: '120px', ease: Expo.easeOut}, 'first');
tl.to('.plus .plus-vertical', 0.3, {height: '0', backgroundColor: '#f45c41', ease: Power1.easeIn}, 'first');
tl.to('.plus .plus-horizontal', 0.3, {width: '0', backgroundColor: '#f45c41', ease: Power1.easeIn}, 'first');
tl.to('.cube', 0, {backgroundColor: 'transparent'});
tl.to(quadrantItems[0], 0.15, {x: -5, y: -5}, 'seperate');
tl.to('.arrow-up', 0.2, {opacity: 1, y: 0}, 'seperate+=0.2');
tl.to(quadrantItems[1], 0.15, {x: 5, y: -5}, 'seperate');
tl.to('.arrow-right', 0.2, {opacity: 1, x: 0}, 'seperate+=0.2');
tl.to(quadrantItems[3], 0.15, {x: 5, y: 5}, 'seperate');
tl.to('.arrow-down', 0.2, {opacity: 1, y: 0}, 'seperate+=0.2');
tl.to(quadrantItems[2], 0.15, {x: -5, y: 5}, 'seperate');
tl.to('.arrow-left', 0.2, {opacity: 1, x: 0}, 'seperate+=0.2');

cube.addEventListener('mouseenter', playTimeline);
cube.addEventListener('mouseleave', reverseTimeline);

function playTimeline(e) {
  e.stopPropagation();
  tl.play();
}

function reverseTimeline(e) {
  e.stopPropagation();
  tl.timeScale(1.8);
  tl.reverse();
}


