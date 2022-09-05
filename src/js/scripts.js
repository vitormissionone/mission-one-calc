let botão = document.getElementById("botão")
let select = document.getElementById("select-moedas")




async function ConverterMoedas() {

let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then( function(resposta){
    return resposta.json()
})

let dolar = moedas.USDBRL.high
let euro = moedas.EURBRL.high
console.log(dolar)
console.log(euro)

    let inputValorEmReais = Number(document.getElementById("input").value)
    let inputMoedas = document.getElementById("input-moedas")
    let inputReal = document.getElementById("input-real")

    if (select.value === "US$ Dólar Americano") {
        let ValorEmDolares = inputValorEmReais / dolar
        inputMoedas.innerHTML = ValorEmDolares.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    }
    if (select.value === "€ Euro") {
        let valorEmEuros = inputValorEmReais / euro
        inputMoedas.innerHTML = valorEmEuros.toLocaleString("de-DE", { style: "currency", currency: "EUR" })
    }

    inputReal.innerHTML = inputValorEmReais.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}




// Essa função é responsável por trocar a bandeira e o nome das moedas
function TrocaDeMoeda() {
    let textoMoedas = document.getElementById("texto-moedas")

    let bandeiraMoedas = document.getElementById("bandeira-moedas")

    if (select.value === "€ Euro") {
        textoMoedas.innerHTML = "Euro"
        bandeiraMoedas.src = "./img/euro.png"
    }



    if (select.value === "US$ Dólar Americano") {
        textoMoedas.innerHTML = "Dólar Americano"
        bandeiraMoedas.src = "./img/usa.png"
    }









    ConverterMoedas()

}

botão.addEventListener("click", ConverterMoedas)
select.addEventListener("change", TrocaDeMoeda)



