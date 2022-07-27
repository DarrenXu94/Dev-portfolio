gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#projects",
    markers: false,
    start: "bottom 80%", // when the top of the trigger hits the top of the viewport
    toggleActions: "play reverse play reverse",
    end: "bottom 50%", // end after scrolling 500px beyond the start
  },
});

var tween = gsap.fromTo("#projects", { scale: 1 }, { scale: 0.9 });
tl.add(tween);

gsap.fromTo(
  "#lead-content",
  { scale: 1.05 },
  { scale: 1, duration: 2, repeat: -1, yoyo: true }
);

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#projects",
    scrub: 1,
    toggleActions: "play reverse play reverse",
    end: "bottom 80%",
  },
});

var tween2 = gsap.fromTo(
  ".project-card",
  { y: 100, autoAlpha: 0 },
  { y: 0, autoAlpha: 1, stagger: 0.1 }
);
tl2.add(tween2);
