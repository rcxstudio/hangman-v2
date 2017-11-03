import axios from 'axios';

const helpers = {
  // Creates new user in db
  createUser: (newUser) => {
    console.log('NEW USER', newUser);
    return axios.post('/api/newuser', newUser)
      /* NOTE: when using a callback for the res, the res goes through the helper first, but if no callback is here, then it goes to the component that called it. */
      .then(res => {
        console.log('from helpers',res);
        return res
      })
  },

  // Authenticating user
  authUser: (user) => {
    console.log('Existing User', user);
    return axios.put('/auth/user', user);
  },

  logout: (userToLogOut) => {
    //username is a key
    console.log('helpers user to logout', userToLogOut);
    return axios.put('/user/logout', userToLogOut)
      .then(dbRes => {
        console.log('dbRes', dbRes)
        return dbRes
    })
  },

  // Sends created message to database
  createPublicMsg: (newPubMsg) => {
    console.log('NEW PUB MSG', newPubMsg);
    return axios.put('/api/pubmsg', newPubMsg)
  },

  // Sends created message to database
  createPrivMsg: (newPrivMsg) => {
    console.log('NEW PRIV MSG', newPrivMsg);
    return axios.post('/api/privmsg', newPubMsg)
  },

  // Looks up all public messages
  retrievePubMsgs: () => {
    return axios.get('/api/pubmsg/all').then(res => {
      return res;
    })
  },

  // Looks up all private messages
  retrievePrivMsgs: (userToFind) => {
    return axios.get(`/api/privmsg/${userToFind}`).then(res => {
      console.log('res from private messages', res)
      return res;
    })
  }
}

export default helpers;
