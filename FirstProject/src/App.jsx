import React from 'react';
import Header from "./Components/header/Header"; 
import Footer from './Components/footer/Footer'; 
import Home from './Components/home/Home';
import Card from './Components/card/Card';

function App() {
  return (
    <>
      <Header />
     <Home/><br />
     {/* <Card/> */}
      <Footer />
    </>
  );
}

export default App;
