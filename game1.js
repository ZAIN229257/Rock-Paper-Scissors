function getComputerChoice () {
 const answre = Math.floor(Math.random() * 3);
 if(answre === 0)return "rock";
  if(answre===1)return "paper";
  return "scissors"; 
};

function getHumanChoice () {

     const input = prompt("Rock, Paper, Scissors?");
    if (!input) return "error"; // إذا ضغط المستخدم cancel
    const choice = input.toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors") return choice;
    return "error";
  
};

let humanScore = 0;

let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  

 if ((humanChoice === "rock" && computerChoice === "scissors"  )||
  (humanChoice === "scissors" && computerChoice === "paper"  )||
  (humanChoice === "paper" && computerChoice === "rock"  ))
  humanScore++;

   else if ((computerChoice === "rock" && humanChoice === "scissors"  )||
  (computerChoice === "scissors" && humanChoice === "paper"  )||
  (computerChoice === "paper" && humanChoice === "rock"  ))
computerScore++;
}

for(let i =0; i <5;i++){
const humanSelection = getHumanChoice();
if (humanSelection  ==="error"){
  alert("no good")
i--;}
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
alert(`You chose: ${humanSelection}\nComputer chose: ${computerSelection}`);


}

alert(`النتيجة النهائية:\nHuman: ${humanScore}\nComputer: ${computerScore}`);

