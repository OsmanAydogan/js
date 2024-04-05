

function zarlaButon() {
    const giris = document.getElementById("giris").value;
    const zarSonuc = document.getElementById("zarSonuc");
    const resimler = document.getElementById("resimler");
    const values = [];
    const images = [];

    for(let i=0; i< giris; i++){
        const deger = Math.floor(Math.random() * 6) + 1;
        values.push(deger);
        images.push(`<img src= "icons/${deger}.png">`);
    }
    zarSonuc.textContent = `zarlar: ${values.join(", ")}`;
    resimler.innerHTML = images.join('');
}