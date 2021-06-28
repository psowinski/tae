/* eslint-disable no-console */
(function run() {
  console.log('hello world');
  let x = #[1, 2, 3];
  let count = 0;
  const interval = setInterval(() => {
    count += 1;
    if (count >= 16) clearInterval(interval);
    x = x.map((a) => 2 * a);
    console.log(x);
  }, 1500);
}());
