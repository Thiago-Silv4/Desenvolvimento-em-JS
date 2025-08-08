// ATIVIDADE 1

// while (Loop com Condição)

// let contador = 0;
// while (contador < 11) {
// console.log(`Contagem: ${contador}`);
// contador++;
// }

// ATIVIDADE 2

// for (let i = 0; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// ATIVIDADE 3

// const numero = 5;

// for (let i = 1; i <= 10; i++) {
//     const resultado = numero * i;
//     console.log(`${numero} x ${i} = ${resultado}`);
// }

// ATIVIDADE 4

// const carros = ['Audi', 'BMW', 'GOL']
// for (const carro of carros){
//     console.log(carro);
// }

// ATIVIDADE 5

// let soma = 0;
// for (let i = 1; i <= 100; i++) {
//   soma = soma + i;
// }
// console.log(`A soma dos números de 1 a 100 é: ${soma}`);

// ATIVIDADE 6

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }
// console.log("Thiago passou por aqui!"); 

// ATIVIDADE 7 

// const numeroSecreto = Math.floor(Math.random() * 10) + 1;

// let tentativas = 0;
// let palpiteUsuario = 0;

// while (palpiteUsuario !== numeroSecreto) {

//   palpiteUsuario = parseInt(prompt("Adivinhe o número secreto (1 a 10):"));

//   tentativas++;

//   if (palpiteUsuario === numeroSecreto) {
//     alert(`Parabéns! Você acertou em ${tentativas} tentativa(s)! O número secreto era ${numeroSecreto}.`);
//   } else if (palpiteUsuario < numeroSecreto) {
//     alert("O número secreto é maior! Tente novamente.");
//   } else {
//     alert("O número secreto é menor! Tente novamente.");
//   }
// }

// ATIVIDADE 8

// let soma = 0;
// let numero;

// do {
//   numero = parseInt(prompt("Digite um número para somar (ou 0 para parar):"));
  
//   if (numero !== 0) {
//     soma += numero;
//   }
  
// } while (numero !== 0);

// alert(`A soma total é: ${soma}`);

// ATIVIDADE 9

// const frutas = ['Maçã', 'Banana', 'Laranja', 'Pera'];
// let i = 0; 

// while (i < frutas.length) {
//     console.log(frutas[i]);
//     i++; 
// }
