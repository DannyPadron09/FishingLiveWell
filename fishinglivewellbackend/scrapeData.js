const scrapeData = () => {
    fetch('https://shopkarls.com/tackle')
        .then(res => res.json())
        .then(json => console.log(json))
}