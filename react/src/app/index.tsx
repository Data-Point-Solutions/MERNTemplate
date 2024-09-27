import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import { Footer } from "../components/footer/footer";
import { Header } from "../components/header/header";
import AppRouter from "../routes/router";

import "../scss/globals.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Header />
      <AppRouter />
      <Footer />
    </Router>
  </StrictMode>,
)

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept()
}
