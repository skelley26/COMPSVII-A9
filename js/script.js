console.log("script.js loaded");


let endpoint = fetch("https://api.giphy.com/v1/stickers/search?api_key=fpuWWbBnYXRV0gwPFWhhCi6UAs16swuJ&q=good&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips");
console.log(endpoint);



async function searchGif() {
    const response = await fetch(endpoint);
    const data = await response.json();
    const gif = data.gif[0];

    const output = document.getElementById("gif-container");
    output.textContent = gif;
};

console.log(searchGif())


let button = document.querySelector(".fetch-gif-btn");
let gifContainer = document.querySelector(".gif-container");

button.addEventListener("click", function() {
    searchGif();
    gifContainer.innerHTML += `<img src="${IMAGE_URL_GOES_HERE}" class="col-3 mb-3">`;
});



// let showGifs = document.querySelector(id="gif-container")

// let btnVariable = document.querySelector(id="btn")
