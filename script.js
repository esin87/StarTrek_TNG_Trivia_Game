//obtain engage button from DOM
const engageButton = document.getElementById('engage');

//obtain score display from DOM
const scoreDisplay = document.getElementById('score-display');
const scoreCount = document.getElementById('score-count');

//score counter
let score = 0;

//increment score function
function increaseScore() {
	score++;
	scoreCount.innerText = score;
}

//obtain questions from DOM
const questionArray = document.getElementsByClassName('question');

//question incrementor
let currentQuestion = 0;

//grab answer feedback div from dom
const answerFeedbackDiv = document.querySelector('#answer-feedback');
//grab answer feedback text div from dom
const answerFeedbackText = document.querySelector('#answer-feedback-text');

engageButton.addEventListener('click', () => {
	//hide engage button
	toggleEngageButton();
	//start game
	playGame();
	//if game is over, use engage to restart
	if (currentQuestion >= questionArray.length) {
		document.location.reload();
	}
});

//runs game
function playGame() {
	//if game is beginning, hide intro page and pull first question
	if (currentQuestion === 0) {
		document.getElementById('intro').style.display = 'none';
		scoreDisplay.style.display = 'block';
		questionArray[currentQuestion].style.display = 'block';
	}
	//checks answer and gives appropriate feedback
	checkAnswer();
}

//hide or display engage button
function toggleEngageButton() {
	if (engageButton.style.display !== 'none') {
		engageButton.style.display = 'none';
	} else {
		engageButton.style.display = 'block';
	}
}

//checks answer and gives feedback
function checkAnswer() {
	if (currentQuestion < questionArray.length) {
		const answerChoices = document.querySelectorAll('ol')[currentQuestion];
		answerChoices.addEventListener('click', (evt) => {
			if (evt.target.classList.contains('correct')) {
				showAnswerFeedback('correct');
				increaseScore();
			} else {
				showAnswerFeedback('incorrect');
			}
		});
	}
}

//rewrite into one showAnswerFeedback feedback function per instructor feedback
function showAnswerFeedback(answer) {
	if (answer === 'correct') {
		//add feedback to text div
		answerFeedbackText.innerText = 'Correct! Click anywhere to continue.';
		//make feedback div overlay visible
		answerFeedbackDiv.style.display = 'block';
	} else if (answer === 'incorrect') {
		//add feedback to text div
		answerFeedbackText.innerText = 'Incorrect. Click anywhere to continue.';
		//make feedback div overlay visible
		answerFeedbackDiv.style.display = 'block';
	}
	//hide feedback and continue game
	hideAnswerFeedback();
}

function hideAnswerFeedback() {
	//listen for click on entire div
	answerFeedbackDiv.addEventListener('click', () => {
		//hide div
		answerFeedbackDiv.style.display = 'none';
		//erase answer feedback
		answerFeedbackText.innerText = '';
		//if there are still questions, show next question
		if (currentQuestion < questionArray.length) {
			toggleNextQuestion();
		}
		//if reached end of question array, go to end page
		if (currentQuestion >= questionArray.length) {
			showEndPage();
		}
	});
	//if there are still questions, increment questions and keep playing
	if (currentQuestion < questionArray.length) {
		currentQuestion++;
		playGame();
	}
}

//switch to next question
function toggleNextQuestion() {
	questionArray[currentQuestion - 1].style.display = 'none';
	questionArray[currentQuestion].style.display = 'block';
}

//provide results of quiz
function showEndPage() {
	//show engage button again
	engageButton.style.display = 'block';
	//hide last question
	questionArray[questionArray.length - 1].style.display = 'none';
	const scoreGIF = document.createElement('img');
	const endPage = document.getElementById('end-page');
	if (score < 5) {
		//show score
		endPage.innerText = `You scored ${score} out of 10! Better brush up on your Star Trek trivia. Press "ENGAGE!" to play again.`;
		//grab right gif
		scoreGIF.setAttribute(
			'src',
			'https://media.giphy.com/media/o14YPU6vooy0o/giphy.gif'
		);
		scoreGIF.setAttribute('alt', 'Picard rubs his forehead wearily.');
		endPage.appendChild(scoreGIF);
	} else if (score >= 5 && score < 9) {
		//show score
		endPage.innerText = `You scored ${score} out of 10! Not too bad. Data approves. Press "ENGAGE!" to play again.`;
		scoreGIF.setAttribute(
			'src',
			'https://media.giphy.com/media/rIq6ASPIqo2k0/giphy.gif'
		);
		scoreGIF.setAttribute('alt', 'Data nods in approval');
		scoreGIF.style.width = '100%';
		endPage.appendChild(scoreGIF);
	} else {
		//show score
		endPage.innerText = `You scored ${score} out of 10! Picard is impressed. Press "ENGAGE!" to play again.`;
		scoreGIF.setAttribute(
			'src',
			'https://media.giphy.com/media/999fcCCj45Bde/giphy.gif'
		);
		scoreGIF.setAttribute('alt', "Picard says, 'Damn'");
		endPage.appendChild(scoreGIF);
	}
	//show end page div
	endPage.style.display = 'block';
}
