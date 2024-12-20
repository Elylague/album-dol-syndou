const links = document.querySelectorAll('a')
const containerImagesH3 = document.querySelectorAll('.container-image h3');


links.forEach((link) => {
  
  link.addEventListener('click', showAndHideContainer )
  
})


function showAndHideContainer(event) {
  event.preventDefault()
  
  links.forEach((ancre) =>{
    ancre.classList.remove('active')
    
  } )
  
  event.target.classList.add('active')
  
  containerImagesH3.forEach((h3) => {
   // const parentElement = h3.parentElement.classList.contains('hide-images')
    if (!h3.parentElement.classList.contains('hide-images')) {
      h3.parentElement.classList.add('hide-images')
    }
    
    
  })
  
  containerImagesH3.forEach((title) =>{
    //const parent = title.parentElement
    if (event.target.textContent===title.textContent) {
      
      title.parentElement.classList.remove('hide-images')
    }
    
    
  } )
  
  
  
}





