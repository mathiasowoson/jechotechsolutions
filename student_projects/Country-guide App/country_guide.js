const country_inp=document.getElementById("country_inp");
const searchBtn=document.getElementById("searchBtn");
const result=document.getElementById("result");

searchBtn.addEventListener("click",()=>{
    const countryName=country_inp.value;
    const Finalurl=`https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(Finalurl);
fetch(Finalurl)
.then((Response)=>Response.json())
.then((data)=>{
    console.log(data[0]);
    console.log(data[0].capital[0]);
    console.log(data[0].flags.svg);
    console.log(data[0].name.common);
    console.log(data[0].continents[0]);
    console.log(Object.keys(data[0].currencies)[0]);
    console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
    console.log(Object.values(data[0].languages).toString().split(",").join(", "));
    result.innerHTML=`
   <img src="${data[0].flags.svg}" class="img-flags">
   <h3>${data[0].name.common}</h3>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Capital:</h4>
   <span>${data[0].capital[0]}</span>
   </div>
   </div>

   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Continent:</h4>
   <span>${data[0].continents[0]}</span>
   </div>
   </div>

    <div class="wrapper">
   <div class="data-wrapper">
   <h4>Population:</h4>
   <span>${data[0].population}</span>
   </div>
   </div>

   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Currency:</h4>
   <span>${data[0].currencies[Object.keys(data[0].currencies)].name}
   -${Object.keys(data[0].currencies)[0]}</span>
   </div>
   </div>

   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Language:</h4>
   <span>${Object.values(data[0]
    .languages)
    .toString()
    .split(",")
    .join(", ")}</span>
   </div>
   </div>
   `; 
})
.catch(()=>{
    if(countryName == 0) {
        result.innerHTML=`<h3>The input filed cannot be empty</h3>`;
    } else {
        result.innerHTML=`<h3>Please enter a valid country name.</h3>`;
    }
})
})
