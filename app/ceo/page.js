'use client';

import Header from '@/app/component/header';
import Footer from '@/app/component/footer';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function CeoDeskPage() {
    return (
        <>
            <Header />

            {/* ─── Hero / Page-header ─────────────────────────────────────── */}
            <div className="page_header_default style_one">
                <div className="parallax_cover relative h-[300px] md:h-[420px]">
                    <Image
                        src="/assets/images/page-header-default.jpg"
                        alt="CEO’s Desk"
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
                                    <h1 className="title_page">CEO’s Desk</h1>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <nav className="breadcrumbs creote">
                                    <ul className="breadcrumb m-auto">
                                        <li><Link href="/">Home</Link></li>
                                        <li className="active">CEO’s Desk</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ─── Main Content ───────────────────────────────────────────── */}
            <section className="about-section bg_op_1">
                <div className="pd_top_50" />

                <div className="container">
                    <div className="row gutter_30px">
                        <div className="col-xl-12">
                            <div className="title_all_box style_one dark_color">
                                <div className="title_sections">
                                    <h2>CEO’s Desk</h2>
                                    <p>
                                        Mr. Ved Prakash is an Indian businessman born on 10 Jan 1970. He is the Chairman-cum-Managing Director of the Lifecom Group of companies based in India.
                                        He is the son of Late Smt. Shanti Devi & Shri Jhabbar Singh. He was born in an upper middle-class family, and his father was Pradhan of Village Dabathwa (Distt. Meerut).
                                        As a child, he was always bright with great business acumen.
                                    </p>
                                    <p>
                                        Before founding the Lifecom Group, he gathered 11 years of experience in the Pharma business. He is married to Munesh Devi, one of the directors of Lifecom Group.
                                        On 20 Nov 1988, he started his career as a professional salesperson in Bestochem Formulations, with his first posting in Distt. Deoria.
                                        He was awarded Best Medical Sales Person for 11 consecutive years.
                                    </p>
                                    <p>
                                        In May 2000, he became a young entrepreneur with support from his pharma friends and began promoting the company single-handedly.
                                        Over 17 years, <strong>LIFECOM PHARMACEUTICALS (I) PRIVATE LIMITED</strong> grew from <strong>6 employees to 395</strong> in Uttar Pradesh with a turnover of ₹50 crores.
                                        It is now one of the fastest-growing pharma groups in the region.
                                    </p>
                                    <p>
                                        The group has diversified into printing with <em>FourAD Printers</em>, located in Meerut (U.P.).
                                        <br />
                                        <strong>LIFECOM PHARMACEUTICALS</strong> is also establishing a sophisticated pharma manufacturing unit at:
                                        <br />
                                        <strong>Khasra No. 1180/282 Nanhera Anantpur, Bhagwanpur, Roorkee District, Haridwar, Uttarakhand, India.</strong>
                                    </p>

                                    <p className="mt-5 font-semibold text-[#cd2d10]">
                                        Mr. Ved Prakash<br />
                                        CEO
                                    </p>
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
