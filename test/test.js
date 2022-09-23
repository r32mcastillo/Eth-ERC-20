const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("my coin",function(){
    it("create initial supply",async ()=>{
        const [owner, addr1, addr2] = await ethers.getSigners();
        const contract = await ethers.getContractFactory("MyCoin");
        const deployed = await contract.deploy(
            "Coin De Miguel",
            "MiguelC"
        );
        
        const ownerBalance = await deployed.balanceOf(owner.address);
        expect(await deployed.totalSupply()).to.equal(ownerBalance);
    });
    it("transfer",async ()=>{
        const [owner, addr1, addr2] = await ethers.getSigners();
        const contract = await ethers.getContractFactory("MyCoin");
        const deployed = await contract.deploy(
            "Coin De Miguel",
            "MiguelC"
        );
        // Transfer 50 tokens from owner to addr1
        await deployed.transfer(addr1.address, 50);
        expect(await deployed.balanceOf(addr1.address)).to.equal(50);

        // Transfer 50 tokens from addr1 to addr2
        await deployed.connect(addr1).transfer(addr2.address, 50);
        expect(await deployed.balanceOf(addr2.address)).to.equal(50);

    });
});