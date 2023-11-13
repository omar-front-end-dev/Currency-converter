const taskData = document.getElementById("taskData");
const card = document.querySelectorAll(".card");
const dataInput = document.getElementById("data-input");
const outEGP = document.querySelector(".out-EGP");
const outEUR = document.querySelector(".out-EUR");
const outSAR = document.querySelector(".out-SAR");
const outGBP = document.querySelector(".out-GBP");
const outUSD = document.querySelector(".out-USD");
const typeCurrency = document.getElementById("type-currency");

taskData.addEventListener("submit", function(e) {
    e.preventDefault()
    fetch(`https://v6.exchangerate-api.com/v6/84d922f7f0857c17f682484e/latest/${typeCurrency.value}`)
    .then(res => res.json())
    .then(data =>{
        card.forEach((item) =>{
            item.classList.add("show-currency")
        })
        let USD = data.conversion_rates.USD * dataInput.value
        let EGP = data.conversion_rates.EGP * dataInput.value
        let EUR = data.conversion_rates.EUR * dataInput.value
        let SAR = data.conversion_rates.SAR * dataInput.value
        let GBP = data.conversion_rates.GBP * dataInput.value
        outUSD.textContent = `${USD.toFixed(2)} USD`
        outEGP.textContent = `${EGP.toFixed(2)} EGP`
        outEUR.textContent = `${EUR.toFixed(2)} EUR`
        outSAR.textContent = `${SAR.toFixed(2)} SAR`
        outGBP.textContent = `${GBP.toFixed(2)} GBP`
    })
})

