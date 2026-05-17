// Initialize Lenis Smooth Scroll
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero Text Animation
gsap.from(".hero h1", {
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: "power4.out",
    delay: 0.5
});

gsap.from(".hero-mission", {
    y: 50,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    delay: 1
});

// Reveal Text on Scroll
const revealTexts = document.querySelectorAll(".reveal-text");
revealTexts.forEach((text) => {
    gsap.from(text, {
        scrollTrigger: {
            trigger: text,
            start: "top 85%",
            toggleActions: "play none none none"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });
});

// Service Cards Animation
const serviceCards = document.querySelectorAll(".service-card");
serviceCards.forEach((card, index) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: (index % 3) * 0.2,
        ease: "power2.out"
    });
});

// Case Study Cards
const caseCards = document.querySelectorAll(".case-card");
caseCards.forEach((card) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: "power2.out"
    });
});

// Play Section Animations
gsap.from(".play-content > *", {
    scrollTrigger: {
        trigger: ".play-section",
        start: "top 85%",
        toggleActions: "play none none none"
    },
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
});

gsap.from(".phases-card", {
    scrollTrigger: {
        trigger: ".play-section",
        start: "top 80%",
        toggleActions: "play none none none"
    },
    opacity: 0,
    y: 40,
    duration: 1.2,
    ease: "power3.out"
});

gsap.from(".phase-item", {
    scrollTrigger: {
        trigger: ".phases-card",
        start: "top 85%",
        toggleActions: "play none none none"
    },
    opacity: 0,
    y: 20,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out"
});

// Header background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.padding = '1rem 3rem';
    } else {
        header.style.padding = '1.5rem 3rem';
    }
});
