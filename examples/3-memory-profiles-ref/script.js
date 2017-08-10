// this is a problem
let elements = {
    button: document.getElementById("button"),
    image: document.getElementById("image"),
    text: document.getElementById("text")
};

function doStuff() {
    image.src = "https://unsplash.it/200/300";
    button.click();
}

function removeElements() {
    console.log("removing elements");

    // how do we fix??


    // The button is a direct child of body
    document.body.removeChild(document.getElementById("button"));
    document.body.removeChild(document.getElementById("image"));
    document.body.removeChild(document.getElementById("text"));

    // ^^ why doesn't this work?
}

doStuff();

document.getElementById("cleanup").addEventListener("click", removeElements);
