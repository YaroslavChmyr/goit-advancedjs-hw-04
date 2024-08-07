import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { searchRequest, loadMoreImages } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loadMoreButton = document.querySelector('.load-more');

let searchData = '';

form.addEventListener('submit', event => {
  event.preventDefault();
  searchData = document.querySelector('.search-input').value.trim();
  if (searchData === '') {
    iziToast.error({
      id: 'error',
      message:
        'The search field cannot be empty',
      position: 'topRight',
      transitionIn: 'fadeInDown',
    });
    gallery.innerHTML = '';
  } else {
    searchRequest(searchData)
      .then(hits => {
        console.log(hits);
        if (hits.length === 0) {
          iziToast.error({
            id: 'error',
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
            transitionIn: 'fadeInDown',
          });
        } else {
          gallery.innerHTML = '';
          renderGallery(hits);
          loadMoreButton.style.display = 'block';
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
});

loadMoreButton.addEventListener('click', event => {
  event.preventDefault();
  loadMoreImages(searchData)
      .then(hits => {
        console.log(hits);
        if (hits.length === 0) {
          iziToast.error({
            id: 'error',
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
            transitionIn: 'fadeInDown',
          });
        } else {
          renderGallery(hits);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
})