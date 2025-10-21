function fizzBuzz(n) {
  console.log("fizzbuzz!");
  for (let i = 1; i <= n; i++) {
    let output = (i % 3 === 0 ? "fizz" : "") + (i % 5 === 0 ? "buzz" : "");

    console.log(output || i);
  }
}

fizzBuzz(15);
