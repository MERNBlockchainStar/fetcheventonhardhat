const fs = require("fs");
const factoryABI = require("./artifacts/contracts/Lock.sol/Factory.json").abi
const factory =JSON.parse( fs.readFileSync('address.json', 'utf8') );
const hre = require('hardhat')

const ethers = require('ethers')

const main = async () =>{
    [owner, addr1, addr2, ...addrs] = await hre.ethers.getSigners();
    const provider = await ethers.getDefaultProvider("http://127.0.0.1:8545/");
    const factoryContract =new ethers.Contract(factory.factoryAddress, factoryABI, provider);
    for (let i = 0 ; i <5; i++) {
        let tx = await factoryContract.connect(owner).deployContract();
        await tx.wait()
        console.log(tx)
    }
}

main()