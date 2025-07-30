let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgCon=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;
let count=0;

const winPatt=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO)
        {
            box.innerText="O";
            box.classList.add("o-text")
            turnO=false;
        }
        else{
            box.innerText="X";
            box.classList.add("x-text");
            turnO=true;
        }
        box.disabled=true;
        count++;

        let isWinner=checkWinner()

        if (count === 9 && !isWinner)
            gameDraw();
    });
});

const gameDraw = () => {
    msg.innerText=`Game was a DRAW.`;
    msgCon.classList.remove("hide");
    disableBoxes();
}

const checkWinner=()=>{
    for(let patt of winPatt)
    {
        let pos1=boxes[patt[0]].innerText;
        let pos2=boxes[patt[1]].innerText;
        let pos3=boxes[patt[2]].innerText;

    if(pos1!="" && pos2!="" && pos3!="")
        if(pos1 === pos2 & pos2 === pos3) 
            showWin(pos1);
    }
};

const showWin=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgCon.classList.remove("hide");
    disableBoxes();
}

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        box.classList.remove("o-text");
        box.classList.remove("x-text");
    }
}

const resetGame=()=>{
    turnO=true;
    count=0;
    enableBoxes();
    msgCon.classList.add("hide");
};

newGameBtn.addEventListener("click",resetGame)
resetBtn.addEventListener("click",resetGame)
