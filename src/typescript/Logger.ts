export default class Logger {
  static log(msg: string): void {
    console.log('===');
    console.log(msg)
    console.log('===');
  }
}