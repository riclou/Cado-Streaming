window.onscroll = function() {myFunction()};

let header = document.getElementById("start")
let sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

let actionDiv = document.querySelector('.action-container')
let animationDiv = document.querySelector('.animation-container')
let comedyDiv = document.querySelector('.comedy-container')
let romanceDiv = document.querySelector('.romance-container')
let horrorDiv = document.querySelector('.horror-container')

let moviesName = ["Star Wars", "Os defensores", "Money Heist","Supernatural", "Reacher"]
let Moviesposter =  []
let movieLink = []

function addMovie(){

    let genre = document.querySelector('[name="genre"]:checked').value
    let name = document.getElementById('name')
    let poster = document.getElementById('poster')
    let link = document.getElementById('link')

        let element = `<a target="_blank" href="${link.value}"><img src="${poster.value}" alt="Movie: ${name.value}"></a>`
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
    

    moviesName.push(name)
    Moviesposter.push(poster)
    movieLink.push(link)

    name.value = ""
    poster.value = ""
    link.value = ""
}

const genreSelect = document.getElementById('category-content'),
    category = document.querySelector('.categoria')


category.addEventListener("mouseover", function(){
    genreSelect.style.display = 'block'

    })

genreSelect.addEventListener("mouseover", function(){
    genreSelect.style.display = 'block'

})
genreSelect.addEventListener("mouseout", function(){
    genreSelect.style.display = 'none'
})




document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
  });

  const search = document.getElementById('search'),
  inputSearch = document.querySelector('.input-search')

  function searchFilter(){
    inputSearch.innerHTML = "<input type='text' class='search-filter' placeholder='Procure pelo nome do filme'>"
  }