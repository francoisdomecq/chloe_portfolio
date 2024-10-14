const calculateInAnimationDelay = (textToAnimate:string[],index:number) => {
    if (index === 0) {
        return 0;
    }
    return textToAnimate[index-1].length * 0.15;
};

export {
    calculateInAnimationDelay
};