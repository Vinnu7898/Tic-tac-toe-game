let boxs =document.querySelectorAll(".boxs") ;


let msgContainer =document.querySelector(".msgContainer");
let gamebtn =document.querySelectorAll(".gamebtn");
let resetbtn =document.querySelector(".resetbtn");
let newbtn =document.querySelector(".newbtn");

let turno = true;

let winnig =[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
  ];
  
  const resetgame = ()=>{
   enabledboxs();
   turno = true;
   msgContainer.classList.add("hide")
    
  };
  
  boxs.forEach((boxs)=>{
    boxs.addEventListener("click",()=>{
    console.log("box was click");
    if (turno==true) {
      boxs.innerText ="X";
      turno = false;
    } else {
      boxs.innerText ="O";
      turno=true;
      
    }
    boxs.disabled = true;
      checkwinnig();
    }
    );
  });
  const disabledboxs =() =>{
    for (box of boxs) {
    box.disabled = true;  
    }
  };
    const enabledboxs =() =>{
    for ( box of boxs) {
    box.disabled = false;  
    box.innerText ="";
    }
  };
  const shawwinner = (winner)=>{
    msgContainer.innerText = `Congratulations, Winner is a ${winner}`;
    msgContainer.classList.remove("hide");
    disabledboxs();
  }
  
  
const checkwinnig = () => {
  for (let pattern of winnig) {
    let posi1 = boxs[pattern[0]].innerText;
    let posi2 = boxs[pattern[1]].innerText;
    let posi3 = boxs[pattern[2]].innerText;
    if(posi1 != "" && posi2 != "" && posi3 != "") {
      if(posi1 === posi2 && posi2 === posi3){
        
        console.log("winner is :",posi1)
        shawwinner(posi1);
      }
    }
  }
}
resetbtn.addEventListener("click",resetgame);
newbtn.addEventListener("click",
resetgame);
