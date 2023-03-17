// Using \r, we can fake an animation by replacing/rewriting characters 
// in the same spot after a delay.

// We can use the special character \r to return our cursor back to the beginning of the line 
// that we were on. After this, anything we write next to stdout will overwrite the line.

setTimeout(() => {
  process.stdout.write('\r|    ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/    ');
}, 300); 

setTimeout(() => {
  process.stdout.write('\r-    ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\    ');
}, 700);

setTimeout(() => {
  process.stdout.write('\r/    ');
}, 900);

setTimeout(() => {
  process.stdout.write('\r-    ');
}, 1100);

setTimeout(() => {
  process.stdout.write('\r\\    ');
}, 1300);

setTimeout(() => {
  process.stdout.write('\r|   \n');
}, 1500);