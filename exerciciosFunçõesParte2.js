//questã0 01- Validação Simples de Número
function validateNumber(n) {
    if (typeof n === "number") {
        return true;
    } else {
        throw new Error("O valor não é um número.");
    }
}

//questão 02 - Validação de Nome e Idade
function validateUser(name, age) {
    if (typeof name === "string" && name.trim() !== "" && typeof age === "number" && age >= 0) {
        return true;
    } else {
        return false;
    }
}
    
//questão 03 - Fatorial com Recursão
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
    
//questã0 04 - Contagem Regressiva Recursiva
function countDown(n) {
    if (n <= 0) return;
    console.log(n);
    countDown(n - 1);
}        

//questão 05 - Aplicação de Função
function applyFunction(fn, value) {
    return fn(value);
}
    
//questão 06 - Array de Funções
const operations = [
    (a, b) => a + b,
    (a, b) => a - b,
    (a, b) => a * b,
];

operations.forEach((operation) => {
    console.log(operation(4, 2));
});      
        
//questão 07 - Expressão Nomeada
const greet = function(name) {
    return `Olá, ${name}!`;
};  

//questão 08 - Função em Objeto
const user = {
    sayHi: function() {
        return "Olá!";
    },
};

//questão 09 - Callback Matemático
function calculate(a, b, callback) {
    return callback(a, b);
}

//questão 10 - Mensagem Formatada com Callback
function formatMessage(msg, formatter) {
    return formatter(msg);
}   

//questão 11 - Requisição Simulada
function fakeRequest(url, callback) {
    setTimeout(() => {
        callback(null, "OK");
    }, 1000);
}

//questão 12 - Encadeamento de Chamadas
fakeRequest("url1", (err, res) => {
    if (!err) {
        console.log("Resposta 1:", res);
        fakeRequest("url2", (err, res) => {
            if (!err) {
                console.log("Resposta 2:", res);
                fakeRequest("url3", (err, res) => {
                    if (!err) {
                        console.log("Resposta 3:", res);
                    }
                });
            }
        });
    }
});

//questão 13 - Mensagem com Atraso
function delayedHello() {
    setTimeout(() => {
        console.log("Hello after 1 second");
    }, 1000);
}

//questão 14 - Contador com Intervalo
function countToFive() {
    let count = 1;
    const intervalId = setInterval(() => {
        console.log(count);
        if (count === 5) {
            clearInterval(intervalId);
        }
        count++;
    }, 1000);
}
  
//questão 15 - Soma com Arrow Function
const sum = (a, b) => a + b;