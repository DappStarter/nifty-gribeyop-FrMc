require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enroll other venture stool rice pitch erosion just knee army genuine'; 
let testAccounts = [
"0x638c63cd8ef90d50da30b7a4df507775fbbaa67f78251cc9d0dee6257db39695",
"0x4b413feae7347998a449b49c9a3480784851c541aae49d4ff95b54c41fd76091",
"0x690f8d964e9c6e1d3ba00f0f3a267b0906643ff18eaf025844ab99dbe5fbad4b",
"0x4dd580e3e8eb6ce29baa2a5be989b1e282b977a5090a40933d0d93f5bc2f2339",
"0x83b54790662a056328f6b640aa92a678618b6ea2a39c55e674e75621f5c01567",
"0x35154b881bd2533eb32374936bc8269a3af9151a4cfe34735518512cc3d118b8",
"0x9d3ecac17c584274e282445d661ad825edb132944bad975f49bfa16fa551cf65",
"0xab9afa57ee8e1a9167cbe6cf7cad86fca8f956589a46c16fa2b87d8a880533fb",
"0x793f62d7ae302d4ab716837aab84e6726dc618d82ae4d7312c0569f752d51b58",
"0xcf09b2a6088b8501afa788b264c87d04578cf88d86dc895be0bfcedf3d1ca5aa"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


