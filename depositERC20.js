import web3 from "/Users/kaustubhrajpathak/matic-test/web3"

// depositERC20.js
const bn = require('bn.js')
const Matic = require('@maticnetwork/maticjs').default 
const config = require('./config.json')
//const utils = require('./utils')
const token = config.PARENT_TEST_TOKEN
const amount = "1000000000000000000"
const from = config.from

// Create Matic object 
const matic = new Matic({
maticProvider: config.MATIC_PROVIDER, 
parentProvider: config.PARENT_PROVIDER, 
rootChain: config.ROOTCHAIN_ADDRESS,
registry: config.REGISTRY_ADDRESS, 
depositManager: config.DEPOSITMANAGER_ADDRESS, 
withdrawManager: config.WITHDRAWMANAGER_ADDRESS,
})

async function execute() {
//your code
  getWeb3()
    .then((result) => {
      this.web3 = result;// we instantiate our contract next
    });
// Initialize Matic
await matic.initialize()
// set matic wallet
matic.setWalletKey(config.privateKey)
// Use approveERC20TokensForDeposit to approve tokens
await matic.approveERC20TokensForDeposit(token, amount, {from, gasPrice: '10000000000'}) 
// Use depositERC20ForUser to deposit assets
return matic.depositERC20ForUser(token, from, amount, {from, gasPrice: '10000000000'})
}

 execute().then(console.log)
/*
* In depositERC721.js you can use safeDepositERC721Tokens * function to deposit the assets
**/