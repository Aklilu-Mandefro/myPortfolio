import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const scrollAnimation = () => {
    gsap.registerPlugin(ScrollTrigger);

    // appearance
    const appearance = document.querySelectorAll(".mil-up");

    appearance.forEach((section) => {
        gsap.fromTo(section, {
            opacity: 0,
            y: 50,
            ease: 'sine',
        }, {
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: section,
                toggleActions: 'play none none reverse',
            }
        });
    });

    // rotate
    const rotate = document.querySelectorAll(".mil-rotate");

    rotate.forEach((section) => {
        var value = section.dataset.value;
        gsap.fromTo(section, {
            ease: 'sine',
            rotate: 0,

        }, {
            rotate: value,
            scrollTrigger: {
                trigger: section,
                scrub: true,
                toggleActions: 'play none none reverse',
            }
        });
    });

    // scroll progress
    gsap.to('.mil-progress', {
        height: '100%',
        ease: 'linear',
        scrollTrigger: {
            scrub: 1
        }
    });

    // back to top
    const btt = document.querySelector(".mil-back-to-top .mil-link");

    gsap.set(btt, {
        opacity: .5,
    });

    gsap.to(btt, {
        opacity: 1,
        ease: 'sine',
        scrollTrigger: {
            trigger: "body",
            start: "top -20%",
            end: "top -20%",
            toggleActions: "play none reverse none"
        }
    });
}