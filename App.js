import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from './components/Login';
import Signup from "./components/Signup";
import Vaulty from "./components/Vaultx";
import Home from "./pages/Home";
import DocumentsPage from "./pages/DocumentsPage";
import Nearby from "./pages/Nearby";
import Emergency from "./pages/Emergency";
import About from "./pages/About";
import LearnMore from "./components/LearnMore";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/documents"
                    element={<DocumentsPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route
                    path="/nearby"
                    element={<Nearby />} />
                <Route
                    path="/emergency"
                    element={<Emergency />} />
                <Route
                    path="/about"
                    element={<About />} />
                <Route
                    path="/learn-more"
                    element={<LearnMore />} />
            </Routes>
            <Vaulty />
        </BrowserRouter>
    );
}

export default App;