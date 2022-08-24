import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AnimatePresence } from "framer-motion";

ReactDOM.render(
  <AnimatePresence>
    <App />
  </AnimatePresence>,
  document.getElementById("root")
);
