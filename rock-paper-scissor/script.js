let userMove = "";
let computerMove = "";
let result ="";
let Move1 = "";
let Move2 = "";
let Result1 = "";
const game ={
    'win' : 0,
    'lose' : 0,
    'tie' : 0,
    'played':0
}

function getComputerMove(){
    const randomNumber =(Math.random());
    console.log(`random number is ${randomNumber}`);
    if(randomNumber < 1/3)
    {
        computerMove = "Rock";
    }
    else
    {
        if (randomNumber > 2/3)
        {
            computerMove ="Scissor";
        }
        else
        {
            computerMove = "Paper";
        }
    }
}
function evaluateMoves(){
    switch (`${userMove}${computerMove}`) {
        case 'RockPaper':
            result = 'Lose'; 
            break;
        case 'PaperRock':
            result = 'Win'; 
            break;
        case 'RockScissor':
            result = 'Win'; 
            break;
        case 'ScissorRock':
            result = 'Lose'; 
            break;
        case 'ScissorPaper':
            result = 'Win'; 
            break;
        case 'PaperScissor':
            result = 'Lose'; 
            break;
        default:
            result='Tie';
            break;
    }
    game.played += 1;
    Move1 = userMove;
    Move2 = computerMove;
    Result1 = result;
}

function gameSummary(){
    if(result == 'Win')
    game.win += 1;
    else{
        if(result == 'Lose')
            game.lose += 1;
        else
        {
            if(result == 'Tie')
                game.tie += 1;
        }
    }
}
function show(){
    document.getElementById('userMove').innerText = `${Move1}`;
    document.getElementById('computerMove').innerText = `${Move2}`;
    document.getElementById('result').innerText = `${Result1}`;
    document.getElementById('win').innerText = game.win;
    document.getElementById('lose').innerText = game.lose;
    document.getElementById('tie').innerText = game.tie;
    document.getElementById('played').innerText = game.played;
}
function reset(){
    game.win = 0;
    game.lose = 0;
    game.tie = 0;
    game.played = 0;
    Move1 = "";
    Move2 = "";
    Result1 = "";

}



