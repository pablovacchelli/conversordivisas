
    let resultado = 0;

let dolar = 735;

let euro = 373;




let divisa = prompt ('seleccionar dolar o euro');

if (divisa = dolar) {
    let valor = prompt('ingresar cantidad');
    let resultado = valor/dolar;
    console.log(resultado);

}else if (divisa = euro){
    let valor = prompt('ingresar cantidad');
    let resultado = valor/euro;
    console.log(resultado);
}else {
    alert('Error. Intente nuevamente');
}
