//infura api - rinkeby.infura.io/v3/bf22df7b1ac24126acd3fcc81326d5ea
const hdwalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface,bytecode} = require('./compile');

const provider = new hdwalletProvider(
'energy dune swim tenant beach pumpkin diagram build era empty blind scorpion',
'https://rinkeby.infura.io/v3/bf22df7b1ac24126acd3fcc81326d5ea'
);

const web3 = new Web3(provider);

const deploy = async () =>{

    const accounts = await new web3.eth.getAccounts();

    console.log('sender of the contract',accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
                            .deploy({ data:bytecode,arguments:['Hi there!'] })
                            .send({gas:'1000000', from:accounts[0]});
    
    console.log('contract deplyed in ',result.options.address);
                           
};

deploy();
