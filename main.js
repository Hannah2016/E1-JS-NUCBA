//1.Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

function numPar (numero) {

    if (numero % 2 === 0)
        console.log("Es un numero par")
    else console.log("No es un numero par")
}

// numPar(10)

//2.Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

function numMayorMenor (a, b) {

    if (a > b)
        console.log(`${a} es mayor`); 
    else if (b > a)
        console.log(`${b} es mayor`);
    else if (a == b) 
        console.log(`${a} y ${b} son iguales`);
                     
}

// numMayorMenor(2, 4)

//3.Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

function multiploDeCinco (multiplo){

    if (multiplo % 5 === 0)
        console.log(`${multiplo} es multiplo de 5`)
    else console.log(`${multiplo} no es multiplo de 5`);
    
}

// multiploDeCinco(10)

//4.Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

function cuenta (number){

    let aumento = -1
    while (aumento < number){
        aumento++; 
        console.log(aumento) 
    }
      
}

// cuenta(10)

//5.Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

//6.Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

let array = [1, 2, 3, 4, 5]

for( let i = 0 ; i < array.length ; i++){
    //console.log(array[i])
}

//7.Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

//8.Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

//No estoy muy segura de como resolverla, esperare a los viedeos de solucion para practicar mas! Disculpen los fallos, estudiare mas para la siguiente entrega.