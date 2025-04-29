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

