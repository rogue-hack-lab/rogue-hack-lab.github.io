const axios = require('axios');
exports.handler = (event, context, callback) => {
  axios.get('https://api.meetup.com/rogue-hack-lab/events?page=4', {transformResponse: []})
    .then((res) => {
      console.log(res);
      
      callback(null, {
        statusCode: 200,
        body: res.data,
      });
    })
    .catch((err) => {
      callback(err);
    });
};