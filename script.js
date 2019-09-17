const engageButton = document.getElementById("engage");

engageButton.addEventListener("click", () => {
    console.log("You clicked engage!");
    changeQuestion()})

const questionArray = document.getElementsByClassName("question");

let currentQuestion = 0;

function changeQuestion() {
    if (currentQuestion < questionArray.length){
        questionArray[currentQuestion].style.display = "block";
        if (currentQuestion > 0)
        {
        questionArray[currentQuestion-1].style.display = "none";
        }
        
    }
    currentQuestion++;
    if (currentQuestion > questionArray.length) {
        console.log("Reached end of questions.")
        questionArray[questionArray.length-1].style.display = "none";
        document.getElementById("end-page").style.display = "block";
    }
}