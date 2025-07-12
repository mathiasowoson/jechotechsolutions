let apiKey="HmKU8u5hk86VcWfcKVYRAD2ZWZ2aNL0y";
let SubmitBtn=document.getElementById("search-Btn");

let generateGif=()=>{
//let load    roll until gif is loaded
const loader=document.querySelector(".loader").style.display="block";
document.querySelector(".wrapper").style.display="none";

//let get the input values
let q=document.querySelector("#search-box").value;
//we need 10 gif to be displayed in the the result
let gifCount=10;
// gif url
let finalUrl=`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${q}&limit=${gifCount}&offset=0&rating=g&lang=en`;
document.querySelector(".wrapper").innerHTML="";

//make a call to api
fetch(finalUrl)
.then((Response)=> Response.json())
.then((info)=>{
    console.log(info.data);
    //for all gif
    let gifdata=info.data;
    gifdata.forEach((gif) => {
        //to creat box for all the gif
        let container=document.createElement("div");
        container.classList.add("container");
        
        let iframe=document.createElement("img");
        console.log(gif);

        iframe.setAttribute("src", gif.images.downsized_medium.url);

        iframe.onload=()=>{
            //if git image are loaded correctly then the count reduce by default when other gif are loading
            gifCount--;
            if (gifCount == 0){
                //if all gif are loaded then hide the gif and display ui
                const loader=document.querySelector(".loader").style.display="none";
                document.querySelector(".wrapper").style.display="grid";
            }
        }
        container.append(iframe);
        let copyBtn=document.createElement("button");
        copyBtn.innerText="copy link";
        copyBtn.onclick=()=>{
            //append the obtian id to the default url
            let copylink=`https://media4.giphy.com/media/${git.id}/giphy.mp4`;
            //copt text inside inside the text field
            navigator.clipboard.writeText(copylink).then(()=>{
                alert("Gif copy to clipboard");
            })
            .catch(()=>{
                //if navigator is not supported
                alert("Gif is not supported");

                let hiddenInput=document.createElement("input");
                hiddenInput.setAttribute("type","text");
                document.body.appendChild(hiddenInput);
                //set value on the input
                hiddenInput.value=copylink;
                //select input
                hiddenInput.select();
                //copy the value
                document.execCommand("copy")
                //remove the input
                document.body.removeChild(hiddenInput);
            })
        };
        container.append(copyBtn);





        document.querySelector(".wrapper").append(container);
    });
})
.catch(()=>{
    loader.style.display="none";
    alert("gif cannot be found or check network connection");  
});
};


//Generate Gif on screen when user click the submit button
SubmitBtn.addEventListener("click", generateGif);
window.addEventListener("load", generateGif);