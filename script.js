function carregar() {
var msg = window.document.getElementById('msg')
var imagem = window.document.getElementById('imagem001')
var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()

//var hora = 22
//msg.innerHTML = `Agora são ${hora} horas` 

if (hora >= 0 && hora < 12) {
    // bom dia
    imagem.src = 'img/img003.png'
    document.body.style.background = '#e2cd9f'
    if (min.valueOf.length == 1){
        msg.innerHTML = `Agora são ${hora}:0${min}, Tenha um Bom Dia.`
    } else {
        msg.innerHTML = `Agora são ${hora}:${min}, Tenha um Bom Dia.`
    }
} else if (hora >= 12 && hora < 18) {
    // boa tarde
    imagem.src = 'img/img001.png'
    document.body.style.background = '#b9846f'
    if (min.valueOf.length == 1){
        msg.innerHTML = `Agora são ${hora}:0${min}, Tenha uma Boa Tarde.`
    } else {
        msg.innerHTML = `Agora são ${hora}:${min}, Tenha uma Boa Tarde.`
    }
} else {
    // boa noite
    //imagem.src = 'img/img002.png'
    document.body.style.background = '#515154'
    if (min.valueOf.length == 1){
        msg.innerHTML = `Agora são ${hora}:0${min}, Tenha uma Boa Noite.`
    } else {
        msg.innerHTML = `Agora são ${hora}:${min}, Tenha`
    }
}

}
