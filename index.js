
//Global Variables
let count = 0;

const counter = document.getElementById('counter');


//functions

const increase=()=>{
    count++;
    counter.innerText = count;
}

const decrease=()=>{
count--;
counter.innerText = count;
}

const reset=()=>{
count= 0;
counter.innerHTML = "<mark>" + count + "</mark>";
}

const selectTheme = (theme)=> {
    document.getElementsByTagName("body")[0].className = theme;
    document.getElementsByTagName("main")[0].className = theme;


    const buttons = document.getElementsByTagName('button');
    for(let i=0; i<buttons.length; i++){
        buttons[i].className = theme;
    } 

}

