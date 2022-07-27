const botoes = document.querySelectorAll('button');

botoes.forEach(botao => {
    botao.addEventListener('click', (event) => {
        const elemento = event.currentTarget;
        const resultado = document.getElementById('resultado');
    
        resultado.innerText += elemento.innerText;
    })

    document.getElementById('igual').addEventListener('click', () => {
        resultado.innerText = eval(resultado.innerText);
    })
    
    document.getElementById('del').addEventListener('click', () => {
        resultado.innerText =  resultado.innerText.slice(0, resultado.innerText.length-1);
    })
})
