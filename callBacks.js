// callback = a function that is passed as an argument to another function.(argüman olarak diğe fonksiyona verilir"parametre olarak"")

// buralarda sıklıkla kullanılır:
//          1. dosya okuma
//          2. ağ isteği
//          3. veritabanı ile iletişim

//        "Hey! when you are done, call this next"





hello(leave);

function hello(callback) {
        console.log("helo")
        callback();
}

function leave () {
    console.log("leave");
}

function goodbye(){
    console.log("Bye!")
}