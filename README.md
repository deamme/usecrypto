# Use Crypto

A list of resources where you can spend your ETH, DAI etc.

[![GitHub issues](https://img.shields.io/github/issues/deamme/usecrypto)](https://github.com/deamme/usecrypto/issues) [![GitHub forks](https://img.shields.io/github/forks/deamme/usecrypto)](https://github.com/deamme/usecrypto/network)
[![GitHub stars](https://img.shields.io/github/stars/deamme/usecrypto)](https://github.com/deamme/usecrypto/stargazers)
[![GitHub license](https://img.shields.io/github/license/deamme/usecrypto)](https://github.com/deamme/usecrypto/blob/master/LICENSE) 

## Development
1. Install dependencies using `npm install`
2. Run site using `npm start`

## Pull Requests
Pull requests are very welcome to both add functionality and websites - check the repo issues for details!

## Adding a website
The list of all currently known websites are listed under `data/data.json`

Fork the repo and add any websites that are not in the list with the following format
```json
{
    "title": "<Title name goes here>",
    "link": "<link to website goes here>",
    "categories": ["<single or multiple catagories seperated with commas>"],
    "crypto": ["<single or multiple accepted cryptos seperated with commas"]
}
```
For example:
```json
{
    "title": "Laptop Power Bank",
    "link": "https://www.laptoppowerbank.com",
    "categories": ["Shopping", "Electronics"],
    "crypto": [
      "BTC",
      "XRM",
      "LTC",
      "SBD",
      "XVG",
      "DGB",
      "DOGE",
      "SMART",
      "NEO",
      "VTC",
      "UBQ"
    ]
}
```
Then create a pull request to update the list.
