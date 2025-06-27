// In App.jsx
import React, { Suspense } from "react"; // Import Suspense
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Lazy load page components
const Home = React.lazy(() => import("./pages/Home"));
const AboutUs = React.lazy(() => import("./pages/AboutUs"));
const Services = React.lazy(() => import("./pages/Services"));
const ContactUs = React.lazy(() => import("./pages/ContactUs"));

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Suspense fallback={<div>Loading...</div>}>
        {" "}
        {/* Add Suspense boundary */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Suspense>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
