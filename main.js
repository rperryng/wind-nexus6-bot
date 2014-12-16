var Twit = require('twit'),
  config = require('./config.js');
var ONE_MINUTE_IN_MILLIS = 60000;

var twitter = new Twit(config);

setInterval(checkForPromotionalTweet, ONE_MINUTE_IN_MILLIS);
checkForPromotionalTweet();

function checkForPromotionalTweet() {

  var endpoint = 'statuses/user_timeline';
  var params = {
    screen_name: 'WINDmobile',
    count: 20,
    include_rts: false,
    exclude_replies: true
  };

  twitter.get(endpoint, params, function (err, data) {

    if (err || !data) {
      return;
    }

    data.forEach(function (tweet, index) {
      console.log(index + ' - ' + tweet.id + ': ' + tweet.text);

      var text = tweet.text;
      var keyWords = ['5', 'min', '#Nexus', '#BirthdayGift'];
      var hasAllKeywords = keyWords.every(function (keyword) {
        var isValid = text.indexOf(keyword) > -1;

        if (!isValid) {
          console.log('couldn\'t find', keyword);
        }
        return isValid;
      });

      if (hasAllKeywords) {
        retweet(tweet.id);
      }

      // newline for readability
      console.log();
    });
  });
}

function retweet(id) {
  console.log('attempting to retweet with id', id);
  var endpoint = 'statuses/retweet/:id';
  var params = {
    id: id
  };

  twitter.post(endpoint, params, function (err, data, response) {
    if (err || !data) {
      console.log(err.statusCode, err.message);
      return;
    }

    console.log('success! Retweeted - ' + data.text);
  });
}
