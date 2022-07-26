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
