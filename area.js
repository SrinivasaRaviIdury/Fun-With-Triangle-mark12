const inputSides = document.querySelectorAll('.side-input');
const AreaBtn = document.querySelector('#area-btn');
const outputArea = document.querySelector('#output');

const side1 = Number(inputSides[0].value);
const side2 = Number(inputSides[1].value);

function calculateArea() {
  const product = Number(inputSides[0].value) * Number(inputSides[1].value);
  const areaOfTriangle = 0.5 * product;
  outputArea.innerText = 'The Area of Triangle is ' + areaOfTriangle.toFixed(2);
}
AreaBtn.addEventListener('click', calculateArea);
