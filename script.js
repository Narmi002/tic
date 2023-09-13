let audioturn=new Audio("ting.mp3")
let turn="X"
let isgameover=false


const changeTurn=()=>{
    if(turn==="X"){
        turn="0"
        return turn
    }
    else {
        turn="X"
        return turn
    }
}

const checkwin=()=>{
    let boxtext=document.getElementsByClassName("boxtex")
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
        [0,3,6],
        [1,4,7],
        [2,5,8],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText && boxtext[e[1]].innerText===boxtext[e[2]].innerText && boxtext[e[0]].innerText !=="")){
        document.querySelector('.info').innerText=boxtext[e[0]].innerText  + " won"
        isgameover=true
        document.getElementById("img").style.opacity="1"
        newgame();
        }



    })

}

let box=document.getElementsByClassName("box")
Array.from(box).forEach(element => {
    let boxtext=element.querySelector('.boxtex')
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn
            turn=changeTurn()
            audioturn.play()
            checkwin();

            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText="Turn for " + turn
            }
        }

    })
})

reset.addEventListener('click',()=>{
    let boxtext=document.querySelectorAll('.boxtex')
    Array.from(boxtext).forEach(element  =>{
        element.innerText=""
        turn="X"
        document.querySelector('.info').innerText="Turn for "+ turn
        isgameover=false
        document.getElementById("img").style.opacity="0"
    })
})
const newgame=()=>{
    let boxtext=document.querySelectorAll('.boxes')
    Array.from(boxtext).forEach(element => {
        e.innerText="";
        turn="X"
        console.log("new game")
        document.querySelector('.info').innerText="Turn for "+turn
        isgameover=false

    })
}


