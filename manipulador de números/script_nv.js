var lista = []

function inLista(n, someLista) {
    if (someLista.indexOf(n) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    let num_input = window.document.getElementById('num_input')
    let num_value = Number(num_input.value)
    let res = window.document.getElementById('res')
    let btn_f = document.getElementById('finalizar')

    if (!num_input.value || num_value < 1 || num_value > 100 || inLista(num_value, lista)) {
        window.alert('Valor inválido ou já está na lista.')
        num_input.value = null
    } else {
        // criar o elemento select
        var select = window.document.createElement('select')
        select.setAttribute('id', 'select_list')

        // criar o elemento button de finalizar
        var btn_obj = window.document.getElementById('btn_finalizar')
        if (btn_obj) {
            btn_obj.remove()
        }
        var btn_finalizar = window.document.createElement('input')
        btn_finalizar.setAttribute('type', 'button')
        btn_finalizar.setAttribute('id', 'btn_finalizar')
        btn_finalizar.setAttribute('value', 'Finalizar')
        btn_finalizar.setAttribute('onclick', 'finalizar()')

        res.innerHTML = ``

        lista.push(num_value)
        select.setAttribute('size', lista.length)
        for (let c in lista) {
            let option = window.document.createElement('option')
            option.text = `Valor ${lista[c]} adicionado`
            select.add(option)
        }
        res.appendChild(select)
        btn_f.appendChild(btn_finalizar)
        num_input.value = null
    }
    num_input.focus()
}

function limpar() {
    let res = window.document.getElementById('res')
    lista = []
    let select_obj = window.document.getElementById('select_list')
    let btn_obj = window.document.getElementById('btn_finalizar')
    if (select_obj) {
        select_obj.remove()
    }
    if (btn_obj) {
        btn_obj.remove()
    }
    res.innerHTML = ''
    num_input.value = null
    num_input.focus()
}

function maior_menor(someList, tipo='maior') {    
    for (var i in someList) {
        if (i == 0) {
            var maior = someList[i]
            var menor = someList[i]
        }
        if (someList[i] > maior) {
            maior = someList[i]
        } else if (someList[i] < menor) {
            menor = someList[i]
        }
    }
    if (tipo == 'maior') {
        return maior
    } else if (tipo == 'menor') {
        return menor
    }
}

function calcular(someList, tipo='soma') {
    var total = 0
    for (let i in someList) {
        total += someList[i]
    }
    if (tipo == 'soma') {
        return total
    } else {
        let count = someList.length
        let average = total / count
        return average
    }
}

function finalizar() {
    let res = window.document.getElementById('res')
    let btn_finalizar = window.document.getElementById('btn_finalizar')
    res.innerHTML += `<p>Ao todo, temos ${lista.length} números cadastrados.</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior_menor(lista, 'maior')}.</p>`
    res.innerHTML += `<p>O menor valor informado foi ${maior_menor(lista, 'menor')}.</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${calcular(lista, 'soma')}.</p>`
    res.innerHTML += `<p>A média dos valores digitados é ${calcular(lista, 'média')}.</p>`
    btn_finalizar.remove()
}
