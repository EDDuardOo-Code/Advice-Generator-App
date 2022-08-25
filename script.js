const btnAdvice = document.getElementById('getData');
const textAdvice = document.getElementById('advice');
const nomAdvice = document.getElementById('adviceNom');


btnAdvice.addEventListener('click',() =>{
    getAdvice();
}
)
 window.onload = () =>{
    getAdvice();
}
function getAdvice(){
    fetch('https://api.adviceslip.com/advice').then(response =>{
        return response.json();
    }).then(adviceData => {
    
        const adviceObj = adviceData.slip;
        textAdvice.innerHTML =`<p>${adviceObj.advice}</p>`;
        nomAdvice.innerHTML = `<span>${adviceObj.id}</span>`
    }).catch(error =>{
        console.log(error);
    });
}
