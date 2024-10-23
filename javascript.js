// Initialize questions and answers
let questions = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is the largest planet in our solar system?", answer: "Jupiter" },
    { question: "Who wrote 'Romeo and Juliet'?", answer: "William Shakespeare" },
    { question: "តុលាមានត្រកូលអ្វី?", answer: "នូ" },
    { question: "ផាន់ណាជានណា?", answer: "ប្រុសស្អាត" },
    { question: "រ៉ាវីតស្រីឬប្រុស?", answer: "ខ្ទើយ" },
    { question: "ទាយមើលខ្ញុំរៀនអ្វីចប់១២?", answer: "អាយធី" },
    { question: "នណាគេពូកែគណិត?", answer: "ផាន់ណា" },
    { question: "What is 5 + 7?", answer: "12" }
];

// Track current question index
let currentQuestionIndex = 0;

// Function to display the question
function displayQuestion() {
    const questionElement = document.getElementById('question');
    questionElement.innerHTML = questions[currentQuestionIndex].question;
}

// Function to check the answer
function checkAnswer() {
    const userAnswer = document.getElementById('userAnswer').value.trim().toLowerCase();
    const correctAnswer = questions[currentQuestionIndex].answer.trim().toLowerCase();

    if (userAnswer === correctAnswer) {
        alert("Correct! Well done.");
    } else {
        alert(`Wrong! The correct answer is ${questions[currentQuestionIndex].answer}.`);
    }

    // Move to the next question
    currentQuestionIndex++;

    // Check if there are more questions
    if (currentQuestionIndex < questions.length) {
        displayQuestion();  // Display next question
    } else {
        alert("No more questions! Thanks for playing.");
        // Reset the game
        currentQuestionIndex = 0;
        displayQuestion();
    }

    // Clear input field after submission
    document.getElementById('userAnswer').value = '';
}

// Function to allow admin to add a new question
function addQuestion() {
    const newQuestion = document.getElementById('newQuestion').value;
    const newAnswer = document.getElementById('newAnswer').value;

    if (newQuestion && newAnswer) {
        questions.push({ question: newQuestion, answer: newAnswer });
        alert("New question added!");
        // Clear the input fields
        document.getElementById('newQuestion').value = '';
        document.getElementById('newAnswer').value = '';
    } else {
        alert("Please enter both a question and an answer.");
    }
}

// Initialize the game by displaying the first question
displayQuestion();
