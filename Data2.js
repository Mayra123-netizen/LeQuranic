// Quiz data


let name = prompt('Shall we level up a little? player?:');



const quizData = [
  {
    question: 'Which of these surahs does the meaning not translate to an animal?',
    options: ['Ankabut', 'Naml', 'An`aam', 'Ka`af','Baqaarah'],
    correctAnswer: 'Ka`af'
  },
  {
    question: 'Only one of these prophets had the specifics of meeting his wife in the Quran..who is this prophet?',
    options: ['Isa', 'Lut', 'Musa', 'Nuh','Muhammad'],
    correctAnswer: 'Musa'
  },
  {
    question: 'Which of theses surahs does not contain the name Allah in any Riwayah?',
    options: ['Baqaarah', 'Fatihah', 'Nas', 'Buruuj'],
    correctAnswer: 'Nas'
  },
  {
    question: 'Allah(SWT) swears by the city of security in surah?',
    options: ['Tin', 'Nisaa', 'Layl', 'Shams','fajr'],
    correctAnswer: 'Tin'
  },
  {
    question: 'Which surah contains two bismillahs?',
    options: ['Naml', 'Tawbah', 'Baqaarah', 'Fatihah'],
    correctAnswer: 'Naml'
  },
  {
    question: 'Which three bodies respectively did the prophet Ibrahim study before concluding that Allah is the Lord?',
    options: ['sky,stars,sun', 'trees,sea,sun', 'stars,moon,sun', 'sun,stars,sea','sun,moon,stars'],
    correctAnswer: 'stars,moon,sun'
  },
  {
    question: 'How many messengers were sent to the earth?',
    options: ['25', '5', '15', '12500','Unknown'],
    correctAnswer: 'Unknown'
  },
  {
    question: 'Arrange the following surahs by thier order in the Quran: furqaan, saad, saffat, Qaaf',
    options: ['furqaan,saffat,saad,qaaf', 'furqaan,saad,saffat,qaaf', 'qaaf,saad,saffat,furqaan', 'saffat,furqaan,saad,qaaf','furqaan,saffat,saaf,qaaf'],
    correctAnswer: 'furqaan,saffat,saad,qaaf'
  },
  {
    question: 'What does the surah Mulk mean?',
    options: ['King', 'Wealth', 'Kingdom', 'Milk'],
    correctAnswer: 'Kingdom'
  },
  {
    question: 'The only woman name mentioned in the surah Aal Imran?',
    options: ['Fatimah', 'Aisha', 'Khadijah', 'Maryam'],
    correctAnswer: 'Maryam'
  }
  // Add more questions here...
];

// Get the elements from the DOM
const questionContainer = document.getElementById('questionContainer');
const optionsContainer = document.getElementById('optionsContainer');
const nextButton = document.getElementById('nextButton');
const resultContainer = document.getElementById('resultContainer');
const refreshButton = document.getElementById('refreshButton');


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
  if (percentageScore >= 90) {
    scoreComment = 'Amazing!You are really good at this, arent you?' ;
  } else if (percentageScore >= 70) {
    scoreComment = 'Well done! You have a commendable score!' ;
  } else {
    scoreComment = 'Keep practicing. You can improve your score!';
  }

  resultContainer.textContent += ` ${scoreComment} ${name}`;
}

	   
	 

// Event listener for the refresh button
refreshButton.addEventListener('click', function() {
  location.reload();
});

// Load the first question
loadQuestion();
// Load the first question
loadQuestion();

// Add the setInterval code here
setInterval(function () {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
}, 1000);
