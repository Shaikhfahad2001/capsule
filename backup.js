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

function files(index) {
  // Define your image file paths here
  var data = `
     ./capsule1.png
     ./capsule2.png
     ./capsule3.png
     ./capsule4.png
     ./capsule5.png
     ./capsule6.png
     ./capsule7.png
     ./capsule8.png
     ./capsule9.png
     ./capsule10.png
     ./capsule11.png
     ./capsule12.png
     ./capsule13.png
     ./capsule14.png
     ./capsule15.png
     ./capsule16.png
     ./capsule17.png
     ./capsule18.png
     ./capsule19.png
     ./capsule20.png
     ./capsule21.png
     ./capsule22.png
     ./capsule23.png
     ./capsule24.png
     ./capsule25.png
     ./capsule26.png
     ./capsule27.png
     ./capsule28.png
     ./capsule29.png
     ./capsule30.png
     ./capsule31.png
     ./capsule32.png
     ./capsule33.png
     ./capsule34.png
     ./capsule35.png
     ./capsule36.png
     ./capsule37.png
     ./capsule38.png
     ./capsule39.png
     ./capsule40.png
     ./capsule41.png
     ./capsule42.png
     ./capsule43.png
     ./capsule44.png
     ./capsule45.png
     ./capsule46.png
     ./capsule47.png
     ./capsule48.png
     ./capsule49.png
     ./capsule50.png
     ./capsule51.png
     ./capsule52.png
     ./capsule53.png
     ./capsule54.png
     ./capsule55.png
     ./capsule56.png
     ./capsule57.png
     ./capsule58.png
     ./capsule59.png
     ./capsule60.png
     ./capsule61.png
     ./capsule62.png
     ./capsule63.png
     ./capsule64.png
     ./capsule65.png
     ./capsule66.png
     ./capsule67.png
     ./capsule68.png
     ./capsule69.png
     ./capsule70.png
     ./capsule71.png
     ./capsule72.png
     ./capsule73.png
     ./capsule74.png
     ./capsule75.png
     ./capsule76.png
     ./capsule77.png
     ./capsule78.png
     ./capsule79.png
     ./capsule80.png
     ./capsule81.png
     ./capsule82.png
     ./capsule83.png
     ./capsule84.png
     ./capsule85.png
     ./capsule86.png
     ./capsule87.png
     ./capsule88.png
     ./capsule89.png
     ./capsule90.png
     ./capsule91.png
     ./capsule92.png
     ./capsule93.png
     ./capsule94.png
     ./capsule95.png
     ./capsule96.png
     ./capsule97.png
     ./capsule98.png
     ./capsule99.png
     ./capsule100.png
     ./capsule101.png
     ./capsule102.png
     ./capsule103.png
     ./capsule104.png
     ./capsule105.png
     ./capsule106.png
     ./capsule107.png
     ./capsule108.png
  `;
  return data.split("\n")[index];
}

const frameCount =90; // Reduced frame count for demonstration
let currentFrame = 0;

const images = [];
for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

// Recursive function to render frames
function render() {
  const img = images[currentFrame];
  var canvas = context.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.min(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
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

  // Update current frame index
  currentFrame = (currentFrame + 1) % frameCount;

  // Request next frame
  requestAnimationFrame(render);
}

// Start rendering frames
render();
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

  

