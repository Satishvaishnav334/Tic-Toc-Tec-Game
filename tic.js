let boxes = document.querySelectorAll(".box");
let resbtn = document.querySelector(".resbtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newgame = document.querySelector("#new-game");

let turnO = true;  //playerO,playerX

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box is clicked");
        if (turnO) {
            box.innerText = "O";
            turnO = false;
            box.style.color = "yellow";
        }
        else {
            box.innerText = "X";
            turnO = true;
            box.style.color = "blue";
        }
        box.disabled = true;
        checkWinner();
    })
});

enableboxs = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
} 
const resetbtn = () =>{
    turnO = true;
    enableboxs()
    msgcontainer.classList.add("hide");
}


disablebtn = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
} 

const showWinner = (winner) => {
    msg.innerText = `congratulation winner is ${winner}`;
    msgcontainer.classList.remove("hide");
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        // console.log(pos2Val);
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner ", pos2Val);
                disablebtn()
                showWinner(pos2Val);
                

            }
        }
    }
}
resbtn.addEventListener("click",resetbtn);
newgame.addEventListener("click",resetbtn);