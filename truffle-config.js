const path = require("path");

require('dotenv').config();
const {MNEMONIC , PROJECT_ID} = process.env

const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    // development: {
    //   host: "127.0.0.1",
    //   port: 7545,
    //   network_id: "5777", // Match any network id
    // },
    goerli: {
      provider: () => new HDWalletProvider(MNEMONIC, `wss://eth-goerli.g.alchemy.com/v2/${PROJECT_ID}`),
      network_id: '5',
      confirmations: 2,
      timeoutBlocks: 2000,
      skipDryRun: true
    }
  },
};
