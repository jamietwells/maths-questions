import { randomNumber } from './helpers.js';

export const questions = [
    () => {
        const num1 = randomNumber();
        const num2 = randomNumber();
        return {
            question: [{ value: `${num1} + ${num2}`, type: `maths` }],
            answer: num1 + num2
        }
    },
    () => {
        const num1 = randomNumber();
        const num2 = randomNumber();
        return {
            question: [{ value: `${num1} - ${num2}`, type: `maths` }],
            answer: num1 - num2
        }
    },
    () => {
        const num1 = randomNumber(2, 12);
        const answer = randomNumber(1, 12);
        const num2 = num1 * answer;
        return {
            question: [{ value: `${num2} \\div ${num1}`, type: `maths` }],
            answer
        }
    },
    () => {
        const num1 = randomNumber(1, 12);
        const num2 = randomNumber(1, 12);
        return {
            question: [{ value: `${num1} \\times ${num2}`, type: `maths` }],
            answer: num1 * num2
        }
    },
    () => {
        const num1 = randomNumber(4, 25);
        const num2 = randomNumber(3, 16);
        let answer = num1;
        while (true) {
            if (answer % num2 === 0)
                break;
            answer += num1;
        }
        return {
            question: [
                { value: `Find the lowest common multiple of:`, type: `text` },
                { value: `${num1} \\text{, } ${num2}`, type: `maths` }
            ],
            answer: answer
        }
    },
    () => {
        let factor = randomNumber(2, 20);
        const num1 = randomNumber(1, 5) * factor;
        const num2 = randomNumber(3, 8) * factor;


        let answer = Math.min(num1, num2);
        let larger = Math.max(num1, num2);
        factor = 1;

        while (true) {
            if (answer % factor === 0) {
                if (larger % (answer / factor) === 0)
                    break;
            }
            factor++;
        }
        return {
            question: [
                { value: `Find the highest common factor of:`, type: `text` },
                { value: `${num1} \\text{, } ${num2}`, type: `maths` }
            ],
            answer: (answer / factor)
        }
    },
    () => {
        const number = randomNumber(100, 999)
        const formatted_number = number / 100
        const power = randomNumber(2, 9)

        return {
            question: [
                { value: `Convert the following number to standard form:`, type: `text` },
                { value: `${formatted_number * (10 ** power)}`, type: `maths` }
            ],
            answer: `${formatted_number} \\times 10^{${power}}`
        }
    }

]