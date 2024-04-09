let kullanici_adi = "Osman";
let sifre = "132713";

let loggedIn = false;

while(loggedIn==false){

const ka = window.prompt("Kullanıcı adınızı giriniz: ");
const şf = window.prompt("Kullanıcı adınızı giriniz: ");


if(ka == kullanici_adi && şf == sifre){
    loggedIn = true;
    console.log("Giriş Başarılı");

}
else{
    console.log("Giriş Başarısız...")
}

}