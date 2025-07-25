const contenedor = document.getElementById("sufrimiento")
const input = document.getElementById ("textoinput")

let elementos =[]

function agregarElemento() {
    if(input.value != ""){
        elementos.push(input.value)
        
        let resultado = ""
        for (let i = 0; 1 < elementos.length; i++) {
            resultado += "<span>" + sufrimiento[i] + "</span>"

        }
        contenedor.innerHTML = resultado
    }
}