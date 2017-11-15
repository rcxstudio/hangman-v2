import axios from 'axios';

const helpers = {
  // Looks up all public messages
  retrieveVideoGames: () => {
    return axios.get('/api/videogames').then(res => {
      return res;
    })
  },
}

export default helpers;
