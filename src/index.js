import "./styles.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  markers: true,
});

const homeContainer = document.querySelector(".home-name-container");
const nameTitle = document.querySelector(".name-title");

const nameToNavbar = gsap.timeline({
  scrollTrigger: {
    trigger: homeContainer,
    start: "top center",
    end: "bottom top",
    scrub: 1,
  },
});
nameToNavbar.from(nameTitle, {
  fontSize: 90,
  duration: 1,
  y: screen.height / 2,
});

const scrollText = document.querySelector(".scroll-text");

const scrollDisappear = gsap.timeline({
  scrollTrigger: {
    trigger: homeContainer,
    start: "top top",
    end: "center top",
    scrub: 1,
  },
});

scrollDisappear.to(scrollText, {
  opacity: 0,
  x: -100,
});

const projectsTitle = document.querySelector(".projects-title");
const projectsContainer = document.querySelector(".projects-container");

const enlargeProjectsTitle = gsap.timeline({
    scrollTrigger: {
        trigger: projectsContainer,
        start: "top center",
        end: "bottom top",
        scrub: 1,
    }
})

enlargeProjectsTitle.to(projectsTitle, {
    fontSize: 90,
})

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
