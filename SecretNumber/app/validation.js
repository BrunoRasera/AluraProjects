function verifyGuessHasValidValue(guess) {
  const number = +guess;

  if (Number.isNaN(number)) {
    elementGuess.innerHTML += '<div>Invalid value: Not a number</div>'
    return;
  }

  if (number > biggerValue || number < smallerValue) {
    elementGuess.innerHTML += `<div>Invalid value: Value must be between ${smallerValue} and ${biggerValue}</div>`
    return;
  }

  if (number == secretNumber) {
    document.body.innerHTML = `
      <h2>You got it right!</h2>
      <h3>The secret number was ${secretNumber}</h3>
      <button id="play-again" class="btn-play-again">Play again</button>
    `
  }

  else if (number > secretNumber) {
    elementGuess.innerHTML += `
    <div>The secret number is smaller  <i class="fa-solid fa-down-long"></i></div>
    `
  }

  else {
    elementGuess.innerHTML += `
    <div>The secret number is bigger  <i class="fa-solid fa-up-long"></i></div>
    `
  }
}

document.body.addEventListener('click', e => {
  if (e.target.id == 'play-again') {
    window.location.reload();
  }
})
