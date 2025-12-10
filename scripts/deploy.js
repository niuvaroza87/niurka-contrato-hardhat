const hre = require("hardhat");

async function main() {
  console.log("🚀 Desplegando MiPrimerContrato en Sepolia...");
  console.log("-------------------------------------------");

  const MiPrimerContrato = await hre.ethers.getContractFactory("MiPrimerContrato");
  const contrato = await MiPrimerContrato.deploy();

  await contrato.waitForDeployment();

  const address = await contrato.getAddress();
  
  console.log("✅ Contrato desplegado exitosamente!");
  console.log("📍 Dirección del contrato:", address);
  console.log("🔗 Ver en Etherscan:", `https://sepolia.etherscan.io/address/${address}`);
  console.log("-------------------------------------------");
  
  const nombreInicial = await contrato.nombre();
  console.log("📝 Nombre inicial en el contrato:", nombreInicial);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Error durante el despliegue:", error);
    process.exit(1);
  });