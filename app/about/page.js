"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../component/header";
import Footer from "../component/footer";

const About = () => {
    return (
        <>
            <Header />
            {/* Page Header */}
            <div className="page_header_default style_one relative">
                <div className="parallax_cover">
                    <Image
                        src="/assets/images/page-header-default.jpg"
                        alt="bg_image"
                        layout="responsive"
                        width={1920}
                        height={500}
                        className="cover-parallax"
                    />
                </div>
                <div className="page_header_content">
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="banner_title_inner">
                                    <div className="title_page">FOURAD PRINTERS</div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="breadcrumbs creote">
                                    <ul className="breadcrumb m-auto">
                                        <li><Link href="/">Home</Link></li>
                                        <li className="active">About Us</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <section className="about-section bg_op_1">
                <div className="pd_top_50"></div>
                <div className="container">
                    <div className="row gutter_30px align-items-center">
                        <div className="col-xl-5 col-lg-12 col-md-12"></div>

                        <div className="col-xl-2 col-lg-12 col-md-12">
                            <div className="image_boxes style_seven">
                                <div className="image_box">
                                    <Image
                                        src="/assets/l-2.png"
                                        alt="about"
                                        width={300}
                                        height={200}
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="title_all_box style_one dark_color">
                                <div className="title_sections">
                                    <br /><br />
                                    <h6 style={{ fontSize: "22px", color: "#1a1a70" }}>About FOURAD PRINTERS</h6>
                                    <p>FOURAD PRINTERS is a state-of-the-art offset printing factory established in 2014, specializing in high-quality printing materials such as cartons, brochures, stickers, labels, and Aluminium &amp; Blister foil for the Pharmaceutical Industry...</p>

                                    <h6 style={{ fontSize: "22px", color: "#1a1a70" }}>Our Capabilities</h6>
                                    <p>At FOURAD PRINTERS, we offer a wide range of printing services, including:</p>
                                    <p><b>Carton Printing:</b> We produce high-quality cartons for various industries, including pharmaceuticals, food, and cosmetics.</p>
                                    <p><b>Sticker Printing:</b> Our sticker printing services include a range of materials and finishes...</p>
                                    <p><b>Label Printing:</b> We specialize in label printing for various applications...</p>
                                    <p><b>Aluminium &amp; Blister foil for Pharmaceutical Industry:</b> We have recently introduced an in-house Aluminium &amp; Blister foil facility...</p>

                                    <h6 style={{ fontSize: "22px", color: "#1a1a70" }}>Our Commitment</h6>
                                    <p><b>Quality:</b> We prioritize quality in everything we do...</p>
                                    <p><b>Innovation:</b> We continuously invest in new technologies...</p>
                                    <p><b>Customer Satisfaction:</b> We strive to deliver exceptional customer service...</p>

                                    <h6 style={{ fontSize: "22px", color: "#1a1a70" }}>Why Choose FOURAD PRINTERS?</h6>
                                    <p><b>State-of-the-art facilities:</b> Our modern printing facilities enable us to produce high-quality products with precision and efficiency.</p>
                                    <p><b>Experienced team:</b> Our team of experienced professionals is dedicated to delivering exceptional printing services.</p>
                                    <p><b>Commitment to quality:</b> We are committed to quality and innovation...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pd_bottom_50"></div>
            </section>
            <Footer />
        </>
    );
};

export default About;
