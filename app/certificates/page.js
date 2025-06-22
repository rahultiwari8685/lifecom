'use client';

import Header from '@/app/component/header';
import Footer from '@/app/component/footer';
import Image from 'next/image';
import Link from 'next/link';

const certificates = [
    { title: 'ANNIVERSERY', img: '/assets/cert-1.png' },
    { title: 'GLP CERTIFICATE', img: '/assets/cert-2.png' },
    { title: 'GMP CERTIFICATE', img: '/assets/cert-3.png' },
    { title: 'WHO-GMP CERTIFICATE', img: '/assets/cert-4.png' },
    { title: 'ISO CERTIFICATE', img: '/assets/cert-5.png' },
    { title: 'MSME CERTIFICATE', img: '/assets/cert-6.png' },
    { title: 'MSME CERTIFICATE', img: '/assets/cert-7.png' },
    { title: 'MSME CERTIFICATE', img: '/assets/cert-8.png' },
];

export default function OurCertificatesPage() {
    return (
        <>
            <Header />

            {/* Page Header */}
            <div className="page_header_default style_one">
                <div className="parallax_cover relative h-[300px] md:h-[420px]">
                    <Image
                        src="/assets/images/page-header-default.jpg"
                        alt="Our Certificates"
                        fill
                        className="cover-parallax object-cover"
                    />
                </div>

                <div className="page_header_content">
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="banner_title_inner">
                                    <h1 className="title_page">Our Certificates</h1>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <nav className="breadcrumbs creote">
                                    <ul className="breadcrumb m-auto">
                                        <li><Link href="/">Home</Link></li>
                                        <li className="active">Our Certificates</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Certificates Grid */}
            <section className="project-section bg_light_1">
                <div className="pd_top_80" />

                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="title_all_box style_one dark_color">
                                <div className="title_sections">
                                    <h2>Our Certificates</h2>
                                </div>
                                <div className="pd_bottom_20" />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                        {certificates.map((cert, index) => (
                            <div key={index} className="relative group border rounded shadow-md overflow-hidden">
                                <Image
                                    src={cert.img}
                                    alt={cert.title}
                                    width={400}
                                    height={300}
                                    className="object-cover w-full h-[250px] transition-transform group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                    <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
                                    <p className="text-sm">Lifecom Pharmaceuticals Pvt. Ltd.</p>
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
