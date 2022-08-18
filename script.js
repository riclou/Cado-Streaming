let actionDiv = document.querySelector('.action-container')
let animationDiv = document.querySelector('.animation-container')
let comedyDiv = document.querySelector('.comedy-container')
let romanceDiv = document.querySelector('.romance-container')
let horrorDiv = document.querySelector('.horror-container')

let moviesName = []
let Moviesposter =  []
let movieDescription = []

function addMovie(){

    let genre = document.querySelector('[name="genre"]:checked').value
    let name = document.getElementById('name')
    let poster = document.getElementById('poster')
    let description = document.getElementById('description')

        let element = `<div>
                            <h1>${name.value}</h1>
                            <img src=${poster.value} alt='Poster Image'
                            <p>${description.value}</p>
                        </div>`
        switch (genre){
            case "action":
                actionDiv.innerHTML += element
                break
            case "animation":
                animationDiv.innerHTML += element
                break
            case "comedy":
                comedyDiv.innerHTML += element
                break
            case "romance":
                romanceDiv.innerHTML += element
                break
            case "horror":
                horrorDiv.innerHTML += element
                break
        }
    

    moviesName.unshift(name)
    Moviesposter.unshift(poster)
    movieDescription.unshift(description)

    name.value = ""
    poster.value = ""
    description.value = ""

}