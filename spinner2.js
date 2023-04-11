process.stdout.write('hello from spinner1.js... \rheyyy\n');

let spinArray = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
let delay = 0;

for (const spin of spinArray) {
  setTimeout(() => {
    process.stdout.write(spin);
  }, delay);
  delay += 200;
}
setTimeout(() => {
  process.stdout.write('\n');
}, delay);