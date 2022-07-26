const botoes = document.querySelectorAll('button');

botoes.forEach(botao => {
    botao.addEventListener('click', (event) => {
        const elemento = event.currentTarget;
        const resultado = document.getElementById('resultado');
    
        resultado.innerText += elemento.innerText;

    })
    igual.addEventListener('click', () => {
        resultado.innerText = eval(resultado.innerText);
    })
})

// function calcular() {
//     let numeros = resultado.innerText
//     eval(numeros);
// }



