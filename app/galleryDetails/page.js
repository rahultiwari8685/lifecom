'use client';

import Header from '@/app/component/header';
import Footer from '@/app/component/footer';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

/* plain-JS array – no annotation */
const gallery = [
    { src: '/assets/cert-1.png', title: 'ANNIVERSERY', subtitle: 'Lifecom Pharmaceuticals Pvt. Ltd.' },
    { src: '/assets/cert-2.png', title: 'GLP CERTIFICATE', subtitle: 'Lifecom Pharmaceuticals Pvt. Ltd.' },
    { src: '/assets/cert-3.png', title: 'GMP CERTIFICATE', subtitle: 'Lifecom Pharmaceuticals Pvt. Ltd.' },
    { src: '/assets/cert-4.png', title: 'WHO-GMP CERTIFICATE', subtitle: 'Lifecom Pharmaceuticals Pvt. Ltd.' },
    { src: '/assets/cert-5.png', title: 'ISO CERTIFICATE', subtitle: 'Lifecom Pharmaceuticals Pvt. Ltd.' },
    { src: '/assets/cert-6.png', title: 'MSME CERTIFICATE', subtitle: 'Lifecom Pharmaceuticals Pvt. Ltd.' },
    { src: '/assets/cert-7.png', title: 'MSME CERTIFICATE', subtitle: 'Lifecom Pharmaceuticals Pvt. Ltd.' },
    { src: '/assets/cert-8.png', title: 'MSME CERTIFICATE', subtitle: 'Lifecom Pharmaceuticals Pvt. Ltd.' }
];

export default function GalleryPage() {
    return (
        <>
            <Header />

            {/* Page-header */}
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
                                <h1 className="title_page">Gallery</h1>
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

            {/* Masonry grid */}
            <section className="project-section bg_light_1">
                <div className="pd_top_80" />
                <div className="container">
                    <div className="row">
                        {gallery.map(item => (
                            <div key={item.src} className="col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-4">
                                <div className="project_post style_six">
                                    <div className="image_box relative group overflow-hidden">
                                        <Image
                                            src={item.src}
                                            alt={item.title}
                                            width={500}
                                            height={500}
                                            className="transition-all duration-300 group-hover:scale-105"
                                        />
                                        <div className="overlay flex items-center justify-center">
                                            <div className="content_box text-center">
                                                <h2 className="title_pro">{item.title}</h2>
                                                <p>{item.subtitle}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <a data-fancybox="gallery" href={item.src}>
                                        <span className="icon-add zoom_icon" />
                                    </a>
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
