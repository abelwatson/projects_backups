let url = (`https://v6.exchangerate-api.com/v6/5f7c75d04e7c66eb4e2e55f8/latest/USD`)

const submitBtn = document.querySelector("#submit")
let ukPound = document.querySelector("#gbpRate");
let skWon = document.querySelector("#krwRate");
let euEuro = document.querySelector("#eurRate");
let canDollar = document.querySelector("#cadRate");
let swedKrona = document.querySelector("#sekRate");
let indRupee = document.querySelector("#inrRate");
let malaRinggit = document.querySelector("#myrRate");
let mexPeso = document.querySelector("#mxnRate");
let thaiBhat = document.querySelector("#thbRate");

async function currentRates() {
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data)

    ukPound.innerText = "$1 = " + data.conversion_rates.GBP + " Pounds";
    skWon.innerText = "$1 = " + data.conversion_rates.KRW + " Won";
    euEuro.innerText = "$1 = " + data.conversion_rates.EUR + " Euros";
    canDollar.innerText = "$1 = " + data.conversion_rates.CAD + " Dollars";
    swedKrona.innerText = "$1 = " + data.conversion_rates.SEK + " Krona";
    indRupee.innerText = "$1 = " + data.conversion_rates.INR + " Rupee";
    malaRinggit.innerText = "$1 = " + data.conversion_rates.MYR + " Ringgits";
    mexPeso.innerText = "$1 = " + data.conversion_rates.MXN + " Pesos";
    thaiBhat.innerText = "$1 = " + data.conversion_rates.THB + " Bhats";

};

currentRates();

async function showHistData() {
    let histDate = document.querySelector("#histDate").value;
    let histData = histDate.split("-");
    let histYear = histData[0];
    let histMonth = histData[1];
    let histDay = histData[2];

    let searchDay = parseInt(histDay);
    let searchYear = parseInt(histYear);
    let searchMonth = parseInt(histMonth);

    let url = (`https://v6.exchangerate-api.com/v6/5f7c75d04e7c66eb4e2e55f8/history/USD/${searchYear}/${searchMonth}/${searchDay}`);

    let response = await fetch(url);
    let data = await response.json();
    console.log(data)

    ukPound.innerText = "$1 = " + data.conversion_rates.GBP + " Pounds";
    skWon.innerText = "$1 = " + data.conversion_rates.KRW + " Won";
    euEuro.innerText = "$1 = " + data.conversion_rates.EUR + " Euros";
    canDollar.innerText = "$1 = " + data.conversion_rates.CAD + " Dollars";
    swedKrona.innerText = "$1 = " + data.conversion_rates.SEK + " Krona";
    indRupee.innerText = "$1 = " + data.conversion_rates.INR + " Rupee";
    malaRinggit.innerText = "$1 = " + data.conversion_rates.MYR + " Ringgits";
    mexPeso.innerText = "$1 = " + data.conversion_rates.MXN + " Pesos";
    thaiBhat.innerText = "$1 = " + data.conversion_rates.THB + " Bhats";
};

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    showHistData();
});