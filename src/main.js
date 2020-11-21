/**
 * This is my App :)
 */
class App {
  run = (name = "React custom app") => {
    console.log(`App "${name}" has been successfully started.`);
  }
}

const app = new App();
app.run();
