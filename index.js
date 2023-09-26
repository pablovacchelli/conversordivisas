   function convertir () {
        let resultado = 0;

let dolar = 735;

let euro = 373;



for(let i = 3; i>=1; i--) {
    let divisa = prompt ('Seleccionar dolar o euro. Intentos restantes: ' + i);

if (divisa === 'dolar') {
    let valor = prompt('Ingresar cantidad');
    let resultado = valor*dolar;
    alert(resultado);

}else if (divisa === 'euro') {
    let valor = prompt('Ingresar cantidad');
    let resultado = valor*euro;
    alert(resultado);
}else {
    alert('Error. Intente nuevamente');
}

}
alert('Te quedaste sin intentos. Compra la versión premium.')
   }

   convertir();


