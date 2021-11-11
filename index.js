const memeHolder = document.querySelector('#meme-holder')
const memeForm = document.getElementById('meme-generator')
// let item = document.querySelector('#meme-generator')
// console.log(item, 'this is your item')


document.addEventListener("submit", function(e){
    e.preventDefault()

    //this create the x next to meme
    let removeButton = document.createElement("button");
    removeButton.innerText = "X";

    //this create the meme
    let newMeme = document.createElement("div") //creates div of meme
    let newMemeImage = document.createElement("img") //create img element of meme
    newMeme.innerText = document.getElementById('meme-caption').value //add the caption

    newMemeImage.setAttribute('src', document.getElementById('meme-image').value)
    
    memeHolder.appendChild(newMeme)
    newMeme.appendChild(newMemeImage)
    newMeme.appendChild(removeButton);


    //here is where you can delete the meme
    newMeme.addEventListener("click", function(e){
        let deleteItem = e.target.tagName.toLowerCase();
        if (deleteItem === "button") {
            e.target.parentNode.remove();
          }
    })

    memeForm.reset();
})
