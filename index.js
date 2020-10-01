const meow = require('meow');
const Twit = require('twit');

const {
    TWEAM_CONSUMER_KEY = '',
    TWEAM_CONSUMER_SECRET = '',
    TWEAM_ACCESS_TOKEN = '',
    TWEAM_ACCESS_TOKEN_SECRET = ''
} = process.env;

const T = new Twit({
    consumer_key: TWEAM_CONSUMER_KEY,
    consumer_secret: TWEAM_CONSUMER_SECRET,
    access_token: TWEAM_ACCESS_TOKEN,
    access_token_secret: TWEAM_ACCESS_TOKEN_SECRET
});

const cli = meow(
    `
    Usage
      $ tweam <input>
 
    Options
      --lang, -l  Set language. Default: 'en'
 
    Examples
      $ tweam nodejs javascript
`,
    {
        flags: {
            lang: {
                type: 'string',
                alias: 'l',
                default: 'en'
            },
            retweets: {
                type: 'boolean',
                alias: 'r',
                default: false
            }
        }
    }
);

const stream = T.stream('statuses/filter', {
    track: cli.input,
    language: cli.flags.lang
});

stream.on('tweet', async function onTweet(tweet) {
    const {
        created_at,
        retweeted,
        text,
        user: { name, screen_name }
    } = tweet;

    if (retweeted && !cli.flags.retweets) {
        return;
    }

    console.log(created_at);
    console.log(`${name} // @${screen_name}`);
    console.log('\n');
    console.log(text);
    console.log('\n\n\n');
});
