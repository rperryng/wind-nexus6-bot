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

    console.log('got', data.length, 'results');

    if (err || !data) {
      return;
    }

    data.forEach(function (tweet, index) {
//      console.log(index + ' - ' + tweet.id + ': ' + tweet.text);

      var text = tweet.text;

      var keyWords = ['5', 'min', '#Nexus6', '#BirthdayGift'];

      var hasAllKeywords = keyWords.every(function (keyword) {
        var isValid = text.indexOf(keyword) > -1;

        if (!isValid) {
          console.log('couldn\'t find', keyword);
        }
        return isValid;
      });



      console.log('text: ' + tweet.text);
      console.log('isValid: ' + hasAllKeywords);
      console.log();
    });
  });
}
