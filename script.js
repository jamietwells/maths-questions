import katex from 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.mjs';
import { pickRandomElement } from './helpers.js';
import { questions } from './questions.js';

const renderSection = (data, section) => {
    const children = [];
    for (const { type, value } of data) {
        if (type === `text`) {
            const p = document.createElement(`p`);
            p.innerText = value;
            children.push(p);
        }
        else if (type === `maths`) {
            const p = document.createElement(`p`);
            katex.render(value, p);
            children.push(p);
        }
    }

    document.getElementById(section).replaceChildren(...children);
};

const generateQuestion = () => {
    
    document.getElementById('answer').style.display = `none`;
    
    const { question, answer } = pickRandomElement(questions)();

    renderSection(question, 'question');
    renderSection(answer, 'answer');
}

document.getElementById(`check`).addEventListener(`click`, () => {
    document.getElementById('answer').style.display = `block`;
});

document.getElementById(`generate`).addEventListener(`click`, generateQuestion);

generateQuestion();