const uScore = document.querySelector(".userSc");
const cScore = document.querySelector(".comSc");
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
 let userScore=0;
 let comScore=0;

//generate computer choice
const genComChoice = () =>{
    const options = ["rock","paper","scissor"]; //array of choice
    const randIndx = Math.floor(Math.random() * 3);  //random function on array
    return options[randIndx];  //return random values in array
};

const resetGame = () =>{
    userScore=0;
    uScore.innerText=userScore;
    comScore=0;
    cScore.innerText=comScore;
    playGame(userChoice);
};


let playGame = (userChoice) => {
    const comChoice = genComChoice();
    if(userChoice===comChoice){
        msg.innerText="It's a draw!";
        msg.style.backgroundColor="yellow";
    }else{
        if(userChoice==="rock" && comChoice==="paper"){

            msg.innerText=`You lose! ${comChoice} beats your ${userChoice}`;
            msg.style.backgroundColor="red"; 
            comScore++;
            cScore.innerText=comScore;

        }else if(userChoice==="rock" && comChoice==="scissor"){

            msg.innerText=`You win! your ${userChoice} beats ${comChoice}`;
            msg.style.backgroundColor="green";
            userScore++;
            uScore.innerText=userScore;

        }else if(userChoice==="paper" && comChoice==="rock"){

            msg.innerText=`You win! your ${userChoice} beats ${comChoice}`;
            msg.style.backgroundColor="green";
            userScore++;
            uScore.innerText=userScore;

        }else if(userChoice==="paper" && comChoice==="scissor"){

            msg.innerText=`You lose! ${comChoice} beats your ${userChoice}`;
            msg.style.backgroundColor="red";
            comScore++;
            cScore.innerText=comScore;

        }else if(userChoice==="scissor" && comChoice==="rock"){

            msg.innerText=`You lose! ${comChoice} beats your ${userChoice}`;
            msg.style.backgroundColor="red";
            comScore++;
            cScore.innerText=comScore;

        }else if(userChoice==="scissor" && comChoice==="paper"){

            msg.innerText=`You win! your ${userChoice} beats ${comChoice}`;
            msg.style.backgroundColor="green";
            userScore++;
            uScore.innerText=userScore;

        }
    }
    if(userScore===10){
        msg.innerText=`congratulations you won the game!!!
        lets get started again`;
        msg.style.backgroundColor="pink";
        msg.style.border="none";
        msg.style.borderRadius=0;
        resetGame();
    }else if(comScore===10){
        msg.innerText=`computer won the game!!!
        lets get started again`;
        msg.style.backgroundColor="pink";
        msg.style.border="none";
        msg.style.borderRadius=0;
        resetGame();
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});
