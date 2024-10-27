function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
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
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}

function loadingAnimation() {
    var tl = gsap.timeline();
    tl.from('.page1', {
        opacity: 0,
        duration: 0.3,
        delay: 0.2
    });

    tl.from('.page1', {
        transform: 'scaleX(0.7) scaleY(0.2) translateY(80%)',
        borderRadius: '100px',
        duration: 1.5,
        ease: 'expo.out'
    });

    tl.from('nav', {
        opacity: 0,
    });

    tl.from('.page1 h1,.page1 p, .page1 div', {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    });

}

function navAnimation() {
    var nav = document.querySelector('nav');

    // Mouse-enter event 
    nav.addEventListener('mouseenter', function () {
        let tl = gsap.timeline();

        // Step 1: Increase the height of #nav-bottom
        tl.to('#nav-bottom', {
            height: "21vh",
            duration: 0.6,
            ease: "power2.out"
        });

        // Step 2: Make h5 elements visible
        tl.set('.nav-part2 h5', {
            display: 'block'
        }, "-=0.4");

        // Step 3: Animate span elements
        tl.to('.nav-part2 h5 span', {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            stagger: {
                amount: 0.5,
                from: "start"
            }
        }, "-=0.3");
    });

    // Mouse-leave event
    nav.addEventListener('mouseleave', function () {
        let tl = gsap.timeline();

        // Step 1: Animate span elements back to hidden state
        tl.to('.nav-part2 h5 span', {
            y: 25,
            opacity: 0,
            duration: 0.6,
            ease: "power2.in",
            stagger: {
                amount: 0.4,
                from: "end"
            }
        });

        // Step 2: Hide h5 elements after span animations are done
        tl.set('.nav-part2 h5', {
            display: 'none'
        });

        // Step 3: Reduce the height of #nav-bottom
        tl.to('#nav-bottom', {
            height: 0,
            duration: 0.4,
            ease: "power2.in"
        }, "-=0.3");
    });

}

function page2Animation() {
    var rightElems = document.querySelectorAll('.right-elem');

    rightElems.forEach(function (element) {
        // Mouse-enter event
        element.addEventListener('mouseenter', function () {
            gsap.to(element.childNodes[3], {
                opacity: 1,
                scale: 1
            });
        });
        // Mouse-leave event
        element.addEventListener('mouseleave', function () {
            gsap.to(element.childNodes[3], {
                opacity: 0,
                scale: 0
            });
        });
        // Mouse-move event
        element.addEventListener('mousemove', function (dets) {
            gsap.to(element.childNodes[3], {
                x: dets.x - element.getBoundingClientRect().x - 70,
                y: dets.y - element.getBoundingClientRect().y - 110
            });
        });
    });
}

function page3VideoAnimation() {

    var page3Center = document.querySelector('.page3-center');
    var video = document.querySelector('.page3 video');

    // click event for play video
    page3Center.addEventListener('click', function () {
        video.play();
        gsap.to(video, {
            transform: 'scaleX(1) scaleY(1)',
            opacity: 1,
            borderRadius: 0
        });
    });

    // click event for pause video
    video.addEventListener('click', function () {
        video.pause();
        gsap.to(video, {
            transform: 'scaleX(0.7) scaleY(0)',
            opacity: 0,
            borderRadius: 30
        });
    });

    // Video animation 
    var sections = document.querySelectorAll('.sec-right');

    sections.forEach(function (elem) {
        elem.addEventListener('mouseenter', function () {
            elem.childNodes[3].style.opacity = 1,
                elem.childNodes[3].play();
        });

        elem.addEventListener('mouseleave', function () {
            elem.childNodes[3].style.opacity = 0,
                elem.childNodes[3].load();
        });
    });

}

function page8Animations() {

    // Product strategy animation
    gsap.from("#btm8-part2 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#btm8-part2",
            scroller: "#main",
            start: "top 85%",
            end: "top 20%",
            scrub: true
        }
    });

    // Ux Design
    gsap.from("#btm8-part3 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#btm8-part3",
            scroller: "#main",
            start: "top 85%",
            end: "top 20%",
            scrub: true
        }
    });

    // UI Design 
    gsap.from("#btm8-part4 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#btm8-part4",
            scroller: "#main",
            start: "top 85%",
            end: "top 20%",
            scrub: true
        }
    });
}


// script.js
document.querySelector('nav button').addEventListener('mouseenter', () => {
    gsap.to('nav button', {
        backgroundColor: '#089c44',
        y: -2,
        duration: 0.3,
        ease: 'power2.out'
    });
    gsap.to('nav button svg', {
        x: 5,
        duration: 0.3,
        ease: 'power2.out'
    });
});

document.querySelector('nav button').addEventListener('mouseleave', () => {
    gsap.to('nav button', {
        backgroundColor: '#0BA34E',
        y: 0,
        duration: 0.3,
        ease: 'power2.out'
    });
    gsap.to('nav button svg', {
        x: 0,
        duration: 0.3,
        ease: 'power2.out'
    });
});




locomotiveAnimation();

// loadingAnimation();

window.addEventListener('load', navAnimation);

page2Animation();

page3VideoAnimation();

page8Animations();