import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";

import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Services from "./pages/services";
import NotFound from "./pages/NotFound";
import SharedLayout from "./pages/SharedLayout";
import Loading from "./UI/Loading";

function App() {
  const [name, setName] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setName(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <React.Fragment>
      {name && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 1, default: { duration: 1.5 } }}
        >
          <Loading />
        </motion.div>
      )}
      {!name && (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </React.Fragment>
  );
}

export default App;
