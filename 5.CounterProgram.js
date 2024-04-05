
const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const resetBtn = document.getElementById("reset");
const countLbl = document.getElementById("counter");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLbl.textContent = count
}

decreaseBtn.onclick = function() {
    if(countLbl.textContent == 0){
    // do nothing
    }
    
    else{
    count--;
    countLbl.textContent = count
}

}

resetBtn.onclick = function() {
    count = 0;
    countLbl.textContent = count;
}

