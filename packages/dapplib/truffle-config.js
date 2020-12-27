require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give prison obtain suggest name raise pizza slow guess kangaroo army gentle'; 
let testAccounts = [
"0x3718caf9a8a68b90513cc0e6047b0e6fdf0c4fe51caea0a5b8e993e4eeeb5f47",
"0x33a4e3361564f49b7ec633e32a673397eca97208a2d7488e43c514d0f0d87bcc",
"0x2f576d732a2824676c83c37d5c50296c7560855942c19498d636c1e2de70ad99",
"0x50036a5a099f9e25cf4f320106687af3f4f9131378a970b52c1e985f820de273",
"0x7d83306e09aa0c117e5aecd1928748a658b4844a3058983af0377b0a883809ee",
"0x1f99f4670b39db11a8f614ad8688c87310f18745e258765c54c494460fe38b3c",
"0xe1ecc9c945b5b66f996c07ceef7468593e32599928a0f8d3777133d9392f784e",
"0xd1829c59b88843191704d99cbc222eae7a1f13430f138faeab08b9a2ccbd3592",
"0x877714bc326673d6876ab31c4fc95fedbe200f795a88067549db9d5a9a279986",
"0x295830237cb491961ea772ea1508d599bbed00d19dc74ff627091667b696bf88"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
