export const randomNumber = (...bounds) => {

    if (bounds.length === 0) {
        return randomNumber(100); 
    }
    if (bounds.length === 1) {
        const [upper] = bounds;
        return randomNumber(0, upper);
    }

    const [lower, upper] = bounds;

    return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

export const pickRandomElement = (arr) => {
    if(!arr.length)
        return;
    return arr[randomNumber(0, arr.length - 1)];
}

randomNumber(); // []

randomNumber(5);

randomNumber(5, 10);