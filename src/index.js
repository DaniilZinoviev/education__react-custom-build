import Logger from "./logger";
import Calc from "./calc";
import src from "./guitar.jpg";

const calc = new Calc();
const logger = new Logger();

logger.log(calc.sum(1, 2, 3));

const image = document.createElement('img');
image.src = src;
document.body.appendChild(image)
