//obtain engage button from DOM
const engageButton = document.getElementById("engage");

//obtain score display from DOM
const scoreDisplay = document.getElementById("score-display");
let scoreCount = document.getElementById("score-count")

//score counter
let score = 0;

//increment score function 
function increaseScore() {
    score++;
    scoreCount.innerText = score;
}

//obtain questions from DOM
const questionArray = document.getElementsByClassName("question");

//question incrementor
let currentQuestion = 0;

//grab answer feedback div from dom
let answerFeedbackDiv = document.querySelector("#answer-feedback");
//grab answer feedback text div from dom
let answerFeedbackText = document.querySelector("#answer-feedback-text");

engageButton.addEventListener("click", () => {
    toggleEngageButton();
    playGame();
    //if game is over, use engage to restart 
    if (currentQuestion >= questionArray.length) {
        document.location.reload();
    }
})

function playGame() {
    if (currentQuestion === 0) {
        document.getElementById("intro").style.display = "none";
        scoreDisplay.style.display = "block";
        questionArray[currentQuestion].style.display = "block";
    }
    checkAnswer();


}


function toggleEngageButton() {
    if (engageButton.style.dislay !== "none") {
        engageButton.style.display = "none"
    } else {
        engageButton.style.display = "block";
    }
}

function checkAnswer() {
    if (currentQuestion < questionArray.length){
        let answerChoices = document.querySelectorAll("ol")[currentQuestion];
    answerChoices.addEventListener("click", (evt) => {
        if (evt.target.classList.contains("correct")) {
            showCorrectAnswerFeedback();
            increaseScore();
        } else {
            showIncorrectAnswerFeedback();
        }
        })
    }
}

function showCorrectAnswerFeedback() {
    //add feedback to text div
    answerFeedbackText.innerText = "Correct! Click anywhere to continue."
    //make feedback div overlay visible
    answerFeedbackDiv.style.display = "block"
    //hide feedback and continue game
    hideAnswerFeedback();
}

function showIncorrectAnswerFeedback() {
    //add feedback to text div
    answerFeedbackText.innerText = "Incorrect. Click anywhere to continue.";
    //make feedback div overlay visible
    answerFeedbackDiv.style.display = "block";
    //hide feedback and continue game
    hideAnswerFeedback();
    
}

function hideAnswerFeedback() {
    answerFeedbackDiv.addEventListener("click", () => {
        answerFeedbackDiv.style.display="none";
        answerFeedbackText.innerText = "";
        if (currentQuestion < questionArray.length) {
            toggleNextQuestion();
        }
        if (currentQuestion >=  questionArray.length) {
            showEndPage();
        }
    })
    if (currentQuestion < questionArray.length) {
        currentQuestion++;
        playGame();
    }
    
}

function toggleNextQuestion() {
    questionArray[currentQuestion-1].style.display = "none";
    questionArray[currentQuestion].style.display = "block";
}

function showEndPage() {
    //show engage button again
    engageButton.style.display="block"
    //hide last question
    questionArray[questionArray.length-1].style.display = "none";
    //show score
    document.getElementById("end-page").innerText = `You scored ${score} out of 10! Press "ENGAGE!" to play again.`
    //show end page div
    document.getElementById("end-page").style.display = "block";
}