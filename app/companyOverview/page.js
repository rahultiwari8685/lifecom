'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Header from '../component/header';
import Footer from '../component/footer';

export default function AboutPage() {
    return (
        <>
            <Header />

            {/* Page Header */}
            <div className="page_header_default style_one">
                <div className="parallax_cover relative h-[300px] md:h-[420px]">
                    <Image
                        src="/assets/images/page-header-default.jpg"
                        alt="bg_image"
                        fill
                        className="cover-parallax object-cover"
                    />
                </div>
                <div className="page_header_content">
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="banner_title_inner">
                                    <div className="title_page">About Us</div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="breadcrumbs creote">
                                    <ul className="breadcrumb m-auto">
                                        <li>
                                            <Link href="/">Home</Link>
                                        </li>
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
                <div className="pd_top_50" />
                <div className="container">
                    <div className="row gutter_30px align-items-center">
                        <div className="col-xl-7 col-lg-10 col-md-12">
                            <div className="title_all_box style_one dark_color">
                                <div className="title_sections">
                                    <h2>About Us</h2>
                                    <p>
                                        LIFECOM PHARMACEUTICALS (I) PRIVATE LIMITED has attained its name &
                                        eminence with its different products which stand for quality and essence.
                                        We never compromise on quality. Since its provenance on 16 May 2000, the
                                        company has delivered matchless and unequaled product value to the customers
                                        with a high quality product backed by unparalleled service, technical support
                                        and formulation customization capabilities. The Drugs LIFECOM PHARMACEUTICALS
                                        (I) PRIVATE LIMITED are manufactured under WHO GMP certification units.
                                        <br />
                                        The LIFECOM Group has taken scientific steps in providing quality medicines
                                        like tablets, capsules, ointments, creams, gel, shampoo, lotion, medicated
                                        soap, liquid orals and cosmetics. Our products are unique and diverse. The
                                        company efforts and endeavors to become leader in every field of
                                        Pharmaceuticals segment.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-5 col-lg-12 col-md-12">
                            <div className="image_boxes style_seven">
                                <div className="image_box relative h-[500px]">
                                    <Image
                                        src="/assets/about-1.jpg"
                                        alt="about"
                                        fill
                                        className="object-cover rounded"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pd_bottom_50" />
            </section>

            {/* Fun Facts Section */}
            <section className="funfact-section bg_light_1">
                <div className="pd_bottom_80" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title_all_box style_two text-center dark_color">
                                <div className="title_sections two">
                                    <div className="before_title">Some Fun Facts</div>
                                    <h2>Structured Our Workflow</h2>
                                </div>
                                <div className="mr_bottom_20" />
                            </div>
                        </div>
                    </div>

                    {/* You can optionally map over counter data here */}
                    <div className="row text-center">
                        {[1, 2, 3, 4].map((_, i) => (
                            <div key={i} className="col-md-3 col-sm-6 mb-4">
                                <div className="counter-block style_one">
                                    <div className="icon_box">
                                        <div className="icon">
                                            <Image
                                                src={`/assets/images/fun-${i + 1}.png`}
                                                alt="icon"
                                                width={64}
                                                height={64}
                                                className="img-fluid svg_image"
                                            />
                                        </div>
                                        <div className="coun_ter">
                                            <span className="count-text">
                                                {[1423, 100, 82, 82][i]}
                                            </span>
                                            <small>{['+', '%', '+', ''][i]}</small>
                                        </div>
                                    </div>
                                    <div className="content_box">
                                        <h6>
                                            {['Cases Done', 'Satisfied Clients', 'Awards Wins', 'Team Members'][i]}
                                        </h6>
                                        <p>It is a long establish fact that a reader distracted</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="pd_bottom_70" />
            </section>

            {/* Team Section */}
            <section className="team-section">
                <div className="pd_top_50" />
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-12">
                            <div className="title_all_box style_one dark_color">
                                <div className="title_sections">
                                    <div className="before_title">Dedicated Team</div>
                                    <h2>EFFICIENT TEAM OF PROFESSIONALS</h2>
                                </div>
                            </div>
                            <div className="description_box">
                                <p>
                                    We believe in our employees being the face and the entity that represents
                                    LIFECOM PHARMACEUTICALS (I) PRIVATE LIMITED to the world. Our team of
                                    professionals forms the most integral part of our organization...
                                </p>
                                <div className="mr_bottom_20" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {[
                            { name: 'Mr. Ved Prakash', role: 'CMD', img: '/assets/t-1.jpg' },
                            { name: 'Mr. V. K. Kaushik', role: 'Director', img: '/assets/t-3.jpg' },
                            { name: 'Mrs. Munesh Devi', role: 'Director', img: '/assets/team-2.png' },
                        ].map((member, idx) => (
                            <div key={idx} className="col-lg-4 col-md-6 col-sm-12">
                                <div className="team_box style_one mb-4">
                                    <div className="team_box_outer">
                                        <div className="member_image">
                                            <Image
                                                src={member.img}
                                                alt={member.name}
                                                width={400}
                                                height={400}
                                                className="img-fluid"
                                            />
                                        </div>
                                        <div className="about_member">
                                            <div className="share_media">
                                                <ul className="first">
                                                    <li className="text">Share</li>
                                                    <li><i className="fa fa-share-alt"></i></li>
                                                </ul>
                                                <ul>
                                                    {['facebook', 'twitter', 'skype', 'instagram'].map((platform) => (
                                                        <li key={platform}>
                                                            <a href="#"><i className={`fa fa-${platform}`}></i></a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="authour_details">
                                                <span>({member.role})</span>
                                                <h6>{member.name}</h6>
                                                <div className="button_view">
                                                    <a href="#" target="_blank" rel="nofollow" className="theme-btn one">
                                                        View Profile
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="pd_bottom_60" />
            </section>

            <Footer />
        </>
    );
}
