"use client"; // Ensure compatibility for client-side scripts

import { useState , useEffect  } from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation from react-i18next
import Script from 'next/script';

// Import i18n configuration from translations folder
import "../translations/i18n"; // Adjust the import path according to your folder structure

const Header = () => {
  const { t, i18n } = useTranslation(); // Get translation function and i18n instance
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prevState) => !prevState); // Toggle the state
  };

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang); // Change the language using i18n
    sessionStorage.setItem('language', lang);

  };
  useEffect(() => {
    // Check if there's a saved language in sessionStorage
    const savedLanguage = sessionStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    } else {
      i18n.changeLanguage('en'); // Default to English if no language is saved
    }
  
    // Update the HTML direction based on the language
    if (i18n.language === 'ar') {
      document.documentElement.setAttribute('lang', 'ar');
      document.documentElement.setAttribute('dir', 'rtl');
    } else {
      document.documentElement.setAttribute('lang', 'en');
      document.documentElement.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);
  

  // Determine which flag to display based on the current language
  const getFlagIcon = () => {
    if (i18n.language === "ar") {
      return "/images/flag-eg.png"; // Arabic flag
    }
    return "/images/flag-uk.png"; // English flag
  };

  return (
    <header>
      {/* Banner Background Main */}
      <div className="banner_bg_main">
        {/* Header Top Section */}
        <div className="container">
          <div className="header_section_top">
            <div className="row">
              <div className="col-sm-12">
                <div className="custom_menu">
                  <ul>
                    <li>
                      <a href="#">{t("bestSellers")}</a>
                    </li>
                    <li>
                      <a href="#">{t("giftIdeas")}</a>
                    </li>
                    <li>
                      <a href="#">{t("newReleases")}</a>
                    </li>
                    <li>
                      <a href="#">{t("todaysDeals")}</a>
                    </li>
                    <li>
                      <a href="#">{t("customerService")}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Header Top Section End */}

        {/* Logo Section */}
        <div className="logo_section">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="logo">
                  <a href="#">
                    <img src="/images/logo.png" alt="Logo" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Logo Section End */}

        {/* Header Section */}
        <div className="header_section">
          <div className="container">
            <div className="containt_main">
              {/* Side Navigation */}
              <div
                id="mySidenav"
                className={`sidenav ${isNavOpen ? "open" : ""}`}
                style={{ width: isNavOpen ? "250px" : "0" }}
              >
                <a
                  href="javascript:void(0)"
                  className="closebtn"
                  onClick={toggleNav}
                >
                  &times;
                </a>
                <a href="#">{t("home")}</a>
                <a href="#">{t("fashion")}</a>
                <a href="#">{t("electronic")}</a>
                <a href="#">{t("jewellery")}</a>
              </div>

              {/* Toggle Icon */}
              <span className="toggle_icon" onClick={toggleNav}>
                <img src="/images/toggle-icon.png" alt="Toggle Icon" />
              </span>

              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {t("allCategory")} {/* Translated text for 'All Category' */}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="#">
                    {t("action")} {/* Translated text for 'Action' */}
                  </a>
                  <a className="dropdown-item" href="#">
                    {t("anotherAction")}{" "}
                    {/* Translated text for 'Another action' */}
                  </a>
                  <a className="dropdown-item" href="#">
                    {t("somethingElse")}{" "}
                    {/* Translated text for 'Something else here' */}
                  </a>
                </div>
              </div>
              {/* Search Box */}
              <div className="main">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder={t("searchPlaceholder")}
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-secondary"
                      type="button"
                      style={{
                        backgroundColor: "#f26522",
                        borderColor: "#f26522",
                      }}
                    >
                      <i className="fa fa-search"></i>
                    </button>
                  </div>
                </div>
              </div>

              {/* Header Box */}
              <div className="header_box">
                {/* Language Dropdown */}
                <div className="lang_box">
  <a
    href="#"
    title="Language"
    className="nav-link"
    data-toggle="dropdown"
    aria-expanded="true"
  >
    <img
      src={getFlagIcon()}
      alt="flag"
      className={i18n.language === "ar" ? "ml-2" : "mr-2"} // Conditionally apply the class for RTL or LTR
      title={i18n.language === "en" ? "United Kingdom" : "Egypt"}
    />
    {i18n.language === "en" ? "English" : "العربية"}
    <i
  className={`fa fa-angle-down ${i18n.language === "ar" ? "mr-2" : "ml-2"}`}
  aria-hidden="true"
></i>

  </a>
  <div className="dropdown-menu">
    <a
      href="#"
      className="dropdown-item"
      onClick={() => handleLanguageChange("en")}
    >
      <img
        src="/images/flag-uk.png"
        className={i18n.language === "ar" ? "ml-2" : "mr-2"} // Conditionally apply the class for RTL or LTR
        alt="flag"
      />
      English
    </a>
    <a
      href="#"
      className="dropdown-item"
      onClick={() => handleLanguageChange("ar")}
    >
      <img
        src="/images/flag-eg.png"
        className={i18n.language === "ar" ? "ml-2" : "mr-2"} // Conditionally apply the class for RTL or LTR
        alt="flag"
      />
      العربية
    </a>
  </div>
</div>


                {/* Login Menu */}
                <div className="login_menu">
                  <ul>
                    <li>
                      <a href="#">
                        <i
                          className="fa fa-shopping-cart"
                          aria-hidden="true"
                        ></i>
                        <span className="padding_10">{t("cart")}</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-user" aria-hidden="true"></i>
                        <span className="padding_10">{t("profile")}</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* Header Section End */}
<div className="banner_section layout_padding">
  <div className="container">
    <div id="my_slider" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="banner_taital">
                {t("getStarted")} <br /> {t("favoriteShopping")}
              </h1>
              <div className="buynow_bt">
                <a href="#">{t("buyNow")}</a>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="banner_taital">
                {t("getStarted")} <br /> {t("favoriteShopping")}
              </h1>
              <div className="buynow_bt">
                <a href="#">{t("buyNow")}</a>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="banner_taital">
                {t("getStarted")} <br /> {t("favoriteShopping")}
              </h1>
              <div className="buynow_bt">
                <a href="#">{t("buyNow")}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#my_slider"
        role="button"
        data-slide="prev"
      >
        <i className="fa fa-angle-left"></i>
      </a>
      <a
        className="carousel-control-next"
        href="#my_slider"
        role="button"
        data-slide="next"
      >
        <i className="fa fa-angle-right"></i>
      </a>
    </div>
  </div>
</div>
{/* <!-- banner section end --> */}

     
      
      {/* <!-- banner bg main end --> */}
      </div>
    </header>
  );
};

export default Header;
