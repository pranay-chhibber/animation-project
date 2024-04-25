function locoScroll(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
function cursorEffect(){
    var cursor = document.querySelector("#cursor")
var page1Content = document.querySelector("#page1")

page1Content.addEventListener("mousemove",function(value){
    // cursor.style.left = value.x +"px"
    // cursor.style.top = value.y +"px"
    gsap.to(cursor,{
        x:value.x,
        y:value.y   
    })
})

page1Content.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
})
page1Content.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})
}
function page2Animation(){
   gsap.from("#page2-top",{
    y:150,
    stagger:0.2,
    duration:3 ,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "#main",
        // markers:true,
        start: "top 90%",
        end: "top 46%%",
        scrub: 4,
      }
   })
   gsap.from("#page2-top-border",{
     y:150,
    stagger:0.2,
    duration:.6,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "#main",
        // markers:true,
        start: "top 75%",
        end: "top 36%%",
        scrub: 4,
      }
    })
   gsap.from(".up",{
    y:150,
    stagger:.2,
    duration:.6,
    scrollTrigger: {
      trigger: "#page2",
        scroller: "#main",
        // markers:true,
        start: "top 50%",
        end: "top 1%",
        scrub: 4,
      }
   })
  }
function page3Animation(){


  gsap.from("#page3-top h4",{
   y:150,
   stagger:0.2,
   duration:3 ,
   scrollTrigger: {
       trigger: "#page3",
       scroller: "#main",
      //  markers:true,
       start: "top 90%",
       end: "top 6%%",
       scrub: 4,
     }
  })
  gsap.from("#page3-top h2",{
   y:150,
   stagger:0.2,
   duration:3 ,
   scrollTrigger: {
       trigger: "#page3",
       scroller: "#main",
      //  markers:true,
       start: "top 90%",
       end: "top 6%%",
       scrub: 4,
     }
  })
  gsap.from("#page3sub-top",{
    y:150,
    stagger:0.2,
    duration:3 ,
    scrollTrigger: {
        trigger: "#page3sub",
        scroller: "#main",
        // markers:true,
        start: "top 100%",
        end: "top 46%%",
        scrub: 4,
      }
   })
  gsap.from("#page3sub-top-border",{
    y:150,
    stagger:0.2,
    duration:3 ,
    scrollTrigger: {
        trigger: "#page3sub",
        scroller: "#main",
        // markers:true,
        start: "top 95%",
        end: "top 46%%",
        scrub: 4,
      }
   })
  gsap.from(".page3sub-up",{
    y:150,
    stagger:0.2,
    duration:3 ,
    scrollTrigger: {
        trigger: "#page3sub",
        scroller: "#main",
        // markers:true,
        start: "top 70%",
        end: "top 46%%",
        scrub: 9,
      }
   })
  }
function page5Animation(){


  
  gsap.from("#page5-top-text h3",{
    y:150,
    stagger:0.2,
    duration:3 ,
    scrollTrigger: {
        trigger: "#page5",
        scroller: "#main",
        // markers:true,
        start: "top 100%",
        end: "top 46%%",
        scrub: 4,
      }
   })
  gsap.from("#page5-top-border",{
    y:150,
    stagger:0.2,
    duration:3 ,
    scrollTrigger: {
        trigger: "#page5",
        scroller: "#main",
        // markers:true,
        start: "top 95%",
        end: "top 46%%",
        scrub: 4,
      }
   })
  gsap.from(".page5-up",{
    y:150,
    stagger:0.2,
    duration:3 ,
    scrollTrigger: {
        trigger: "#page5",
        scroller: "#main",
        // markers:true,
        start: "top 70%",
        end: "top 46%%",
        scrub: 9,
      }
   })
  }
  function menuAnim(){
    const menuBtn = document.querySelector('#menu')
    const menu = document.querySelector('#page1 .menu')
    const closeBtn = document.querySelector('#page1 .menu .menu-header #close')
    const video = document.querySelector('#page1 .menu .menu-sec .vid video')
    const playReel = document.querySelector('#page1 .menu .menu-sec #videlem')
    const smallLinks = document.querySelector('#page1 .menu .small-links .navBtn')
    const Links = document.querySelectorAll('#page1 .menu .menu-sec .links h3  ')
    const btnLinks = document.querySelectorAll(' #page1 .menu .menu-sec .links .navBtn ')
    const border = document.querySelector('#page1 .menu .menu-border') 
    
  
  menuBtn.addEventListener('click',() => {
    console.log("hello");
    menu.classList.add('active')

  menu.style.transition = `height .5s ease`
    closeBtn.style.zIndex = "999"

    gsap.from(menu,{
      y:-400,
      // scale:.1,
      duration:1,
    })
  gsap.from(video,{
    scale:.1,
    duration:1
  })
  gsap.from(playReel,{
    y:-100,
    duration:1.1
  })
  gsap.from(smallLinks,{
    x:200,
    duration:2,
    delay:-.4
  })
  gsap.from(Links,{
    y:100,
    duration:.7,
    stagger:.1
  })
  gsap.from(btnLinks,{
    y:100,
    duration:.4,
    stagger:.1
  })
  gsap.to(border,{
    width:100+"vw",
    duration:1.5,
    delay:-.1
  })
  gsap.from(border,{
     y:150,
    stagger:0.2,
    duration:.7 ,
  })
  gsap.from(".small-links",{
     y:150,
    stagger:0.2,
    duration:.7 ,
  })
  
})
closeBtn.addEventListener('click',() => {
  menu.classList.remove('active') 
  closeBtn.style.zIndex = "0"
  
}
)

}
function page6Animmation(){
  const cursor = document.querySelector('#page4 .crsr')
const svg = document.querySelector('#page4 ')

svg.addEventListener('mousemove',function(value){
  gsap.to(cursor,{
    x: -700+value.x,
    y:-400+value.y   
})

})
svg.addEventListener("mouseenter",function(){
  gsap.to(cursor,{
    scale:1,
    opacity:1
})
})
svg.addEventListener("mouseleave",function(){
  gsap.to(cursor,{
    scale:0,
    opacity:0
})
})
}
function swiperAnimation(){
  // var swiper = new Swiper(".mySwiper", {
  //   slidesPerView: 1,
  //   spaceBetween: 30,
  //   loop: true,
  //   autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  //   },  
  // });
  var swiper = new Swiper(".mySwiper", {
    // Optional parameters
    // slidesPerView: 5,
    spaceBetween: 0,
    centeredSlides: true,
    speed: 10000,
    autoplay: {
      delay: 0,
    },
    loop: true,
    slidesPerView: 'auto',
    allowTouchMove: false,
    disableOnInteraction: true,
  });
}

function loaderAnimation(){
  var tl = gsap.timeline()

  tl.from("#loader h3",{
    x:40,
    opacity:0,
    duration:1,
    stagger:0.3
  })
  tl.to("#loader h3",{
    opacity:0,
    x:-40,
    duration:.5,
    stagger:0.3

  })
  tl.to("#loader",{
    opacity:0,
    duration:0
  })
  tl.from("#page1-content h1 span",{
    y:100,
    opacity:0,
    stagger:0.1,
    duration:0.4,
    // delay:-0.5
  })
  tl.to("#loader",{
    display:"none"
  })
}
function page7Animation(){
  gsap.from("#page7 h1",{
    y:150,
    stagger:0.2,
    duration:3 ,
    scrollTrigger: {
        trigger: "#page7",
        scroller: "#main",
        // markers:true,
        start: "top 85%",
        end: "top 46%%",
        scrub: 4,
      }
   })
  }
  function footerAnimation(){
  gsap.from("footer .footer-top",{
    y:-250,
    stagger:0.2,
    duration:3 ,
    scrollTrigger: {
        trigger: "footer",
        scroller: "#main",
        // markers:true,
        start: "top 80%",
        end: "top 46%%",
        scrub: 4,
      }
   });
  gsap.from("footer .footer-bottom h1 span",{
    y:550,
    stagger:0.9,
    duration:3 ,
    scrollTrigger: {
        trigger: "footer",
        scroller: "#main",
        // markers:true,
        start: "top 40%",
        end: "top 46%%",
        scrub: 4,
      }
   })

}
cursorEffect()
locoScroll()
page2Animation()
page3Animation()
page5Animation()
page6Animmation()
menuAnim()
swiperAnimation()
loaderAnimation()
page7Animation()
footerAnimation()