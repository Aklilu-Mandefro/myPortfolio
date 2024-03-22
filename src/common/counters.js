import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const countersAnimation = () => {
    
    gsap.registerPlugin(ScrollTrigger)

    // counters
    const number = document.querySelectorAll('.mil-counter');

    number.forEach( (element) => {
        const count = element,
            zero = {
                val: 0
            },
            num = count.dataset.number,
            split = (num + "").split("."), // to cover for instances of decimals
            decimals = split.length > 1 ? split[1].length : 0;

        gsap.to(zero, {
            val: num,
            duration: 2,
            ScrollTrigger: {
                trigger: count,
                toggleActions: 'play none none reverse',
            },
            onUpdate: function () {
                count.innerHTML = zero.val.toFixed(decimals);
            }
        });
    });

    // progressbar type 1
    const progGo = document.querySelectorAll(".mil-circular-progress");

    progGo.forEach((section) => {
        var value = section.dataset.value;
        gsap.fromTo(section, {
            "--p": '0',
            ease: 'sine',
        }, {
            "--p": value,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                toggleActions: 'play none none reverse',
            }
        });
    });

    // progressbars type 2
    const width = document.querySelectorAll(".mil-bar");

    width.forEach((section) => {
        var value = section.dataset.value;
        gsap.fromTo(section, {
            width: 0,
            duration: 5000,
            ease: 'sine',
        }, {
            width: value,
            scrollTrigger: {
                trigger: section,
                toggleClass: 'mil-active',
                toggleActions: 'play none none reverse',
            }
        });
    });
}