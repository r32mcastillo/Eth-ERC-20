const hre = require("hardhat");

async function main() {
	const contract = await hre.ethers.getContractFactory("MyCoin");
	const deployed = await contract.deploy(
		"Coin De Miguel",
		"MiguelC"
	);

	console.log("Deployed at:", deployed.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
