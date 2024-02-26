//Ejercicio 1

let vehiculo = {
    nombre: 'jetta',
    marca: 'volswagen',
    color: 'negro',
    tipo: 'deportivo',
    precio: '15000 USD', 
}
console.log(`El automovil ${vehiculo.nombre}, marca ${vehiculo.marca}, tipo ${vehiculo.tipo}, tiene un precio de: $${vehiculo.precio}`)


//Ejercicio 2

let cuentaBancaria = {
    cliente: 'Maria Camila Acevedo',
    numeroCuenta: '1098796824',
    banco: 'Davivienda',
    depositos: 3500000,
    retiros: 250000,
    saldo: function(){  // 20%
        let saldo = this.depositos - this.retiros;
        console.log("El saldo en su cuenta es: $",saldo);
    }
}

cuentaBancaria.saldo();


//Ejercicio 3

const factura = {
    numero: 201,
    cliente: 'Transportes Plus',
    divisa: 'USD',
    subtotal: 320.25,
    impuesto: 75.55,
}

factura.total  = factura.subtotal + factura.impuesto;
total = factura.subtotal + factura.impuesto;

const Abonos = {
    abono1 : Math.ceil(total/3),
    abono2 : Math.ceil(total/3),
    abono3 : Math.ceil(total/3),
}

Object.assign(factura ,Abonos);
console.log(factura);







