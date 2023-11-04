var cursr = document.querySelector("#cursor");
var cursrBlur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (dets) {
  cursr.style.left = dets.x + 10 + "px";
  cursr.style.top = dets.y + "px";
  cursrBlur.style.left = dets.x - 150 + "px";
  cursrBlur.style.top = dets.y - 150 + "px";
});

var navall = document.querySelectorAll("#nav-list h4");
navall.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    cursr.style.scale = 2;
    cursr.style.backgroundColor = "transparent";
    cursr.style.border = "1px solid #fff";
  });
  elem.addEventListener("mouseleave", function () {
    cursr.style.scale = 1;
    cursr.style.backgroundColor = "#96c11e";
    cursr.style.border = "0px solid #96c11e";
  });
});
gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers: false,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
    // markers: true,
  },
});
gsap.from("#about-us img,#about-us-in", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.4,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 3,
    // markers: true,
  },
});
gsap.from(".cards", {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  //stagger: 0.4,//it show element one by one
  scrollTrigger: {
    trigger: ".cards",
    scroller: "body",
    start: "top 70%",
    end: "top 55%",
    scrub: 2,
    // markers: true,
  },
});
gsap.from("#colon-open", {
  x: -70,
  y: -70,
  //stagger: 0.4,//it show element one by one
  scrollTrigger: {
    trigger: "#colon-open",
    scroller: "body",
    start: "top 50%",
    end: "top 55%",
    scrub: 4,
    // markers: true,
  },
});
gsap.from("#colon-close", {
  x: 70,
  y: 70,
  //stagger: 0.4,//it show element one by one
  scrollTrigger: {
    trigger: "#colon-open",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
    // markers: true,
  },
});
gsap.from("#page4 h1", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.4,
  scrollTrigger: {
    trigger: "#page4",
    scroller: "body",
    start: "top 100%",
    end: "top 90%",
    scrub: 3,
    // markers: true,
  },
});
