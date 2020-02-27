function carregar() {
var msg = window.document.getElementById('msg')
var msgs = window.document.getElementById('msgs')

var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()


if (hora >= 0 && hora < 12) {
    document.body.style.background = '#e2cd9f'
    msg.innerHTML = `Agora são ${hora}:${min}, Tenha um Bom Dia.`
    msgs.innerHTML = "Quando algo ruim acontece você tem três escolhas: deixar isso definir você, deixar isso destruir você ou fazer isso te deixar mais forte."

} else if (hora >= 12 && hora < 18) {
    document.body.style.background = '#b9846f'
    msg.innerHTML = `Agora são ${hora}:0${min}, Tenha uma Boa Tarde.`
    msgs.innerHTML = "Se não puder fazer tudo, faça tudo que puder."
} else {
    document.body.style.background = '#515154'
    msg.innerHTML = `Agora são ${hora}:0${min}, Tenha uma Boa Noite`
    msgs.innerHTML = "Algumas vezes coisas ruins acontecem em nossas vidas para nos colocar na direção das melhores coisas que poderíamos viver."
}

}
