const loadImage = require('./loadimage_promise')

let addImg = (src) => {
    let imgElement = document.createElement('img')
    imgElement.src = src
    document.body.appendChild(imgElement)
}

Promise.all([
    loadImage('images/cat1.jpg'),
    loadImage('images/cat2.jpg'),
    loadImage('images/cat3.jpg')
]).then((images) => {
    console.log(images)
    images.forEach(img => addImg(img.src))
}).catch((error) => {
    // error handling
})