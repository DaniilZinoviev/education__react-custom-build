import Logger from "./logger";
import Calc from "./calc";

const calc = new Calc();
const logger = new Logger();

logger.log(calc.sum(1, 2, 3));
