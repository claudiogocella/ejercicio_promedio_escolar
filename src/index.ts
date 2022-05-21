//PROMEDIO ESCOLAR 

let alumno: string = prompt ("Ingrese su nombre");
let notas : number[], = new Array(3); 
let suma : number = 0
let promedio : number  = 0

for (let i: number=0 ; < 3 ; i++) {
  arregloNotas[i] = Number (prompt("Ingrese su nota numero" + i + 1)));
  suma += arregloNotas[i]; 
}

promedio = suma / 3;

console.log / "El promedio del alumno" + nombre " es " + promedio);

//console.log(notas)
//console.log(promedio);

/*let calcularPromedio = (nombre : string, arregloNotas: number[]){
suma += arregloNotas[i]; 
}; 

promedio = suma / 3; 

console.log/"El promedio del alumno" + nombre " es " + promedio);" */