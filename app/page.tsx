"use client"; // Ensure compatibility for client-side scripts

import { useTranslation } from "react-i18next"; // Import useTranslation from react-i18next
import Layout from '../components/Layout';

const Home = () => {
  const { t } = useTranslation(); // Get translation function from i18n

  return (
    <Layout>
      <div className="fashion_section">
         <div id="main_slider" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
               <div className="carousel-item active">
                  <div className="container">
                     <h1 className="fashion_taital">{t("manAndWomanFashion")}</h1>
                     <div className="fashion_section_2">
                        <div className="row">
                           {/* Man T-Shirt */}
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">{t("manTshirt")}</h4>
                                 <p className="price_text">
                                    {t("price")}  <span style={{ color: "#262626" }}>$30</span>
                                 </p>
                                 <div className="tshirt_img"><img src="/images/tshirt-img.png" alt="Man T-shirt" /></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="#">{t("buyNow")}</a></div>
                                    <div className="seemore_bt"><a href="#">{t("seeMore")}</a></div>
                                 </div>
                              </div>
                           </div>
                           {/* Man Shirt */}
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">{t("manShirt")}</h4>
                                 <p className="price_text">
                                    {t("price")}  <span style={{ color: "#262626" }}>$30</span>
                                 </p>
                                 <div className="tshirt_img"><img src="/images/dress-shirt-img.png" alt="Man Shirt" /></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="#">{t("buyNow")}</a></div>
                                    <div className="seemore_bt"><a href="#">{t("seeMore")}</a></div>
                                 </div>
                              </div>
                           </div>
                           {/* Woman Skirt */}
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">{t("womanSkirt")}</h4>
                                 <p className="price_text">
                                    {t("price")}  <span style={{ color: "#262626" }}>$30</span>
                                 </p>
                                 <div className="tshirt_img"><img src="/images/women-clothes-img.png" alt="Woman Skirt" /></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="#">{t("buyNow")}</a></div>
                                    <div className="seemore_bt"><a href="#">{t("seeMore")}</a></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               {/* Additional carousel items can follow the same structure */}
               <div className="carousel-item">
                  <div className="container">
                     <h1 className="fashion_taital">{t("manAndWomanFashion")}</h1>
                     <div className="fashion_section_2">
                        <div className="row">
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">{t("manTshirt")}</h4>
                                 <p className="price_text">
                                    {t("price")}  <span style={{ color: "#262626" }}>$30</span>
                                 </p>
                                 <div className="tshirt_img"><img src="/images/tshirt-img.png" alt="Man T-shirt" /></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="#">{t("buyNow")}</a></div>
                                    <div className="seemore_bt"><a href="#">{t("seeMore")}</a></div>
                                 </div>
                              </div>
                           </div>
                           {/* Repeat for other products */}
                        </div>
                     </div>
                  </div>
               </div>
               {/* Add more carousel items here */}
            </div>

            <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
               <i className="fa fa-angle-left"></i>
            </a>
            <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
               <i className="fa fa-angle-right"></i>
            </a>
         </div>
      </div>

      <div className="fashion_section">
   <div id="electronic_main_slider" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
         <div className="carousel-item active">
            <div className="container">
               <h1 className="fashion_taital">{t("Electronic")}</h1>
               <div className="fashion_section_2">
                  <div className="row">
                     <div className="col-lg-4 col-sm-4">
                        <div className="box_main">
                           <h4 className="shirt_text">{t("Laptop")}</h4>
                           <p className="price_text">
                              {t("Start Price")} <span style={{ color: "#262626" }}>$ 100</span>
                           </p>
                           <div className="electronic_img">
                              <img src="/images/laptop-img.png" alt={t("Laptop")} />
                           </div>
                           <div className="btn_main">
                              <div className="buy_bt"><a href="#">{t("Buy Now")}</a></div>
                              <div className="seemore_bt"><a href="#">{t("See More")}</a></div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-4 col-sm-4">
                        <div className="box_main">
                           <h4 className="shirt_text">{t("Mobile")}</h4>
                           <p className="price_text">
                              {t("Start Price")} <span style={{ color: "#262626" }}>$ 100</span>
                           </p>
                           <div className="electronic_img">
                              <img src="/images/mobile-img.png" alt={t("Mobile")} />
                           </div>
                           <div className="btn_main">
                              <div className="buy_bt"><a href="#">{t("Buy Now")}</a></div>
                              <div className="seemore_bt"><a href="#">{t("See More")}</a></div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-4 col-sm-4">
                        <div className="box_main">
                           <h4 className="shirt_text">{t("Computers")}</h4>
                           <p className="price_text">
                              {t("Start Price")} <span style={{ color: "#262626" }}>$ 100</span>
                           </p>
                           <div className="electronic_img">
                              <img src="/images/computer-img.png" alt={t("Computers")} />
                           </div>
                           <div className="btn_main">
                              <div className="buy_bt"><a href="#">{t("Buy Now")}</a></div>
                              <div className="seemore_bt"><a href="#">{t("See More")}</a></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- Repeat for each carousel-item --> */}
      </div>
      <a className="carousel-control-prev" href="#electronic_main_slider" role="button" data-slide="prev">
         <i className="fa fa-angle-left"></i>
      </a>
      <a className="carousel-control-next" href="#electronic_main_slider" role="button" data-slide="next">
         <i className="fa fa-angle-right"></i>
      </a>
   </div>
</div>

{/* <!-- Jewellery Section --> */}
<div className="jewellery_section">
   <div id="jewellery_main_slider" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
         <div className="carousel-item active">
            <div className="container">
               <h1 className="fashion_taital">{t("Jewellery Accessories")}</h1>
               <div className="fashion_section_2">
                  <div className="row">
                     <div className="col-lg-4 col-sm-4">
                        <div className="box_main">
                           <h4 className="shirt_text">{t("Jumkas")}</h4>
                           <p className="price_text">
                              {t("Start Price")} <span style={{ color: "#262626" }}>$ 100</span>
                           </p>
                           <div className="jewellery_img">
                              <img src="images/jhumka-img.png" alt={t("Jumkas")} />
                           </div>
                           <div className="btn_main">
                              <div className="buy_bt"><a href="#">{t("Buy Now")}</a></div>
                              <div className="seemore_bt"><a href="#">{t("See More")}</a></div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-4 col-sm-4">
                        <div className="box_main">
                           <h4 className="shirt_text">{t("Necklaces")}</h4>
                           <p className="price_text">
                              {t("Start Price")} <span style={{ color: "#262626" }}>$ 100</span>
                           </p>
                           <div className="jewellery_img">
                              <img src="images/neklesh-img.png" alt={t("Necklaces")} />
                           </div>
                           <div className="btn_main">
                              <div className="buy_bt"><a href="#">{t("Buy Now")}</a></div>
                              <div className="seemore_bt"><a href="#">{t("See More")}</a></div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-4 col-sm-4">
                        <div className="box_main">
                           <h4 className="shirt_text">{t("Kangans")}</h4>
                           <p className="price_text">
                              {t("Start Price")} <span style={{ color: "#262626" }}>$ 100</span>
                           </p>
                           <div className="jewellery_img">
                              <img src="images/kangan-img.png" alt={t("Kangans")} />
                           </div>
                           <div className="btn_main">
                              <div className="buy_bt"><a href="#">{t("Buy Now")}</a></div>
                              <div className="seemore_bt"><a href="#">{t("See More")}</a></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- Repeat for each carousel-item --> */}
      </div>
      <a className="carousel-control-prev" href="#jewellery_main_slider" role="button" data-slide="prev">
         <i className="fa fa-angle-left"></i>
      </a>
      <a className="carousel-control-next" href="#jewellery_main_slider" role="button" data-slide="next">
         <i className="fa fa-angle-right"></i>
      </a>
 
   </div>
</div>


    </Layout>
  );
};

export default Home;
