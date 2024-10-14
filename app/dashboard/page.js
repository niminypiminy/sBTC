
import React from 'react';
import WalletBalance from './components/walletbalance'
import OrderBook from './components/orderbook';

const App = () => {
  return (
    <div>
      <WalletBalance/>
      <OrderBook /> {/* Self-closing if OrderBook doesn't expect children */}
      <main className="p-4">
        {/* Add content for your main section here */}
      </main>
    </div>
  );
};

export default App;