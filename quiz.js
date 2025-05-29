import { doctorQuiz } from './doctor.js';

// Simple quiz logic for browser environment
let currentQuestion = 0;
let score = 0;

function showQuestion() {
    const q = doctorQuiz.questions[currentQuestion];
    // Display question and options (replace with your UI logic)
    console.log(`Q${currentQuestion + 1}: ${q.question}`);
    q.options.forEach((opt, idx) => {
        console.log(`${idx + 1}. ${opt}`);
    });
}

function checkAnswer(userAnswerIndex) {
    const q = doctorQuiz.questions[currentQuestion];
    if (q.options[userAnswerIndex] === q.answer) {
        score++;
        console.log("Correct!");
    } else {
        console.log(`Wrong! Correct answer: ${q.answer}`);
    }
    currentQuestion++;
    if (currentQuestion < doctorQuiz.questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    console.log(`Quiz finished! Your score: ${score}/${doctorQuiz.questions.length}`);
}

// Example usage (replace with your UI event handlers)
showQuestion();
// To answer, call: checkAnswer(optionIndex); where optionIndex is 0-based
// Example: checkAnswer(2);
