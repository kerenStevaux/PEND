/*Por Keren Stevuax, questão 9 e 10*/

/*questão 9: Conversão Implícita em Operadores Lógicos*/
console.log("5" - 2);
"5" - 2;
/*Acontece uma conversão de "5" para o número 5 acontece, então a operação fica 5 - 2, será mostrado no console o número 3*/


console.log("5" + 2);
"5" + 2;
/*O número 2 é convertido para a string "2", aí ocorre uma concatenção tornando o resultado de 52*/

console.log(true + 1);
true + 1;
/*O valor true é convertido para o número 1. Logo a operação então é 1 + 1 = 2*/

console.log(false + 10);
false + 10;
/*O valor false é 0, então o resultado será 10*/

/*questão 10: Desafio Final: Expressão Complexa*/
x = 5;
let y = 10;
let z = (x++ * --y) / 2 + (y % 3);
console.log("Valor de z:", z);

/*O valor final de z será 22.5.
 A sequência de operações segue a ordem dos operadores e as regras de conversão implícita, levando a este valor final.*/