require("dotenv").config();
const { ethers } = require("ethers");

const privateKey = process.env.PRIVATE_KEY;
const wallet = new ethers.Wallet(privateKey);

console.log("Dirección de la wallet:", wallet.address);