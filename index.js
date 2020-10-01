const meow = require('meow');
const startStream = require('./src/twitter');

const cli = meow(
    `
    Usage
      $ tweam <input>
 
    Options
      --lang, -l        Set language.                   Default: 'en'
      --retweets, -r    Should display retweets.        Default: false
      --json, -j        Should display tweets as json.  Default: false
 
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
            },
            json: {
                type: 'boolean',
                alias: 'j',
                default: false
            }
        }
    }
);

try {
    startStream(cli);
} catch (e) {
    console.error(e);

    process.exit(1);
}
