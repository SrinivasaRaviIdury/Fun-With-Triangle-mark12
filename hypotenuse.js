const inputSides = document.querySelectorAll('.side-input');
const hypotenuseBtn = document.querySelector('#hypotenuse-btn');
const outputHypotenuse = document.querySelector('#output');

const side1 = Number(inputSides[0].value);
const side2 = Number(inputSides[1].value);

function calculateSumOfSquares(a, b) {
  const sumOfSquares = a * a + b * b;
  return sumOfSquares;
}

function calculateHypotenuse() {
  const sumOfSquares = calculateSumOfSquares(
    Number(inputSides[0].value),
    Number(inputSides[1].value)
  );
  const lenghtOfHypotenuse = Math.sqrt(sumOfSquares);
  outputHypotenuse.innerText =
    'The length of Hypotenuse is ' + lenghtOfHypotenuse;
}
hypotenuseBtn.addEventListener('click', calculateHypotenuse);
