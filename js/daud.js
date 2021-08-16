//Animate homepage

const navLinks = document.querySelectorAll('nav a')
const imgsNav = document.querySelectorAll('nav img')
const title = document.querySelector('h1')
const verticalLine = document.querySelector('.middle-line')
const pizzaLogo = document.querySelector('.home-content img')
const homeBtn = document.querySelector('.home-content button')

window.addEventListener('load', revealAnim);

function revealAnim(){

    const TLFADE = gsap.timeline();

    TLFADE 
    .from(title, {autoAlpha: 0, y: -50, delay: 0.2})
    .to(verticalLine, {height: 140}, '-=0.2')
    .from(pizzaLogo, {autoAlpha: 0, y: -50}, '-=0.2')
    .from(homeBtn, {autoAlpha: 0, y: -50}, '-=0.2')
    .from(navLinks, {autoAlpha:0, y:-50, duration: 0.4, stagger: 0.1}, '-=0.2')
    .from(imgsNav, {autoAlpha: 0, y: -50})

}

//Animate Service

$(".butt").click(function () {
  $(".container").attr("color-center", this.id);
  if (this.id == "c1") s1();
  if (this.id == "c2") s2();
  if (this.id == "c3") s3();
});

function s1() {
  var tl = new TimelineMax()
    .to("#sh2", 0.5, { xPercent: 400, opacity: "0" }, 0)
    .to("#sh3", 0.5, { xPercent: 500, opacity: "0" }, 0)
    .to("#sh1", 0.5, { xPercent: 0, ease: "back.out(2)", opacity: "1" }, 0)
    .from("#sh1", 1, { rotation: -27 }, 0)
    .to(".text2", 0.5, { xPercent: 0, opacity: "1" }, 0)
    .to(".text1", 0.5, { xPercent: -400, opacity: "0" }, 0)
    .to(".text3", 0.5, { xPercent: -500, opacity: "0" }, 0)
    .to(".pip1", 1, { backgroundColor: "rgb(34, 34, 34)" }, 0)
    .to(".pip", 1, { backgroundColor: "rgb(34, 34, 34)" }, 0);
}

function s2() {
  var tl = new TimelineMax()
    .to("#sh1", 0.5, { xPercent: 530, opacity: "0" }, 0)
    .to("#sh3", 0.5, { xPercent: 400, opacity: "0" }, 0)
    .from("#sh2", 1, { rotation: -27 }, 0)
    .to("#sh2", 0.5, { xPercent: 0, ease: "back.out(2)", opacity: "1" }, 0)
    .to(".pip", 1, { backgroundColor: "rgb(0, 101, 195)" }, 0)
    .to(".pip1", 1, { backgroundColor: "rgb(0, 101, 195)" }, 0)
    .to(".text1", 0.5, { xPercent: 0, opacity: "1" }, 0)
    .to(".text2", 0.5, { xPercent: -400, opacity: "0" }, 0)
    .to(".text3", 0.5, { xPercent: -500, opacity: "0" }, 0);
}

function s3() {
  var tl = new TimelineMax()
    .to("#sh2", 0.5, { xPercent: 630, opacity: "0" }, 0)
    .to("#sh1", 0.5, { xPercent: 600, opacity: "0" }, 0)
    .from("#sh3", 1, { rotation: -27 }, 0)
    .to("#sh3", 0.5, { xPercent: 0, ease: "back.out(2)", opacity: "1" }, 0)
    .to(".pip1", 1, { backgroundColor: "rgb(135, 135, 135)" }, 0)
    .to(".pip", 1, { backgroundColor: "rgb(135, 135, 135)" }, 0)
    .to(".text3", 0.5, { xPercent: 0, opacity: "1" }, 0)
    .to(".text1", 0.5, { xPercent: -400, opacity: "0" }, 0)
    .to(".text2", 0.5, { xPercent: -500, opacity: "0" }, 0);
}

$(function () {
  s2();
});
