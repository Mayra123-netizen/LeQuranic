// Quiz data
let name = prompt('Bubble welcomes player?:');
const ready = prompt('Are you ready for the quiz section of leQuranic,its gonna be tough')
	if (ready == "yes") {
		console.log('Lets get started then')
	}
	else{
		console.log('Uhm okay!')
	}
	

const quizData = [

  {
    question: 'Which of these surahs do not contain the Arabic letter (mim)?',
    options: ['Fatihah', 'Araf', 'Kawthar', 'Quraysh'],
    correctAnswer: 'Kawthar'
  },
  {
    question: 'How many verses does surah Baqarah have?',
    options: ['286', '250', '187', '282'],
    correctAnswer: '286'
  },
  {
    question: 'Which surah contains the most number of the name Allah?',
    options: ['Baqaarah', 'Hashir', 'Fatihah', 'Ka`af'],
    correctAnswer: 'Baqaarah'
  },
  {
    question: 'Which is the second longest surah in the Quran in terms of verses?',
    options: ['Shua`ra', 'Nisaa', 'Aal Imran', 'Baqaarah'],
    correctAnswer: 'Shua`ra'
  },
  {
    question: 'When is Eid`l fitr?',
    options: ['Dhul Hijjah, 10th', 'Shawwal 1st', 'Ramadhan 30th', 'Rajab 13th'],
    correctAnswer: 'Shawwal 1st'
  },
  {
    question: 'How many children did the third wife of the prophet have?',
    options: ['6', '1', '7', '0'],
    correctAnswer: '0'
  },
  {
    question: 'Which surah talks about steps of divorce?',
    options: ['Baqaarah', 'Anaam', 'Talaq', 'Ahzab'],
    correctAnswer: 'Baqaarah'
  },
  {
    question: 'Which one of the following surahs contains ayatul shifa`a?',
    options: ['Shua`ra', 'Falaq', 'Ka`af', 'Naas'],
    correctAnswer: 'Shua`ra'
  },
  {
    question: 'What does the surah Maidah mean?',
    options: ['Feast', 'Wealth', 'Maids', 'Sacrifice'],
    correctAnswer: 'Feast'
  },
  {
    question: 'The only woman name mentioned in the Quran?',
    options: ['Fatimah', 'Aisha', 'Khadijah', 'Maryam'],
    correctAnswer: 'Maryam'
  }
  // Add more questions here...
];

// Get the elements from the DOM
const questionsContainer = document.getElementById('questionContainer');
const optionsContainer = document.getElementById('optionsContainer');
const nextButton = document.getElementById('nextButton');
const resultContainer = document.getElementById('resultContainer');
const refreshButton = document.getElementById('refreshButton');
const levelupButton = document.getElementById('levelupButton');

let currentQuestionIndex = 0;
let score = 0;

// Function to load a question
function loadQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionContainer.textContent = currentQuestion.question;

  optionsContainer.innerHTML = '';

  for (let i = 0; i < currentQuestion.options.length; i++) {
    const optionElement = document.createElement('div');
    optionElement.classList.add('option');
    optionElement.textContent = currentQuestion.options[i];
    optionElement.addEventListener('click', function () {
      checkAnswer(i);
    });
    optionsContainer.appendChild(optionElement);
  }
  levelupButton.style.display = 'none';
}

// Function to check the answer
function checkAnswer(selectedOptionIndex) {
  const currentQuestion = quizData[currentQuestionIndex];
  const selectedOption = currentQuestion.options[selectedOptionIndex];

  if (selectedOption === currentQuestion.correctAnswer) {
    score++;
    optionsContainer.children[selectedOptionIndex].classList.add('correct');
  } else {
    optionsContainer.children[selectedOptionIndex].classList.add('incorrect');
    const correctOptionIndex = currentQuestion.options.indexOf(currentQuestion.correctAnswer);
    optionsContainer.children[correctOptionIndex].classList.add('correct');
  }

  disableOptions();
  showNextButton();
}

// Function to disable options after selecting an answer
function disableOptions() {
  for (let i = 0; i < optionsContainer.children.length; i++) {
    optionsContainer.children[i].classList.add('disabled');
  }
}

// Function to show the next button
function showNextButton() {
  nextButton.disabled = false;
}

// Function to load the next question
function loadNextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
    clearOptions();
    hideNextButton();
  } else {
    finishQuiz();
  }
}

// Function to clear the selected options
function clearOptions() {
  const options = document.getElementsByClassName('option');
  for (let i = 0; i < options.length; i++) {
    options[i].classList.remove('selected', 'correct', 'incorrect', 'disabled');
  }
}

// Function to hide the next button
function hideNextButton() {
  nextButton.disabled = true;
}

// Function to show the level up button
function showLevelUpButton() {
  levelupButton.style.display = 'block';
}

// Event listener for the level up button
levelupButton.addEventListener('click', function() {
  window.location.href = 'nextpage.html'; // Replace 'next-page.html' with the actual file name of the next page
});

// Event listener for the next button
nextButton.addEventListener('click', function() {
  loadNextQuestion();
});

// Event listener for the refresh button
refreshButton.addEventListener('click', function() {
  location.reload();
});

// Function to finish the quiz
function finishQuiz() {
  questionContainer.textContent = '';
  optionsContainer.innerHTML = '';
  // Show the refresh button
  refreshButton.style.display = 'block';
  nextButton.style.display = 'none';
  const percentageScore = (score / quizData.length) * 100;
  resultContainer.textContent = `Your score: ${score}/${quizData.length} (${percentageScore}%)`;

  // Score comment based on score
  let scoreComment = '';
  if (percentageScore === 100) {
    scoreComment = 'Excellent job! You have a perfect score! Do you want to level up a bit?';
    showLevelUpButton();
  } else if (percentageScore >= 90) {
    scoreComment = 'Great job! You have a high score!';
  } else if (percentageScore >= 80) {
    scoreComment = 'Well done! You have a decent score!';
  } else if (percentageScore >= 70) {
    scoreComment = 'Good job! You have a decent score!';
  } else {
    scoreComment = 'Keep practicing. You can improve your score!';
  }

  resultContainer.textContent += ` ${scoreComment} ${name}`;
}

// Load the first question
loadQuestion();


// Add the setInterval code here
setInterval(function () {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
}, 1000);
