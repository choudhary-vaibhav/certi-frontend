import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter } from 'react-router-dom';
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { publicProvider } from "wagmi/providers/public";
import {
  connectorsForWallets,
  wallet,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";


const { chains, provider } = configureChains(
  [
    chain.polygonMumbai,
  ],
  [
  
    jsonRpcProvider({
      rpc: () => {
        return {
          http: "https://rpc.ankr.com/polygon_mumbai",
        };
      },
    }),
    publicProvider(),
   
  ]
);

const connectors = connectorsForWallets([
  {
    groupName: "Recommended",
    wallets: [
      wallet.metaMask({ chains, shimDisconnect: true }),
      wallet.walletConnect({ chains }),
      wallet.coinbase({ appName: "CrowdFunding Platform", chains }),
      wallet.rainbow({ chains }),
    ],
  },
  {
    groupName: "Others",
    wallets: [
      wallet.argent({ chains }),
      wallet.brave({
        chains,
        shimDisconnect: true,
      }),
      wallet.imToken({ chains }),
      wallet.injected({
        chains,
        shimDisconnect: true,
      }),
      wallet.ledger({
        chains,
        
      }),
      wallet.steak({ chains }),
      wallet.trust({ chains, shimDisconnect: true }),
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <WagmiConfig client={wagmiClient}>
  <RainbowKitProvider
    showRecentTransactions={true}
    chains={chains}
    coolMode
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </RainbowKitProvider>
    </WagmiConfig>
  // </React.StrictMode>
);
