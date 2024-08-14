function botaoIMC() {
    let altura = prompt('Sua altura(m): ');
    let peso = prompt('Seu peso(Kg): ');
    let imc = peso/altura;
    return alert(`Seu IMC é de ${imc}Kg/m.`);
}