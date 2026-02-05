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


        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
};

export default App;
