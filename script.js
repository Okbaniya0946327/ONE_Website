document.addEventListener("DOMContentLoaded", function() {
    // GSAP Animations
    gsap.from(".logo", { duration: 1.5, opacity: 0, y: -20 });
    gsap.from(".tagline", { duration: 1.5, opacity: 0, y: 20, delay: 0.5 });
    gsap.from(".cta", { duration: 1.5, opacity: 0, scale: 0.8, delay: 1 });

    // Button Hover Effect
    document.querySelector(".cta").addEventListener("mouseover", function() {
        gsap.to(this, { scale: 1.1, duration: 0.2 });
    });

    document.querySelector(".cta").addEventListener("mouseout", function() {
        gsap.to(this, { scale: 1, duration: 0.2 });
    });

    // Feature Cards Animation
    gsap.from(".feature-card", { duration: 1, opacity: 0, y: 30, stagger: 0.3, delay: 2 });
});
