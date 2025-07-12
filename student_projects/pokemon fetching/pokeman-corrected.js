numbOfPOkmon = ["Pikachu", "Bulbasaur", "Charmander", "Squirtle", "Jigglypuff", "Meowth", "Psyduck", "Machop", "Magnemite", "Ponyta"];
// pokeName.value=options.value;
const selectBtn=document.querySelector("#selectBtn");
const pokeName=document.querySelector(".searchInp");


numbOfPOkmon.forEach((pokmons) => {
    const options=document.createElement("option");
    options.value=pokmons;
    options.text=pokmons;
    selectBtn.add(options); 
});

if (pokeName.value.length <= 0){
    alert('No value given')
}

// when dropdown value changes the search input should also change
selectBtn.onchange = function(){
    pokeName.value = selectBtn.value;

    if (pokeName.value.length <= 0){
        alert('No value given')
    }
    if (pokeName.value.length > 0){
        fetchData()
    }
};





const fetchData = async () => {
    try{
        const response= await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName.value}`);
        console.log(response.url)
        if(!response.ok){
            throw new Error("could not fetch resouce");
        }
        const data = await response.json();
        console.log(data);
        const pokemonSprites=data.sprites.front_default;
        const imgElement=document.querySelector("#imgElement");
        imgElement.src=pokemonSprites;
         pokeName.value=`error`
    }
    catch(error){
        console.log('Api net fetching check connection ',error);        
    }
}


