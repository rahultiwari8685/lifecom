'use client';

import Header from '@/app/component/header';
import Footer from '@/app/component/footer';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function VisionPage() {
    return (
        <>
            <Header />

            {/* === Page-header (hero) === */}
            <div className="page_header_default style_one">
                <div className="parallax_cover relative h-[300px] md:h-[420px]">
                    <Image
                        src="/assets/images/page-header-default.jpg"
                        alt="Vision & Values"
                        fill
                        priority
                        className="cover-parallax object-cover"
                    />
                </div>

                <div className="page_header_content">
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="banner_title_inner">
                                    <div className="title_page">Vision &amp; Values</div>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <nav className="breadcrumbs creote">
                                    <ul className="breadcrumb m-auto">
                                        <li>
                                            <Link href="/">Home</Link>
                                        </li>
                                        <li className="active">Vision &amp; Values</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* === Vision section === */}
            <section className="about-section bg_op_1">
                <div className="pd_top_50" />

                <div className="container">
                    <div className="row gutter_30px align-items-center">
                        {/* Text column */}
                        <div className="col-xl-8 col-lg-10 col-md-12">
                            <div className="title_all_box style_one dark_color">
                                <div className="title_sections">
                                    <h2>Our Vision &amp; Values</h2>

                                    <p>
                                        To emerge as a leading integrated global pharmaceutical company,
                                        LIFECOM PHARMACEUTICALS (I) PRIVATE LIMITED came into operations in 2001
                                        with a vision to become a market leader. Our brands enjoy a significant
                                        presence in the Indian pharmaceutical market. We firmly believe the real
                                        force behind our success is our dedicated employees, committed to creating
                                        “A new way for a new world.”
                                    </p>

                                    <p>
                                        We value <strong>achievement of objectives</strong> and persevere towards our vision;
                                        <strong> knowledge</strong> that empowers our people to innovate; and we <strong>respect</strong>{' '}
                                        all stakeholders. As a responsible organisation we are committed to the
                                        environment, human health and safety across all operations—working today
                                        for a better tomorrow.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Image column */}
                        <div className="col-xl-4 col-lg-12 col-md-12">
                            <div className="image_boxes style_seven">
                                <div className="image_box relative h-[500px]">
                                    <Image
                                        src="/assets/vision-1.jpg"
                                        alt="Vision illustration"
                                        fill
                                        className="img-fluid object-cover rounded"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pd_bottom_50" />
            </section>

            <Footer />
        </>
    );
}
