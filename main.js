var Twit = require('twit'),
  config = require('./config.js');
var ONE_MINUTE_IN_MILLIS = 60000;

var twitter = new Twit(config);

setInterval(checkForTweet, ONE_MINUTE_IN_MILLIS);
checkForTweet();

function checkForTweet() {

  var endpoint = 'statuses/user_timeline';
  var params = {
    screen_name: 'WINDmobile',
    count: 2,
    include_rts: false,
    exclude_replies: true
  };


  twitter.get(endpoint, params, function (err, data) {
    if (err || !data) {
      return;
    }

    data.forEach(function (tweet, index) {
      console.log(index + ' - ' + tweet.id + ': ' + tweet.text);
    });
  });
}
