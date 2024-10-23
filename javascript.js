// Initialize questions and answers
let questions = [
  { question: "What is the capital of France?", correctAnswer: "Paris" },
  { question: "What is 5 + 7?", correctAnswer: "12" },
];
let currentQuestionIndex = 0;

// Function to display a question
function showQuestion() {
  const questionElement = document.getElementById("questionDisplay");
  questionElement.textContent = questions[currentQuestionIndex].question;
}

// Function to check the player's answer
function checkAnswer() {
  const playerAnswer = document.getElementById("answerInput").value.trim();
  const resultMessage = document.getElementById("resultMessage");

  if (
    playerAnswer.toLowerCase() ===
    questions[currentQuestionIndex].correctAnswer.toLowerCase()
  ) {
    resultMessage.textContent = "Correct! 🎉";
    resultMessage.style.color = "#2ecc71";
    resultMessage.style.textShadow = "2px 2px #27ae60";
  } else {
    resultMessage.textContent =
      "Wrong! 😞 The correct answer was: " +
      questions[currentQuestionIndex].correctAnswer;
    resultMessage.style.color = "#e74c3c";
    resultMessage.style.textShadow = "2px 2px #c0392b";
  }
}

// Function to add a new question (admin only)
function addQuestion() {
  const newQuestion = document.getElementById("newQuestion").value.trim();
  const newCorrectAnswer = document
    .getElementById("newCorrectAnswer")
    .value.trim();

  if (newQuestion && newCorrectAnswer) {
    questions.push({ question: newQuestion, correctAnswer: newCorrectAnswer });
    alert("New question added!");
  } else {
    alert("Please fill in both fields.");
  }
}

// Show the first question when the game starts
window.onload = function () {
  showQuestion();
};
