let boxes=document.querySelectorAll('.btn');
let reset=document.getElementById('reset-btn');
let newgamebtn=document.getElementById('new-game');
let turnO=true;

winningpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const enableboxes= ()=>{
    boxes.forEach(box => {
        box.innerText="";
        box.disabled=false;
    });
}

const resetgame= ()=>{
    turnO=true;
    enableboxes();
    
}

boxes.forEach((box)=>{
    box.addEventListener('click',(Event)=>{
        if(turnO==true){
            Event.target.style.color='red'
            box.innerText="O";
            turnO=false;
        }
        else{
            Event.target.style.color='black'
            box.innerText="X";
            turnO=true;
        }
        box.disabled =true;

        winner();
    })
})

function winner(){
    for (let patterns of winningpatterns) {
        let pos1val=boxes[patterns[0]].innerText;
        let pos2val=boxes[patterns[1]].innerText;
        let pos3val=boxes[patterns[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val==pos2val && pos2val==pos3val){
                setTimeout(()=>{
                    document.querySelector('.win-box').style.visibility='visible';
                    document.querySelector('.msg').innerText=`Congratulations, the winner is: ${pos1val}`;
                },800)
            }
        }
    }
}

newgamebtn.addEventListener('click',()=>{
    document.querySelector('.win-box').style.visibility='hidden';
    resetgame();
})

reset.addEventListener('click',resetgame)