// 10-question quiz about gaming skills
const quizQuestions = [
  {
    question: "Which skill is most important for landing headshots in FPS games like Call of Duty?",
    options: [
      "Map awareness",
      "Quick reflexes and aim",
      "Team communication",
      "Resource management"
    ],
    answer: 1
  },
  {
    question: "In Genshin Impact, what is 'elemental reaction'?",
    options: [
      "A type of weapon",
      "A combo of elements for bonus effects",
      "A character's ultimate move",
      "A map location"
    ],
    answer: 1
  },
  {
    question: "What does 'kiting' mean in action RPGs?",
    options: [
      "Flying with a glider",
      "Drawing enemies away while attacking from a distance",
      "Using a kite as a weapon",
      "Healing teammates"
    ],
    answer: 1
  },
  {
    question: "Which is a key skill for dodging attacks in fast-paced games like Solo Leveling: Arise?",
    options: [
      "Timing and prediction",
      "Collecting loot",
      "Leveling up only",
      "Standing still"
    ],
    answer: 0
  },
  {
    question: "What is 'cooldown management'?",
    options: [
      "Managing your computer's temperature",
      "Timing your abilities so they're always available when needed",
      "Taking breaks between matches",
      "Saving in-game currency"
    ],
    answer: 1
  },
  {
    question: "Why is 'map awareness' crucial in multiplayer shooters?",
    options: [
      "To find hidden Easter eggs",
      "To know enemy positions and objectives",
      "To admire the graphics",
      "To avoid fall damage"
    ],
    answer: 1
  },
  {
    question: "What does 'combo chaining' refer to in action games?",
    options: [
      "Linking attacks together for maximum damage",
      "Changing your character's outfit",
      "Switching weapons quickly",
      "Trading items with friends"
    ],
    answer: 0
  },
  {
    question: "Which skill helps you survive longer in battle royale games?",
    options: [
      "Looting only rare items",
      "Good positioning and movement",
      "Ignoring the safe zone",
      "Standing in open areas"
    ],
    answer: 1
  },
  {
    question: "In Genshin Impact, what is the benefit of 'team synergy'?",
    options: [
      "Faster running speed",
      "Combining character abilities for stronger effects",
      "Unlocking new maps",
      "Getting more primogems"
    ],
    answer: 1
  },
  {
    question: "What does 'ultimate ability' usually mean in action games?",
    options: [
      "A basic attack",
      "A powerful move with a long cooldown",
      "A cosmetic skin",
      "A chat command"
    ],
    answer: 1
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
    resultMsg = 'NOOB';
    emoji = '🤓'; // nerd face
  } else if (score <= 7) {
    resultMsg = 'PRO GAMER';
    emoji = '😎'; // smiling face with sunglasses
  } else {
    resultMsg = 'GOD-TIER GAMER';
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