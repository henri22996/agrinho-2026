function verificarResposta(letra) {
    let resultado = document.getElementById('resultado');

    if (letra === 'a') {
        resultado.textContent = "Correto! Rotação de culturas ajuda a preservar o solo.";
        resultado.style.color = 'green';
    } else {
        resultado.textContent = "Errado! Essa prática não é sustentável.";
        resultado.style.color = 'red';
    }
}