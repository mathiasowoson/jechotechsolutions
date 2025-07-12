//past your generated API key here
// let apiKey="d2b1de5ee18cbfe8d9d4120d";

let api=`https://v6.exchangerate-api.com/v6/d2b1de5ee18cbfe8d9d4120d/latest/USD`;
const fromDropDown=document.getElementById("from_currency_select");
const toDropDown=document.getElementById("to_currency_select");
const result=document.getElementById("result");

currencies = [
    "AFN", "ALL", "DZD", "AOA", "ARS", "AMD", "AWG", "AUD", "AZN", "BSD", 
    "BHD", "BDT", "BBD", "BYN", "BZD", "BMD", "BTN", "BOB", "BAM", "BWP", 
    "BRL", "BND", "BGN", "BIF", "XOF", "XAF", "XPF", "KHR", "CAD", "CVE", 
    "KYD", "XAF", "CLP", "CNY", "COP", "KMF", "CDF", "CRC", "HRK", "CUC", 
    "CUP", "CZK", "DKK", "DJF", "DOP", "XCD", "EGP", "ERN", "EEK", "ETB", 
    "EUR", "FJD", "GMD", "GEL", "GHS", "GIP", "GTQ", "GNF", "GYD", "HTG", 
    "HNL", "HKD", "HUF", "ISK", "INR", "IDR", "IRR", "IQD", "ILS", "JMD", 
    "JPY", "JOD", "KZT", "KES", "KWD", "KGS", "LAK", "LVL", "LBP", "LSL", 
    "LRD", "LYD", "LTL", "MOP", "MKD", "MGA", "MWK", "MYR", "MVR", "MRO", 
    "MUR", "MXN", "MDL", "MNT", "MAD", "MZN", "MMK", "NAD", "NPR", "ANG", 
    "TWD", "NZD", "NIO", "NGN", "KPW", "NOK", "OMR", "PKR", "PAB", "PGK", 
    "PYG", "PEN", "PHP", "PLN", "QAR", "RON", "RUB", "RWF", "SHP", "WST", 
    "STD", "SAR", "RSD", "SCR", "SLL", "SGD", "SBD", "SOS", "ZAR", "KRW", 
    "SSP", "LKR", "SDG", "SRD", "SZL", "SEK", "CHF", "SYP", "TJS", "TZS", 
    "THB", "TOP", "TTD", "TND", "TRY", "TMT", "UGX", "UAH", "AED", "UYU", 
    "USD", "UZS", "VUV", "VES", "VND", "YER", "ZMW", "ZWL"
];
currencies.forEach((currency) => {
    const option=document.createElement("option");
    option.value=currency;
    option.text=currency;
    fromDropDown.add(option);
    fromDropDown.value="USD";
});
currencies.forEach((currency) => {
    const option=document.createElement("option");
    option.value=currency;
    option.text=currency;
    toDropDown.add(option);
    toDropDown.value="EUR";
});

//creat a reference
let convertCurrency=()=>{
    const amount=document.querySelector("#Amount").value;
    const fromCurrency=fromDropDown.value;
    const toCurrency=toDropDown.value;

    //if amount input field is not empty
    if (amount.length !=0){
        fetch(api).then((resp) => resp.json()).then((data) => {
            console.log(data);
            let fromExchangeRate=data.conversion_rates[fromCurrency];
            let toExchangeRate=data.conversion_rates[toCurrency];
            const exchangeConversion=(amount/fromExchangeRate)*toExchangeRate;
            result.innerText=`${amount} ${fromCurrency} = ${exchangeConversion.toFixed(2)} ${toCurrency}`;
            result.classList.remove("active");
        });
    } else {
        // alert ("please fill in the amount");
        result.classList.add("active");
        result.innerText="please fill in the amount";
    }
};
document
.querySelector("#convert_button")
.addEventListener("click", convertCurrency);
window.addEventListener("load", convertCurrency);