// Importando as dependências
const bip32 = require('bip32');
const bip39 = require('bip39');
const bitcoin = require('bitcoinjs-lib');

// Selecionando a rede Testnet
const network = bitcoin.networks.testnet;

// Definindo o caminho de derivação da carteira HD
const path = `m/49'/1'/0'/0`;

// Gerando o mnemonic para a seed
let mnemonic = bip39.generateMnemonic();
const seed = bip39.mnemonicToSeedSync(mnemonic);

// Criando a raiz da carteira HD
let root = bip32.fromSeed(seed, network);

// Criando a conta - par de chaves privadas e públicas
let account = root.derivePath(path);
let node = account.derive(0).derive(0);

// Criando o endereço BTC (formato Bech32)
let btcAddress = bitcoin.payments.p2wpkh({
    pubkey: node.publicKey,
    network: network,
}).address;

// Exibindo informações da carteira gerada
console.log("Carteira gerada");
console.log("Endereço: ", btcAddress);
console.log("Chave privada: ", node.toWIF());
console.log("Seed:", mnemonic);
