//Por Keren Stevuax Anastácio e Kaique Primissia

//questão 01- Hello World
function sayHello() {
    console.log("Hello, World!");
}
sayHello();

//questão 02- Soma Simples
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 7));

//questão 03- Variável Local
function localExample(){
    let message = "Variável local"

    localExample();
}
conosle.log(message); /*erro dizendo que o console não está definido*/

//questão 04- Saudação por Nome
function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet("Amanda"); 

//questão 05 - Área do Círculo

function calculateArea(radius) {
    return Math.PI * radius * radius; 
  }
  console.log(calculateArea(2));

//questão 06-Data Atual
function currentDate() {
    let today = new Date();
    console.log(today);
};

//questão 07-Shadowing Básico
let x = 10;
function shadowExample(x) {
  console.log("Parâmetro x:", x); 
  console.log("Variável global x:", 10);
}
shadowExample(20);

//questão 08 - Primo Simples
function isPrime(n) {
    if (n <= 1) {
      return false;
    }
    let count = 0;
    for (let i = 1; i <= n; i++) {
      if (n % i === 0) {
        count++; 
      }
    }
    return count === 2;
  }
  console.log(isPrime(2));  
  console.log(isPrime(4));  
  console.log(isPrime(7));  
  console.log(isPrime(9));  
  console.log(isPrime(11)); 
  console.log(isPrime(1));

//questão 09 - Conversão de Temperatura
function toFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

let celsius = 30; 
let fahrenheit = 77;

console.log(`${celsius}°C é igual a ${toFahrenheit(celsius)}°F`);
console.log(`${fahrenheit}°F é igual a ${toCelsius(fahrenheit)}°C`);

//questão 10 - Máximo em Array
function getMax(arr) {
  if (arr.length === 0) {
      throw new Error("O array está vazio.")
  }

  let max = arr[0]; 
  for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
          max = arr[i]; 
      } }
  return max;}

const numero = [3, 5];
console.log(`O maior valor é: ${getMax(numero)}`);

//questão 11 - Média de Notas
function average(scores) {
  let soma = 0;
   
  for (let i = 0; i < scores.length; i++) 
  soma += scores[i];
   
 let media = soma / scores.length;
 return media;

}
const scores = [8, 7.5, 9, 10];
const media = average(scores);
console.log(`mean: ${media}`);

//questão 12 - Construção de Nome Completo
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
console.log(fullName("João", "Silva"));       
console.log(fullName("Maria", "Oliveira"));              
console.log(fullName("Pedro", "Almeida"));   

//questão 13 - Chamadas Encadeadas
function double(n) {
  return n * 2;
}
function quadruple(n) {
  return double(double(n));
}

console.log(quadruple(3)); 

//questão 14 - Shadowing Médio
let mode = "light";

function toggleMode(mode) {
    if (mode === "light") {
        mode = "dark";
    } else {
        mode = "light";
    }
    return mode; 
}

console.log("Modo global antes:", mode);
const localMode = toggleMode(mode); 
console.log("Modo local retornado pela função:", localMode);
console.log("Modo global depois:", mode);
 