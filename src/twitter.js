const Twit = require('twit');
const chalk = require('chalk');
const { format } = require('date-fns');

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

module.exports = function startStream(cli) {
    const stream = T.stream('statuses/filter', {
        track: cli.input,
        language: cli.flags.lang
    });

    stream.on('tweet', function onTweet(tweet) {
        const {
            created_at,
            retweeted,
            text,
            user: { name, screen_name }
        } = tweet;

        if (retweeted && !cli.flags.retweets) {
            return;
        }

        if (cli.flags.json) {
            console.log(
                JSON.stringify({
                    created_at,
                    name,
                    screen_name,
                    text
                })
            );
        } else if (cli.flags.jsonFull) {
            console.log(JSON.stringify(tweet));
        } else {
            console.log(format(new Date(created_at), 'eee do MMMM HH:mm:ss'));
            console.log(chalk.inverse(`${name} // @${screen_name}`));
            console.log(text);
            console.log('\n' + '-'.repeat(50) + '\n');
        }
    });
};
