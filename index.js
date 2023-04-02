fetch('https://dog.ceo/api/breed/Golden Retriever/image/random').then(function(value) { return value.json() }).then((json) => {

    const image = document.querySelector('img')
    image.src = json.message
})
