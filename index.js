
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
counter.innerHTML = "<mark>" + count + "</mark>"
}

