require("@nomiclabs/hardhat-waffle");
// require('dotenv').config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/sMMhQZuNGGO_7GBNqNdK7L9qLLz_vyly",
      accounts: ["fb6636d42feac685e3a6b57990caf34285c575bb7a8eb029b8a3746836334a66"],
    },
  },
};





