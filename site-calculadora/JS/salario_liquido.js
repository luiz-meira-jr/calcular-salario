///////////////                             ///////////////////
///////////////         CALCULADORA        ///////////////////
///////////////                             ///////////////////

function calcular_liquido(){
    var sal = document.getElementById('campo_salario_bruto')
    var desc = document.getElementById('campo_descontos')
    var valor_salario = Number(sal.value)
    var valor_descontos = Number(desc.value)
    var inss1 = document.getElementById('inss1')
    var inss2 = document.getElementById('inss2')
    var irrf1 = document.getElementById('irrf1')
    var irrf2 = document.getElementById('irrf2')
    // DESCONTOS INSS
    var desconto_7_5 = valor_salario / 100 * 7.5
    var desconto_9 = valor_salario / 100 * 9
    var desconto_12 = valor_salario / 100 * 12
    var desconto_14 = valor_salario / 100 * 14
    var irrf_7_5 = valor_salario / 100 * 7.5
    var irrf_15 = valor_salario / 100 * 15
    var irrf_22_5 = valor_salario / 100 * 22.5
    var irrf_27_5 = valor_salario / 100 * 27.5
    var desconto_inss1 = valor_salario - desconto_7_5
    var desconto_inss2 = valor_salario - desconto_9
    var desconto_inss3 = valor_salario - desconto_12
    var desconto_inss4 = valor_salario - desconto_14
    var desconto_irrf1_inss2 = desconto_inss2 - irrf_7_5
    var desconto_irrf1_inss3 = desconto_inss3 - irrf_7_5
    var desconto_irrf2_inss3 = desconto_inss3 - irrf_15
    var desconto_irrf2_inss4 = desconto_inss4 - irrf_15
    var desconto_irrf3_inss4 = desconto_inss4 - irrf_22_5
    var desconto_irrf4_inss4 = desconto_inss4 - irrf_27_5
    var total_desconto_7_5 = desconto_7_5.toFixed(2)
    var total_desconto_9 = desconto_9.toFixed(2)
    var total_desconto_12 = desconto_12.toFixed(2)
    var total_desconto_14 = desconto_14.toFixed(2)
    var salario_c_desconto1 = desconto_inss1.toFixed(2)
    var salario_c_desconto2 = desconto_inss2.toFixed(2)
    var salario_9_7_5 = desconto_irrf1_inss2.toFixed(2)
    var salario_12_7_5 = desconto_irrf1_inss3.toFixed(2)
    var salario_12_15 = desconto_irrf2_inss3.toFixed(2)
    var salario_14_15 = desconto_irrf2_inss4.toFixed(2)
    var salario_14_22_5 = desconto_irrf3_inss4.toFixed(2)
    var salario_14_27_5 = desconto_irrf4_inss4.toFixed(2)
    var total_desconto_irrf1 = irrf_7_5.toFixed(2)
    var total_desconto_irrf2 = irrf_15.toFixed(2)
    var total_desconto_irrf3 = irrf_22_5.toFixed(2)
    var total_desconto_irrf4 = irrf_27_5.toFixed(2)
    var in1 = '7,5%'
    var in2 = '9%'
    var in3 = '12%'
    var in4 = '14%'
    var ir1 = '7,5%'
    var ir2 = '15%'
    var ir3 = '22,5%'
    var ir4 = '27,5%'
    var art2 = document.getElementById('resultados_salario_liquido')
    var total_salario_liquido = document.getElementById('valor_salario_liquido')
    var referencias1 = document.getElementById('referencias')
        // DESCONTOS INSS
    if (valor_salario <= 1100){
        inss1.innerText = `${in1}`
        inss2.innerText = `R$ ${total_desconto_7_5}`
        total_salario_liquido.innerHTML = `<strong>R$ ${salario_c_desconto1}</strong>`
        irrf1.innerHTML = '<strong>ISENTO</strong>'
        irrf2.innerHTML = '<strong>ISENTO</strong>'
        art2.style.display = 'block'
        referencias1.style.top = '250px'
        // DESCONTOS INSS
    } else if (valor_salario > 1100 && valor_salario <= 1903.98){
        inss1.innerText = `${in2}`
        inss2.innerText = `R$ ${total_desconto_9}`
        irrf1.innerHTML = '<strong>ISENTO</strong>'
        irrf2.innerHTML = '<strong>ISENTO</strong>'
        total_salario_liquido.innerHTML = `<strong>R$ ${salario_c_desconto2}</strong>`
        art2.style.display = 'block'
        referencias1.style.top = '250px'
        // DESCONTOS IRRF    
    } else if (valor_salario > 1903.98 && valor_salario <= 2203.48){
        inss1.innerText = `${in2}`
        inss2.innerText = `R$ ${total_desconto_9}`
        irrf1.innerHTML = `${ir1}`
        irrf2.innerHTML = `R$ ${total_desconto_irrf1}`
        total_salario_liquido.innerHTML = `<strong>R$ ${salario_9_7_5}</strong>`
        art2.style.display = 'block'
        referencias1.style.top = '250px'
        // DESCONTOS INSS
    } else if (valor_salario > 2203.48 && valor_salario <= 2826.65){
        inss1.innerText = `${in3}`
        inss2.innerText = `R$ ${total_desconto_12}`
        irrf1.innerHTML = `${ir1}`
        irrf2.innerHTML = `R$ ${total_desconto_irrf1}`
        total_salario_liquido.innerHTML = `<strong>R$ ${salario_12_7_5}</strong>`
        art2.style.display = 'block'
        referencias1.style.top = '250px'
    } else if (valor_salario > 2826.65 && valor_salario <= 3305.23){
        inss1.innerText = `${in3}`
        inss2.innerText = `R$ ${total_desconto_12}`
        irrf1.innerHTML = `${ir2}`
        irrf2.innerHTML = `R$ ${total_desconto_irrf2}`
        total_salario_liquido.innerHTML = `<strong>R$ ${salario_12_15}</strong>`
        art2.style.display = 'block'
        referencias1.style.top = '250px'
        // DESCONTOS IRRF
    } else if (valor_salario > 3305.23 && valor_salario <= 3751.05){
        inss1.innerText = `${in4}`
        inss2.innerText = `R$ ${total_desconto_14}`
        irrf1.innerHTML = `${ir2}`
        irrf2.innerHTML = `R$ ${total_desconto_irrf2}`
        total_salario_liquido.innerHTML = `<strong>R$ ${salario_14_15}</strong>`
        art2.style.display = 'block'
        referencias1.style.top = '250px'
        // DESCONTOS INSS
    } else if (valor_salario > 3751.05 && valor_salario < 4664.68){
        inss1.innerText = `${in4}`
        inss2.innerText = `R$ ${total_desconto_14}`
        irrf1.innerHTML = `${ir3}`
        irrf2.innerHTML = `R$ ${total_desconto_irrf3}`
        total_salario_liquido.innerHTML = `<strong>R$ ${salario_14_22_5}</strong>`
        art2.style.display = 'block'
        referencias1.style.top = '250px'
        // DESCONTOS IRRF
    } else if (valor_salario >= 4664.68 && valor_salario <= 6433.57){
        inss1.innerText = `${in4}`
        inss2.innerText = `R$ ${total_desconto_14}`
        irrf1.innerHTML = `${ir4}`
        irrf2.innerHTML = `R$ ${total_desconto_irrf4}`
        total_salario_liquido.innerHTML = `<strong>R$ ${salario_14_27_5}</strong>`
        art2.style.display = 'block'
        referencias1.style.top = '250px'
    }
}

///////////////                             ///////////////////
///////////////            MOBILE           ///////////////////
///////////////                             ///////////////////

function informar6(){
    var informacao6 = document.getElementsByTagName('span')[0]
    informacao6.style.display = 'block'
}
function informar7(){
    var informacao7 = document.getElementsByTagName('span')[1]
    informacao7.style.display = 'block'
}
////////////////////////////////////////////////////////////////
function retirar_info6(){
    var informacao6 = document.getElementsByTagName('span')[0]
    informacao6.style.display = 'none'
}
function retirar_info7(){
    var informacao7 = document.getElementsByTagName('span')[1]
    informacao7.style.display = 'none'
}

///////////////                             ///////////////////
///////////////         REFERÊNCIAS         ///////////////////
///////////////                             ///////////////////

function referencia1(){
    var referencia1 = document.getElementsByClassName('info1')[0]
    referencia1.style.outline = 'solid 1px blue'
}
function referencia01(){
    var referencia1 = document.getElementsByClassName('info1')[0]
    referencia1.style.outline = 'solid 1px blue'
}
function referencia2(){
    var referencia2 = document.getElementsByClassName('info2')[0]
    referencia2.style.outline = 'solid 1px blue'
}
function referencia02(){
    var referencia2 = document.getElementsByClassName('info2')[0]
    referencia2.style.outline = 'solid 1px blue'
}
function referencia3(){
    var referencia3 = document.getElementsByClassName('info3')[0]
    referencia3.style.outline = 'solid 1px blue'
}
function referencia03(){
    var referencia3 = document.getElementsByClassName('info3')[0]
    referencia3.style.outline = 'solid 1px blue'
}
function referencia4(){
    var referencia4 = document.getElementsByClassName('info4')[0]
    referencia4.style.outline = 'solid 1px blue'
}
function referencia04(){
    var referencia4 = document.getElementsByClassName('info4')[0]
    referencia4.style.outline = 'solid 1px blue'
}
function referencia5(){
    var referencia5 = document.getElementsByClassName('info5')[0]
    referencia5.style.outline = 'solid 1px blue'
}
function referencia05(){
    var referencia5 = document.getElementsByClassName('info5')[0]
    referencia5.style.outline = 'solid 1px blue'
}
function referencia6(){
    var referencia6 = document.getElementsByClassName('info6')[0]
    referencia6.style.outline = 'solid 1px blue '
}function referencia06(){
    var referencia6 = document.getElementsByClassName('info6')[0]
    referencia6.style.outline = 'solid 1px blue '
}

///////////////////////////////////////////////////////////

function retirar_ref1(){
    var retirar_ref1 = document.getElementsByClassName('info1')[0]
    retirar_ref1.style.outline = 'none'
}
function retirar_ref2(){
    var retirar_ref2 = document.getElementsByClassName('info2')[0]
    retirar_ref2.style.outline = 'none'
}
function retirar_ref3(){
    var retirar_ref3 = document.getElementsByClassName('info3')[0]
    retirar_ref3.style.outline = 'none'
}
function retirar_ref4(){
    var retirar_ref4 = document.getElementsByClassName('info4')[0]
    retirar_ref4.style.outline = 'none'
}
function retirar_ref5(){
    var retirar_ref5 = document.getElementsByClassName('info5')[0]
    retirar_ref5.style.outline = 'none'
}
function retirar_ref6(){
    var retirar_ref6 = document.getElementsByClassName('info6')[0]
    retirar_ref6.style.outline = 'none'
}
///////////////                             ///////////////////
///////////////             MENU            ///////////////////
///////////////                             ///////////////////

function abrir(){
    var abrir = document.getElementsByTagName('code')[0]
    var header = document.getElementsByTagName('header')[0]
    var main = document.getElementById('main')
    var menu = document.getElementsByClassName('menu')[0]
    var voltar = document.getElementsByClassName('voltar')[0]
    header.style.position = 'fixed'
    main.style.zIndex = '-1'
    abrir.style.display = 'block'
    menu.style.display = 'none'
    voltar.style.display = 'block'
}
function fechar(){
    var voltar = document.getElementsByClassName('voltar')[0]
    var header = document.getElementsByTagName('header')[0]
    var main = document.getElementById('main')
    var menu = document.getElementsByClassName('menu')[0]
    var fechar = document.getElementsByTagName('code')[0]
    header.style.position = 'static'
    main.style.zIndex = '1'
    voltar.style.display = 'none'
    menu.style.display = 'block'
    fechar.style.display = 'none'
}