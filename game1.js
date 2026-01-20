function getComputerChoice () {
 const answre = Math.floor(Math.random() * 3);
 if(answre === 0)return "rock";
  if(answre===1)return "paper";
  return "scissors"; 
};



let humanScore = 0;
let tan = 0;
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


   else if ((computerChoice === "rock" && humanChoice === "rock"  )||
  (computerChoice === "paper" && humanChoice === "paper"  )||
  (computerChoice === "scissors" && humanChoice === "scissors"  ))
tan++;
}

const Rbutton = document.querySelector("#Rock");
Rbutton.addEventListener("click",()=>{

const humanChoice =  "rock";
const computerChoice  = getComputerChoice () ;
playRound  (humanChoice,computerChoice );

    alert(`You chose: ${humanChoice}\nComputer chose: ${computerChoice}`);

alert(`ة النهائية:\nHuman: ${humanScore}\nComputer:${computerScore}\n ten:${tan}`);


  

});
const sbutton = document.querySelector("#scissors");
sbutton.addEventListener("click",()=>{

const humanChoice =  "scissors";
const computerChoice  = getComputerChoice () ;
playRound  (humanChoice,computerChoice );

    alert(`You chose: ${humanChoice}\nComputer chose: ${computerChoice}`);

alert(`ة النهائية:\nHuman: ${humanScore}\nComputer:${computerScore}\n ten:${tan}`);


  

});
const pbutton = document.querySelector("#paper");
pbutton.addEventListener("click",()=>{

const humanChoice =  "paper";
const computerChoice  = getComputerChoice () ;
playRound  (humanChoice,computerChoice );

    alert(`You chose: ${humanChoice}\nComputer chose: ${computerChoice}`);

alert(`ة النهائية:\nHuman: ${humanScore}\nComputer:${computerScore}\n ten:${tan}`);


  

});

