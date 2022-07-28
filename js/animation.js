gsap.registerPlugin(ScrollTrigger);

const projectShrinkTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#projects",
    markers: false,
    start: "bottom 80%", // when the top of the trigger hits the top of the viewport
    toggleActions: "play reverse play reverse",
    end: "bottom 50%", // end after scrolling 500px beyond the start
  },
});

const shrinkTween = gsap.fromTo("#projects", { scale: 1 }, { scale: 0.9 });
projectShrinkTimeline.add(shrinkTween);

gsap.fromTo(
  "#lead-content",
  { scale: 1.05 },
  { scale: 1, duration: 2, repeat: -1, yoyo: true }
);

const projectTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#projects",
    scrub: 1,
    toggleActions: "play reverse play reverse",
    end: "bottom 80%",
  },
});

const projectCardTween = gsap.fromTo(
  ".project-card",
  { y: 100, autoAlpha: 0 },
  { y: 0, autoAlpha: 1, stagger: 0.1 }
);
projectTimeline.add(projectCardTween);

const experienceTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#experience",
    scrub: 1,
    toggleActions: "play reverse play reverse",
    end: "bottom 70%",
  },
});

const experienceCardTween = gsap.fromTo(
  ".vtimeline-point",
  { y: 200, autoAlpha: 0 },
  { y: 0, autoAlpha: 1, stagger: 0.1 }
);

experienceTimeline.add(experienceCardTween);
