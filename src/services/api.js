/* eslint-disable no-param-reassign */
import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=1947eedcd881a72fe3a59d405a7efea4&format=json&nojsoncallback=1&extras=url_o,owner_name,tags&per_page=8',
});

export default api;
