import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBeO8H96B5pr9SDySilR_B-PxrpwInbKWA",
  authDomain: "coder-react49905.firebaseapp.com",
  projectId: "coder-react49905",
  storageBucket: "coder-react49905.appspot.com",
  messagingSenderId: "112587937497",
  appId: "1:112587937497:web:f1cadd086cc3269327d0c8"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
