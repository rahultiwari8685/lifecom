"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
   return (
      <>
         <div className="footer_area" id="footer_contents">
            <div className="footer_widgets_wrap bg_dark_2">
               <div className="pd_top_40" />
               <div className="container">
                  <div className="row">
                     {/* Company Info */}
                     <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="footer_widgets about_company light_color">
                           <div className="about_company_inner">
                              <div className="footer_logo">
                                 <Link href="/">
                                    <Image
                                       src="/assets/logo-white.png"
                                       alt="logo"
                                       width={200}
                                       height={60}
                                    />
                                 </Link>
                                 <div className="pd_bottom_30" />
                              </div>
                              <div className="content_box">
                                 <p>
                                    LIFECOM PHARMACEUTICALS (I) PRIVATE LIMITED, the
                                    world-class healthcare solution provider, is one of the
                                    leading and fastest growing pharmaceutical company of
                                    India.
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* Imp Links */}
                     <div className="col-xl-2 col-lg-4 col-md-4 col-sm-12">
                        <div className="footer_widgets wid_tit style_one">
                           <div className="fo_wid_title">
                              <h2>Imp Link</h2>
                           </div>
                        </div>
                        <div className="pd_bottom_25" />
                        <div className="footer_widgets navigation_foo light_color style_one">
                           <ul className="menu">
                              <li><Link href="/Company-Overview">Company Overview</Link></li>
                              <li><Link href="/Vision">Vision & Values</Link></li>
                              <li><Link href="/ceo">CEO's Desk</Link></li>
                              <li><Link href="/Certificates">Certificates</Link></li>
                              <li><Link href="/Gallery">Gallery</Link></li>
                              <li><Link href="/Factory">Factory</Link></li>
                           </ul>
                        </div>
                     </div>

                     {/* Companies */}
                     <div className="col-xl-2 col-lg-4 col-md-4 col-sm-12">
                        <div className="footer_widgets wid_tit style_one">
                           <div className="fo_wid_title">
                              <h2>Companies</h2>
                           </div>
                        </div>
                        <div className="pd_bottom_25" />
                        <div className="footer_widgets navigation_foo light_color style_one">
                           <ul className="menu">
                              <li><Link href="/lifecom-about">Lifecom Pharmaceuticals</Link></li>
                              <li><Link href="/About-Prima">Lifecom Prima</Link></li>
                              <li><Link href="/About-Kywan-Labs">Kywan Labs India</Link></li>
                              <li><Link href="/About-Four-AD">Fourad Printers</Link></li>
                              <li><Link href="/Career">Career</Link></li>
                              <li><Link href="/contact">Contact</Link></li>
                           </ul>
                        </div>
                     </div>

                     {/* Address */}
                     <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12">
                        <div className="footer_widgets wid_tit style_one">
                           <div className="fo_wid_title">
                              <h2>Address</h2>
                           </div>
                        </div>
                        <div className="pd_bottom_25" />
                        <div className="footer_widgets get_in_touch_foo light_color">
                           <div className="foo_cont_inner">
                              <div className="top">
                                 <h6> Manufacturing Plant</h6>
                                 <p>
                                    LIFECOM PHARMACEUTICALS (I) PRIVATE LIMITED<br />
                                    Khasra No. 1180/282 Nanhera
                                    Anantpur, Bhagwanpur, Roorkee District Haridwar
                                    Roorkee (Uttra Khand) India.
                                    (+91) 9258152057, 9258152061, 9258152056
                                    <br />

                                    <b>Lucknow Office </b> 316, Hind Nagar,Kanpur Road, Lucknow
                                    Uttar Pradesh 226012
                                    (+91) 0522 406 6541 info@lifecompharma.in

                                 </p>
                              </div>

                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Copyright */}
            <div className="creote-footer-copyright bg_dark_3">
               <div className="container">
                  <div className="row align-items-center">
                     <div className="col-lg-6 col-md-12">
                        <div className="pd_top_10" />
                        <div className="footer_copy_content color_white">
                           © 2025 <Link href="/">Lifecom Pharmaceuticals Pvt. Ltd.</Link> All Rights Reserved.
                        </div>
                        <div className="pd_bottom_10" />
                     </div>
                     <div className="col-lg-6 col-md-12 text-md-end">
                        <div className="pd_top_10" />
                        <div className="footer_copy_content_right">
                           <div className="social_media_v_one">
                              <ul className="flex gap-4 justify-end">
                                 <li><a href="#"><span className="fa fa-facebook"></span></a></li>
                                 <li><a href="#"><span className="fa fa-twitter"></span></a></li>
                                 <li><a href="#"><span className="fa fa-skype"></span></a></li>
                                 <li><a href="#"><span className="fa fa-instagram"></span></a></li>
                              </ul>
                           </div>
                        </div>
                        <div className="pd_bottom_10" />
                     </div>
                  </div>
               </div>
            </div>
         </div>


      </>
   );
}
