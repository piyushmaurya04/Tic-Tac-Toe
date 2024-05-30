let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let msg = document.querySelector(".msg");
let winner = document.querySelector("#winnerMsg");

let turn_o = true;
let win_patterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
]
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn_o) {
      box.innerText = "O";
      turn_o = false;
    } else{
      box.innerText = "X";
      turn_o = true;
    }
    box.disabled=true;
    checkWinner();
  })

})

const checkWinner=()=>{
    for (const pattern of win_patterns) {
      let pos1 = boxes[pattern[0]].innerText;
      let pos2 = boxes[pattern[1]].innerText;
      let pos3 = boxes[pattern[2]].innerText;
      if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1==pos2 && pos2==pos3){
          winner.textContent="Winner : "+pos1
          msg.classList.remove("hide")
          turn_o=true;
          break;
        }
      }
    }
    
}

resetBtn.addEventListener("click",()=>{
  boxes.forEach((box)=>{
    box.innerText="";
    box.disabled=false;
    msg.classList.add("hide")

  })
})

