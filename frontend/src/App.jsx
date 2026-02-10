import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/contact";
import Donate from "./components/Donate";

import { Campaigns, CampaignDetails } from "./components/Causes";
import DetailPage from "./components/DetailPage";
import Volunteer from "./components/Volunteer";

import Members from "./components/Members";

import { NotFound } from "./components/NotFound";

/* ✅ NEW LEGAL PAGES */
import Terms from "./components/TermsOfUse";
import PrivacyPolicy from "./components/PrivacyPolicy";
import AML from "./components/AML";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/causes" element={<Campaigns />} />
        <Route path="/campaign/:id" element={<CampaignDetails />} />

        {/* ✅ NEW DETAILED PAGE */}
        <Route path="/details/:id" element={<DetailPage />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/members" element={<Members />} />
        <Route path="/volunteer" element={<Volunteer />} />

        {/* ✅ LEGAL ROUTES (FOR CRYPTOMUS) */}
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/aml" element={<AML />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
};

export default App;