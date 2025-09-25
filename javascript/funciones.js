//ejercicio 1
function fecha() {
    console.log(new Date())
}
fecha();

// ejercicio 2
function nota(a) {
    if (a>=3.5) {
        console.log("aprobo")
    } else {
        console.log("reprobo")
    }
}
nota(5.0);

//ejercicio 3
let texto=(olita)=> olita.toUpperCase()
console.log(texto("olita"));

//ejercicio 4
let num=(a)=> {if (a % 2 !==0) {
    console.log("es impar")
} else {
    console.log("es par")
}
}
num(13);