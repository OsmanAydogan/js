// How to accept user input.

// 1. Easy way = Window prompt.
// 1. Pro way = HTML textbox.

//let username;
//username = window.prompt("What is your username: ");
//console.log(username);

let giris;

document.getElementById('buton').onclick = function(){
    giris = document.getElementById('text').value 
    document.getElementById('id1').textContent = giris;
    
}