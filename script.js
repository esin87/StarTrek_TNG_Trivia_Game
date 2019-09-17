//obtain engage button from DOM
const engageButton = document.getElementById("engage");

//engage button begins quiz and switches to next question
engageButton.addEventListener("click", () => {
    console.log("You clicked engage!");
    changeQuestion();
})

//obtain questions from DOM
const questionArray = document.getElementsByClassName("question");

//question incrementor
let currentQuestion = 0;


//change question button
function changeQuestion() {
    if (currentQuestion < questionArray.length){
        questionArray[currentQuestion].style.display = "block";
        if (currentQuestion > 0)
        {
        questionArray[currentQuestion-1].style.display = "none";
        }
        checkAnswer();
        
    }
    currentQuestion++;
    
    if (currentQuestion > questionArray.length) {
        console.log("Reached end of questions.")
        questionArray[questionArray.length-1].style.display = "none";
        document.getElementById("end-page").style.display = "block";
    }
}

//check if answer is correct
function checkAnswer() {
    let answerChoices = document.querySelectorAll("ol")[currentQuestion];
    answerChoices.addEventListener("click", (evt) => {
        if (evt.target.classList.contains("correct")) {
            alert("Correct!")
        }
        else {
            alert("Incorrect.")
        }
    })
}
