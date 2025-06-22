'use client';

import Header from '@/app/component/header';
import Footer from '@/app/component/footer';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function FactoryPage() {
    return (
        <>
            <Header />

            {/* ─── Page-header / Hero ───────────────────────────────────────── */}
            <div className="page_header_default style_one">
                <div className="parallax_cover relative h-[300px] md:h-[420px]">
                    <Image
                        src="/assets/images/page-header-default.jpg"
                        alt="Factory"
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
                                    <h1 className="title_page">Factory</h1>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <nav className="breadcrumbs creote">
                                    <ul className="breadcrumb m-auto">
                                        <li><Link href="/">Home</Link></li>
                                        <li className="active">Factory</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ─── Main Section ─────────────────────────────────────────────── */}
            <section className="about-section bg_op_1">
                {/* spacing */}
                <div className="pd_top_50" />

                <div className="container">
                    <h2 className="mb-6 text-2xl font-semibold text-center">Our Manufacturing Unit</h2>

                    {/* ── three side-by-side photos ── */}
                    <div className="row gutter_30px mb-8">
                        {['/assets/fac-1.jpg', '/assets/fac-1.jpg', '/assets/fac-1.jpg'].map((src, i) => (
                            <div key={i} className="col-xl-4 col-lg-12 col-md-12 mb-6 xl:mb-0">
                                <div className="image_boxes style_seven rounded-lg overflow-hidden">
                                    <Image src={src} alt="Factory shot" width={800} height={450} className="w-full h-auto object-cover" />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ── text content ── */}
                    <article className="prose max-w-none">
                        <h3 style={{ color: '#1a1a70' }}>About Our Manufacturing Unit</h3>
                        <p>
                            At Lifecom Pharmaceuticals, our manufacturing unit is the cornerstone of our operations, where we
                            produce high-quality pharmaceutical products that meet international standards. Our state-of-the-
                            art facilities are designed to ensure the highest level of quality, safety, and efficiency.
                        </p>

                        <h3 style={{ color: '#1a1a70' }}>Our Facilities</h3>
                        <p>Our manufacturing unit is equipped with modern machinery and technology, enabling us to produce a wide range of pharmaceutical products, including:</p>

                        <p><b>Diverse Product Portfolio:</b> We offer tablets, capsules, liquid orals, ointments, creams, gels, lotions, medicated soaps, and sachets.</p>
                        <p><b>Scientific Approach:</b> Our team of experts is dedicated to developing and delivering high-quality products that meet the evolving needs of our customers.</p>

                        <h3 style={{ color: '#1a1a70' }}>Quality Assurance</h3>
                        <p>At Lifecom Pharmaceuticals, quality is our top priority. Our manufacturing unit adheres to strict quality control measures, including:</p>
                        <p><b>WHO GMP Certification:</b> Our facilities are certified by WHO-GMP, ensuring compliance with international quality standards.</p>
                        <p><b>Quality Control:</b> Rigorous raw-material, in-process, and finished-product testing, plus regular regulatory audits.</p>

                        <h3 style={{ color: '#1a1a70' }}>Our Commitment</h3>
                        <p><b>Quality:</b> We prioritize quality in everything we do.</p>
                        <p><b>Safety:</b> Ensuring all products are safe for consumption.</p>
                        <p><b>Innovation:</b> Continuous investment in new technologies and processes.</p>

                        <h3 style={{ color: '#1a1a70' }}>Our Team</h3>
                        <p><b>Production Personnel:</b> Trained operators managing state-of-the-art equipment.</p>
                        <p><b>Quality Control Personnel:</b> Experts guaranteeing every batch meets specifications.</p>
                        <p><b>Maintenance Personnel:</b> Professionals keeping our machinery running optimally.</p>
                    </article>
                </div>

                {/* spacing */}
                <div className="pd_bottom_50" />
            </section>

            <Footer />
        </>
    );
}
