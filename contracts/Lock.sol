// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";

contract Vault {
    uint public unlockTime;
    address payable public owner;

    event Withdrawal(uint amount, uint when);

    constructor() {
    }

}

contract Factory {
    event ContractDeployed(address valultAddress);
    constructor(){}

    function deployContract() external {
        Vault deployedContract = new Vault();
        emit ContractDeployed(address(deployedContract));
    }
}