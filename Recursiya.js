
function print1ToN(n, current = 1) {
  if (current > n) return;
  process.stdout.write(current + ' ');
  print1ToN(n, current + 1);
}

//print1ToN(7);

function printAtoB(a, b) {
  process.stdout.write(a + ' ');
  if (a === b) return;
  printAtoB(a < b ? a + 1 : a - 1, b);
}

//printAtoB(10, 4);

function isPowerOfTwo(n) {
  if (n === 1) {
    console.log("YES");
  } else if (n === 0 || n % 2 !== 0) {
    console.log("NO");
  } else {
    isPowerOfTwo(n / 2);
  }
}

//isPowerOfTwo(3);

function sumDigits(n) {
  if (n === 0) return 0;
  return n % 10 + sumDigits(Math.floor(n / 10));
}
//console.log(sumDigits(518));


function printDigitsReverse(n) {
  process.stdout.write((n % 10) + ' ');
  if (n >= 10) printDigitsReverse(Math.floor(n / 10));
}

//printDigitsReverse(061);


function printDigitsForward(n) {
  if (n >= 10) printDigitsForward(Math.floor(n / 10));
  process.stdout.write((n % 10) + ' ');
}
//printDigitsForward(825);
