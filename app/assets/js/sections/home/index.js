import {
    TweenMax,
    Power2
} from "gsap/TweenMax";

export default () => {
    TweenMax.from(".home-title-trigger", 1, {
        y: -70,
        ease: Power2.easeOut
    });

    TweenMax.from(".home-desc-trigger", 1, {
        x: 70,
        ease: Power2.easeOut
    });
    TweenMax.to(".home-title-trigger", 1,  {
        y: 0,
        ease: Power2.easeOut
    });
    TweenMax.to(".home-desc-trigger", 1,  {
        x: 0,
        ease: Power2.easeOut
    });
};