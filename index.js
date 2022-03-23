//Select and Style Element

let header = document.querySelector('#page-header')
header.style.textAlign = "left"

//Select and Style Multiple Elements
let dogImages = document.querySelectorAll('.dog-image')
for(let i = 0; i < dogImages.length; i++){
	dogImages[i].style.borderRadius = '50px'
}
//Make dogs' name align to the left
let header = document.querySelector('#dog-name')
header.style.textAlign = "left"