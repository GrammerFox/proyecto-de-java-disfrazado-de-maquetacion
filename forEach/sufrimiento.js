const lista = [
    "no way", "dile que", "uma musume", "pretty derby"
]

const contenedor = document.getElementById("sufrimiento")
function actualizarHTML(){

    let resultHTML = "";
    lista.forEach((elemento, index)=> {
        resultHTML += `<span id="forEach${index}" > ${elemento}</span>`
    })
    contenedor.innerHTML = resultHTML
}

actualizarHTML()

function miFunctionforEach() {

    lista.forEach((value, index) => {
    const elemento = document.getElementById(`forEach${index}`)
    setTimeout(()=> {
        elemento.classList.add("selected")
    }, 2000 * index)
    setTimeout(()=> { 
        elemento.classList.remove("selected")
    }, 2000 * (index + 1))
    })
}

const forEachBtn = document.getElementById("forBtn")
forEachBtn.addEventListener("click", miFunctionforEach)