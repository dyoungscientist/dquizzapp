// 10-question quiz about neuroscience
const quizQuestions = [
  {
    question: "Which lobe of the brain is primarily responsible for vision?",
    options: [
      "Frontal lobe",
      "Parietal lobe",
      "Occipital lobe",
      "Temporal lobe"
    ],
    answer: 2
  },
  {
    question: "What is the main function of the cerebellum?",
    options: [
      "Memory",
      "Balance and coordination",
      "Speech",
      "Emotion"
    ],
    answer: 1
  },
  {
    question: "Which artery is most commonly involved in an ischemic stroke?",
    options: [
      "Anterior cerebral artery",
      "Middle cerebral artery",
      "Posterior cerebral artery",
      "Basilar artery"
    ],
    answer: 1
  },
  {
    question: "Broca's area is associated with which function?",
    options: [
      "Vision",
      "Speech production",
      "Hearing",
      "Motor coordination"
    ],
    answer: 1
  },
  {
    question: "Which cranial nerve is responsible for facial movement?",
    options: [
      "Trigeminal nerve (V)",
      "Facial nerve (VII)",
      "Glossopharyngeal nerve (IX)",
      "Vagus nerve (X)"
    ],
    answer: 1
  },
  {
    question: "What is the name of the protective membranes covering the brain and spinal cord?",
    options: [
      "Meninges",
      "Synapses",
      "Axons",
      "Ganglia"
    ],
    answer: 0
  },
  {
    question: "Which structure connects the two cerebral hemispheres?",
    options: [
      "Thalamus",
      "Corpus callosum",
      "Pons",
      "Medulla oblongata"
    ],
    answer: 1
  },
  {
    question: "What is the most common primary malignant brain tumor in adults?",
    options: [
      "Meningioma",
      "Glioblastoma multiforme",
      "Astrocytoma",
      "Oligodendroglioma"
    ],
    answer: 1
  },
  {
    question: "Which neurotransmitter is primarily involved in Parkinson's disease?",
    options: [
      "Serotonin",
      "Dopamine",
      "Acetylcholine",
      "GABA"
    ],
    answer: 1
  },
  {
    question: "The Circle of Willis is important for what function?",
    options: [
      "Cerebrospinal fluid production",
      "Collateral blood flow",
      "Hormone secretion",
      "Sensory processing"
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
    resultMsg = 'NEEDS MORE STUDYING';
    emoji = '🙂'; // slightly smiling face

  } else if (score <= 7) {
    resultMsg = 'GOOD JOB, BUT KEEP LEARNING!';
    emoji = "😃"; // grinning face with big eyes
  } else {
    resultMsg = 'DR.ANDREW HUBERMAN WOULD BE PROUD!';
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