import axios from 'axios';

const helpers = {
  retrieveVideoGames: () => {
    return axios.get('/api/videogames').then(res => {
      console.log('res', res)
      return res;
    })
  },
}

export default helpers;
