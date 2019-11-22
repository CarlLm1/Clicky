import React from "react";
import Wrapper from "./components/Wrapper/index";
import Navbar from "./components/Navbar/index";
import Header from "./components/Header/index";
import Main from "./components/Main/index";
import Footer from "./components/Footer/index";

function App() {
  return (
    <Wrapper>
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </Wrapper>
  );
}

export default App;
