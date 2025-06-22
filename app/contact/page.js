'use client';

import Header from '@/app/component/header';
import Footer from '@/app/component/footer';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ContactPage() {
    return (
        <>
            <Header />

            {/* ─── Hero / Page-header ─────────────────────────────────────── */}
            <div className="page_header_default style_one">
                <div className="parallax_cover relative h-[300px] md:h-[420px]">
                    <Image
                        src="/assets/images/page-header-default.jpg"
                        alt="Contact"
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
                                    <h1 className="title_page">Contact</h1>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <nav className="breadcrumbs creote">
                                    <ul className="breadcrumb m-auto">
                                        <li><Link href="/">Home</Link></li>
                                        <li className="active">Contact</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ─── Contact cards ─────────────────────────────────────────── */}
            <section className="contact-section">
                <div className="pd_top_50" />

                <div className="container">
                    <div className="row align-items-center">
                        <div className="title_all_box style_one dark_color">
                            <div className="title_sections left">
                                <div className="before_title">Contact Info to</div>
                                <h2>Reach Our Expert Team</h2>
                                <p>
                                    Send a message through given form, If your enquiry is time sensitive please use
                                    below contact details.
                                </p>
                            </div>
                        </div>

                        {/* ── left column cards ───────────────────────────── */}
                        <div className="col-xl-6 col-lg-6 pd_left_30">
                            {[
                                {
                                    icon: 'icon-placeholder',
                                    title: 'Manufacturing Plant',
                                    lines: [
                                        'Khasra No. 1180/282 Nanhera',
                                        'Anantpur, Bhagwanpur, Roorkee District Haridwar',
                                        'Roorkee (Uttra Khand) India – 247668',
                                        'Mobile: (+91) 9258152057, 9258152061',
                                    ],
                                },
                                {
                                    icon: 'icon-placeholder',
                                    title: 'Head Office',
                                    lines: [
                                        '316, Hind Nagar, Kanpur Road',
                                        'Lucknow, Uttar Pradesh 226012',
                                        'Phone : 0522 406 6541',
                                    ],
                                },
                                {
                                    icon: 'icon-phone-call',
                                    title: 'Contact No. (Sales & Marketing)',
                                    lines: ['Phone : +91 9305109857'],
                                },
                            ].map(card => (
                                <div key={card.title} className="contact_box_content style_one mb-4">
                                    <div className="contact_box_inner icon_yes">
                                        <div className="icon_bx"><span className={card.icon} /></div>
                                        <div className="contnet">
                                            <h3>{card.title}</h3>
                                            <p>{card.lines.join('\n')}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* ── right column cards ─────────────────────────── */}
                        <div className="col-xl-6 col-lg-6 pd_left_30">
                            {[
                                {
                                    icon: 'icon-placeholder',
                                    title: 'Regional Office',
                                    lines: [
                                        '343/A, Badamwadi, R.No. 23 (2ᵍʰ Floor)',
                                        'Kalbadevi Road, Mumbai 400 002',
                                    ],
                                },
                                {
                                    icon: 'icon-placeholder',
                                    title: 'Branch Office',
                                    lines: [
                                        'Lifecom Campus Plot No 50-53',
                                        'Khasra No 308/1, Mohkampur',
                                        'Delhi Road, Meerut',
                                    ],
                                },
                                {
                                    icon: 'icon-phone-call',
                                    title: 'General Enquiries',
                                    lines: [
                                        'E-mail : info@lifecompharma.in',
                                        'Website : www.lifecompharma.in',
                                    ],
                                },
                            ].map(card => (
                                <div key={card.title} className="contact_box_content style_one mb-4">
                                    <div className="contact_box_inner icon_yes">
                                        <div className="icon_bx"><span className={card.icon} /></div>
                                        <div className="contnet">
                                            <h3>{card.title}</h3>
                                            <p>{card.lines.join('\n')}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="pd_top_70" />
            </section>

            {/* ─── Google Map ────────────────────────────────────────────── */}
            <section className="contact-map-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14246.856816244315!2d80.8934297!3d26.7853786!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd97052a976a4914b!2sLifecom%20Pharmaceuticals%20Private%20Limited!5e0!3m2!1sen!2sin!4v1580042982165!5m2!1sen!2sin"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                loading="lazy"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>

                <div className="pd_top_90" />
            </section>

            <Footer />
        </>
    );
}
