const tools = ["Rock", "Scissors","Paper"];
            function game(){
                let score = 0;
                function computerPlay(){
                    let i = Math.floor(Math.random()*(2-0+1))+0;
                    return tools[i];
                }
                function gameRound(playerSelection, computerSelection){
                    playerSelection = playerSelection[0].toUpperCase()+playerSelection.slice(1).toLowerCase();
                    if (tools.indexOf(playerSelection)-tools.indexOf(computerSelection)==-1||playerSelection=="Paper"&&computerSelection=="Rock"){
                        score+=1;
                        return `You win! ${playerSelection} beats ${computerSelection}`;
                    }
                    else if (playerSelection == computerSelection){
                        return `No winner! Both have ${playerSelection}`;
                    }
                    else{
                        return `You lose! ${computerSelection} beats ${playerSelection}`;
                    }
                }
                for (let i=1;i<=5;i++){
                    let playerSelection = prompt("Your weapon: ");
                    console.log(gameRound(playerSelection, computerPlay()));
                }
                if (score>=3){
                    return 'You are the winner!';
                }
                return 'You lose';
            }
            console.log(game());