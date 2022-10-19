function contar() {
    let inicio = window.document.getElementById('txtinicio')
    let inicio_value = Number(inicio.value)
    let resultado = document.querySelector('div#res')
    let final = window.document.getElementById('txtfinal')
    let final_value = Number(final.value)
    let passo = window.document.getElementById('txtpasso')
    let passo_value = Number(passo.value)

    if (inicio_value && final_value) {
        if (!passo.value) {
            window.alert('Passo inválido! Considerando Passo = 1')
            passo_value = 1
        }
        resultado.innerHTML = 'Contando:<br>'
        c = inicio_value
        if (final_value > inicio_value) {
            while (c <= final_value) {
                resultado.innerHTML += `${c} 👉`
                c += passo_value
            }
        } else {
            while (c >= final_value) {
                resultado.innerHTML += `${c} 👉`
                c -= passo_value
            }
        }
        resultado.innerHTML += '🏁'
    }else {
        resultado.innerHTML = 'Impossível contar!'
    }
    inicio.value = null
    final.value = null
    passo.value = null
}

