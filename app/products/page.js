'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Header from '../component/header';
import Footer from '../component/footer';
const Products = () => {
    return (
        <>
            <Header />
            <div className="page_header_default style_one">
                <div className="parallax_cover">
                    <Image
                        src="/assets/images/page-header-default.jpg"
                        alt="bg_image"
                        className="cover-parallax"
                        width={1920}
                        height={500}
                    />
                </div>
                <div className="page_header_content">
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="banner_title_inner">
                                    <div className="title_page">Products</div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="breadcrumbs creote">
                                    <ul className="breadcrumb m-auto">
                                        <li><Link href="/">Home</Link></li>
                                        <li className="active">Products</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Products Content */}
            <div id="content" className="site-content ">

                <div className="pd_top_90"></div>

                <section className="creote-service-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <div className="service_post style_one">
                                    <div className="image">
                                        <div className="overlay"></div>
                                        <img loading="lazy" width="500" height="500" src="assets/images/service/service-image-6.jpg" alt="img" />
                                    </div>
                                    <div className="service_content icon_yes">

                                        <h2 className="title_service"><a href="/product-details" rel="bookmark">Tablet-1 </a></h2>

                                        <a className="read_more" href="/product-details"> View Details<i className="icon-right-arrow-long"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <div className="service_post style_one">
                                    <div className="image">
                                        <div className="overlay"></div>
                                        <img loading="lazy" width="500" height="500" src="assets/images/service/service-image-6.jpg" alt="img" />
                                    </div>
                                    <div className="service_content icon_yes">

                                        <h2 className="title_service"><a href="/product-details" rel="bookmark">Tablet-2 </a></h2>

                                        <a className="read_more" href="/product-details"> View Details<i className="icon-right-arrow-long"></i></a>


                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <div className="service_post style_one">
                                    <div className="image">
                                        <div className="overlay"></div>
                                        <img loading="lazy" width="500" height="500" src="assets/images/service/service-image-6.jpg" alt="img" />
                                    </div>
                                    <div className="service_content icon_yes">

                                        <h2 className="title_service"><a href="/product-details" rel="bookmark">Tablet-3 </a></h2>

                                        <a className="read_more" href="/product-details"> View Details<i className="icon-right-arrow-long"></i></a>
                                    </div>
                                </div>
                            </div>




                        </div>
                    </div>
                </section>

                <div className="pd_top_80"></div>

            </div>
            <Footer />
        </>
    );
};

export default Products;
