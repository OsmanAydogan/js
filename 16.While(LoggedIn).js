let correctUsername = "kullanici";
let correctPassword = "sifre";

let loggedIn = false;

while (!loggedIn) {
    let username = prompt("Kullanıcı adınızı giriniz:");
    let password = prompt("Şifrenizi giriniz:");

    if (username === correctUsername && password === correctPassword) {
        loggedIn = true;
        console.log("Giriş başarılı!");
    } else {
        console.log("Kullanıcı adı veya şifre yanlış. Lütfen tekrar deneyin.");
    }
}
