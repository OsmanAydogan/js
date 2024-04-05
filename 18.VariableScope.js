// variable scope = local, global
// x --> local
// y --> global

let y  = 31;

function function1(){
    let x  = 1;
    console.log(x);
    console.log(y);
}

function function2(){
    let x  = 2;
    console.log(x);
    console.log(y);
}

function2();
