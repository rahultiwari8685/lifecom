"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

/**
 * Renders a “floating” button and the contact modal.
 * Lives inside app/layout but runs only on the client.
 */
export default function Model() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* button in the corner */}
            <button
                onClick={() => setOpen(true)}
                className="fixed bottom-6 right-6 rounded-full bg-blue-600 text-white p-4 shadow-lg z-50"
            >
                <i className="fa fa-envelope" />
            </button>

            {/* overlay / dialog */}
            {open && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
                    onClick={() => setOpen(false)}                  /* click backdrop closes */
                >
                    <div
                        className="relative bg-white rounded-lg w-full max-w-xl p-8"
                        onClick={(e) => e.stopPropagation()}          /* stop close on dialog click */
                    >
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-3 right-3 text-2xl leading-none"
                        >
                            &times;
                        </button>

                        {/* ===== Modal content ===== */}
                        <h2 className="text-2xl font-bold mb-6">Contact us</h2>

                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Your name"
                                className="w-full border rounded px-3 py-2"
                            />
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full border rounded px-3 py-2"
                            />
                            <textarea
                                rows={4}
                                placeholder="Message"
                                className="w-full border rounded px-3 py-2"
                            />
                            <button className="px-6 py-2 bg-blue-600 text-white rounded">
                                Send
                            </button>
                        </form>

                        <div className="mt-8 border-t pt-6">
                            <Image
                                src="/assets/logo.png"
                                width={160}
                                height={60}
                                alt="Lifecom logo"
                                className="mb-4"
                            />

                            <p className="text-sm">
                                LIFECOM PHARMACEUTICALS (I) PRIVATE LIMITED is one of the
                                leading and fastest-growing pharmaceutical companies in India.
                            </p>

                            <div className="mt-4 flex gap-3 flex-wrap">
                                {[9, 8, 7, 6, 5].map((n) => (
                                    <Link key={n} href="#">
                                        <Image
                                            src={`/assets/images/blog/blog-image-${n}.jpg`}
                                            width={110}
                                            height={90}
                                            alt={`blog ${n}`}
                                            className="rounded shadow"
                                        />
                                    </Link>
                                ))}
                            </div>

                            <p className="mt-6 text-xs text-gray-500">
                                © 2025 LIFECOM PHARMACEUTICALS PRIVATE LIMITED
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
