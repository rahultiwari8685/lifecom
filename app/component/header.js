"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Modal from 'react-bootstrap/Modal';
import AvoutAd from "../about/page";
const Header = () => {
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   return (
      <>
         {/* Style Switcher */}
         <div className="style-switcher">
            <a href="#" id="switcher-toggler">
               <i className="fa fa-cog"></i>
            </a>
            <h3>Color Skins</h3>
            <ul
               id="colorschemeOptions"
               title="Switch Color"
               data-css-path="assets/css/scss/elements/color-switcher/"
            >
               <li><a href="#" data-theme="color" style={{ backgroundColor: "#078586" }}></a></li>
               <li><a href="#" data-theme="color1" style={{ backgroundColor: "#e5102a" }}></a></li>
               <li><a href="#" data-theme="color2" style={{ backgroundColor: "#3ead3c" }}></a></li>
               <li><a href="#" data-theme="color3" style={{ backgroundColor: "#fed000" }}></a></li>
               <li><a href="#" data-theme="color4" style={{ backgroundColor: "#ff5538" }}></a></li>
               <li><a href="#" data-theme="color5" style={{ backgroundColor: "#246af4" }}></a></li>
            </ul>
         </div>

         {/* Wrapper */}
         <div id="wrapper_full" className="content_all_warpper">
            {/* Mini Cart */}
            <div className="mini_cart_togglers fixed_cart">
               <div className="mini-cart-count">0</div>
               <i className="icon-shopping-cart"></i>
            </div>
            {/* <div className="preloader-wrap">
               <div
                  className="preloader"
                  style={{ backgroundImage: 'url(/assets/images/preloader.gif)' }}
               />
               <div className="overlay" />
            </div> */}

            {/* Header Area */}
            <div className="header_area" id="header_contents">
               {/* Top Bar */}
               <div className="top_bar style_one">
                  <div className="auto-container">
                     <div className="row align-items-center">
                        <div className="col-lg-12">
                           <div className="top_inner">
                              <div className="left_side common_css">
                                 <div className="contntent address">
                                    <i className="icon-placeholder"></i>
                                    <div className="text">
                                       <small>Location</small>
                                       <span>Lucknow, U.P. </span>
                                    </div>
                                 </div>
                                 <div className="contntent email">
                                    <i className="icon-email"></i>
                                    <div className="text">
                                       <small>Email</small>
                                       <a href="mailto:info@lifecompharma.in">info@lifecompharma.in</a>
                                    </div>
                                 </div>
                              </div>
                              <div className="right_side common_css">
                                 <div className="contntent phone">
                                    <i className="icon-phone-call"></i>
                                    <div className="text">
                                       <small>Phone</small>
                                       <a href="tel:05224066541">0522 406 6541</a>
                                    </div>
                                 </div>
                                 <div className="contntent media">
                                    <i className="icon-share"></i>
                                    <div className="text">
                                       <small>Share</small>
                                       <a href="#" target="_blank" rel="nofollow"><small>Fb</small></a>
                                       <a href="#" target="_blank" rel="nofollow"><small>Tw</small></a>
                                       <a href="#" target="_blank" rel="nofollow"><small>Sk</small></a>
                                       <a href="#" target="_blank" rel="nofollow"><small>Te</small></a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Navigation Header */}
               <div className="header header_default style_one get_sticky_header">
                  <div className="auto-container">
                     <div className="row align-items-center">
                        {/* Logo */}
                        <div className="col-lg-2 col-md-9 col-sm-9 col-xs-9 logo_column">
                           <div className="header_logo_box">
                              <Link href="/" className="logo navbar-brand">
                                 <Image
                                    src="/assets/logo.png"
                                    alt="Company Logo"
                                    width={120}
                                    height={60}
                                    className="logo_default"
                                 />
                              </Link>
                           </div>
                        </div>

                        {/* Menu */}
                        <div className="col-lg-10 col-md-3 col-sm-3 col-xs-3 menu_column">
                           <div className="navbar_togglers hamburger_menu">
                              <span className="line"></span>
                              <span className="line"></span>
                              <span className="line"></span>
                           </div>
                           <div className="header_content_collapse">
                              <div className="header_menu_box">
                                 <nav className="navigation_menu">
                                    <ul id="myNavbar" className="navbar_nav">
                                       <li><Link href="/">Home</Link></li>

                                       <li className="menu-item menu-item-has-children dropdown nav-item">
                                          <a href="#" className="dropdown-toggle nav-link">About Us</a>
                                          <ul className="dropdown-menu">
                                             <li><Link href="/companyOverview">Company Overview</Link></li>
                                             <li><Link href="/vision">Vision & Values</Link></li>
                                             <li><Link href="/ceo">CEOs Desk</Link></li>
                                             <li><Link href="/certificates">Certificates</Link></li>
                                          </ul>
                                       </li>

                                       <li className="menu-item menu-item-has-children dropdown dropdown_full position-static mega_menu nav-item">
                                          <a href="#" className="dropdown-toggle nav-link">Group Of Companies</a>
                                          <ul className="dropdown-menu width_70_percentage">
                                             <li>
                                                <div className="row">
                                                   {[
                                                      {
                                                         logo: "/assets/rlogo-r1.png",
                                                         items: [
                                                            { name: "About Lifecom", link: "/aboutLifecom" },
                                                            { name: "Lifecom Products", link: "/category" }
                                                         ]
                                                      },
                                                      {
                                                         logo: "/assets/rlogo-r2.png",
                                                         items: [
                                                            { name: "About Prima", link: "/aboutPrima" },
                                                            { name: "Prima Products", link: "/category" }
                                                         ]
                                                      },
                                                      {
                                                         logo: "/assets/rlogo-r3.png",
                                                         items: [
                                                            { name: "About Kywan Labs", link: "/kywanAboutPage" },
                                                            { name: "Kywan Products", link: "/Kywan-Products.php" }
                                                         ]
                                                      },
                                                      {
                                                         logo: "/assets/rlogo-4.png",
                                                         items: [
                                                            { name: "About Four AD", link: "/about" },
                                                            { name: "Four Ad Services", link: "#" }
                                                         ]
                                                      }
                                                   ].map((company, idx) => (
                                                      <div className="col-lg-3 m_column" key={idx}>
                                                         <div className="list_item_box style_one">
                                                            <ul>
                                                               <li>
                                                                  <small className="d-flex align-items-center">
                                                                     <Image
                                                                        src={company.logo}
                                                                        alt="Company Logo"
                                                                        width={100}
                                                                        height={40}
                                                                        className="logo_default"
                                                                     />
                                                                  </small>
                                                               </li>
                                                               {company.items.map((item, subIdx) => (
                                                                  <li key={subIdx}>
                                                                     <small className="d-flex align-items-center">
                                                                        <i className="icon-home only_icon"></i>
                                                                        <Link className="nav_link" href={item.link}>
                                                                           {item.name}
                                                                        </Link>
                                                                     </small>
                                                                  </li>
                                                               ))}
                                                            </ul>
                                                         </div>
                                                      </div>
                                                   ))}
                                                </div>
                                             </li>
                                          </ul>
                                       </li>

                                       <li><Link href="/gallery">Gallery</Link></li>
                                       <li><Link href="/factory">Factory</Link></li>
                                       <li><Link href="/career">Career</Link></li>
                                       <li><Link href="/contact">Contact</Link></li>
                                    </ul>
                                 </nav>
                              </div>

                              {/* Right Content */}
                              <div className="header_right_content">
                                 <ul>
                                    <li>
                                       <button type="button" className="contact-toggler" onClick={() => setShow(true)}>
                                          <i className="icon-bar"></i>
                                       </button>
                                    </li>
                                 </ul>
                              </div>

                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
         >
            <div className="modal-popup-inner">
               <div className="close-modal" onClick={handleClose}>
                  <i className="fa fa-times"></i>
               </div>
               <div className="modal_box">
                  <div className="row">
                     <div className="col-lg-5 col-md-12 form_inner">
                        <div className="form_content">
                           <form
                              className="contact-form"
                              method="post"
                              action="https://themepanthers.com/html/creote-html/sendemail.php"
                           >
                              <p>
                                 <label>
                                    Your name
                                    <input
                                       type="text"
                                       name="name"
                                       placeholder="Enter Your Name"
                                    />
                                    <i className="fa fa-user"></i>
                                 </label>
                              </p>
                              <p>
                                 <label>
                                    Your email
                                    <input
                                       type="email"
                                       name="email"
                                       placeholder="Enter Your Email"
                                    />
                                    <i className="fa fa-envelope"></i>
                                 </label>
                              </p>
                              <p>
                                 <label>
                                    Subject
                                    <input
                                       type="text"
                                       name="subject"
                                       placeholder="Enter Your Subject"
                                    />
                                    <i className="fa fa-folder"></i>
                                 </label>
                              </p>
                              <p>
                                 <label>
                                    Your message (optional)
                                    <textarea
                                       name="message"
                                       rows="5"
                                       placeholder="Enter Your Message"
                                    ></textarea>
                                    <i className="fa fa-comments"></i>
                                 </label>
                              </p>
                              <p>
                                 <input type="submit" value="Submit" />
                              </p>
                           </form>
                        </div>
                     </div>

                     <div className="col-lg-7 col-md-12 about_company_inner">
                        <div className="abt_content">
                           <div className="logo">
                              <img
                                 src="/assets/logo.png"
                                 alt="img"
                                 className="company_logo_modal"
                              />
                           </div>
                           <div className="text">
                              <p>
                                 LIFECOM PHARMACEUTICALS (I) PRIVATE LIMITED, the
                                 world-class healthcare solution provider...
                              </p>
                              <a href="/Company-Overview.php">Read More</a>
                           </div>
                           <div className="post_contet_modal">
                              <h2>Latest News</h2>
                              <div className="post_enable d-flex gap-2 flex-wrap">
                                 {["9", "8", "7", "6", "5"].map((n) => (
                                    <div className="modal_post_grid" key={n}>
                                       <a href="#">
                                          <img
                                             src={`/assets/images/blog/blog-image-${n}.jpg`}
                                             alt={`img-${n}`}
                                             width="100"
                                          />
                                       </a>
                                    </div>
                                 ))}
                              </div>
                           </div>
                           <div className="copright">
                              © 2025 LIFECOM PHARMACEUTICALS PRIVATE LIMITED.
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </Modal>

      </>
   );
};

export default Header;
