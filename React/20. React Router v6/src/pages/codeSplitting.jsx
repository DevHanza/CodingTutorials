import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";

// Lazy-loaded pages (only loaded when needed)
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

function codeSplitting() {
  return (
    <Suspense fallback={<div>Loading page...</div>}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </Suspense>
  );
}

export default codeSplitting;
