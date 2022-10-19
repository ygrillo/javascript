function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'img/menino_criança-modified.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'img/homem_jovem-modified.png')
            } else if (idade <= 59) {
                // Adulto
                img.setAttribute('src', 'img/homem_adulto-modified.png')
            } else {
                // Idoso
                img.setAttribute('src', 'img/homem_idoso-modified.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'img/menina_criança-modified.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'img/mulher_jovem-modified.png')
            } else if (idade <= 59) {
                // Adulto
                img.setAttribute('src', 'img/mulher_adulta-modified.png')
            } else {
                // Idoso
                img.setAttribute('src', 'img/mulher_idosa-modified.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}