# Twitter realtime status filter cli

Get tweets in real-time by using your own keyword filters.

Usage:
```bash
    Usage
      $ tweam <input>
 
    Options
      --lang, -l  Set language. Default: 'en'
 
    Example
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