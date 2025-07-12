// let accessKey="";
const searchForm=document.querySelector("form");
const searchInput=document.querySelector(".search-input");
const imageContainer=document.querySelector(".image-container");

//function to fetch image using unsplash API
const fetchData= async (query)=>{
    const url=`https://api.unsplash.com/search/photos?query=${query}&per_page=28&client_id=${accessKey}`
    const Response=await fetch(url);
    const data= await Response.json();
    console.log(data);
};

//adding Eventlistener to search form
searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const inputText=searchForm.value.trim();
    
    if (inputText !== ''){
        fetchData(inputText);
    }
    else{
        imageContainer.innerHTML=`<h2>please enter a serach query.</h2>`;
    }
});