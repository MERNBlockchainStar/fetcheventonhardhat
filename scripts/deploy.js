// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const fs = require("fs");

async function main() {

  const Factory = await hre.ethers.getContractFactory("Factory");
  const factory = await Factory.deploy();
  let factoryContract = await factory.deployed();
  console.log(factoryContract.address)
  fs.writeFile("address.json", JSON.stringify({factoryAddress: factoryContract.address}), 'utf8', function (err) {
    if(err) {
      console.log(err)
    } else {
      console.log("....writing address in json...")
    }
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
