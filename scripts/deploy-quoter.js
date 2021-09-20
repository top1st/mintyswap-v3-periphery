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

    const Quoter = await hre.ethers.getContractFactory("Quoter", deployer);
    const quoter = await Quoter.deploy("0x42eb44df87B9170363dE9B09bd39BF9b5F05f231", WETHAddress)
    await quoter.deployed()

    console.log(quoter.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
