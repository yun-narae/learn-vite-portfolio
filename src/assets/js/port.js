import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


export function port() {
    const arrow = document.querySelector('.arrow');
    gsap.to(arrow,{ x:10, repeat:-1, yoyo:true });

    gsap.registerPlugin(ScrollTrigger);
    const horSection = gsap.utils.toArray(".port__item");

    gsap.to(horSection, {
        xPercent: -120 * (horSection.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: "#port",
            start: "top 56px",
            end: "+=3000",
            pin: true,
            scrub: 1,
            markers: false,
            invalidateOnRefresh: true,
            anticipatePin: 1,
        },
    });
}