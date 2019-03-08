import './styles.css';
import { getRandomInt } from "./rng";
import { handleClick } from './app';

const squares = document.querySelectorAll('.square');
const secretNumber = getRandomInt(1, 6);
//console.log(squares)
squares.forEach((s, i) => {
    if ((i + 1) === secretNumber) {
        (<HTMLDivElement>s).dataset.secret = 'true';
    }
});
squares.forEach(s => s.addEventListener('click', handleClick()))


