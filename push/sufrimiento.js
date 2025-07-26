const contenedor = document.getElementById("sufrimiento")
const input = document.getElementById ("textoinput")

let elementos =[]

function agregarElemento() {
    if(input.value != ""){
        elementos.push(input.value)
        
        let resultado = ""
        for (let i = 0; i < elementos.length; i++) {
            resultado += "<span>" + elementos[i] + "</span>"

        }
        contenedor.innerHTML = resultado
    }
}