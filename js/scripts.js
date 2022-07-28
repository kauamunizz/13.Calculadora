'strict mode'

const scripts = (() => {
    const resultado = document.getElementById('resultado');

    function events() {
        document.querySelectorAll('.btn-op').forEach(botao => {
            botao.addEventListener('click', (event) => {
                const elemento = event.currentTarget;
            
                resultado.innerText += elemento.innerText;
            });
        });
        
        document.getElementById('igual').addEventListener('click', () => {
            resultado.innerText = eval(resultado.innerText);
        });
        
        document.getElementById('del').addEventListener('click', () => {
            resultado.innerText = resultado.innerText.slice(0, resultado.innerText.length-1);
        });
    }

    function init() {
        events();
    }
    
    return {
        init
    }
})();

document.addEventListener('DOMContentLoaded', scripts.init);