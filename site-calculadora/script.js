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
    referencias1.style.top = '950px'
}

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
        // DESCONTOS INSS
    if (valor_salario <= 1100){
        inss1.innerText = `${in1}`
        inss2.innerText = `R$ ${total_desconto_7_5}`
        total_salario_liquido.innerHTML = `<strong>R$ ${salario_c_desconto1}</strong>`
        irrf1.innerHTML = '<strong>ISENTO</strong>'
        irrf2.innerHTML = '<strong>ISENTO</strong>'
        art2.style.display = 'block'
        // DESCONTOS INSS
    } else if (valor_salario > 1100 && valor_salario <= 1903.98){
        inss1.innerText = `${in2}`
        inss2.innerText = `R$ ${total_desconto_9}`
        irrf1.innerHTML = '<strong>ISENTO</strong>'
        irrf2.innerHTML = '<strong>ISENTO</strong>'
        total_salario_liquido.innerHTML = `<strong>R$ ${salario_c_desconto2}</strong>`
        art2.style.display = 'block'
        // DESCONTOS IRRF    
    } else if (valor_salario > 1903.98 && valor_salario <= 2203.48){
        inss1.innerText = `${in2}`
        inss2.innerText = `R$ ${total_desconto_9}`
        irrf1.innerHTML = `${ir1}`
        irrf2.innerHTML = `R$ ${total_desconto_irrf1}`
        total_salario_liquido.innerHTML = `<strong>R$ ${salario_9_7_5}</strong>`
        art2.style.display = 'block'
        // DESCONTOS INSS
    } else if (valor_salario > 2203.48 && valor_salario <= 2826.65){
        inss1.innerText = `${in3}`
        inss2.innerText = `R$ ${total_desconto_12}`
        irrf1.innerHTML = `${ir1}`
        irrf2.innerHTML = `R$ ${total_desconto_irrf1}`
        total_salario_liquido.innerHTML = `<strong>R$ ${salario_12_7_5}</strong>`
        art2.style.display = 'block'
    } else if (valor_salario > 2826.65 && valor_salario <= 3305.23){
        inss1.innerText = `${in3}`
        inss2.innerText = `R$ ${total_desconto_12}`
        irrf1.innerHTML = `${ir2}`
        irrf2.innerHTML = `R$ ${total_desconto_irrf2}`
        total_salario_liquido.innerHTML = `<strong>R$ ${salario_12_15}</strong>`
        art2.style.display = 'block'
        // DESCONTOS IRRF
    } else if (valor_salario > 3305.23 && valor_salario <= 3751.05){
        inss1.innerText = `${in4}`
        inss2.innerText = `R$ ${total_desconto_14}`
        irrf1.innerHTML = `${ir2}`
        irrf2.innerHTML = `R$ ${total_desconto_irrf2}`
        total_salario_liquido.innerHTML = `<strong>R$ ${salario_14_15}</strong>`
        art2.style.display = 'block'
        // DESCONTOS INSS
    } else if (valor_salario > 3751.05 && valor_salario < 4664.68){
        inss1.innerText = `${in4}`
        inss2.innerText = `R$ ${total_desconto_14}`
        irrf1.innerHTML = `${ir3}`
        irrf2.innerHTML = `R$ ${total_desconto_irrf3}`
        total_salario_liquido.innerHTML = `<strong>R$ ${salario_14_22_5}</strong>`
        art2.style.display = 'block'
        // DESCONTOS IRRF
    } else if (valor_salario <= 4664.68 && valor_salario <= 6433.57){
        inss1.innerText = `${in4}`
        inss2.innerText = `R$ ${total_desconto_14}`
        irrf1.innerHTML = `${ir4}`
        irrf2.innerHTML = `R$ ${total_desconto_irrf4}`
        total_salario_liquido.innerHTML = `<strong>R$ ${salario_14_27_5}</strong>`
        art2.style.display = 'block'
    }
}