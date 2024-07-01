# Bitcoin Wallet Generator

Este projeto é um exemplo de como gerar carteiras Bitcoin na rede Testnet utilizando as bibliotecas `bitcoinjs-lib`, `bip32` e `bip39`. A Testnet é uma rede de teste do Bitcoin, utilizada por desenvolvedores para testar funcionalidades sem usar Bitcoins reais.

## Recursos

- Geração de carteiras Bitcoin com endereço no formato Bech32.
- Exibição da chave privada e do seed mnemônico para recuperação da carteira.

## Tecnologias Utilizadas

- Node.js
- bitcoinjs-lib
- bip32
- bip39

## Pré-requisitos

- Node.js instalado na sua máquina.

## Instalação

1. Clone este repositório:
    ```bash
    git clone https://github.com/thiagojordao98/btc-wallet-generate.git
    cd btc-wallet-generate
    ```

2. Instale as dependências do projeto:
    ```bash
    npm install
    ```

## Como Usar

Execute o script para gerar uma nova carteira Bitcoin na Testnet:

```bash
node createWallet.js
```

O script irá gerar e exibir as seguintes informações:

- Endereço Bitcoin na Testnet
- Chave privada (WIF - Wallet Import Format)
- Seed (mnemonic) usada para gerar a carteira

## Obtendo Testnet BTC

Para testar sua carteira, você pode obter BTC na Testnet utilizando faucets. Alguns exemplos de faucets confiáveis:

- [Testnet Faucet](https://testnet-faucet.com/)
