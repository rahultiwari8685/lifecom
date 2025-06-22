'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Header from '../component/header';
import Footer from '../component/footer';
const CategoryPage = () => {
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
                                    <div className="title_page">Category</div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="breadcrumbs creote">
                                    <ul className="breadcrumb m-auto">
                                        <li><Link href="/">Home</Link></li>
                                        <li className="active">Category</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Category Content */}
            <div id="content" className="site-content">
                <div className="pd_top_90"></div>
                <section className="creote-service-box">
                    <div className="container">
                        <div className="row">
                            {['Tablet', 'Capsules', 'Injections'].map((item, idx) => (
                                <div key={idx} className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <div className="service_post style_one">
                                        <div className="image relative">
                                            <div className="overlay"></div>
                                            <Image
                                                src="/assets/images/service/service-image-6.jpg"
                                                alt="img"
                                                width={500}
                                                height={500}
                                            />
                                        </div>
                                        <div className="service_content icon_yes">
                                            <h2 className="title_service">
                                                <Link href="/products">{item}</Link>
                                            </h2>
                                            <Link className="read_more" href="/products">
                                                View Products<i className="icon-right-arrow-long"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <div className="pd_top_80"></div>
            </div>
            <Footer />
        </>
    );
};

export default CategoryPage;
