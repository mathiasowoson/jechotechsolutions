const url="https://api.dictionaryapi.dev/api/v2/entries/en/";
const result=document.getElementById("result");
const sound=document.getElementById("sound");
const Btn=document.getElementById("search-btn");

Btn.addEventListener("click",()=>{
    let inword=document.getElementById("inputText");
    fetch(`${url}${inword.value}`)
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data);

        result.innerHTML=`<div class="word">
            <h3>${inword}</h3>
            <button onclick="playSound()">
                <i class="fas fa-volume-up"</i>
            </button>
           </div>
           <div class="details">
            <p>${data[0].meanings[0].partOfSpeech}</p>
            <p>${data[0].phonetics}</p>
           </div>
           <div class="word-meaning">
            <p>
            ${data[0].meanings[0].definitions[0].definition}
            </p>
                 <p>
                 ${data[0].meanings[0].definitions[0].example || "Could'nt find any example..."}
                 </p>
           </div>`
           sound.setAttribute("src",`https://${data[0].phonetics[0].audio}`);

    });
});
function playSound(){
    sound.play();
};