const firstTextToAnimate = ["HI", "THERE"];
const secondTextToAnimate = ["I'm", "Chloé","Gaillard"];

const firstAnimationDuration = (firstTextToAnimate.join("").length -1) * 0.25;
const secondAnimationDuration = (secondTextToAnimate.join("").length -1) * 0.25;
const secondAnimationDelay = firstAnimationDuration + 0.3;

export {
    firstTextToAnimate,
    secondTextToAnimate,
    firstAnimationDuration,
    secondAnimationDuration,
    secondAnimationDelay
};