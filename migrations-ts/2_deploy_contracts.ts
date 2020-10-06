const Multicall = artifacts.require("Multicall");

module.exports = async function (deployer) {
  await deployer.deploy(Multicall);

} as Truffle.Migration

// because of https://stackoverflow.com/questions/40900791/cannot-redeclare-block-scoped-variable-in-unrelated-files
export { }
