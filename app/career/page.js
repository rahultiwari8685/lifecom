'use client';

import Header from '@/app/component/header';
import Footer from '@/app/component/footer';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

/**
 *  Career | Lifecom Pharmaceuticals
 *  ------------------------------------------------------------------
 *  The form still posts with a normal multipart <FORM>.  Replace
 *  `action="/api/career"` (or similar) with whatever endpoint / service
 *  will process CV uploads and send e-mails.
 */

export default function CareerPage() {
    /* optional: wire up a submit handler instead of a classic <form>
       to post to an API route with fetch / FormData.  For now we keep
       simple HTML so backend logic remains exactly as in your PHP site. */

    return (
        <>
            <Header />

            {/* ─── Hero / Page-header ───────────────────────────────────── */}
            <div className="page_header_default style_one relative">
                <div className="parallax_cover h-[300px] md:h-[420px]">
                    <Image
                        src="/assets/images/page-header-default.jpg"
                        alt="Career"
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
                                    <h1 className="title_page">Career</h1>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <nav className="breadcrumbs creote">
                                    <ul className="breadcrumb m-auto">
                                        <li><Link href="/">Home</Link></li>
                                        <li className="active">Career</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ─── Main Section ─────────────────────────────────────────── */}
            <section className="about-section bg_op_1">
                <div className="pd_top_50" />

                <div className="container">
                    <div className="row">
                        {/* ── Form column ─────────────────────────────────────── */}
                        <div className="col-xl-8 col-lg-10">
                            <h4 className="mb-6 font-semibold">
                                Make Your Career at India&apos;s Fastest Growing Pharmaceutical Company
                            </h4>

                            <form
                                action="/api/career"           /* TODO: replace with your own endpoint */
                                method="post"
                                encType="multipart/form-data"
                                className="wpcf7-form"
                            >
                                <div className="row">
                                    {/** name + e-mail */}
                                    <div className="col-lg-6 mb-4">
                                        <label>
                                            Your Name<br />
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Enter Your Name"
                                                className="wpcf7-form-control w-full"
                                                required
                                            />
                                        </label>
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <label>
                                            Your Email<br />
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Enter Your Email"
                                                className="wpcf7-form-control w-full"
                                                required
                                            />
                                        </label>
                                    </div>

                                    {/** phone + job-title */}
                                    <div className="col-lg-6 mb-4">
                                        <label>
                                            Phone Number<br />
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="Enter Your Number"
                                                className="wpcf7-form-control w-full"
                                            />
                                        </label>
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <label>
                                            Job Title<br />
                                            <input
                                                type="text"
                                                name="jobTitle"
                                                placeholder="Enter Job Title"
                                                className="wpcf7-form-control w-full"
                                            />
                                        </label>
                                    </div>

                                    {/** select job-type */}
                                    <div className="col-lg-6 mb-4">
                                        <label>
                                            Job Type<br />
                                            <select
                                                name="jobType"
                                                className="wpcf7-form-control w-full"
                                                defaultValue=""
                                                required
                                            >
                                                <option value="" disabled>--- Job Type ---</option>
                                                {[
                                                    'Field Staff',
                                                    'Office-Staff',
                                                    'Project',
                                                    'Accounts',
                                                    'Computers',
                                                    'Machinery/Plant',
                                                    'Quality Control/Assurance',
                                                    'Warehouse',
                                                    'Others',
                                                ].map(opt => (
                                                    <option key={opt}>{opt}</option>
                                                ))}
                                            </select>
                                        </label>
                                    </div>

                                    {/** address */}
                                    <div className="col-lg-6 mb-4">
                                        <label>
                                            Full Address<br />
                                            <input
                                                type="text"
                                                name="address"
                                                placeholder="Enter Your Address"
                                                className="wpcf7-form-control w-full"
                                            />
                                        </label>
                                    </div>

                                    {/** CV upload */}
                                    <div className="col-lg-6 mb-4">
                                        <label>
                                            Upload Resume<br />
                                            <input
                                                type="file"
                                                name="resume"
                                                accept=".pdf,.doc,.docx"
                                                className="wpcf7-form-control w-full"
                                                required
                                            />
                                        </label>
                                    </div>

                                    {/** message */}
                                    <div className="col-lg-12 mb-6">
                                        <label>
                                            Your Message (optional)<br />
                                            <textarea
                                                name="message"
                                                rows={5}
                                                placeholder="Enter Your Message"
                                                className="wpcf7-form-control w-full"
                                            />
                                        </label>
                                    </div>

                                    <div className="col-lg-12">
                                        <button type="submit" className="theme-btn one px-6 py-2">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>


                        <div className="col-xl-4 col-lg-12 mt-8 xl:mt-0">
                            <div className="image_boxes style_seven rounded-lg overflow-hidden">
                                <Image
                                    src="/assets/career-1.jpg"
                                    alt="Career"
                                    width={800}
                                    height={1000}
                                    className="w-full h-auto object-cover"
                                />
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
