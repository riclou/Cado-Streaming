function film(){
    let genre = document.querySelector('[name="genre"]:checked').value
    var name = document.getElementById('name').value
    let poster = document.getElementById('poster').value
    let description = document.getElementById('description').value
    console.log(name)

    name = document.getElementById('name').value = ""
    poster = document.getElementById('poster').value = ""
    description = document.getElementById('description').value = ""
}