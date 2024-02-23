const nombre = 'Maria Camila';
const apellidoPaterno = 'Acevedo';
const apellidoMaterno = 'Caballero';
const nacimiento = '07/04/1997';
const sexo = 'femenino'

console.log('NOMBRE: '+ nombre);
console.log('APELLIDO PATERNO: '+apellidoPaterno);
console.log('APELLIDO MATERNO: '+apellidoMaterno);
console.log('FECHA NACIMIENTO: '+nacimiento);
console.log('SEXO: '+sexo);

const ap = apellidoPaterno.slice(0,2);
const am = apellidoMaterno.slice(0,1);
const nom = nombre.slice(0,1);
const s = nacimiento.split('/');
const sex = sexo.slice(0,1);

console.log(`${ap.toUpperCase()}${am.toUpperCase()}${nom.toUpperCase()}${s[2]}${s[1]}${s[0]}${sex.toUpperCase()}`);