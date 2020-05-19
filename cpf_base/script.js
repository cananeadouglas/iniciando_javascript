function teste(){

    var cpf = window.document.getElementById('cpfaqui').value;
    var mostrar = window.document.getElementById('repetir');

    if (cpf.length >= 11){
        //mostrar.innerHTML = `mostar aqui valores: ${cpf}`
        
        var a = cpf.substring(0,1)
        var b = cpf.substring(1,2)
        var c = cpf.substring(2,3)

        var d = cpf.substring(3,4)
        var e = cpf.substring(4,5)
        var f = cpf.substring(5,6)

        var g = cpf.substring(6,7)
        var h = cpf.substring(7,8)
        var i = cpf.substring(8,9)

        var j = cpf.substring(9,10)
        var k = cpf.substring(10,11)

        var et01 = 10 * a;
        var et02 = 9 * b;
        var et03 = 8 * c;
        var et04 = 7 * d;
        var et05 = 6 * e;
        var et06 = 5 * f;
        var et07 = 4 * g;
        var et08 = 3 * h;
        var et09 = 2 * i;

        var somatorio01 = et01 + et02 + et03 + et04 + et05 + et06 + et07 + et08 + et09 ;
        //mostrar.innerHTML = `${somatorio}`

        var resto01 = somatorio01 % 11;
        mostrar.innerHTML += `${resto01} sim `

        var identificador01 = 11 - resto01; 
        
        if (identificador01 >= 10){
            identificador01 = 0
            mostrar.innerHTML += `${identificador01} sim `
        }else{
            mostrar.innerHTML += `${identificador01} sim `
        }
        

        // segunda parte

        var ec01 = 11 * a;
        var ec02 = 10 * b;
        var ec03 = 9 * c;
        var ec04 = 8 * d;
        var ec05 = 7 * e;
        var ec06 = 6 * f;
        var ec07 = 5 * g;
        var ec08 = 4 * h;
        var ec09 = 3 * i;
        var ec10 = 2 * identificador01;

        var somatorio02 = ec01 + ec02 + ec03 + ec04 + ec05 + ec06 + ec07 + ec08 + ec09 + ec10 ;

        var resto02 = somatorio02 % 11;
        mostrar.innerText += `${resto02} aqui `

        var identificador02 = 11 - resto02;

        if (identificador02 >= 10){
            identificador02 = 0
            mostrar.innerHTML += `${identificador02} sim `
        }else{
            mostrar.innerHTML += `${identificador02} sim `
        }

        if (identificador01 == j && identificador02 == k){
            mostrar.innerText += `seu cpf é válido`
        }else{
            mostrar.innerText += `seu cpf é inválido`
        }

        //https://campuscode.com.br/conteudos/o-calculo-do-digito-verificador-do-cpf-e-do-cnpj
        
        /*mostrar.innerHTML += `${a}`
        mostrar.innerHTML += `${b}`
        mostrar.innerHTML += `${c}`

        mostrar.innerHTML += `${d}`
        mostrar.innerHTML += `${e}`
        mostrar.innerHTML += `${f}`

        mostrar.innerHTML += `${g}`
        mostrar.innerHTML += `${h}`
        mostrar.innerHTML += `${i}`

        mostrar.innerHTML += `${j}`
        mostrar.innerHTML += `${k}` */
        

    }else{
        alert("dados incompletos, por favor verifique seu cpf");
    }
    
    
}

/*

    <p>Click the button to extract characters from the string.</p>
    <button onclick="myFunction()">Try it</button>
    <p id="demo"></p>

    var str = "Hello world!";
    var res = str.substring(1, 4);
    document.getElementById("demo").innerHTML = res;
*/