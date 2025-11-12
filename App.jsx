import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { UploadSection } from "./Components/UploadSection";
import { HowItWorksSection } from "./Components/HowItWorks";
import { Footer } from "./Components/Footer";
import { useState } from "react";
import { Login } from "./Components/LogIn";
import {SignUp} from "./Components/SignUp";
import "./App.css";
export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-linear-to-br from-blue-50 via-purple-50 to-pink-50">
        <Navbar />

        <main className="max-w-4xl mx-auto px-6 py-12">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <UploadSection />
                  <HowItWorksSection />
                </>
              }
            />
            <Route path="/login" element={<Login />} />
             <Route path="/signup" element={<SignUp />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}