function carregar() {
    var msg = window.document.querySelector('div#msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        // Bom dia
        img.src = 'manha_redonda_50.png'
        msg.innerHTML += '<br>Bom diaaa!'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde
        img.src = 'tarde_redonda_50.png'
        msg.innerHTML += '<br>Boa tarde!'
        document.body.style.background = '#b9846f'
    } else {
        // Boa noite
        img.src = 'noite_redonda.png'
        msg.innerHTML += '<br>Boa noite!'
        document.body.style.background = '#515154'
    }
}
