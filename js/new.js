gsap.set('.content:not(.initial)', { autoAlpha: 0 })


var headlines = gsap.utils.toArray(".text");

var totalDuration = 1000;
var singleDuration = totalDuration / headlines.length;





const lineTimeline = gsap.timeline();

ScrollTrigger.create({    
  trigger: ".pin-up",
  start: "top top",
  end: "+=" + totalDuration,
  //markers: true,
  pin: true,
  scrub: true,
  animation: lineTimeline,
});

lineTimeline
.to('.sideline', { duration: 1 }, 0)
.to('.sideline', { duration: 0.9, scaleY: 1, ease: "none" }, 0)





headlines.forEach((elem, i) => {    
  
  const smallTimeline = gsap.timeline(); 
    
  const content = document.querySelector('.content-wrap');
  const relevantContent = content.querySelector('span.content-' + i);  
    
  ScrollTrigger.create({    
    
    trigger: ".wrapper2",
        
    start: "top -=" + ( singleDuration * i ),
    end: "+=" + singleDuration,
    
    //markers: true,

    animation: smallTimeline,
    toggleActions: relevantContent.classList.contains('remaining') ? "play none play reverse" : "play reverse play reverse",
    
  });   

  smallTimeline 
    .to(elem,{ duration: 0.25, color: "orange", scale: 1.25, ease: 'none' }, 0) 
    .set(relevantContent,{ autoAlpha: 1 }, 0.125)
  ;
 
});


// -------------------------------------------------------------------------------------------------------------


var showYowza = gsap.timeline()
    showYowza.to('.below span', { autoAlpha: 1, y: 0 })

ScrollTrigger.create({    
    trigger: ".below",
    start: "top center",

    //endTrigger: ".footer",
    end: "bottom bottom",

    //scrub: 1,

    //markers: true,
    animation: showYowza,

    toggleActions: "none play none reverse"
    //toggleActions: "play reverse play reverse"
});


const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".orange",
      scrub: true,
      pin: true,
      start: "50% 50%",
      end: "+=200%"
    }
  })
  
  .from(".below", {
    scale: 0.5, 
    ease: "none"
  })
  
  .from(".line-2", {
    scaleX:0,
    ease:"none",
    transformOrigin:"left top"
  }, 0)


  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".about",
      start: "center 40%",
      end: "center 5%",
      scrub: 2,
      pin: ".first-section",
      pinSpacing: true,
       //markers:true,
      toggleActions: "restart none none none"
  
  }
   });
  
