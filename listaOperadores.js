/*Lista de Exercícios por Keren Stevaux Anastácio*/

/*Exercício 01*/
console.log("Exercício 01");

let x = 10;

console.log(x);


/*Exercício 02*/
console.log("Exercício 02");

let a = 20;
let b = 5;

console.log( a + b );
console.log( a - b );
console.log( a * b );
console.log( a / b );
console.log( a % b );

/*Exercício 03*/
console.log("Exercício 03");

let num = -15;
console.log(-num);

/*Exercício 04*/
console.log("Exercício 04");

let count = 5;

console.log(count++);
console.log(count--);

/*Exercício 05*/
console.log("Exercício 05");

{  x = 10;

    console.log(x += 5);
    console.log(x -= 3);
    console.log(x *=2);
    console.log(x /=4);
    console.log(x %= 3);
}

/*Exercício 06*/
console.log("Exercício 06");

let p = true;
let q = false;

console.log(p && q); 
console.log(p || q);
console.log(!p);
console.log(!q);

 /*Exercício 07*/
console.log("Exercício 07");  

console.log(0 || "Hello"); //Hello
console.log("" && "World"); //
console.log(null ?? "Default Value"); //Default value
console.log(undefined ?? 42); //42


 /*Exercício 08*/
 console.log("Exercício 08"); 

 let resultado = 10 + 5 * 2 > 20 && !false;
/* O valor será false, por que o && consdera se ambas as respostas estiverem certas.*/

