import React, { useState } from 'react'; 
import { generateMnemonic, mnemonicToSeedSync } from 'bip39';
import { payments } from 'bitcoinjs-lib';
import { BIP32Factory } from 'bip32';
import * as ecc from 'tiny-secp256k1';
import MnemonicModal from './mnemonic';
import { toast } from 'react-toastify';


const bip32 = BIP32Factory(ecc);

const CreateWalletModal = ({ isOpen, onRequestClose, onWalletCreated, walletType }) => {
  const [mnemonic, setMnemonic] = useState('');
  const [isMnemonicModalOpen, setIsMnemonicModalOpen] = useState(false);
  const [isWalletCreated, setIsWalletCreated] = useState(false); // Track if wallet is created
  
  const handleCreateWallet = async () => {
    try {
      // Generate mnemonic
      const generatedMnemonic = generateMnemonic(256);
      setMnemonic(generatedMnemonic);
      setIsMnemonicModalOpen(true); // Open the mnemonic modal

      // Generate wallet address
      const seed = mnemonicToSeedSync(generatedMnemonic);
      const root = bip32.fromSeed(seed);
      const keyPair = root.derivePath("m/44'/0'/0'/0/0");
      const { address } = payments.p2pkh({ pubkey: keyPair.publicKey });

      // Fetch token from local storage
      const authToken = localStorage.getItem('token');

      // Call your API to store the wallet
      const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:8kzD815Z/auth/create-wallet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
        body: JSON.stringify({ walletType, mnemonic: generatedMnemonic, address }),
      });

      if (response.ok) {
        const data = await response.json();
        onWalletCreated(walletType, generatedMnemonic, address);
        setIsWalletCreated(true); // Set wallet created state
        toast.success('Wallet created successfully!');
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || 'Failed to create wallet');
      }
    } catch (error) {
      console.error('Error creating wallet:', error);
      toast.error('An error occurred while creating the wallet.');
    }
  };

  const handleContinue = () => {
    setIsMnemonicModalOpen(false); // Close mnemonic modal
    onRequestClose(); // Close wallet creation modal
  };

  return (
    <>
      {isOpen && (
        <div className="modal">
          {!isWalletCreated ? (
            <>
              <h2 className="text-lg font-bold">Create {walletType} Wallet</h2>
              <button 
                onClick={handleCreateWallet}
                className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                Create Wallet
              </button>
              <button 
                onClick={onRequestClose} 
                className="mt-2 text-gray-600"
              >
                Close
              </button>
            </>
          ) : (
            <div className="mt-4 text-center">
              <h2 className="text-lg font-bold">Wallet Created!</h2>
              <div className="flex space-x-4 mt-4">
                <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
                  Send
                </button>
                <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                  Receive
                </button>
              </div>
            </div>
          )}
        </div>
      )}
      
      <MnemonicModal
        isOpen={isMnemonicModalOpen}
        onRequestClose={() => setIsMnemonicModalOpen(false)}
        mnemonic={mnemonic}
        onContinue={handleContinue}
      />
    </>
  );
};

export default CreateWalletModal;