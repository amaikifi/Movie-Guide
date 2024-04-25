// for styling 
let container =document.querySelector('.container')
let hiddenContainer = document.getElementById('hidden')
let input = document.getElementById('search-input')
let searchBtn = document.getElementById('search-btn')

searchBtn.addEventListener('click', () =>{
    container.classList.add('animation-after-finding-data')
    hiddenContainer.removeAttribute('id')
})


searchBtn.addEventListener('click', () => {
    search()
})



let img = document.getElementById('img')
let title = document.getElementById('title')
let rate = document.getElementById('rate')
let madeBy = document.getElementById('made-by')
let madeAt = document.getElementById('made-at')
let duration = document.getElementById('duration-num')
let classification = document.getElementById('film-classification')
let plot = document.getElementById('plot')

function search() {
    clear()
    let movieName = input.value
    let url = ` https://www.omdbapi.com/?t=${movieName}&apikey=cb603c75` // API url

    if(movieName.length <= 0) {
        
        console.log('Enter the name')
    }
    else {
        fetch(url).then((resp) => resp.json()).then((data) => {
            if (data.Response == "True") {
                img.src = data.Poster
                title.innerHTML = data.Title
                rate.innerHTML = `<img src="star.png" alt="Rating star"> ${data.imdbRating}`
                madeAt.innerHTML = data.Year
                duration.innerHTML = data.Runtime
                let classificationItems = data.Genre.split(",")
                let i = 0
                while (i < classificationItems.length) {
                    classification.innerHTML += `<div>${classificationItems[i]}</div>`
                    i++
                }
                plot.innerHTML = data.Plot
            }
        })
    }
}



function clear() {
    img.src = ''
        title.innerHTML = ''
        // rate.innerHTML = '' // don't use it and if you use it don't forget to check if the star is still there
        madeBy.innerHTML = ''
        madeAt.innerHTML = ''
        duration.innerHTML = '' 
        classification.innerHTML = ``
        plot.innerHTML = ''
}
