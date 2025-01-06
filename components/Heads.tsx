'use client'; // Ensure this is a client component
import { useEffect } from 'react';
import Head from 'next/head';
import './Head.module.css';
import { useTranslation } from 'react-i18next'; // Import i18n for language change detection

const Heads = () => {
  const { i18n } = useTranslation(); // Get i18n instance to detect language changes

  useEffect(() => {
    // Create a link element to load the appropriate CSS file based on the language direction
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    const lang = i18n.language === 'ar' ? 'ar' : 'en';
    document.documentElement.setAttribute('lang', lang); // Dynamically update lang attribute
    // Check the current document direction and load the appropriate CSS
    const updateStylesheet = () => {
      const dir = document.documentElement.getAttribute('dir'); // Can be 'rtl' or 'ltr'

      if (dir === 'rtl') {
        linkElement.href = '/css/rtl.css'; // Use rtl.css if the direction is RTL
      } else {
        linkElement.href = '/css/ltr.css'; // Use ltr.css if the direction is LTR
      }

      // Append the link element to the document head
      document.head.appendChild(linkElement);
    };

    // Initially apply the styles based on the current direction
    updateStylesheet();

    // Clean up and update the stylesheet when the component unmounts or direction changes
    return () => {
      document.head.removeChild(linkElement);
    };
  }, [i18n.language]); // Re-run the effect when the language changes

  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>IA E-Commerce 1</title>
        <link rel="icon" href="images/fevicon.png" type="image/gif" />

        {/* Bootstrap CSS */}
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        {/* Custom styles */}
        <link rel="stylesheet" href="/css/style.css" />
        {/* Responsive styles */}
        <link rel="stylesheet" href="/css/responsive.css" />
        {/* Scrollbar Custom CSS */}
        <link rel="stylesheet" href="/css/jquery.mCustomScrollbar.min.css" />
        {/* FontAwesome */}
        <link
          rel="stylesheet"
          href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css"
        />
        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:400,700&display=swap"
          rel="stylesheet"
        />
        {/* Owl stylesheets */}
        <link
          href="https://fonts.googleapis.com/css?family=Great+Vibes|Poppins:400,700&display=swap&subset=latin-ext"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/css/owl.theme.default.min.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css"
        />
      </head>
    </>
  );
};

export default Heads;
