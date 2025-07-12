let meme=document.getElementById("meme");
let title=document.getElementById("title");
let getMemeBtn=document.getElementById("get-meme-btn");

//API URL
let url= "https://meme-api.herokuapp.com/gimme/";
//Array of subredits of your choice
let subreddits=["catmemes","wholesomemes","dogmemes","me_irl"];

//function to get Random meme
let getmeme = () => {
    //choose a random subreddit from the subreddits array
    let randomSubreddite = subreddits[Math.floor(Math.random() * subreddits.length)];
    console.log(randomSubreddite);

    //fetch data from the API
    fetch(url + randomSubreddite)
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data);

        let memeImage=new Image();
        //display meme image and title only after the image loads
        memeImage.onload= ()=>{
            meme.src = data.url;
            title.innerHTML = data.title;
        }
        memeImage.src = data.url;
    });
};

getMemeBtn.addEventListener("click",getmeme);
window.addEventListener("load",getmeme);