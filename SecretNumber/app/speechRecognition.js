const elementGuess = document.getElementById('guess');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'en-US';
recognition.start();
recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
  guess = e.results[0][0].transcript;
  showGuessOnScreen(guess);
  verifyGuessHasValidValue(guess);
}

function showGuessOnScreen(guess) {
  elementGuess.innerHTML = `
  <div>You said:</div>
  <span class="box">${guess}</span>
  `
}

recognition.addEventListener('end', () => recognition.start());
