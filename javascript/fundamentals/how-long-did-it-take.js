// CALCULATING PRIME NUMBERS

/*
Number.prototype.isPrime = function () {
    for (let i = 2; i < this; i++) {
        if (this % i === 0) {
            return false;
        }
    }
    return true;
}

The 10,000th prime number is 104729
This took 30307.083958029747 milliseconds to run
*/

Number.prototype.isPrime = function () {
    for (let i = 2; i <= Math.sqrt(this); i++) {
        if (this % i === 0) {
            return false;
        }
    }
    return true;
}

const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime
while (primeCount < 1e4) {
    if (num.isPrime()) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num - 1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

/*
The 10,000th prime number is 104729
This took 205.6186250448227 milliseconds to run

The 100,000th prime number is 1299709
This took 5969.733208060265 milliseconds to run

The 1,000,000th prime number is 15485863
This took 200395.30412507057 milliseconds to run
*/



// FIBONACCI SEQUENCE

// recursive
function rFib(n) {
    if (n < 2) {
        return n;
    }
    return rFib(n - 1) + rFib(n - 2);
}
const recursiveResult = rFib(20);

// iterative
function iFib(n) {
    const vals = [0, 1];
    while (vals.length - 1 < n) {
        let len = vals.length;
        vals.push(vals[len - 1] + vals[len - 2]);
    }
    return vals[n];
}
const iterativeResult = rFib(20);

const t0 = performance.now();
console.log(`The 20th fibonacci number is ${recursiveResult}`);
const t1 = performance.now();
console.log(`Call to recursive function took ${t1 - t0} milliseconds.`);

const t2 = performance.now();
console.log(`The 20th fibonacci number is ${iterativeResult}`);
const t3 = performance.now();
console.log(`Call to iterative function took ${t3 - t2} milliseconds.`);

/*
My guess was the iterative function will be faster. 

The 20th fibonacci number is 6765
Call to recursive function took 0.02324998378753662 milliseconds.

The 20th fibonacci number is 6765
Call to iterative function took 0.008790969848632812 milliseconds.
*/



// REVERSING A STRING

const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversed1 = story.split("").reverse().join("");
console.log(reversed1);

let reversed2 = "";
for(i = story.length-1; i >= 0; i--) {
    reversed2 += story[i];
}
console.log (reversed2);
