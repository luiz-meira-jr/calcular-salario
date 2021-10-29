function calcular_decimo(){
    var campo_salario_bruto = document.getElementById('campo_salario_bruto')
    var campo_horas_extras = document.getElementById('campo_horas_extras')
    var campo_meses_trabalhados = document.getElementById('campo_meses_trabalhados')
    var campo_tipo_pagamento = document.getElementById('campo_tipo_pagamento')

    var n1 = Number(campo_salario_bruto.value)
    var n2 = Number(campo_horas_extras.value)
    var n3 = Number(campo_meses_trabalhados.value)

    var salario_bruto1 = document.getElementById('salario_bruto1')
    var horas_extras1 = document.getElementById('horas_extras1')
    var inss1 = document.getElementById('inss1')
    var irrf1 = document.getElementById('irrf1')
    var consolidado1 = document.getElementById('consolidado1')

    var salario_bruto2 = document.getElementById('salario_bruto2')
    var horas_extras2 = document.getElementById('horas_extras2')
    var inss2 = document.getElementById('inss2')
    var irrf2 = document.getElementById('irrf2')
    var consolidado2 = document.getElementById('consolidado2')

    var salario_bruto3 = document.getElementById('salario_bruto3')
    var horas_extras3 = document.getElementById('horas_extras3')
    var inss3 = document.getElementById('inss3')
    var irrf3 = document.getElementById('irrf3')
    var consolidado3 = document.getElementById('consolidado3')
    
    /////// CÁLCULOS ///////
    
    var salario_bruto_div_12 = n1 / 12
    var calculo_decimo_terceiro = salario_bruto_div_12 * n3
    var total_decimo_terceiro = calculo_decimo_terceiro + n2

    var desconto_7_5 = total_decimo_terceiro / 100 * 7.5
    var desconto_9 = total_decimo_terceiro / 100 * 9
    var desconto_12 = total_decimo_terceiro / 100 * 12
    var desconto_14 = total_decimo_terceiro / 100 * 14

    var irrf_7_5 = total_decimo_terceiro / 100 * 7.5
    var irrf_15 = total_decimo_terceiro / 100 * 15
    var irrf_22_5 = total_decimo_terceiro / 100 * 22.5
    var irrf_27_5 = total_decimo_terceiro / 100 * 27.5

    var desconto_inss1 = total_decimo_terceiro - desconto_7_5
    var desconto_inss2 = total_decimo_terceiro - desconto_9
    var desconto_inss3 = total_decimo_terceiro - desconto_12
    var desconto_inss4 = total_decimo_terceiro - desconto_14

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
    
    var total_desconto_irrf1 = irrf_7_5.toFixed(2)
    var total_desconto_irrf2 = irrf_15.toFixed(2)
    var total_desconto_irrf3 = irrf_22_5.toFixed(2)
    var total_desconto_irrf4 = irrf_27_5.toFixed(2)

    

    var salario_c_desconto1 = desconto_inss1.toFixed(2)
    var salario_c_desconto2 = desconto_inss2.toFixed(2)
    var salario_9_7_5 = desconto_irrf1_inss2.toFixed(2)
    var salario_12_7_5 = desconto_irrf1_inss3.toFixed(2)
    var salario_12_15 = desconto_irrf2_inss3.toFixed(2)
    var salario_14_15 = desconto_irrf2_inss4.toFixed(2)
    var salario_14_22_5 = desconto_irrf3_inss4.toFixed(2)
    var salario_14_27_5 = desconto_irrf4_inss4.toFixed(2)

    var in1 = '7,5%'
    var in2 = '9%'
    var in3 = '12%'
    var in4 = '14%'
    var ir1 = '7,5%'
    var ir2 = '15%'
    var ir3 = '22,5%'
    var ir4 = '27,5%'

    var art2 = document.getElementById('resultados_decimo_terceiro')
    var total_salario_liquido = document.getElementById('valor_decimo_terceiro')
    var referencias1 = document.getElementById('referencias')
        // DESCONTOS INSS
    if (calculo_decimo_terceiro <= 1100){
        salario_bruto2.innerText = `R$ ${calculo_decimo_terceiro}`
        horas_extras2.innerText = `R$ ${n2}`
        inss1.innerText = `${in1}`
        inss3.innerText = `R$ ${total_desconto_7_5}`
        irrf1.innerHTML = '0%'
        irrf3.innerHTML = '<strong>ISENTO</strong>'
        consolidado2.innerText = `R$ ${total_decimo_terceiro}`
        consolidado3.innerText = `R$ ${total_desconto_7_5}`
        total_salario_liquido.innerHTML = `<strong>R$ ${salario_c_desconto1}</strong>`
        art2.style.display = 'block'
        referencias1.style.top = '350px'
        // DESCONTOS INSS
    } else if (valor_salario > 1100 && valor_salario <= 1903.98){
        inss1.innerText = `${in2}`
        inss2.innerText = `R$ ${total_desconto_9}`
        irrf1.innerHTML = '<strong>ISENTO</strong>'
        irrf2.innerHTML = '<strong>ISENTO</strong>'
        total_salario_liquido.innerHTML = `<strong>R$ ${salario_c_desconto2}</strong>`
        art2.style.display = 'block'
        referencias1.style.top = '750px'
        // DESCONTOS IRRF    
    } else if (valor_salario > 1903.98 && valor_salario <= 2203.48){
        inss1.innerText = `${in2}`
        inss2.innerText = `R$ ${total_desconto_9}`
        irrf1.innerHTML = `${ir1}`
        irrf2.innerHTML = `R$ ${total_desconto_irrf1}`
        total_salario_liquido.innerHTML = `<strong>R$ ${salario_9_7_5}</strong>`
        art2.style.display = 'block'
        referencias1.style.top = '750px'
        // DESCONTOS INSS
    } else if (valor_salario > 2203.48 && valor_salario <= 2826.65){
        inss1.innerText = `${in3}`
        inss2.innerText = `R$ ${total_desconto_12}`
        irrf1.innerHTML = `${ir1}`
        irrf2.innerHTML = `R$ ${total_desconto_irrf1}`
        total_salario_liquido.innerHTML = `<strong>R$ ${salario_12_7_5}</strong>`
        art2.style.display = 'block'
        referencias1.style.top = '750px'
    } else if (valor_salario > 2826.65 && valor_salario <= 3305.23){
        inss1.innerText = `${in3}`
        inss2.innerText = `R$ ${total_desconto_12}`
        irrf1.innerHTML = `${ir2}`
        irrf2.innerHTML = `R$ ${total_desconto_irrf2}`
        total_salario_liquido.innerHTML = `<strong>R$ ${salario_12_15}</strong>`
        art2.style.display = 'block'
        referencias1.style.top = '750px'
        // DESCONTOS IRRF
    } else if (valor_salario > 3305.23 && valor_salario <= 3751.05){
        inss1.innerText = `${in4}`
        inss2.innerText = `R$ ${total_desconto_14}`
        irrf1.innerHTML = `${ir2}`
        irrf2.innerHTML = `R$ ${total_desconto_irrf2}`
        total_salario_liquido.innerHTML = `<strong>R$ ${salario_14_15}</strong>`
        art2.style.display = 'block'
        referencias1.style.top = '750px'
        // DESCONTOS INSS
    } else if (valor_salario > 3751.05 && valor_salario < 4664.68){
        inss1.innerText = `${in4}`
        inss2.innerText = `R$ ${total_desconto_14}`
        irrf1.innerHTML = `${ir3}`
        irrf2.innerHTML = `R$ ${total_desconto_irrf3}`
        total_salario_liquido.innerHTML = `<strong>R$ ${salario_14_22_5}</strong>`
        art2.style.display = 'block'
        referencias1.style.top = '750px'
        // DESCONTOS IRRF
    } else if (valor_salario >= 4664.68 && valor_salario <= 6433.57){
        inss1.innerText = `${in4}`
        inss2.innerText = `R$ ${total_desconto_14}`
        irrf1.innerHTML = `${ir4}`
        irrf2.innerHTML = `R$ ${total_desconto_irrf4}`
        total_salario_liquido.innerHTML = `<strong>R$ ${salario_14_27_5}</strong>`
        art2.style.display = 'block'
        referencias1.style.top = '750px'
    }
}


///////////////                             ///////////////////
///////////////            MOBILE           ///////////////////
///////////////                             ///////////////////

function informar1(){
    var informacao1 = document.getElementsByTagName('span')[0]
    informacao1.style.display = 'block'
}
function informar2(){
    var informacao2 = document.getElementsByTagName('span')[1]
    informacao2.style.display = 'block'
}
function informar3(){
    var informacao3 = document.getElementsByTagName('span')[2]
    informacao3.style.display = 'block'
}
function informar4(){
    var informacao4 = document.getElementsByTagName('span')[3]
    informacao4.style.display = 'block'
}
function informar5(){
    var informacao5 = document.getElementsByTagName('span')[4]
    informacao5.style.display = 'block'
}
////////////////////////////////////////////////////////////////
function retirar_info1(){
    var informacao1 = document.getElementsByTagName('span')[0]
    informacao1.style.display = 'none'
}
function retirar_info2(){
    var informacao2 = document.getElementsByTagName('span')[1]
    informacao2.style.display = 'none'
}
function retirar_info3(){
    var informacao3 = document.getElementsByTagName('span')[2]
    informacao3.style.display = 'none'
}
function retirar_info4(){
    var informacao4 = document.getElementsByTagName('span')[3]
    informacao4.style.display = 'none'
}
function retirar_info5(){
    var informacao5 = document.getElementsByTagName('span')[4]
    informacao5.style.display = 'none'
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