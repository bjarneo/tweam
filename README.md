# Twitter real-time status filter cli

Filter tweets in real-time @ your cli with tweam

## Install

```bash
$ npm i -g tweam
# Or
$ npx tweam hacktoberfest
```

## Usage

```bash
    Usage
      $ tweam <input>

    Options
      --lang, -l        Set language.                   Default: 'en'
      --retweets, -r    Should display retweets.        Default: false
      --json, -j        Should display tweets as json.  Default: false

    Examples
      $ tweam nodejs javascript
```

## Tokens

You have to provide ENV vars to set tokens in order to use this cli. Get the tokens from https://apps.twitter.com. Please add these keys to .bashrc / .zshrc or similar.

```bash
export TWEAM_CONSUMER_KEY=''
export TWEAM_CONSUMER_SECRET=''
export TWEAM_ACCESS_TOKEN=''
export TWEAM_ACCESS_TOKEN_SECRET=''
```
