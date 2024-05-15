const elementSmallerValue = document.getElementById('smaller-value');
const elementBiggerValue = document.getElementById('bigger-value');

const smallerValue = 1;
const biggerValue = 100;

elementSmallerValue.innerHTML = smallerValue;
elementBiggerValue.innerHTML = biggerValue;

const secretNumber = generateRandomNumber();

function generateRandomNumber() {
  return parseInt(Math.random() * (biggerValue - smallerValue + 1)) + smallerValue;
}
