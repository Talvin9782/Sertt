import React, { useEffect } from "react";
import $ from 'jquery';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import MenuContent from './menu/MenuContent';
import MenuSticky from './menu/MenuSticky';
import MenuBurger from './menu/MenuBurger';

function Header() {
  useEffect(() => {
    
    const handleMenuClick = () => {
      const siteHeader = $('#site_header');
      siteHeader.find('.menuicon').toggleClass('open');
      siteHeader.find('.header_menu').slideToggle();
    };

    $('.menuicon, .header_menu a').on('click', handleMenuClick);
    
    const stickyHeader = () => {
      const header = document.getElementById("site_header");
      if (header) {
        const headerHeight = header.offsetHeight;
        if (window.pageYOffset > headerHeight) {
          header.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
        }
      }
    };
    
    window.addEventListener("scroll", stickyHeader);
    
    return () => {
      $('.menuicon, .header_menu a').off('click', handleMenuClick);
      window.removeEventListener("scroll", stickyHeader);
    };
  }, []);

  return (
    <header id="site_header" className="site_header">
      <div className="header_top">
        <div className="container">
          <div className="header_top_cover d-flex flex-wrap justify-content-between align-items-center">
            <HeaderLeft />
            <HeaderRight />
            <MenuBurger />
          </div>
        </div>
      </div>

      <MenuContent />
      <MenuSticky />
    </header>
  );
}

export default Header;
