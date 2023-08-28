async function getAdvice() {
    const resposta = await fetch("https://api.adviceslip.com/advice");
    const data = await resposta.json();
    document.getElementById('advice').innerHTML = data.slip.advice;
}

let botaoAdvice = document.getElementById("get-advice");
botaoAdvice.addEventListener("click", function() { // Adicione os parênteses após "function"
    getAdvice();
});