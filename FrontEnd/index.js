fetch("http://localhost:5678/api/works")
  .then(data => data.json())
  .then(data => {
    console.log(data);

    function ajoutGallery(data) {
      for (let i = 0; i < data.length; i++) {
        const galleryElement = document.querySelector('.gallery');

        const figure = document.createElement('figure');
        const image = document.createElement('img');
        image.src = data[i].imageUrl;
        const caption = document.createElement('figcaption');
        caption.textContent = data[i].title;

        galleryElement.appendChild(figure);
        figure.appendChild(image);
        figure.appendChild(caption);
      }
    }

    ajoutGallery(data);

//appel items à l'API
    const items = data.items;

// constantes des différents boutons  
const tousBtn = document.getElementById('tous');
const objetsBtn = document.querySelector('.objets');
const appartementsBtn = document.querySelector('.appartements');
const hotelsRestaurantsBtn = document.querySelector('.hotels-restaurants');

// appel au clique des constantes
tousBtn.addEventListener('click', () => {
  triObjets('tous');
});

objetsBtn.addEventListener('click', () => {
  triObjets('.objets');
});

appartementsBtn.addEventListener('click', () => {
  triAppartements('.appartements');
});

hotelsRestaurantsBtn.addEventListener('click', () => {
  triHotelsRestaurants('.hotels-restaurants');
});
    // Fonction tri objets
    function triObjets() {
      items.forEach(item => {
        if (item.categoryId === 1) {
          item.style.display = 'block'; // Afficher l'élément
    } else {
          item.style.display = 'none'; // Cacher l'élément
        }
      });
    }

    // Fonction tri appartements
    function triAppartements() {
      items.forEach(item => {
        if (item.categoryId === 2) {
          item.style.display = 'block'; 
        } else {
          item.style.display = 'none';
        }
      });
    }

    // Fonction tri hôtels et restaurants
    function triHotelsRestaurants() {
      items.forEach(item => {
        if (item.categoryId === 3) {
          item.style.display = 'block'; 
        } else {
          item.style.display = 'none';
        }
      });
    }
  });
