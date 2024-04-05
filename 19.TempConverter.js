
const textBox = document.getElementById("textBox");
const toF = document.getElementById("toF");
const toC = document.getElementById("toC");
const sonuc = document.getElementById("sonuc");
let temp;


function cevir(){
    if(toF.checked){
      
        temp = textBox.value;
        temp = temp * 9 / 5 + 32;
        sonuc.textContent = temp+"°F";


    }
    else if(toC.checked){

        temp = textBox.value;
        temp = (temp - 32) * 5/ 9;
        sonuc.textContent = temp+"°C";


    }
    else{

        sonuc.textContent = "Birini seçiniz...";

    }

}
