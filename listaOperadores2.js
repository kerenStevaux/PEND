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

/*No início, x = 5, então o valor de x++ é 5 e depois x é incrementado para 6.
O operador --y é decrementado primeiro e depois o valor é usado na expressão. 
y vale 10, então se torna 9 antes de ser usado na operação.

x++ * --y: Agora temos a expressão 5 * 9, que resulta em 45.
O resultado 45 é dividido por 2, o que dá 22.5 

y % 3: O operador % é o operador de módulo, que retorna o resto da divisão de y por 3.
Com y = 9, temos 9 % 3 = 0 (porque 9 dividido por 3 tem resto 0).
 somamos o resultado da divisão 22.5 com o resultado do módulo 0, ou seja, 22.5 + 0 = 22.5.*/
