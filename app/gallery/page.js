'use client';

import Header from '@/app/component/header';
import Footer from '@/app/component/footer';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function GalleryPage() {
    return (
        <>
            <Header />

            {/* ── Page Header Section ─────────────────────────── */}
            <div className="page_header_default style_one">
                <div className="parallax_cover relative h-[300px] md:h-[420px]">
                    <Image
                        src="/assets/images/page-header-default.jpg"
                        alt="Gallery"
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
                                    <h1 className="title_page">Gallery</h1>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <nav className="breadcrumbs creote">
                                    <ul className="breadcrumb m-auto">
                                        <li><Link href="/">Home</Link></li>
                                        <li className="active">Gallery</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Main Content Section ────────────────────────── */}
            <div className="site-content">
                <div className="pd_top_90" />

                <section className="creote-service-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <div className="service_post style_one">
                                    <div className="image relative group overflow-hidden rounded-lg">
                                        <Image
                                            src="/assets/images/service/service-image-6.jpg"
                                            alt="Talent Management"
                                            width={500}
                                            height={500}
                                            className="transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="overlay absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                    <div className="service_content icon_yes">
                                        <h2 className="title_service">
                                            <Link href="/galleryDetails">Talent Management</Link>
                                        </h2>
                                        <Link className="read_more inline-flex items-center gap-2 mt-2 text-primary" href="/galleryDetails">
                                            View Gallery <i className="icon-right-arrow-long" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* Add more gallery items here as needed */}
                        </div>
                    </div>
                </section>

                <div className="pd_top_80" />
            </div>

            <Footer />
        </>
    );
}
