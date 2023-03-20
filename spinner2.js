// Refactor the logic to remove the repeated setTimeout statements in spinner1.js file.

const spinner = ["|  ", "/  ", "-  ", "\\  ", "/  ", "-  ", "\\  ", "|  "];
spinner.push("\n");
let t = 100;

for(const char of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${char}`);
  }, t += 200);
}
