const lbl = document.getElementById("lbl");


const bttn = document.getElementById("bttn").onclick = function(){
    age = document.getElementById("input").value
    
    /* age <, = gibi ifadeler kullanınca js oto olarak int e çevirir.  */
    if(age <= 18) {
     lbl.textContent = `You are a child!`;
     console.log(typeof(age));
    
    }
    else {
        lbl.textContent = `You are NOT child!`;
    }
}



