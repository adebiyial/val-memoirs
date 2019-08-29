import { BaseUrl } from '../utils/fx';

async function getPhotos(howMany = 5) {
  const client_id = process.env.REACT_APP_CLIENT_ID;
  const numberOfPhotos = howMany;
  const searchQuery = 'valentine';
  const endpoint = `?query=${searchQuery}&per_page=${numberOfPhotos}&client_id=${client_id}`;

  const { data } = await BaseUrl.get(endpoint);

  // Get the necessary details here
  const photos = data.map(photo => {
    const { small: photoSrcSmall } = photo.urls;
    return photoSrcSmall;
  });

  return photos;
}

async function getPhoto() {
  const photo = await getPhotos(1);
  return photo;
}

export { getPhotos, getPhoto };
