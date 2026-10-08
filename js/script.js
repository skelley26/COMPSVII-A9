console.log("script.js loaded");

//endpoint url
const endpoint = fetch("https://api.giphy.com/v1/stickers/search?api_key=fpuWWbBnYXRV0gwPFWhhCi6UAs16swuJ&q=frog&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips");
console.log(endpoint);
//^to make sure that it's working

let button = document.querySelector("#fetch-gif-btn"); //These threw me off because I put .fetch-gif-btn and .gif-container instead of putting # because they're ids not classes. 
let gifContainer = document.querySelector("#gif-container");


async function searchGif() {
    const response = await fetch("https://api.giphy.com/v1/stickers/search?api_key=fpuWWbBnYXRV0gwPFWhhCi6UAs16swuJ&q=frog&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips");
    const data = await response.json(); //follow what the resource says to do

    //loop the gifs so that you get many results instead of just one
    gifContainer.innerHTML = ""; //leave empty so that you're able to see each gif
    data.data.forEach((gif) => {
        const imageUrl = gif.images.original.url; //store image urls
        gifContainer.innerHTML += `<img src="${imageUrl}" class="col-3 mb-3">`; //iterate through each image url
    });

};
//When the specific button is clicked, run the async function above.
button.addEventListener("click", function() {
    searchGif();
});

