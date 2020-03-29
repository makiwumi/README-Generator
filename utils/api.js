const axios = require("axios");
//Get user info from api
function getUser(username) {
  const queryUrl = `https://api.github.com/users/${username}/events/public`;

    let pushEvent;
    let pushEventEmail;
    let pushEventAvatar;

    //return data provided
    return axios.get(queryUrl)
      .then(function(response){

        const responseData = response.data;
        for (entry of responseData) {
          if (entry.type === "PushEvent") {
            pushEvent = entry;
          }
        }
    
        pushEventEmail = pushEvent.payload.commits[0].author.email;
        pushEventAvatar = pushEvent.actor.avatar_url;
        
        
        return {email: pushEventEmail, avatar: pushEventAvatar}
      }).catch(error => {
        console.log(error)
      });
  };

module.exports = {
  getUser
}