import { outputParagraph, buttonRndInt, buttonRndRange } from './dom-loader';
import { RandomGenerator } from './random-generator';
import '../sass/main.scss';

const outputRandomInt = () => {
  outputParagraph.textContent = RandomGenerator.randomInteger();
}

const outputRandomRange = () => {
  outputParagraph.textContent = RandomGenerator.randomRange(1, 500);
}

buttonRndInt.addEventListener('click', outputRandomInt);
buttonRndRange.addEventListener('click', outputRandomRange);
