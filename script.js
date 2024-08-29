import katex from 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.mjs';
import { pickRandomElement } from './helpers.js';
import { questions } from './questions.js';

const generateQuestion = () => {
    const { question, answer } = pickRandomElement(questions)();
    document.getElementById('result').style.display = `none`;
    katex.render(question, document.getElementById('question'));
    katex.render(String(answer), document.getElementById('result'));
}

document.getElementById(`check`).addEventListener(`click`, () => {
    document.getElementById('result').style.display = `block`;
});

document.getElementById(`generate`).addEventListener(`click`, generateQuestion);

generateQuestion();