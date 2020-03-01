function carregar() {
var msg = window.document.getElementById('msg')
var msgs = window.document.getElementById('msgs')
var diase = window.document.getElementById('diasemana')

var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()
let diasemana = data.getDay();

if (diasemana == 0) {
    diase.innerHTML = `Hoje é Domingo`
} else if (diasemana == 1) {
    diase.innerHTML = `Hoje é Segunda-Feira`
} else if (diasemana == 2) {
    diase.innerHTML = `Hoje é Terça-Feira`
} else if (diasemana == 3) {
    diase.innerHTML = `Hoje é Quarta-Feira`
} else if (diasemana == 4) {
    diase.innerHTML = `Hoje é Quinta-Feira`
} else if (diasemana == 5) {
    diase.innerHTML = `Hoje é Sexta-Feira`
} else if (diasemana == 6) {
    diase.innerHTML = `Hoje é Sábado`
}

if (hora >= 0 && hora < 12) {
    document.body.style.background = '#e2cd9f'
    msg.innerHTML += `Agora são ${hora}:${min}, Tenha um Bom Dia.`
    msgs.innerHTML = "Quando algo ruim acontece você tem três escolhas: deixar isso definir você, deixar isso destruir você ou fazer isso te deixar mais forte."

} else if (hora >= 12 && hora < 18) {
    document.body.style.background = '#b9846f'
    msg.innerHTML = `Agora são ${hora}:${min}, Tenha uma Boa Tarde.`
    msgs.innerHTML = "Se não puder fazer tudo, faça tudo que puder."
} else {
    document.body.style.background = '#515154'
    msg.innerHTML = `Agora são ${hora}:${min}, Tenha uma Boa Noite`
    msgs.innerHTML = "Algumas vezes coisas ruins acontecem em nossas vidas para nos colocar na direção das melhores coisas que poderíamos viver."
}

}
