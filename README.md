Wind was running a promotion where if you retweet their tweet in the next 5 minutes, you had a chance to win a nexus 6. Who the hell manually checks stuff these days? Bot to the rescue!

####How to use

First of all, create a file called `config.json` at the root level of the project.  Make it look like so

    module.exports = {
      consumer_key: '...',
      consumer_secret: '...',
      access_token: '...',
      access_token_secret: '...'
    };

Register a twitter application and fill in the necessary fields.

1. Install dependencies: `npm install`
2. Spin up the bot: `node main.js`

Although, by the time you read this, the promotion will have been over by a long shot so you probably won't get much use out of this :)

I barely spent any time writing this (wanted to push it as fast as I could) so the quality isn't there, but I had such a good time writing it that I thought I'd throw it up here anyway.
