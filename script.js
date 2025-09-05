var tl = gsap.timeline()


//Cursor---------------------------------------------
var cursor = document.querySelector(".cursor")
var main = document.querySelector("body")

main.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 0.3
    })
})



//Hover Effect for buttons only-----------------------
var buttons = document.querySelectorAll
    ("nav button,.center button,.elem")

buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {
        gsap.to(button, {
            scale: 1.1,
            duration: 0.3,
            boxShadow: "0 0 10px #9AE975,0 0 20px #9AE975,0 0 30px #9AE975"
        })

    })

    button.addEventListener("mouseleave", () => {
        gsap.to(button, {
            scale: 1,
            duration: 0.3,
            boxShadow: "0 0 30px #fff"
        })

    })
})


//Gsap for links --------------------------------------

var up = document.querySelectorAll("nav h4,.section1bottom img,.center-part img,.container img,.elem h4,.elem h1")
up.forEach(ups => {
    ups.addEventListener("mouseenter", () => {
        gsap.to(ups, {
            scale: 1.1,
            duration: 0.3,
        })
    })
    ups.addEventListener("mouseleave", () => {
        gsap.to(ups, {
            scale: 1,
            duration: 0.3
        })
    })
})



//GSAP in Page1--------------------------------------
function page1Animation() {

    tl.from("nav h1,nav h4,nav button", {
        y: -30,
        duration: 0.3,
        delay: 0.2,
        opacity: 0,
        stagger: 0.15

    })
    tl.from(".center-part1 h1,.center-part1 p,.center-part1 button", {
        x: -200,
        opacity: 0,
        stagger: 0.15
    })
    tl.from(".center img", {
        x: 200,
        opacity: 0,

    }, "-=0.6")

    tl.from(".section1bottom img", {
        y: -30,
        opacity: 0,
        delay: 0.6,
        stagger: 0.2

    })
}
page1Animation()


//Page 2----------------------------------------------------------


var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section2",
        scroller: "body",
        start: "top 50%",
        end: "top 0",
        scrub: 2,

    }

})
tl2.from(".services", {
    y: 50,
    opacity: 0,

})
tl2.from("#whitebg", {
    x: -100,
    opacity: 0
})
tl2.from("#blackbg", {
    x: 100,
    opacity: 0
}, "-=0.5")

