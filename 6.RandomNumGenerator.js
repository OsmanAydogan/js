const btn = document.getElementById("btn1").onclick = function() {
    document.getElementById("lbl11").textContent = Math.floor(Math.random() * 6) +1;
    document.getElementById("lbl2").textContent = Math.floor(Math.random() * 6) +1;
    document.getElementById("lbl3").textContent = Math.floor(Math.random() * 6) +1;
} 