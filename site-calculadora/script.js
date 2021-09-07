function calcular1(){
    var sb = document.getElementById('sb')
    var qh = document.getElementById('qh')
    var he = document.getElementById('he')
    var hf = document.getElementById('hf')
    var hn = document.getElementById('hn')
    var n1 = Number(sb.value)
    var n2 = Number(qh.value)
    var n3 = Number(he.value)
    var n4 = Number(hf.value)
    var n5 = Number(hn.value)
    var t1 = document.getElementById('t1')
    var t2 = document.getElementById('t2')
    var t3 = document.getElementById('t3')
    var t4 = document.getElementById('t4')
    var r01 = document.getElementById('r01')
    var r02 = document.getElementById('r02')
    var r03 = document.getElementById('r03')
    var r04 = document.getElementById('r04')
    var vh = n1 / n2
    var ve = vh / 2 + vh
    var vf = vh * 2
    var vn = vh / 100 * 80 + vh
    var vte = ve * n3
    var vtf = vf * n4
    var vtn = vn * n5
    var vts = n1 + vte + vtf + vtn
    var r1 = vh.toFixed(2)
    var r2 = ve.toFixed(2)
    var r3 = vf.toFixed(2)
    var r4 = vn.toFixed(2)
    var vte1 = vte.toFixed(2)
    var vtf2 = vtf.toFixed(2)
    var vtn3 = vtn.toFixed(2)
    var vts4 = vts.toFixed(2)
    var art = document.getElementById('r1')
    var posicao = document.getElementsByClassName('prin03')[0]
    t1.innerHTML = `R$ ${r1}`
    t2.innerHTML = `R$ ${r2}`
    t3.innerHTML = `R$ ${r3}`
    t4.innerHTML = `R$ ${r4}`
    r01.innerHTML = `R$ ${vte1}`
    r02.innerHTML = `R$ ${vtf2}`
    r03.innerHTML = `R$ ${vtn3}`
    r04.innerHTML = `<strong>R$ ${vts4}</strong>`
    art.style.display = 'block'
    posicao.style.top = '950px'
}
function calcular2(){
    var sal = document.getElementById('salario')
    var desc = document.getElementById('descontos')
    var valor_salario = Number(sal.value)
    var valor_descontos = Number(desc.value)
    var inss1 = document.getElementById('inss1')
    var inss2 = document.getElementById('inss2')
    var irrf1 = document.getElementById('irrf1')
    var irrf2 = document.getElementById('irrf2')
    var total1 = document.getElementById('total1')
    var total2 = document.getElementById('total2')
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
    var art2 = document.getElementById('r2')
    var prin02 = document.getElementsByClassName('prin02')[0]
    var posicao = document.getElementsByClassName('prin03')[0]
    var total_salario_liquido = document.getElementById('sl1')
        // DESCONTOS INSS
    if (valor_salario <= 1100){
        inss1.innerText = `${in1}`
        inss2.innerText = `R$ ${total_desconto_7_5}`
        total_salario_liquido.innerHTML = `<strong>R$ ${salario_c_desconto1}</strong>`
        irrf1.innerHTML = '<strong>ISENTO</strong>'
        irrf2.innerHTML = '<strong>ISENTO</strong>'
        art2.style.display = 'block'
        prin02.style.top = '300px'
        posicao.style.top = '1150px'
        // DESCONTOS INSS
    } else if (valor_salario > 1100 && valor_salario <= 1903.98){
        inss1.innerText = `${in2}`
        inss2.innerText = `R$ ${total_desconto_9}`
        irrf1.innerHTML = '<strong>ISENTO</strong>'
        irrf2.innerHTML = '<strong>ISENTO</strong>'
        total_salario_liquido.innerHTML = `<strong>R$ ${salario_c_desconto2}</strong>`
        art2.style.display = 'block'
        prin02.style.top = '280px'
        // DESCONTOS IRRF    
    } else if (valor_salario > 1903.98 && valor_salario <= 2203.48){
        inss1.innerText = `${in2}`
        inss2.innerText = `R$ ${total_desconto_9}`
        irrf1.innerHTML = `${ir1}`
        irrf2.innerHTML = `R$ ${total_desconto_irrf1}`
        total_salario_liquido.innerHTML = `<strong>R$ ${salario_9_7_5}</strong>`
        art2.style.display = 'block'
        prin02.style.top = '280px'
        // DESCONTOS INSS
    } else if (valor_salario > 2203.48 && valor_salario <= 2826.65){
        inss1.innerText = `${in3}`
        inss2.innerText = `R$ ${total_desconto_12}`
        irrf1.innerHTML = `${ir1}`
        irrf2.innerHTML = `R$ ${total_desconto_irrf1}`
        total_salario_liquido.innerHTML = `<strong>R$ ${salario_12_7_5}</strong>`
        art2.style.display = 'block'
        prin02.style.top = '280px'
    } else if (valor_salario > 2826.65 && valor_salario <= 3305.23){
        inss1.innerText = `${in3}`
        inss2.innerText = `R$ ${total_desconto_12}`
        irrf1.innerHTML = `${ir2}`
        irrf2.innerHTML = `R$ ${total_desconto_irrf2}`
        total_salario_liquido.innerHTML = `<strong>R$ ${salario_12_15}</strong>`
        art2.style.display = 'block'
        prin02.style.top = '280px'
        // DESCONTOS IRRF
    } else if (valor_salario > 3305.23 && valor_salario <= 3751.05){
        inss1.innerText = `${in4}`
        inss2.innerText = `R$ ${total_desconto_14}`
        irrf1.innerHTML = `${ir2}`
        irrf2.innerHTML = `R$ ${total_desconto_irrf2}`
        total_salario_liquido.innerHTML = `<strong>R$ ${salario_14_15}</strong>`
        art2.style.display = 'block'
        prin02.style.top = '280px'
        // DESCONTOS INSS
    } else if (valor_salario > 3751.05 && valor_salario < 4664.68){
        inss1.innerText = `${in4}`
        inss2.innerText = `R$ ${total_desconto_14}`
        irrf1.innerHTML = `${ir3}`
        irrf2.innerHTML = `R$ ${total_desconto_irrf3}`
        total_salario_liquido.innerHTML = `<strong>R$ ${salario_14_22_5}</strong>`
        art2.style.display = 'block'
        prin02.style.top = '280px'
        // DESCONTOS IRRF
    } else if (valor_salario <= 4664.68 && valor_salario <= 6433.57){
        inss1.innerText = `${in4}`
        inss2.innerText = `R$ ${total_desconto_14}`
        irrf1.innerHTML = `${ir4}`
        irrf2.innerHTML = `R$ ${total_desconto_irrf4}`
        total_salario_liquido.innerHTML = `<strong>R$ ${salario_14_27_5}</strong>`
        art2.style.display = 'block'
        prin02.style.top = '280px'
    }
}