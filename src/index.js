import "./styles.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  markers: true,
});

const triggerElement = document.querySelector(".home-name-container");
const targetElement = document.querySelector(".name-title");

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: triggerElement,
    // trigger element - viewport
    start: "top center",
    end: "bottom top",
    scrub: 1,
  },
});
tl.from(targetElement, {
  fontSize: 124,
  duration: 1,
  y: screen.height / 2,
});


