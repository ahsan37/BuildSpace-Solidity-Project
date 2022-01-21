//  const main = async () => {
//     // const [owner, randomDude] = await hre.ethers.getSigners(); // grabbed the wallet address of contract owner and I also grabbed a random wallet address and called it randomPerson
//     const waveContractFactory = await hre.ethers.getContractFactory('WavePortal'); // compiles contract and generates necessary files 
//     const waveContract = await waveContractFactory.deploy({ // hardhat creates local ethereum network solely for this contract but deletes the local network and gives a fresh blockchain everytime you tun the contract
//     value: hre.ethers.utils.parseEther('0.1'),
//  });
//      await waveContract.deployed(); // We'll wait until our contract is officially deployed to our local blockchain! Our constructor runs when we actually deploy.
//      console.log('Contract addy:', waveContract.address);

//     // console.log("Contract deployed to:", waveContract.address);
//     // console.log("Contract deployed by:", owner.address);

//     let contractBalance = await hre.ethers.provider.getBalance(
//         waveContract.address
//       );
//       console.log(
//         "Contract balance:",
//         hre.ethers.utils.formatEther(contractBalance)
//       );
  
//     const waveTxn = await waveContract.wave("This is wave #1");
//     await waveTxn.wait();
    
//     const waveTxn2 = await waveContract.wave("This is wave #2");
//     await waveTxn2.wait();

//     // let waveTxn = await waveContract.wave("A message!");
//     // await waveTxn.wait(); // Wait for the transaction to be mined

//     contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
//     console.log(
//       "Contract balance:",
//       hre.ethers.utils.formatEther(contractBalance)
//     );
  
//     let allWaves = await waveContract.getAllWaves();
//     console.log(allWaves);
//   };

// //     const [_, randomPerson] = await hre.ethers.getSigners();
// //     waveTxn = await waveContract.connect(randomPerson).wave("Another message!");
// //     await waveTxn.wait(); // Wait for the transaction to be mined

// //   };
  
// const runMain = async () => {
//     try {
//         await main();
//         process.exit(0);
//     } catch (error) {
//         console.log(error);
//         process.exit(1);
//     }
//  };

// runMain();

const main = async () => {
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy({
      value: hre.ethers.utils.parseEther("0.1"),
    });
    await waveContract.deployed();
    console.log("Contract addy:", waveContract.address);
  
    let contractBalance = await hre.ethers.provider.getBalance(
      waveContract.address
    );
    console.log(
      "Contract balance:",
      hre.ethers.utils.formatEther(contractBalance)
    );
  
    /*
     * Let's try two waves now
     */
    const waveTxn = await waveContract.wave("This is wave #1");
    await waveTxn.wait();
  
    const waveTxn2 = await waveContract.wave("This is wave #2");
    await waveTxn2.wait();
  
    contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
    console.log(
      "Contract balance:",
      hre.ethers.utils.formatEther(contractBalance)
    );
  
    let allWaves = await waveContract.getAllWaves();
    console.log(allWaves);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();