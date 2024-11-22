import React, { useEffect } from 'react';
import WOW from 'wow.js';
import 'animate.css';

import Header from './components/header/index';
import Main from './components/main/index';
import Footer from './components/footer/index';

function App() {

  useEffect(() => {
    const wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 100,
      mobile: true,
      live: true,
    });
    wow.init();
  });

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;