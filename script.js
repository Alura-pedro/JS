alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto chute diferente de numero secreto
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10: ');
    // se chute igual a numero secreto
    if (chute == numeroSecreto) {
        alert(`Isso ai, você descobriu o número secreto (${numeroSecreto}) após ${tentativas} tentativas.`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1
        tentativas++;
    }
}
