const hre = require("hardhat");
const fs = require("fs");
const factoryABI = require("./artifacts/contracts/Lock.sol/Factory.json").abi
const factory =JSON.parse( fs.readFileSync('address.json', 'utf8') );
const ethers = require('ethers')
const main = async () =>{
    const provider = await ethers.getDefaultProvider("http://127.0.0.1:8545/");
    const factoryContract = new ethers.Contract( factory.factoryAddress, factoryABI, provider);
    console.log("---starting----")
    factoryContract.on("ContractDeployed", async function (vaultAddress, event) {
        console.log("-----deployed vault contract address ==== : ")
        console.log(vaultAddress);
    })
}

main()