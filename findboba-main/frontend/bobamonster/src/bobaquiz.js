const questions = [
  {
    question: "What is your favorite type of milk tea?",
    options: ["Classic Milk Tea","Taro", "Matcha", "Mango"],
  },
  {
    question: "How do you like your boba tea?",
    options: ["Sweet","Less Sweet", "No Sugar"],
  },
  {
    question: "How do you prefer your boba tea served?",
    options: ["Hot", "Cold", "Warm", "With no ice"],
  },
];

let currentQuestion = 0;
const answers = [];

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const resultContainer = document.getElementById("result-container");
const submitBtn = document.getElementById("submit-btn");

function displayQuestion()
{
  const currentQuestionData = questions[currentQuestion];
  questionElement.textContent = currentQuestionData.question;
  optionsContainer.innerHTML = "";
}

function showResult()
{
  
}

function calculateResult()
{
  
}

function getResult()
{
  
}
