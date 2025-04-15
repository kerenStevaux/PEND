//Por Keren Stevaux Anastácio, 2°D

// MENU DE EXECUÇÃO
function menu() {
    const exercicios = {
        1: ex1,
        2: ex2,
        3: ex3,
        4: ex4,
        5: ex5,
        6: ex6,
        7: ex7,
        8: ex8,
        9: ex9,
        10: ex10,
        11: ex11,
        12: ex12,
        13: ex13,
        14: ex14,
        15: ex15,
        16: ex16,
        17: ex17,
        18: ex18
    };

    let escolha;
    do {
        escolha = prompt("Escolha um exercício (1 a 18) ou 0 para sair:");
        if (escolha == 0) {
            console.log("Encerrando o programa...");
            break;
        }
        const exec = exercicios[escolha];
        if (exec) {
            exec();
        } else {
            console.log("Opção inválida.");
        }
    } while (true);
}

menu();

//exercicios

function ex1() {
    let numero = prompt("Digite um número:");

    if (numero > 0) {
        console.log("O número é positivo.");
    }
    else console.log("O número é negativo");
}

function ex2() {
    let numero = prompt("Digite um número:");

    if (numero % 2 === 0) {
        console.log("O número é par.");
    } else {
        console.log("O número é ímpar.");
    }
}

function ex3() {
    let turno = prompt("Digite seu turno (M = manhã, T = tarde, N = noite):");

    if (turno === "M") {
        console.log("Bom dia!");
    } else if (turno === "T") {
        console.log("Boa tarde!");
    } else if (turno === "N") {
        console.log("Boa noite!");
    } else {
        console.log("Turno inválido.");
    }
}

function ex4() {
    let num1 = (prompt("Digite o primeiro número:"));
    let num2 = (prompt("Digite o segundo número:"));

    if (num1 > num2) {
        console.log("O maior número é: " + num1);
    } else if (num2 > num1) {
        console.log("O maior número é: " + num2);
    } else {
        console.log("Os dois números são iguais.");
    }
}

function ex5() {
    let numero = (prompt("Digite um número:"));

    let resultado = numero >= 0 ? "Positivo" : "Negativo";
    console.log(resultado);
}

function ex6() {
    const opcao = prompt("Escolha: 1 - Início, 2 - Sobre, 3 - Sair");
    switch (opcao) {
        case "1":
            console.log("Início");
            break;
        case "2":
            console.log("Sobre");
            break;
        case "3":
            console.log("Saindo...");
            break;
        default:
            console.log("Opção inválida");
    }
}

function ex7(){
    let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
}

function ex8(){
    let i = 5;
    do {
        console.log(i);
        i--;
    } while (i >= 1);
}

function ex9(){
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

function ex10(){
    let soma = 0;
for (let i = 1; i <= 10; i++) {
    soma += i;
}
console.log(soma);
}

function ex11(){
    let array = [10, 20, 30, 40, 50];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
}

function ex12(){
    let nomes = ['Kevin', 'Angelina', 'Carlos', 'Felipe'];
for (let nome of nomes) {
    console.log(nome);
}
}

function ex13(){
    const pessoa = {
        nome: "Natalia",
        idade: 45,
        cidade: "Rj"
    };
    for (const prop in pessoa) {
        console.log(prop + ": " + pessoa[prop]);
    }
}

function ex14(){
    for (let i = 1; i <= 10; i++) {
        if (i === 5) {
            break;
        }
        console.log(i);
    }
}

function ex15(){
    for (let i = 1; i <= 10; i++) {
        if (i === 7) {
            continue;
        }
        console.log(i);
    }
}

function ex16(){
    const nota = Number(prompt("Digite a nota (0 a 10):"));
    if (nota < 6) {
        console.log("Reprovado");
    } else if (nota < 8) {
        console.log("Recuperação");
    } else {
        console.log("Aprovado");
    }
}

function ex17(){
    const num = Number(prompt("Digite um número para ver a tabuada:"));
for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}
}

function ex18(){
    const array = [1, "texto", true, 42, null, 3.14, "abc"];
    let count = 0;
    for (const item of array) {
        if (typeof item === "number") count++;
    }
    console.log("Quantidade de números:", count);
}

