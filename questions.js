import { randomNumber } from './helpers.js';

export const questions = [
    () => {
        const num1 = randomNumber();
        const num2 = randomNumber();
        return {
            question: [{ value: `${num1} + ${num2}`, type: `maths` }],
            answer: [{ value: `${num1 + num2}`, type: `maths` }]
        }
    },
    () => {
        const num1 = randomNumber();
        const num2 = randomNumber();
        return {
            question: [{ value: `${num1} - ${num2}`, type: `maths` }],
            answer: [{ value: `${num1 - num2}`, type: `maths` }]
        }
    },
    () => {
        const num1 = randomNumber(2, 12);
        const answer = randomNumber(1, 12);
        const num2 = num1 * answer;
        return {
            question: [{ value: `${num2} \\div ${num1}`, type: `maths` }],
            answer: [{ value: `${answer}`, type: `maths` }]
        }
    },
    () => {
        const num1 = randomNumber(1, 12);
        const num2 = randomNumber(1, 12);
        return {
            question: [{ value: `${num1} \\times ${num2}`, type: `maths` }],
            answer: [{ value: `${num1 * num2}`, type: `maths` }]
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
            answer: [{ value: `${answer}`, type: `maths` }]
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
    
        const hcf = answer / factor;
    
        const getFactorExplanation = (num) => {
            return [...Array(num + 1).keys()]
                .filter(i => i !== 0 && num % i === 0)
                .map(factor => 
                    `${factor} \\text{ because } ${factor} \\times ${num / factor} = ${num}`
                )
                .join(" \\newline ");
        };
    
        return {
            question: [
                { value: `Find the highest common factor of:`, type: `text` },
                { value: `${num1} \\text{, } ${num2}`, type: `maths` }
            ],
            answer: [
                { value: `The highest common factor is:`, type: `text` },
                { value: `${hcf}`, type: `maths` },
                { value: `Factors of ${num1}:`, type: `text` },
                { value: getFactorExplanation(num1), type: `maths` },
                { value: `Factors of ${num2}:`, type: `text` },
                { value: getFactorExplanation(num2), type: `maths` },
                { value: `The highest common factor is the largest factor common to both lists.`, type: `text` }
            ]
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
            answer: [{ value: `${formatted_number} \\times 10^{${power}}`, type: `maths` }]
        }
    },
    () => {
        const formatted_number = (randomNumber(1, 9) + randomNumber(0, 99) / 100).toFixed(2);
        const power = randomNumber(2, 9);
        const number = formatted_number * (10 ** power);
    
        return {
            question: [
                { value: `Convert the following number from standard form:`, type: `text` },
                { value: `${formatted_number} \\times 10^{${power}}`, type: `maths` }
            ],
            answer: [{ value: `${number}`, type: `maths` }]
        }
    }
]
