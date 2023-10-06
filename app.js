//for score variable
let userScore = 0;
let aiScore = 0;

//fo score board variable
let aiScore_span = document.querySelector('#ai-score');
let userScore_span = document.querySelector('#user-score');
let scoreBoardDiv = document.querySelector('.score-board');
let resultDiv = document.querySelector(".result > p");
//for paper,rock and scissors variables
let rockDiv = document.querySelector("#r");
let paperDiv = document.querySelector("#p");
let scissorsDiv = document.querySelector("#s");

//for restart Button Variable
let restartBtn = document.querySelector("#resetBtn");

resultDiv.textContent = "Just Click Paper, Rock and Scissors To Start Game";

//Ai choice
function getAiChoice () {
    const choice = ['r', 'p', 's'];
    const radomChoice = Math.floor(Math.random()*3);
    return choice[radomChoice];
}

console.log(getAiChoice());


//User choice 
function game(userChoice) {
    // console.log(":poop "+ userChoice);
    const aiChoice = getAiChoice();
    switch (userChoice + aiChoice) {
        case "rs":
        case "pr":
        case "sp":
        // console.log("User Wins");
        win(userChoice, aiChoice);
        break;

        case "rp":
        case "ps":
        case "sr":
        // console.log("Ai Wins");
        lose(userChoice,aiChoice);
        break;
        
        case "rr":
        case "pp":
        case "ss":
        // console.log("It's Draw");
        draw(userChoice,aiChoice);
        break;

    }
}

function main() {
    
    rockDiv.addEventListener("click", function() {
        // console.log("hello world!");
        game("r");
    })
    
    paperDiv.addEventListener("click", function() {
        // console.log("hello world!");
        game("p");
    })
    
    scissorsDiv.addEventListener("click", function() {
        // console.log("hello world!");
        game("s");
    })
}

main();

function win(userChoice, aiChoice) {
    // console.log("Win!");
    // console.log(userScore);
    userScore++;
    userScore_span.innerHTML = userScore;
    console.log(userChoice);
    console.log(aiChoice);
    resultDiv.innerHTML = convertWord(userChoice) +  " beats " + convertWord(aiChoice) + " You Win!";
    
}

function lose(userChoice, aiChoice) {
    // console.log("Lose!");
    aiScore++;
    aiScore_span.innerHTML = aiScore;
    resultDiv.innerHTML = convertWord(aiChoice) +  " beats " + convertWord(userChoice) + " Ai Win!";
}

function draw(userChoice,aiChoice) {
    // console.log("Draw!");
    resultDiv.innerHTML = convertWord(aiChoice) +  " beats " + convertWord(userChoice) + " Draw!";
}

function convertWord (word) {
    if (word === "r") return "Rock";
    if (word === "p") return "Paper";
    if (word === "s") return "Scissors";
}

restartBtn.addEventListener("click", function() {
    let isComfirm = confirm("Are you sure you want to restart");
    if (isComfirm === true) {
        aiScore_span.innerHTML = 0;
        userScore_span.innerHTML = 0;
    }
    console.log(isComfirm);
})

