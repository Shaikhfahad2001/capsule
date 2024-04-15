function locomotive() {
    
    
    
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Define your image file paths here
const files = [];
for (let i = 1; i <= 25; i++) {
  files.push(`./heart${i}.png`);
}

const images = [];
files.forEach((file) => {
  const img = new Image();
  img.src = file;
  images.push(img);
});

let currentFrame = 0;

function render() {
  const img = images[currentFrame];
  const canvas = context.canvas;
  const hRatio = canvas.width / img.width;
  const vRatio = canvas.height / img.height;
  const ratio = Math.min(hRatio, vRatio);
  const centerShift_x = (canvas.width - img.width * ratio) / 2;
  const centerShift_y = (canvas.height - img.height * ratio) / 2;
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );

  currentFrame = (currentFrame + 1) % images.length;
  requestAnimationFrame(render);
}

function startAnimationWithTransition() {
  render();
  setTimeout(() => {
    canvas.style.opacity = 1;
  }, 0); // 2 milliseconds delay
}

startAnimationWithTransition();

ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});
gsap.to("leftcol",{
  scrollTrigger:{
    trigger:`leftcol`,
     
    start:`top top`,
    end:`bottom top`,
    pin:true,
      
    scroller:`#main`,
      
  }
})






//old we are changing face of web

//gsap.to("#page5",{
//  scrollTrigger:{
//    trigger:`#page5`,
//     
//    start:`top top`,
//    end:`bottom top`,
//    pin:true,
//      
//    scroller:`#main`,
//      
//  }
//})









   

//color change effect here


var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page3 ",
        scroller: "#main",
         markers:true,
        start: "top -2%",
        end: "top -111%",
        scrub: 3
    }
})
tl2.to("#main", {
    backgroundColor: "#fff",
})

//color change animation end







//smooth scrolling

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// create the smooth scroller FIRST!
const smoother = ScrollSmoother.create({
 wrapper: "#main",
 content: "#fact",
 smooth: 1,
 normalizeScroll: true, // prevents address bar from showing/hiding on most devices, solves various other browser inconsistencies
 ignoreMobileResize: true, // skips ScrollTrigger.refresh() on mobile resizes from address bar showing/hiding
 effects: true,
 preventDefault: true
});

//smooth scrolling