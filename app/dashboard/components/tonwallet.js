
import { 
  AssetsSDK, 
  createApi, 
  createSender, 
  importKey, 
  PinataStorageParams, 
  Address, 
  toNano 
  
} from "@ton-community/assets-sdk";
import { TonConnectUI, TonConnectProvider } from 'ton-connect-ui';

const initializeSDK = async () => {
  const NETWORK = 'testnet'; // Use 'mainnet' for production
  const api = await createApi(NETWORK);
  const keyPair = await importKey(process.env.MNEMONIC); // Use TonConnect in production
  const sender = await createSender('highload-v2', keyPair, api);

  const storage = {
    pinataApiKey: process.env.PINATA_API_KEY,
    pinataSecretKey: process.env.PINATA_SECRET
  };

  const sdk = AssetsSDK.create({
    api,
    storage,
    sender
  });

  return sdk;
};

const createUSDTJetton = async () => {
  const sdk = await initializeSDK();
  const jetton = await sdk.createJetton({
    name: 'USD₮',
    symbol: 'USDT',
    decimals: 6,
    description: 'Tether USD',
  }, {
    premint: {
      to: sdk.sender?.address,
      amount: toNano('1000') // Initial mint amount
    }
  });

  console.log('Jetton created:', jetton);
};

const openJettonWallet = async (jettonAddress) => {
  const sdk = await initializeSDK();
  const jetton = sdk.openJetton(Address.parse(jettonAddress));
  const wallet = await jetton.getWallet();

  console.log('Jetton Wallet Address:', await wallet.getData());
};

const transferUSDT = async (recipientAddress, amount) => {
  const sdk = await initializeSDK();
  const jetton = sdk.openJetton(/* your USD₮ jetton address */);
  const wallet = await jetton.getWallet();

  await wallet.sendTransfer({
    to: Address.parse(recipientAddress),
    amount: toNano(amount.toString()), // Convert amount to nano
  });

  console.log(`Transferred ${amount} USD₮ to ${recipientAddress}`);
};

// Initialize TonConnect for wallet connection
const provider = new TonConnectUI();
const sender = new TonConnectProvider(provider);

const sdk = await AssetsSDK.create({ sender });

export { createUSDTJetton, openJettonWallet, transferUSDT };