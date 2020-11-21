export default class Calc {
  sum(...args) {
    return args.reduce((a, b) => a + b);
  }
}
