"use client";

import Image from "next/image";
import Header from "../component/header";
import Footer from "../component/footer";
const KywanAboutPage = () => {
    return (
        <>
            <Header />
            {/* Page Header */}
            <div className="page_header_default style_one">
                <div className="parallax_cover">
                    <Image
                        src="/assets/images/page-header-default.jpg"
                        alt="bg_image"
                        className="cover-parallax"
                        width={1920}
                        height={400}
                    />
                </div>
                <div className="page_header_content">
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="banner_title_inner">
                                    <div className="title_page">Kywan Labs</div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="breadcrumbs creote">
                                    <ul className="breadcrumb m-auto">
                                        <li><a href="/">Home</a></li>
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
                                    <Image src="/assets/KYWAN.png" alt="about" width={200} height={200} />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="title_all_box style_one dark_color">
                                <div className="title_sections">
                                    <br />
                                    <br />

                                    <h6 style={{ fontSize: "22px", color: "#1a1a70" }}>About Us</h6>
                                    <p>
                                        Welcome to Kywan Labs India Pvt Ltd, a pioneering derma division of Lifecom...
                                    </p>

                                    <h6 style={{ fontSize: "22px", color: "#1a1a70" }}>Our Mission</h6>
                                    <p>
                                        At Kywan Labs, our mission is to provide cutting-edge, research-driven...
                                    </p>

                                    <h6 style={{ fontSize: "22px", color: "#1a1a70" }}>Our Vision</h6>
                                    <p>
                                        Our vision is to emerge as a leading player in the derma industry...
                                    </p>

                                    <h6 style={{ fontSize: "22px", color: "#1a1a70" }}>Our Values</h6>
                                    <p><b>Innovation:</b> We foster a culture of innovation...</p>
                                    <p><b>Quality:</b> We are committed to delivering high-quality products...</p>
                                    <p><b>Customer-centricity:</b> We prioritize customer satisfaction...</p>

                                    <h6 style={{ fontSize: "22px", color: "#1a1a70" }}>Our Expertise</h6>
                                    <p><b>Dermatological research:</b> We invest in R&D...</p>
                                    <p><b>Product development:</b> Our team of experts develops...</p>
                                    <p><b>Quality assurance:</b> We ensure our products meet the highest standards...</p>

                                    <h6 style={{ fontSize: "22px", color: "#1a1a70" }}>Join Us</h6>
                                    <p><b>Innovative solutions:</b> Cutting-edge products...</p>
                                    <p><b>Expertise:</b> A team of experienced professionals...</p>
                                    <p><b>Commitment to quality:</b> High-quality products and solutions...</p>

                                    <em style={{ color: "#cd2d10" }}>
                                        <b>Let us work together to create a brighter future for dermatology.</b>
                                    </em>
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

export default KywanAboutPage;
