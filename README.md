# writeconf:

## installation
`npm i -g writeconf`

## usage
`writeconf --port 8888 --apiHost http://myapi.com`

This will result in a `config.json` file:
```
{
  port: 8888,
  apiHost: 'http://myapi.com'
}
```

## usage 2

When running the command again with changed arguments, it will extend the existing `config.json` file


`writeconf --port 666`

output:
```
{
  port: 666,
  apiHost: 'http://myapi.com'
}
```

### NOTE!
this module was hacked together in 15min.
There a some todos to make it more generic e.g. add a way to specify the name of the config file.