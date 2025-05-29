// 10-question quiz about preparing curry rice
const quizQuestions = [
  {
    question: "What's the very first thing you should do before making curry rice?",
    options: [
      "Wash your hands!",
      "Start boiling the rice right away",
      "Chop all the veggies at once",
      "Open the curry roux box"
    ],
    answer: 0
  },
  {
    question: "Which rice is best for that classic, sticky curry rice feel?",
    options: [
      "Basmati rice",
      "Jasmine rice",
      "Short-grain rice (like sushi rice)",
      "Brown rice"
    ],
    answer: 2
  },
  {
    question: "What protein can you add to your curry rice?",
    options: [
      "Chicken",
      "Beef",
      "Pork",
      "All of these are delicious!"
    ],
    answer: 3
  },
  {
    question: "Which veggie is a classic in Japanese curry rice?",
    options: [
      "Carrot",
      "Potato",
      "Onion",
      "All of the above!"
    ],
    answer: 3
  },
  {
    question: "Why do we sauté onions first when making curry?",
    options: [
      "It makes them sweet and tasty!",
      "It makes them crunchy",
      "It turns them green",
      "No reason, just for fun"
    ],
    answer: 0
  },
  {
    question: "When do you add the curry roux blocks?",
    options: [
      "Right after adding water and simmering veggies/meat",
      "Before adding any water",
      "After serving the curry",
      "With the raw veggies"
    ],
    answer: 0
  },
  {
    question: "How long should you let the curry simmer after adding the roux?",
    options: [
      "Just a minute or two",
      "5-10 minutes so it thickens nicely",
      "An hour",
      "No need to simmer"
    ],
    answer: 1
  },
  {
    question: "What’s a fun topping to add to your curry rice plate?",
    options: [
      "Fukujinzuke (sweet pickles)",
      "Ketchup",
      "Chocolate chips",
      "Peanut butter"
    ],
    answer: 0
  },
  {
    question: "How do you usually serve the rice and curry together?",
    options: [
      "Rice on one side, curry on the other!",
      "Mix it all up before serving",
      "Rice in a separate bowl",
      "Curry on top of the rice, covering everything"
    ],
    answer: 0
  },
  {
    question: "What’s a good kitchen habit when making curry rice?",
    options: [
      "Taste with a clean spoon",
      "Wash hands after touching raw meat",
      "Store leftovers soon after eating",
      "All of these!"
    ],
    answer: 3
  }
];

let currentQuestion = 0;
let score = 0;
let quizFinished = false;

function showQuestion() {
  const q = quizQuestions[currentQuestion];
  document.getElementById('question').textContent = q.question;
  for (let i = 0; i < 4; i++) {
    document.getElementById('choice' + i).textContent = q.options[i] || '';
    document.getElementById('guess' + i).style.display = q.options[i] ? '' : 'none';
    document.getElementById('guess' + i).disabled = false;
    document.getElementById('guess' + i).classList.remove('selected-answer'); // Remove highlight on new question
  }
  document.getElementById('progress').textContent = `Question ${currentQuestion + 1} of ${quizQuestions.length}`;
  document.getElementById('score').textContent = '';
  document.getElementById('next-btn').style.display = 'none';
  document.getElementById('finish').style.display = 'none';
}

function handleGuess(i) {
  if (quizFinished) return;
  const q = quizQuestions[currentQuestion];
  if (i === q.answer) {
    score++;
  }
  for (let j = 0; j < 4; j++) {
document.getElementById('guess' + j).classList.remove('selected-answer');
document.getElementById('guess' + i).classList.add('selected-answer');
  }
  document.getElementById('guess' + i).classList.add('selected-answer');
  if (currentQuestion < quizQuestions.length - 1) {
    document.getElementById('next-btn').style.display = '';
  } else {
    document.getElementById('finish').style.display = '';
  }
  document.getElementById('score').textContent = '';
}

document.addEventListener('DOMContentLoaded', function() {
  showQuestion();
  for (let i = 0; i < 4; i++) {
    document.getElementById('guess' + i).onclick = () => handleGuess(i);
  }
});

document.getElementById('next-btn').onclick = function() {
  currentQuestion++;
  showQuestion();
};

document.getElementById('finish').onclick = function() {
  quizFinished = true;
  let resultMsg = '';
  let emoji = '';
  if (score <= 4) {
    resultMsg = 'BEGINNER CHEF';
    emoji = '🤓'; // nerd face
  } else if (score <= 7) {
    resultMsg = 'AMAZING CHEF';
    emoji = '😎'; // smiling face with sunglasses
  } else {
    resultMsg = 'GORDON RAMSAY WOULD BE PROUD!';
    emoji = '🤩'; // star-struck (stars as eyes)
  }
  document.getElementById('question').textContent = 'Quiz finished!';
  document.getElementById('score').innerHTML = `Your score: ${score} / ${quizQuestions.length} <br><span style='font-size:2em;'>${emoji}</span><br>${resultMsg}`;
  for (let i = 0; i < 4; i++) {
    document.getElementById('choice' + i).textContent = '';
    document.getElementById('guess' + i).style.display = 'none';
  }
  document.getElementById('next-btn').style.display = 'none';
  document.getElementById('finish').style.display = 'none';
};

document.getElementById('restart').onclick = function() {
  currentQuestion = 0;
  score = 0;
  quizFinished = false;
  for (let i = 0; i < 4; i++) {
    document.getElementById('guess' + i).style.display = '';
  }
  showQuestion();
};

document.getElementById('view-results').onclick = function() {
  window.location.href = 'resultpage.html';
};

document.getElementById('Home').onclick = function() {
  window.location.href = 'intropage.html';
};