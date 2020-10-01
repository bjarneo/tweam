const meow = require('meow');
const startStream = require('./src/twitter');

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

try {
    startStream(cli);
} catch (e) {
    console.error(e);

    process.exit(1);
}
