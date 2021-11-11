function calcular_horas(){
    var campo_salario_bruto_horas = document.getElementById('campo_salario_bruto_horas')
    var campo_quantidade_horas = document.getElementById('campo_quantidade_horas')
    var campo_horas_extras = document.getElementById('campo_horas_extras')
    var campo_horas_feriados = document.getElementById('campo_horas_feriados')
    var campo_horas_extras_noturnas = document.getElementById('campo_horas_extras_noturnas')
    var n1 = Number(campo_salario_bruto_horas.value)
    var n2 = Number(campo_quantidade_horas.value)
    var n3 = Number(campo_horas_extras.value)
    var n4 = Number(campo_horas_feriados.value)
    var n5 = Number(campo_horas_extras_noturnas.value)
    var valor_horas = document.getElementById('valor_horas')
    var valor_horas_extras = document.getElementById('valor_horas_extras')
    var valor_horas_feriados = document.getElementById('valor_horas_feriados')
    var valor_hora_noturna = document.getElementById('valor_hora_noturna')
    var total_hora_extra = document.getElementById('total_hora_extra')
    var total_hora_feriado = document.getElementById('total_hora_feriado')
    var total_hora_noturna = document.getElementById('total_hora_noturna')
    var total_salario_bruto = document.getElementById('total_salario_bruto')
    
    /////// CÁLCULOS ///////
    
    var calculo_valor_horas = n1 / n2
    var calculo_valor_horas_extras = calculo_valor_horas / 2 + calculo_valor_horas
    var calculo_valor_horas_feriados = calculo_valor_horas * 2
    var calculo_valor_hora_noturna = calculo_valor_horas / 100 * 80 + calculo_valor_horas
    var vte = calculo_valor_horas_extras * n3
    var vtf = calculo_valor_horas_feriados * n4
    var vtn = calculo_valor_hora_noturna * n5
    var vts = n1 + vte + vtf + vtn
    var r1 = calculo_valor_horas.toFixed(2)
    var r2 = calculo_valor_horas_extras.toFixed(2)
    var r3 = calculo_valor_horas_feriados.toFixed(2)
    var r4 = calculo_valor_hora_noturna.toFixed(2)
    var vte1 = vte.toFixed(2)
    var vtf2 = vtf.toFixed(2)
    var vtn3 = vtn.toFixed(2)
    var vts4 = vts.toFixed(2)
    var artigo = document.getElementsByClassName('resultados_horas_extras')[0]
    var referencias1 = document.getElementById('referencias')
    valor_horas.innerHTML = `R$ ${r1}`
    valor_horas_extras.innerHTML = `R$ ${r2}`
    valor_horas_feriados.innerHTML = `R$ ${r3}`
    valor_hora_noturna.innerHTML = `R$ ${r4}`
    total_hora_extra.innerHTML = `R$ ${vte1}`
    total_hora_feriado.innerHTML = `R$ ${vtf2}`
    total_hora_noturna.innerHTML = `R$ ${vtn3}`
    total_salario_bruto.innerHTML = `<strong>R$ ${vts4}</strong>`
    artigo.style.display = 'block'
    referencias1.style.top = '700px'

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