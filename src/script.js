function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res') /* res é a div res - tem que criar uma variavel chamada res*/

    if(ini.value.length == 0 || fim.value.length ==0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
       // window.alert('[ERRO] Faltam dados!') 
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        //tem que fazer se o passo for 0
        if (p <= 0) {
            window.alert('Passo Inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            //contagem crescente
          for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`  /*não esquecer do espaço depois do }* codigo emoji pegou no site unicode.org*/
            }
        } else {
            //contagem regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}