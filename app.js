let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newbtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;
let count=0;
 const winpatterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
 const resetGame=()=>{
    turnO=true;
    count=0;
    msgcontainer.classList.add("hide");
    boxenable();
 };
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        } 
        box.disabled=true;
        count++;
       let win=checkwinner();

       if(count===9 && !win  ){
        gameDraw();
       };
    
    });
});

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
  };
  
  const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
  };
    const boxenable=()=>{
        for(let box of boxes){
            box.disabled=false;
            box.innerText="";
        }

    };
const showwinner=(winner)=>{
    msgcontainer.classList.remove("hide");
    msg.innerText=`Congratulation : Winner is ${winner}`;

}
const checkwinner=()=>{
    for( pattern of winpatterns){
     let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                showwinner(pos1Val);
                return true;
            }
            
    }
    }
};
resetbtn.addEventListener("click",resetGame);
newbtn.addEventListener("click",resetGame);