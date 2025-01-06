'use client'; // Ensure compatibility for client-side scripts

import { useState } from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import Script from 'next/script';

const Footer = () => {
  const { t } = useTranslation(); // Use the translation hook to fetch translated strings

  // State for controlling side navigation
  const [sideNavWidth, setSideNavWidth] = useState('0');

  // Function to open the side navigation
  const openNav = () => {
    setSideNavWidth('250px');
  };

  // Function to close the side navigation
  const closeNav = () => {
    setSideNavWidth('0');
  };

  return (
    <>
      {/* Footer section start */}
      <div className="footer_section layout_padding">
        <div className="container">
          <div className="footer_logo">
            <a href="index.html">
              <img src="/images/footer-logo.png" alt={t('footerLogoAlt')} />
            </a>
          </div>
          <div className="input_bt">
            <input
              type="text"
              className="mail_bt"
              placeholder={t('yourEmail')} // Translated placeholder
              name="Your Email"
            />
            <span className="subscribe_bt" id="basic-addon2">
              <a href="#">{t('subscribe')}</a> {/* Translated Subscribe button */}
            </span>
          </div>
          <div className="footer_menu">
            <ul>
              <li>
                <a href="#">{t('bestSellers')}</a> {/* Translated Menu Item */}
              </li>
              <li>
                <a href="#">{t('giftIdeas')}</a>
              </li>
              <li>
                <a href="#">{t('newReleases')}</a>
              </li>
              <li>
                <a href="#">{t('todaysDeals')}</a>
              </li>
              <li>
                <a href="#">{t('customerService')}</a>
              </li>
            </ul>
          </div>
          <div className="location_main">
            {t('helpLine')} : <a href="#">+1 1800 1200 1200</a> {/* Translated text */}
          </div>
        </div>
      </div>
      {/* Footer section end */}

      {/* Copyright section start */}
      <div className="copyright_section">
        <div className="container">
          <p className="copyright_text">
            {t('copyrightText')} <a href="https://ibrahimahmed.info/">{t('designBy')}</a>
          </p>
        </div>
      </div>
      {/* Copyright section end */}

      {/* SideNav Implementation */}
      <div id="mySidenav" style={{ width: sideNavWidth }}>
        <a href="#" className="closebtn" onClick={closeNav}>
          &times; {t('close')} {/* Translated Close button */}
        </a>
        {/* Add translated content for sidenav if needed */}
      </div>
      <span className="toggle_icon" onClick={openNav}>
        {/* Add translated icon trigger if applicable */}
      </span>
       {/* JavaScript files */}
       <script src="/js/jquery.min.js"></script>
      <script src="/js/popper.min.js"></script>
      <script src="/js/bootstrap.bundle.min.js"></script>
      <script src="/js/jquery-3.0.0.min.js"></script>
      <script src="/js/plugin.js"></script>
      {/* Sidebar */}
      <script src="/js/jquery.mCustomScrollbar.concat.min.js"></script>
      <script src="/js/custom.js"></script>
      {/* <script>
        {`
          function openNav() {
            document.getElementById("mySidenav").style.width = "250px";
          }

          function closeNav() {
            document.getElementById("mySidenav").style.width = "0";
          }
        `}
      </script> */}
    </>
  );
};

export default Footer;
