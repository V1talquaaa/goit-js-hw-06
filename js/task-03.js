const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector('.gallery');

 const markup = images.map((image) => `<li class="gallery__item">
 <img src=${image.url} alt=${image.alt} class="gallery__image" width = 360 height = 200>
 </li>`).join('');

 list.insertAdjacentHTML('beforeend', markup);







//! для себе (варіант два)

// let newArray = [];

// images.forEach(image => {
//   const galleryItemEl = document.createElement('li');
//   galleryItemEl.classList.add('item');

//   const galleryImg = document.createElement('img');
//   galleryImg.src = image.url;
//   galleryImg.alt = image.alt;
//   galleryImg.width = 340;
//   galleryItemEl.appendChild(galleryImg);

//   return newArray.push(galleryItemEl);
// });

// list.append(...newArray);

//! для себе (варіант два)
