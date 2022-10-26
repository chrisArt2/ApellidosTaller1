let numeroIteracion = prompt("Porfavor Ingrese el número de personas que desea agregar, Debe ser un número entero positivo", '');

numeroIteracion = parseInt(numeroIteracion);


//Entrada de Datos:

let arreglo = [];

//Pedir Nombres
for(let indice = 1; indice<=numeroIteracion; indice++){
    arreglo[indice] = prompt("Ingrese el nombre de la persona Nombre y Apellido ", '');
}

//Elegir a tres personas Aleatoriamente
//Mostrar Nombres
for(let indice2 = 1; indice2<=3; indice2++){
    //document.write(arreglo[indice2] + "<br>");
    document.write(arreglo[Math.round(Math.random()*(1 + numeroIteracion- 1) + 1)]+ "<br>");
}

alert("Estos son los ganadores: ");






































































































