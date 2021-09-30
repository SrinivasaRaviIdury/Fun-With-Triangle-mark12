const quizForm = document.querySelector('.quiz-form');
const submitAnswerBtn = document.querySelector('#submit-answer-btn');
const outputEl = document.querySelector('#outputQuiz');

const correctAnswers = ['90°', '34°', '60°', 'Right angled', 'Acute angled'];

function calculateScore() {
  let score = 0;
  let index = 0;
  const formResults = new FormData(quizForm); //Form API holds value
  for (let value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  console.log(score);
  outputEl.innerText = 'Your Score is ' + score;
}

submitAnswerBtn.addEventListener('click', calculateScore);
