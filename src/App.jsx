import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Web3 from "web3";

import "./App.css";
import theme from "./theme";

import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Users from "./pages/users";
import Proposals from "./pages/proposals";
import Forums from "./pages/forums";


function App() {
  const [web3, setWeb3] = useState(null);

  useEffect(() => {
    const initWeb3 = async () => {
      // Check if MetaMask is installed
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        try {
          // Request access to accounts
          await window.ethereum.request({ method: "eth_requestAccounts" });
          setWeb3(web3Instance);
        } catch (error) {
          console.error(error);
        }
      } else {
        console.error("MetaMask not detected!");
      }
    };
    initWeb3();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<Navigate to="users" replace />} />
            <Route path="users" element={<Users />} />
            <Route path="proposals" element={<Proposals />} />
            <Route path="forums" element={<Forums />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
