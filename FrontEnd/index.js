let allWorks;

fetch("http://localhost:5678/api/works")
  .then(works => works.json())
  .then(works => {
    allWorks = works;
    ajoutGallery();
  }); 

function ajoutGallery() {
    const galleryElement = document.querySelector('.gallery');
    galleryElement.innerHTML= "";

    works.forEach(work => {
      const figure = document.createElement('figure');
      const image = document.createElement('img');
      image.src = work.imageUrl;
      const caption = document.createElement('figcaption');
      caption.textContent = work.title;

      figure.appendChild(image);
      figure.appendChild(caption);
      galleryElement.appendChild(figure);
  });
}

const filterButtons = document.querySelectorAll('[data-category]');
filterButtons.forEach(btn => {
  btn.addEventListener('click', (event) => {
    const category = event.target.dataset.category;
    triObjets(category);
  });
});
     
 function triObjets(category) {
  let filteredWorks;
  
  if (category =="all") {
    filteredWorks = allWorks;
  }
  else {
    filteredWorks = allWorks.filter(work => {
      return work.category.name == category;
    });
  }

  ajoutGallery(filteredWorks)
 }
