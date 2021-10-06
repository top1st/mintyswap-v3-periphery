const hre = require("hardhat");
const {ethers, network} = hre
const {formatEther, parseEther} = ethers.utils
require('dotenv').config()

const WETHAddress = {
    'hardhat': '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    'mainnet': '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    'rinkeby': '0xc778417E063141139Fce010982780140Aa0cD5Ab'
}[network.name]

async function main() {
    // const [deployer] = await ethers.getSigners();

    const deployer = new ethers.Wallet(process.env.PRIVATE_KEY, ethers.provider)

    const Router = await hre.ethers.getContractFactory("SwapRouter", deployer);
    const router = await Router.deploy("0x21bf88d5753f971ADD459b33504cb1B62c2D2719", WETHAddress)
    await router.deployed()

    console.log(router.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
