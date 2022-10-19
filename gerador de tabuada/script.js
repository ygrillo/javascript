function gerar_tabuada() {
    let number = window.document.getElementById('num_input')
    let resultado = window.document.getElementById('result')
    let number_value = Number(number.value)
    let contas = window.document.getElementById('num_contas')
    let number_contas = Number(contas.value)

    if (number.value) {
        if (!contas.value) {
            window.alert('Considerando 10 contas')
            number_contas = 10
        }
        var select = window.document.createElement('select')
        select.setAttribute('id', 'select_list')
        select.setAttribute('size', 10)
        resultado.innerHTML = ``

        for (let c = 1;c <= number_contas;c++) {
            let option = window.document.createElement('option')
            let produto = number_value * c
            option.text = `${number_value} X ${c} = ${produto}`
            select.add(option)
        }
    } else {
        window.alert('Por favor, digite um número.')
        let select_obj = window.document.getElementById('select_list')
        select_obj.remove()
    }
    
    number.value = null
    contas.value = null
    resultado.appendChild(select)
}