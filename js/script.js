async function getAdvice() {
    const resposta = await fetch("https://api.adviceslip.com/advice");
    const data = await resposta.json();
   // console.log(data)
   // console.log(data.slip.advice)
    document.getElementById('advice').innerHTML = data.slip.advice;
}

getAdvice();