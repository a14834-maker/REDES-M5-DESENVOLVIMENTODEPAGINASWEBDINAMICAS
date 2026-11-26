let participantes = 0;
let bolquear = false;


const contador = document.querySelector("#contador");


document.querySelector("#adicionar")
  .addEventListener("click", () => {
    participantes++;
    contador.textContent = participantes;


    if (participantes === 10) { 
      alert("Atingiste 10 participantes!");
    }
  });




  


document.querySelector("#remover")
  .addEventListener("click", () => {
    if (participantes > 0) {
      participantes--;
      contador.textContent = participantes;
    }
  });