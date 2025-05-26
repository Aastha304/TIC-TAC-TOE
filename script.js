let win = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];
let status0 = true;
let popup = document.querySelector(".popup");
let reset= document.querySelector("#res");
let count =0;

boxes = document.querySelectorAll("#box");
boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        console.log("box clicked");
    
        if(status0){
            box.innerText = "0";
            status0 = false;
            count++;
        }
        else{
            box.innerText = "X";
            status0 = true;
            count++;
        }
        box.disabled = true;

        const str = winCase();
        if(count>=9 && str==false){
            tie();
        }
    })  
    
})
const winCase = () =>{
    for(let pattern of win){
        let v1 = boxes[pattern[0]].innerText;
        let v2 = boxes[pattern[1]].innerText;
        let v3 = boxes[pattern[2]].innerText;

        if(v1!="" && v2!="" && v3!=""){
            if(v1===v2 && v2===v3){
                console.log(v2+" is winner!!!");
                result(v1);
                disableBoxes();

                return true;
        
            }
        }
    // return false;
    }
    return false;
}



const result = (winner)=>{
    popup.innerText = `Winner is ${winner}!!!`;
    popup.classList.remove("hidden");
    
}

const tie = ()=>{
    count =0;
    popup.innerText ="Match is a TIE!";
    popup.classList.remove("hidden");
    // return;
}

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;

    }
}

const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
}

const resetGame = () => {
    status0 = true;
    count =0;
    enableBoxes();
    popup.classList.add("hidden");
  };

reset.addEventListener("click",resetGame);


