// Initialize questions and answers
let questions = [
  { question: "What is the capital of France?", correctAnswer: "Paris" },
{ question: "What is the largest planet in our solar system?", answer: "Jupiter" },
    { question: "Who wrote 'Romeo and Juliet'?", answer: "William Shakespeare" },
    { question: "តុលាមានត្រកូលអ្វី?", answer: "នូ" },
    { question: "ផាន់ណាជានណា?", answer: "ប្រុសស្អាត" },
    { question: "រ៉ាវីតស្រីឬប្រុស?", answer: "ខ្ទើយ" },
    { question: "ទាយមើលខ្ញុំរៀនអ្វីចប់១២?", answer: "អាយធី" },
    { question: "មិត្តភក្តិឆ្លាតវៃមានសមាជិកម៉ានអ្នក?", ១១: "H2O" },
    { question: "នណាគេពូកែរគណិត?", answer: "H2O" },
    { question: "នណាគេពូកែគណិត?", "ផាន់ណា" },
    { question: "និមិត្តសញ្ញាទឹក?", answer: "H2O" },
    { question: "ស្រីហានស្រីឬប្រុស?", answer: "ស្រី" },
    { question: "សូយ៉ាទាបឬខ្ពស់?", answer: "ទាប" },
    { question: "នណាគេពូកែគីមី?", answer: "ផាន់ណា" },  
  { question: "What is 5 + 7?", correctAnswer: "12" },
];

let currentQuestionIndex = 0;

function askQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const userAnswer = prompt(currentQuestion.question);
    
    if (userAnswer) {
        checkAnswer(userAnswer, currentQuestion.answer);
    } else {
        alert("Please provide an answer!");
    }
}

function checkAnswer(userAnswer, correctAnswer) {
    if (userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
        alert("Correct! Well done.");
    } else {
        alert(`Wrong! The correct answer is ${correctAnswer}.`);
    }
    currentQuestionIndex++;
    
    // Check if there are more questions
    if (currentQuestionIndex < questions.length) {
        askQuestion();
    } else {
        alert("No more questions! Thanks for playing.");
    }
}

// Start the game
askQuestion();
  
