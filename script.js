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


// let data = {
//     posterLink     : ['https://w0.peakpx.com/wallpaper/528/490/HD-wallpaper-kung-fu-panda.jpg'],
//     title          : ['Kung Fu Panda 3'],
//     rate           : ['7.1'],
//     moreInfo       : {madeBy : ['Alessandro Carloni'], madeAt : ['2016'], duration : ['95']},
//     classification : ['Animation', 'Action', 'Adventure'],
//     plot           : ['Continuing his "legendary adventures of awesomeness", Po must face two hugely epic, but different threats: one supernatural and the other a little closer to home.']
// }

let movies = ['kung fu panda'] //else 
function search() {
    clear()
    let movieName = input.value
    let url = ` http://www.omdbapi.com/?t=${movieName}&apikey=cb603c75` // API url

    if(movieName.length <= 0) {
        
        console.log('Enter the name')
    }
    else {
        fetch(url).then((resp) => resp.json()).then((data) => {
            if (data.Response == "True") {
                img.src = data.Poster
                title.innerHTML = data.Title
                rate.innerHTML = `<img src="./photosToUse/star.png" alt="Rating star"> ${data.imdbRating}`
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