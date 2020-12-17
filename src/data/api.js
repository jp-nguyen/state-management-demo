async function getPhotosFromAlbum(albumId) {
  console.log('calling the api');
  return await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
}

const api = { getPhotosFromAlbum };

export default api;