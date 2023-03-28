import React from "react";

import MainPage from "./pages/main";
import Layout from "./containers/layout";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
