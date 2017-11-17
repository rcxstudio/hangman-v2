import axios from 'axios';

const helpers = {
  retrieveVideoGames: () => {
    return axios.get('/api/videogames').then(res => {
      // TODO: change index value to a random number based on the length.
      return res.data.themeBank[0];
    })
  },
}

export default helpers;
