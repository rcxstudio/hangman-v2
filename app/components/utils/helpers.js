import axios from 'axios';

const helpers = {
  retrieveVideogame: () => {
    return axios.get('/api/videogames').then(res => {
      return res;
    })
  },
  retrieveFantasy: () => {
    return axios.get('/api/fantasy').then(res => {
      return res;
    })
  },
  retrieveSciFi: () => {
    return axios.get('/api/scifi').then(res => {
      return res;
    })
  }
}

export default helpers;
