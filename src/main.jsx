import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Home.jsx";
import PrivacyPolicy from "./PrivacyPolicy.jsx";
import TermsCondition from "./TermsCondition.jsx";
import Form from "./Form.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route
            path="/terms-and-condition"
            element={<TermsCondition />}
          ></Route>
          <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
        </Route>
        <Route path="/request" element={<Form />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
