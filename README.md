<div align="right">
  <img src="https://raw.githubusercontent.com/r32mcastillo/reactpractico/main/src/assets/logos/log-2.png" alt="logo" width="50" height="auto" />
</div>


<!-- About the Project -->
## :star2: Practica de Web3 ERC-20

**Puedes ver el resultado en:** [https://rinkeby.etherscan.io/address/0x2BC92827c580DAF3737a37bBCb05847b02b81258](https://rinkeby.etherscan.io/address/0x2BC92827c580DAF3737a37bBCb05847b02b81258)


### :bangbang: Prerrequisitos
**Ambiente de desarrollo.**
- node v16.17.0
- yarn 1.22.19
- hardhat 2.11.2

### :gear: 
**Comandos al crear el proyecto.**
Si está usando hardhat-waffle Migración a Hardhat Toolbox
```
yarn init  -y
yarn add -D hardhat
yarn add -D @nomicfoundation/hardhat-toolbox
yarn add -D @nomicfoundation/hardhat-toolbox @nomicfoundation/hardhat-network-helpers @nomicfoundation/hardhat-chai-matchers @nomiclabs/hardhat-ethers @nomiclabs/hardhat-etherscan chai ethers hardhat-gas-reporter solidity-coverage @typechain/hardhat typechain @typechain/ethers-v5 @ethersproject/abi @ethersproject/providers
yarn add -D dotenv
yarn add @openzeppelin/contracts

npx hardhat
npx hardhat compile
npx hardhat test
npx hardhat run .\scripts\deploy.js
npx hardhat run .\scripts\deploy.js --network rinkeby

//verificar contrato
npx hardhat flatten > Flattened.sol

```


