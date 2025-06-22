"use client";

import React, { useEffect } from "react";
import Header from "./component/header";
import Footer from "./component/footer";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

const domPrefixes = ["Webkit", "Moz", "O", "Khtml"];

export default function HomePage() {
  useEffect(() => {
    const timeOnSlide = 3;
    const timeBetweenSlides = 1;
    const slidy = document.getElementById("slidy");
    if (!slidy) return;

    let animationSupported = false;
    if (slidy.style.animationName !== undefined) {
      animationSupported = true;
    } else {
      for (let i = 0; i < domPrefixes.length; i++) {
        const prop = domPrefixes[i] + "AnimationName";
        if (slidy.style[prop] !== undefined) {
          animationSupported = true;
          break;
        }
      }
    }
    if (!animationSupported) return;

    const images = slidy.getElementsByTagName("img");
    const firstImg = images[0];
    const imgWrap = firstImg.cloneNode(false);
    slidy.appendChild(imgWrap);

    const imgCount = images.length;
    const totalTime = (timeOnSlide + timeBetweenSlides) * (imgCount - 1);
    const slideRatio = (timeOnSlide / totalTime) * 100;
    const moveRatio = (timeBetweenSlides / totalTime) * 100;
    const basePercentage = 100 / imgCount;
    let position = 0;

    const css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML += `#slidy{text-align:left;margin:0;font-size:0;position:relative;width:${imgCount * 100}%}`;
    css.innerHTML += `#slidy img{float:left;width:${basePercentage}%}`;
    css.innerHTML += `@keyframes slidy{`;
    for (let i = 0; i < imgCount - 1; i++) {
      position += slideRatio;
      css.innerHTML += `${position}%{left:-${i * 100}%}`;
      position += moveRatio;
      css.innerHTML += `${position}%{left:-${(i + 1) * 100}%}`;
    }
    css.innerHTML += `}`;
    css.innerHTML += `#slidy{left:0;transform:translate3d(0,0,0);animation:${totalTime}s slidy infinite}`;
    document.head.appendChild(css);
  }, []);

  const products = [
    { src: "/assets/front-pro1.png", type: "Tablet", name: "ACP-MR" },
    { src: "/assets/front-pro2.png", type: "Tablet", name: "DORONA" },
    { src: "/assets/front-pro3.png", type: "Tablet", name: "IGCON-12" },
    { src: "/assets/front-pro4.png", type: "Capsule", name: "PANCOM-DSR" },
    { src: "/assets/front-pro5.png", type: "Capsule", name: "MULTIRAL GOLD" },
    { src: "/assets/front-pro6.png", type: "Capsule", name: "ABATE" },
    { src: "/assets/front-pro7.png", type: "Syrup", name: "PLUSZYME" },
    { src: "/assets/front-pro8.png", type: "Syrup", name: "ANOVIT" },
    { src: "/assets/front-pro9.png", type: "Syrup", name: "COMCET-M" },
    { src: "/assets/front-pro10.png", type: "Suspension", name: "PNT" },
    { src: "/assets/front-pro11.png", type: "Suspension", name: "ACP" },
    { src: "/assets/front-pro12.png", type: "Suspension", name: "LECOM-NT" },
  ];

  return (
    <>
      <Header />

      <main className="min-h-screen">
        <div id="slidy-container" className="w-full overflow-hidden">
          <figure id="slidy" className="relative">
            {[1, 2, 3].map((idx) => (
              <Image
                key={idx}
                src={`/assets/slider-${idx}.jpg`}
                alt={`slider ${idx}`}
                width={1920}
                height={600}
                className="w-full object-cover"
                priority={idx === 1}
              />
            ))}
          </figure>
        </div>

        <section className="feature-section">

          <div className="pd_top_50"></div>

          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="title_all_box style_seven text-center dark_color">
                  <div className="title_sections">

                    <div className="title"> Welcome to Lifecom Pharmaceuticals Pvt. Ltd.</div>
                    <p className="description_text">
                      LIFECOM PHARMACEUTICALS (I) PRIVATE LIMITED , the world-class healthcare solution provider, is one of the leading and fastest growing pharmaceutical company of India, which is engaged in the manufacture and marketing of a wide range of therapeutic drugs, bulk pellets, skin care, health and nutrition products.
                    </p>
                  </div>

                  <div className="pd_bottom_30"></div>

                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className="icon_box_new_box type_two ">
                  <span className="borders"></span>
                  <div className="icon_box">
                    <Image
                      src="/assets/icon-1.png"
                      alt="Authenticity icon"
                      fill                // ← no width/height needed
                      className="object-contain"
                    />
                    <span className="icon_bg_rotate"></span>
                  </div>
                  <div className="content">
                    <h2>
                      <a href="#">Authenticity</a>
                    </h2>
                    <p>Being Trustworthy & Genuine
                      <br />

                    </p>

                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className="icon_box_new_box type_two ">
                  <span className="borders"></span>
                  <div className="icon_box">
                    <Image
                      src="/assets/icon-2.png"
                      alt="Authenticity icon"
                      fill                // ← no width/height needed
                      className="object-contain"
                    />

                    <span className="icon_bg_rotate"></span>
                  </div>
                  <div className="content">
                    <h2>
                      <a href="#">Quality & Credibility</a>
                    </h2>
                    <p>Being Accountable & Taking Charge</p>

                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className="icon_box_new_box type_two ">
                  <span className="borders"></span>
                  <div className="icon_box">
                    <Image
                      src="/assets/icon-3.png"
                      alt="Authenticity icon"
                      fill                // ← no width/height needed
                      className="object-contain"
                    />
                    <span className="icon_bg_rotate"></span>
                  </div>
                  <div className="content">
                    <h2>
                      <a href="#">Integrity</a>
                    </h2>
                    <p>Being Reliable & Adhering to Principles</p>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pd_bottom_50"></div>

        </section>

        {/* ---------------------------About------------------------------- */}



        <section
          className="about-section bg_op_1"
          style={{ backgroundImage: "url('/assets/images/about-11-bg.jpg')" }}
        >
          <div className="pd_top_50"></div>

          <div className="container">
            <div className="row gutter_30px align-items-center">
              <div className="col-xl-7 col-lg-10 col-md-12">
                <div className="title_all_box style_one dark_color">
                  <div className="title_sections">
                    <h2>About Us</h2>
                    <p>
                      LIFECOM PHARMACEUTICALS (I) PRIVATE LIMITED has grown to become
                      one of India’s most respected pharmaceutical companies. It is
                      committed to delivering better health through superior products.
                      <br />
                      By combining strategic research and in-depth industry knowledge,
                      LIFECOM aims to transform itself into a global pharmaceutical drug
                      company with an increasing focus on cutting-edge research and
                      developed markets. It addresses therapeutic areas like dermatology,
                      gastroenterology, cardiology, diabetology, psychiatry, neurology,
                      anti-bacterials, anti-infectives, and pain management.
                      <br />
                      We are the 1st company marketing products for juniors (age
                      5–12 years).
                    </p>
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="theme_btn_all color_one">
                      <a href="#" className="theme-btn one">
                        Learn More
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-8 col-sm-12">
                    <div className="extra_content image_with_content dark_color">
                      <div className="simple_image flex items-center gap-4">
                        <Image
                          src="/assets/flag.png"
                          alt="Flag"
                          width={60}
                          height={60}
                        />
                        <h2>
                          Since 2000,
                          <br />
                          Operating in India.
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right-side image with experience badge */}
              <div className="col-xl-5 col-lg-12 col-md-12">
                <div className="image_boxes style_seven">
                  <div className="image_box">
                    <img src="/assets/home-1.jpg" class="img-fluid height_500 object-fit-cover" alt="about" />

                    <div className="experience">
                      <div className="experience_inner">
                        <h2> 25+ Years Of Experience </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pd_bottom_50"></div>
        </section>

        {/* -----------------choose us------------------------- */}



        <section className="content-section">

          <div className="pd_top_50"></div>

          <div className="auto-container">
            <div className="row">
              <div className="col-lg-12 m-auto">
                <div className="title_all_box style_six text-center">
                  <div className="title_sections">

                    <div className="title">Why People Choose us</div>
                    <p className="description_text">
                      We are a quality-conscious firm and continuously struggle hard to bring forth only premium quality products to our prestigious patrons at reasonable rates. Unique reasons which have given us lead in this field are given below:
                    </p>
                  </div>

                  <div class="pd_bottom_20"></div>

                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="choose_box  type_one">
                  <div className="image_box">
                    <img src="/assets/why-icon1.png" class="img-fluid svg_image" alt="icon png" />
                  </div>
                  <div className="content_box">
                    <span className="step_no">01</span>
                    <div className="text_box">
                      <h2>
                        <a href="#" target="_blank">
                          Wide Distribution Network</a>
                      </h2>
                      <p>We believe to provide Wide Distribution Network becouse customer gets easy access to our products.</p>

                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="choose_box  type_one">
                  <div class="image_box">
                    <img src="/assets/why-icon2.png" class="img-fluid svg_image" alt="icon png" />
                  </div>
                  <div className="content_box">
                    <span className="step_no">02</span>
                    <div className="text_box">
                      <h2>
                        <a href="#" target="_blank">
                          Client Centric Approach </a>
                      </h2>
                      <p>

                        Building and strengthening customer relationship tactics can help to gain a competitive advantage.</p>

                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="choose_box  type_one">
                  <div className="image_box">
                    <img src="/assets/why-icon3.png" class="img-fluid svg_image" alt="icon png" />
                  </div>
                  <div className="content_box">
                    <span className="step_no">03</span>
                    <div className="text_box">
                      <h2>
                        <a href="#" target="_blank">
                          Ethical Business Policy </a>
                      </h2>
                      <p>
                        Company is committed to conducting its business in compliance with all applicable laws, rules, and regulations.</p>


                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div class="choose_box  type_one">
                  <div class="image_box">
                    <img src="/assets/why-icon4.png" class="img-fluid svg_image" alt="icon png" />
                  </div>
                  <div className="content_box">
                    <span className="step_no">04</span>
                    <div className="text_box">
                      <h2>
                        <a href="#" target="_blank">
                          Affordable Price Range</a>
                      </h2>
                      <p>
                        We offered our produts are appreciated due to their reasonable prices, and perfect execution.</p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pd_bottom_65"></div>

        </section>

        <section
          className="contact-section bg_op_1 box_shadow_2"
          style={{ backgroundImage: "url('/assets/images/consult-bg.jpg')" }}
        >
          <div className="container">
            <div className="row">
              {/* Left Image */}
              <div className="col-lg-5 col-md-12">
                <div className="image_box mr_top_minus_50">
                  <Image
                    src="/assets/images/cosnsult-image.png"
                    alt="consult"
                    width={480}
                    height={358}
                    className="img-fluid h-auto w-full object-contain"
                  />
                </div>
              </div>

              {/* Right Content */}
              <div className="col-lg-7 col-md-12">
                <div className="pd_top_40"></div>
                <div className="title_all_box style_six dark_color">
                  <div className="title_sections">
                    <div className="title">Join The Leaders</div>
                    <p>
                      To emerge as a leading integrated global pharmaceutical company,
                      LIFECOM PHARMACEUTICALS (I) PRIVATE LIMITED came into operations
                      on 16 May 2000 with a vision to become a leading integrated
                      pharmaceutical company.
                    </p>
                  </div>
                </div>

                <div className="pd_bottom_0"></div>

                <div className="row gutter_25px items-center">
                  {/* Contact Button */}
                  <div className="col-lg-4 col-md-12">
                    <div className="theme_btn_all color_one">
                      <a href="/contact.php" className="theme-btn one">
                        Contact us
                      </a>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="col-lg-8 col-md-12">
                    <div className="footer_contact_list dark_color type_one">
                      <div className="same_contact phone d-flex gap-3 items-center">
                        <span className="icon-telephone text-2xl"></span>
                        <div className="content">
                          <h6 className="titles mb-1">Phone</h6>
                          <a href="tel:+915224066541" className="font-semibold">
                            (+91) 0522 406 6541
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pd_bottom_30"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="project-carousel" id="projects">
          <div className="pd_top_80"></div>
          <div className="container">
            <div className="row">
              <div className="title_all_box style_one text-center dark_color">
                <div className="title_sections">
                  <h2>Our Top Products</h2>
                </div>
                <div className="mr_bottom_10"></div>
              </div>
            </div>
          </div>

          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="project_caro_section carousel style_one">
                  <Swiper
                    modules={[Navigation, Autoplay, Pagination]}
                    loop
                    autoplay={{ delay: 5000 }}
                    speed={1000}
                    slidesPerView={4}
                    spaceBetween={30}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                      0: { slidesPerView: 1 },
                      576: { slidesPerView: 1 },
                      768: { slidesPerView: 2 },
                      1024: { slidesPerView: 2 },
                      1200: { slidesPerView: 4 },
                    }}
                  >
                    {products.map((product, index) => (
                      <SwiperSlide key={index}>
                        <div className="project_post style_one mr_top_20">
                          <div className="image">
                            <Image
                              src={product.src}
                              alt={product.name}
                              width={400}
                              height={300}
                              className="img-fluid w-full h-auto"
                            />
                          </div>
                          <div className="project_caro_content">
                            <div className="left_side">
                              <p>{product.type}</p>
                              <h2 className="title_pro">
                                <Link href="/project">{product.name}</Link>
                              </h2>
                            </div>
                            <div className="right_side flex gap-2">
                              <Link href="/project">
                                <i className="icon-right-arrow"></i>
                              </Link>
                              <Link href="/project" className="two">
                                <i className="icon-right-arrow"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="p_pagination">
                    <div className="swiper-pagination"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pd_bottom_50"></div>
        </section>
      </main >
      <Footer />
    </>
  );
}
