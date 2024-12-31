import React, { Component } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Main from "./Components/Main/Main";

// Pages
import Iphone from "./Pages/Iphone/iphone";
import Mac from "./Pages/Mac/Mac";
import Four04 from "./Pages/Four04/Four04";
import Productpage from "./Pages/Productpage/Productpage";
import Sharedlayout from "./Pages/Sharedlayout";

// import general css
import "./css/styles.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Sharedlayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/mac" element={<Mac />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/iphone/:pid" element={<Productpage />} />
          <Route path="*" element={<Four04 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
