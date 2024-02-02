import React from "react";
import About from "./pages/About";
import {BrowserRouter,Route, Routes} from "react-router-dom";
import Jobs from "./pages/Jobs";


function App() {
  
  return (
   <BrowserRouter basename="/devjobs">
    <Routes >
    <Route path="/" element={<Jobs />} />
    <Route path="/about/:id"  element={ <About />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
