import "./styles.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  markers: false,
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

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
