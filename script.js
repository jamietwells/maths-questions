import katex from 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.mjs';
import { pickRandomElement } from './helpers.js';
import { questions } from './questions.js';

const generateQuestion = () => {
    const { question, answer } = pickRandomElement(questions)();
    
    const children = [];
    for(const { type, value } of question){
        if(type === `text`){
            const p = document.createElement(`p`);
            p.innerText = value;
            children.push(p);
        }
        else if(type === `maths`){
            const p = document.createElement(`p`);
            katex.render(value, p);
            children.push(p);
        }
    }

    document.getElementById('question').replaceChildren(...children);

    document.getElementById('result').style.display = `none`;
    
    katex.render(String(answer), document.getElementById('result'));
}

document.getElementById(`check`).addEventListener(`click`, () => {
    document.getElementById('result').style.display = `block`;
});

document.getElementById(`generate`).addEventListener(`click`, generateQuestion);

generateQuestion();