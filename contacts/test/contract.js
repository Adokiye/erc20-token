const ConteContract = artifacts.require("Conte");
contract("Greeter", () => {
  it("has been deployed successfully", async () => {
const greeter = await ConteContract.deployed();
    assert(greeter, "contract was not deployed");
  });
});