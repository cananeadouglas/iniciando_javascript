function mandar(){

    var cpfd = window.document.getElementById('cpfaqui')
    var bemaqui = window.document.getElementById('bem')
    var cpf = Number(cpfd.value)
    
    var resultado = cpfd
    //.substring(0, 10)

    var a = resultado.substring(0,1)
    var b = resultado.substring(1,2)
    var c = resultado.substring(2,3)
    var d = resultado.substring(3,4)
    var e = resultado.substring(4,5)
    var f = resultado.substring(5,6)
    var g = resultado.substring(6,7)
    var h = resultado.substring(7,8)
    var i = resultado.substring(8,9)
    var j = resultado.substring(9,10)
    var l = resultado.substring(10,11)

    bemaqui.innerHTML = `aqui vc pode + ${resultado} + dutod `

}