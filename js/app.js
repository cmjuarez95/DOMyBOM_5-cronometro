const btnIniciarContador = document.querySelector("#start")
const btnDetenerContador = document.querySelector("#stop")
const btnResetContador = document.querySelector("#reset")

const textContador = document.querySelector(".fw-bold")
let contador = 0;
let idInterval;


function formatearTiempo(segundosTotales) {
    const horas = Math.floor(segundosTotales / 3600);
    const minutos = Math.floor((segundosTotales % 3600) / 60);
    const segundos = segundosTotales % 60;

    // Asegura que siempre haya dos dígitos
    const formatoHoras = String(horas).padStart(2, "0");
    const formatoMinutos = String(minutos).padStart(2, "0");
    const formatoSegundos = String(segundos).padStart(2, "0");

    return `${formatoHoras}:${formatoMinutos}:${formatoSegundos}`;
}

btnIniciarContador.addEventListener("click", ()=>{
        
        //desactivo el boton iniciar Contador
        btnIniciarContador.disabled= true
        
        //activo el boton detener Contador y reset contador
        btnDetenerContador.disabled= false
        btnResetContador.disabled= false

        //comenzar a trabajar el contador
        idInterval = setInterval(()=>{
            contador++
            textContador.textContent = formatearTiempo(contador);
        }, 1000)

    }
)

btnDetenerContador.addEventListener("click", ()=>{
        clearInterval(idInterval)
        //Activo el boton iniciar Contador
        btnIniciarContador.disabled=false
        //Desactivo el boton detener Contador
        btnDetenerContador.disabled= true



    }
)

btnResetContador.addEventListener("click", ()=>{
        contador=0
        textContador.textContent = formatearTiempo(contador);
        clearInterval(idInterval)
        //Activo el boton iniciar Contador
        btnIniciarContador.disabled=false
        //Desactivo el boton detener Contador
        btnDetenerContador.disabled= true



    }
)