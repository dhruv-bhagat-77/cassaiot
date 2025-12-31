"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Highlight = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1,
        // centerMode: true,
        responsive: [
            {
                breakpoint: 768, // Tablet
                settings: {
                    slidesToShow: 1,
                    centerMode: false, // Disable centerMode on smaller screens
                },
            },
            {
                breakpoint: 480, // Mobile
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                },
            },
        ],
    };
    return (
        <>
            <section className="bg-IcyBreeze dark:bg-darklight">
                <div className="container">
                    <h2 className="text-center pb-12">About Us</h2>
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center max-w-[125rem] mx-auto">
                        <div
                            className="col-span-5 py-0 px-7"
                            data-aos="fade-right"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                        >
                            {/* <h2>Previous Year Highlights</h2> */}
                            <p className="text-lg font-normal text-justify text-SlateBlueText dark:text-opacity-80 max-w-404 pt-7 pb-11">
                                CASS AIOT is an industrial AI and robotics company building fully autonomous systems for manufacturing and inspection. We combine AI, computer vision, robotics, and industrial software to deliver real-world automation that scales, learns, and performs—without human dependency.
                            </p>
                            {/* <div className="flex items-center flex-wrap gap-30">
                                <div className="text-start sm:pb-0 pb-5">
                                    <h2 className="text-primary">10k+</h2>
                                    <p className="text-lg font-medium text-secondary dark:text-darktext">
                                        Ticket confirmed
                                    </p>
                                </div>
                                <div className="text-start sm:pb-0 pb-5">
                                    <h2 className="text-primary">16</h2>
                                    <p className="text-lg font-medium text-secondary dark:text-darktext">
                                        Partners
                                    </p>
                                </div>
                                <div className="text-start sm:pb-0 pb-5">
                                    <h2 className="text-primary">150k+</h2>
                                    <p className="text-lg font-medium text-secondary dark:text-darktext">
                                        Participants
                                    </p>
                                </div>
                            </div> */}
                        </div>
                        <div
                            className="col-span-7 year_slider px-7"
                            data-aos="fade-left"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                        >
                            <Image
                                src="/images/highlight/aboutus_homepage.png"
                                alt="Conference"
                                width={0}
                                height={0}
                                quality={100}
                                layout="responsive"
                                sizes="100vh"
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center py-6">
                    <Link 
                        href="/about" 
                        className="inline-flex items-center gap-2 bg-white dark:bg-gray-100 hover:bg-primary/90 text-black hover:text-white font-bold py-3 px-8 rounded-full transition duration-300"
                        data-aos="fade-up"
                        data-aos-delay="400"
                        data-aos-duration="1000"
                    >
                        EXPLORE NOW
                        <i className="bg-[url('/images/hero/arrow-right.svg')] flex justify-center items-center bg-no-repeat bg-contain w-5 h-5 inline-block"></i>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Highlight;
