let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("Pie");
const paper_div = document.getElementById("Pap");
const scissors_div = document.getElementById("Tij");




function getComputerChoice() {
    const choices = ["Pie", "Pap", "Tij"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "Pie") return "PIEDRA";
    if (letter === "Pap") return "PAPEL";
    return "TIJERAS";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML =  `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!`;
}
function lose() {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML =  `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!`;
}

function draw() {
    console.log("EMPATASTE");
}


function game(userChoice) {
  const computerChoice = getComputerChoice();
   switch (userChoice + computerChoice) {
    case "PieTij":
    case "PapPie":
    case "TijPap":
       win(userChoice, computerChoice);
       break;
    case "PiePap":
    case "PapTij":
    case "TijPie":
        lose(userChoice, computerChoice);
        break;
    case "PiePie":
    case "PapPap":
    case "TijTij":
        draw(userChoice, computerChoice);
        break;
   }
}


function main() {
    rock_div.addEventListener("click" , function() {
     game("Pie");
    })

    paper_div.addEventListener("click" , function() {
     game("Pap");
    })
 
    scissors_div.addEventListener("click" , function() {
     game("Tij");
    })
}

main();