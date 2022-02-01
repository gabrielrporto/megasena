const numeros = document.getElementsByTagName('p');
sortear = () => {
    let numerosSorteados = [];
    for (let i = 0; i < 6; i++){
        novoNumero = Math.floor((Math.random() * 60) + 1);
        numerosSorteados.includes(novoNumero) ? i--  : numerosSorteados.push(novoNumero)
    }
    numerosSorteados.sort((a,b) => a - b)
    escrever(numerosSorteados);
}
escrever = arr => arr.forEach((element, index) => numeros[index].innerHTML = element);