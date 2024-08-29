import { randomNumber } from './helpers.js';

export const questions = [
    () => {
        const num1 = randomNumber();
        const num2 = randomNumber();
        return {
            question: `${num1} + ${num2}`,
            answer: num1 + num2
        }
    },
    () => {
        const num1 = randomNumber();
        const num2 = randomNumber();
        return {
            question: `${num1} - ${num2}`,
            answer: num1 - num2
        }
    },
    () => {
        const num1 = randomNumber(2, 12);
        const answer = randomNumber(1, 12);
        const num2 = num1 * answer;
        return {
            question: `${num2} \\div ${num1}`,
            answer
        }
    },
    () => {
        const num1 = randomNumber(1, 12);
        const num2 = randomNumber(1, 12);
        return {
            question: `${num1} \\times ${num2}`,
            answer: num1 * num2
        }
    }
]