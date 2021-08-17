gsap.registerPlugin(ScrollTrigger);


 const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".first-section",
    start: "center 40%",
    end: "center 5%",
    scrub: 2,
    pin: ".first-section",
    pinSpacing: true,
     //markers:true,
    toggleActions: "restart none none none"

}
 });

 tl.from(".section_1_01",4, {x:-100, y:-100, duration: 3},'-=4')
 tl.from(".section_1_02",4, {x:-150, y:-200, duration: 3}, '-=4')
 tl.from(".section_1_03",4, {x:-80, y:-100, duration: 3}, '-=4')
 tl.from(".section_1_04",4, {x:-100, y:-150, duration: 3}, '-=4')
 tl.from(".section_1_05",4, {x:-80, y:-130, duration: 3}, '-=4')
 tl.from(".section_1_06",4, {x:-150, y:-50, duration: 3}, '-=4')
 tl.from(".section_1_07",4, {x:-150, y:-10, duration: 3}, '-=4')
 tl.from(".section_1_08",4, {x:-200, y:-80, duration: 3}, '-=4')
 tl.from(".section_1_09",4, {x:-200, y:-10, duration: 3}, '-=4')

//  gsap.to(".top .image-container", {
//    height: "290",
//   scrollTrigger: {
//       trigger: ".second-section",
//       start: "center 70%",
//       end: "center 30%",
//       pin: ".second-section",
//       scrub:4,
//       pinSpacing: true,
//       markers:true,
//       toggleActions: "restart none none none"

//   }
// })

 const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".second-section",
       start: "center 90%",
       end: "center 5%",
      pin: ".second-section",
      scrub:2,
      pinSpacing: true,
        //markers:true,
       toggleActions: "restart none none none"
}
 });

 tl2.to(".top .image-container", 4, {height: 270, duration: 3});



 const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".third-section",
       start: "center 90%",
       end: "center 20%",
      pin: ".third-section",
      scrub:2,
      pinSpacing: true,
       //markers:true,
       toggleActions: "restart none none none"
}
 });

 tl3.from(".section_3_01",4, {y:-250, ease:Power3.easeInOut})
  tl3.from(".section_3_02",4, {y:-200, ease:Power3.easeInOut}, "-=4")
  tl3.from(".section_3_03",4, {y:-100, ease:Power3.easeInOut}, "-=4")
  tl3.from(".section_3_04",4, {y:0, ease:Power3.easeInOut}, "-=4")
  tl3.from(".section_3_05",4, {y:150, ease:Power3.easeInOut}, "-=4")
  tl3.from(".section_3_06",4, {y:250, ease:Power3.easeInOut}, "-=4")


  const tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".forth-section",
         start: "center 75%",
         end: "center 5%",
        pin: ".forth-section",
        scrub:2,
        pinSpacing: true,
         toggleActions: "restart none none none"
  }
   });
  

  //  tl4.to(".section_4_01",4, {autoAlpha: 0})
   tl4.from(".section_4_02",4, {autoAlpha: 0})
   tl4.from(".section_4_03",4, {autoAlpha: 0})
   tl4.from(".section_4_04",4, {autoAlpha: 0})
