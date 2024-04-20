import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Web3ContextProvider from './context/Web3ContextProivder.jsx'; // Corrected import

// Corrected ReactDOM import and usage
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Web3ContextProvider>
            <App />
        </Web3ContextProvider>
    </React.StrictMode>
);
