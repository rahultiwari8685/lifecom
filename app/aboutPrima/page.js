"use client";

import Image from "next/image";
import Header from "../component/header";
import Footer from "../component/footer";

export default function AboutLifecomPrima() {
    return (
        <>
            <Header />
            <div className="page_header_default style_one">
                <div className="parallax_cover">
                    <Image
                        src="/assets/images/page-header-default.jpg"
                        alt="bg_image"
                        width={1920}
                        height={400}
                        className="cover-parallax w-full h-auto"
                    />
                </div>
                <div className="page_header_content">
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="banner_title_inner">
                                    <div className="title_page">About Lifecom Prima</div>
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
                                    <Image src="/assets/l-3.png" alt="about" width={200} height={200} />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="title_all_box style_one dark_color">
                                <div className="title_sections">

                                    <br /><br />
                                    <h6 className="text-[22px] text-[#1a1a70] font-semibold">About Lifecom Prima</h6>
                                    <p>
                                        Lifecom Prima is the marketing division of Lifecom Pharmaceuticals, launched in 2021
                                        with a vision to provide innovative and effective products to the market. Our mission is to
                                        deliver high-quality products that meet the evolving needs of our customers.
                                    </p>

                                    <h6 className="text-[22px] text-[#1a1a70] font-semibold">Our Story</h6>
                                    <p>
                                        Lifecom Prima was established to leverage the expertise and experience of Lifecom Pharmaceuticals
                                        in the pharmaceutical industry. With a strong foundation in research, development, and
                                        manufacturing, we aim to make a significant impact in the market with our diverse range of products.
                                    </p>

                                    <h6 className="text-[22px] text-[#1a1a70] font-semibold">Our Products</h6>
                                    <p>
                                        Lifecom Prima offers a wide range of products, including: Pharmaceutical Products: We offer a variety of
                                        pharmaceutical products, including tablets, capsules, liquid orals, and topical products.
                                    </p>

                                    <h6 className="text-[22px] text-[#1a1a70] font-semibold">Our Values</h6>
                                    <p><b>Quality:</b> We prioritize quality in everything we do, ensuring that our products meet the highest standards.</p>
                                    <p><b>Innovation:</b> We continuously invest in research and development, driving innovation and growth in our product line.</p>
                                    <p><b>Customer Satisfaction:</b> We strive to deliver exceptional customer service, ensuring that our
                                        customers are satisfied with our products and services.</p>

                                    <h6 className="text-[22px] text-[#1a1a70] font-semibold">Our Team</h6>
                                    <p>Our team at Lifecom Prima is comprised of experienced professionals who are dedicated to delivering high-quality products and services. Our team includes:</p>
                                    <p><b>Marketing Professionals:</b> Our marketing team is responsible for developing and executing marketing strategies to promote our products.</p>
                                    <p><b>Sales Professionals:</b> Our sales team works closely with our customers, ensuring that they are satisfied with our products and services.</p>
                                    <p><b>Product Development Team:</b> Our product development team is responsible for developing new products and improving existing ones.</p>

                                    <h6 className="text-[22px] text-[#1a1a70] font-semibold">Our Mission</h6>
                                    <p>
                                        At Lifecom Prima, our mission is to deliver high-quality products that meet the evolving needs of our
                                        customers. We strive to be a leader in the market, leveraging our expertise and experience in the
                                        pharmaceutical industry.
                                    </p>

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
}
