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

//engage button begins quiz and switches to next question
engageButton.addEventListener("click", () => {
    //change score display to appear
    scoreDisplay.style.display = "block";
    //if game hasn't started, use Engage to start game
    if (currentQuestion===0) {
        changeQuestion();
    }
    
    //hide intro page
    document.getElementById("intro").style.display = "none";

    //if game is over, use engage to restart 
    if (currentQuestion > 10) {
        document.location.reload();
    }
})

//obtain questions from DOM
const questionArray = document.getElementsByClassName("question");

//question incrementor
let currentQuestion = 0;


//change question button
function changeQuestion() {
    //hide engage button
    if (engageButton.style.display!=="none") {
        engageButton.style.display="none"
    }
    //if current question is less than question array length
    if (currentQuestion < questionArray.length){
        //show current question
        questionArray[currentQuestion].style.display = "block";
        //if past the first question, hide the previous question
        if (currentQuestion > 0){
            questionArray[currentQuestion-1].style.display = "none";
            }
        //run check answer function
        checkAnswer();
       
    }
    
    //increment current question
    currentQuestion++;

    //if end of questions is reached
    if (currentQuestion > questionArray.length) {
        //show engage button again
        engageButton.style.display="block"
        //hide last question
        questionArray[questionArray.length-1].style.display = "none";
        //show score
        document.getElementById("end-page").innerText = `You scored ${score} out of 10! Press "ENGAGE!" to play again.`
        //show end page div
        document.getElementById("end-page").style.display = "block";
    }
     
}
//grab answer feedback div from dom
let answerFeedbackDiv = document.querySelector("#answer-feedback");
//grab answer feedback text div from dom
let answerFeedbackText = document.querySelector("#answer-feedback-text")

//check if answer is correct
function checkAnswer() {
    //grab ordered list from dom
    let answerChoices = document.querySelectorAll("ol")[currentQuestion];
    //add event listener to entire ordered list object
    answerChoices.addEventListener("click", (evt) => {
        //if class is correct, show correct feedback and increase score
        if (evt.target.classList.contains("correct")) {
            showCorrectAnswerFeedback();
            increaseScore();
        }
        //else show incorrect answer
        else {
            showIncorrectAnswerFeedback();
        }
        changeQuestion();
    })
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
        
    })
}