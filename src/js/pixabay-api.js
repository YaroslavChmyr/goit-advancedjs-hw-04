export function searchRequest(searchQuery) {
  const searchParams = new URLSearchParams({
    key: '45176737-eefebace9d6de0f5929b63080',
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  const url = `https://pixabay.com/api/?${searchParams}`;

  document.querySelector('.loader').style.display = 'inline-block';
  document.querySelector('.gallery').style.display = 'none';

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => data.hits)
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      document.querySelector('.loader').style.display = 'none';
      document.querySelector('.gallery').style.display = 'flex';
    });
}