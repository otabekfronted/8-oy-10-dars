"use strict";
import React, { useEffect } from "react";
import Head from "next/head";
import { MdOutlineAccountCircle } from "react-icons/md";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { HiArrowNarrowDown } from "react-icons/hi";
import Content from "@/components/Content";

export default function Home() {
    useEffect(() => {
        console.log("Timeline script started");

        const items = document.querySelectorAll(".item a");
        const mark = document.getElementById("marks");
        const sections = document.querySelectorAll("section[id]");

        console.log("Items found:", items.length);
        console.log("Marker element:", mark);
        console.log("Sections found:", sections.length);

        const updateMarker = (targetId) => {
            const currentItem = document.querySelector(
                `.item a[href="#${targetId}"]`
            )?.parentElement;

            if (!currentItem) {
                console.warn("Target ID not found in timeline:", targetId);
                return;
            }
            if (mark) {
                mark.style.top = `${currentItem.offsetTop}px`;
                mark.style.height = `${currentItem.offsetHeight}px`;
            } else {
                console.warn("Marker element not found!");
            }
        };

        const handleScroll = () => {
            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 0;
                const sectionBottom = sectionTop + section.offsetHeight;

                if (
                    window.scrollY >= sectionTop &&
                    window.scrollY < sectionBottom
                ) {
                    console.log("Section in view:", section.id);
                    updateMarker(section.id);
                }
            });
        };

        const handleClick = (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute("href")?.replace("#", "");
            if (!targetId) {
                console.warn("No target ID found in href!");
                return;
            }
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop + 500,
                    behavior: "smooth",
                });
                updateMarker(targetId);
            } else {
                console.warn("Target section not found:", targetId);
            }
        };

        items.forEach((link) => link.addEventListener("click", handleClick));
        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            items.forEach((link) =>
                link.removeEventListener("click", handleClick)
            );
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div className="bg-[#354147] ">
                <div className="">
                    <Head>
                        <meta
                            name="description"
                            content="Interactive scrolling timeline with sections"
                        />
                        <meta
                            name="viewport"
                            content="width=device-width, initial-scale=1"
                        />
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
                    <main className=" font-['Playfair_Display']">
                        <div className="relative">
                            <header className="w-full h-auto relative">
                                <img
                                    src="/images/hg.png"
                                    alt="Header Image"
                                    className="absolute w-full bottom-0 h-auto object-cover object-bottom"
                                />
                                <img
                                    src="/images/mg.png"
                                    alt="Middle Image"
                                    className="relative w-full h-auto object-cover object-top"
                                />
                                <img
                                    src="/images/vg.png"
                                    alt="Vertical Image"
                                    className="absolute w-full bottom-0 h-auto object-cover object-top"
                                />
                            </header>
                            <div className="relative bg-gradient-to-t from-[#354147] via-[#354147]/40 to-[#354147]/10 w-full h-[300px] mt-[-300px] z-[900] "></div>
                            <span className="bg-radial"></span>
                            <section className="w-full absolute top-0 z-[999]">
                                <header className="max-w-7xl mx-auto grid grid-cols-12 gap-20 text-white">
                                    <nav className="mt-[1rem] flex w-full justify-between items-end col-span-full">
                                        <h1 className="text-3xl">MNTN</h1>
                                        <ul className="font-['Prompt'] flex max-h-fit gap-[40px]">
                                            <li>Equipment</li>
                                            <li>About us</li>
                                            <li>Blog</li>
                                        </ul>
                                        <span className="font-['Prompt'] flex justify-center items-center gap-2">
                                            <MdOutlineAccountCircle />
                                            Account
                                        </span>
                                    </nav>
                                    <div className="col-span-full mt-16 flex justify-between items-center">
                                        <div className="flex-[1] text-start flex items-start justify-center gap-4 leading-4 text-lg flex-col">
                                            <h3 className="font-['Prompt'] write-vertical">
                                                Follow us
                                            </h3>
                                            <AiOutlineInstagram className="font-medium" />
                                            <BsTwitter className="font-medium" />
                                        </div>
                                        <div className="flex-[3] h-full">
                                            <p className="font-semibold flex items-center gap-4">
                                                <span className="inline-block w-[100px] h-1 bg-[#FBD784]"></span>
                                                <span className="uppercase tracking-widest font-['Prompt'] text-[#FBD784]">
                                                    A Hiking guide
                                                </span>
                                            </p>
                                            <h1 className="text-[4.375rem] font-medium">
                                                Be prepared for the Mountains
                                                and beyond!
                                            </h1>
                                            <p className="font-['Prompt'] flex items-center text-lg gap-2 mt-6">
                                                Scroll down
                                                <HiArrowNarrowDown className="font-bold text-2xl" />
                                            </p>
                                        </div>
                                    </div>
                                </header>
                            </section>
                            <div
                                id="main-content"
                                className="relative -top-36 z-[1000]"
                            >
                                <section id="01">
                                    <Content
                                        image={"/images/01.png"}
                                        heading={"What level of hiker are you?"}
                                        text={"GET STARTED"}
                                        desc={
                                            "Determining what level of hiker you are can be an important tool when planning future hikes."
                                        }
                                        number={"01"}
                                        id={"01"}
                                    />
                                </section>

                                <section id="02">
                                    <Content
                                        image={"/images/pm.png"}
                                        heading={
                                            "Picking the right Hiking Gear!"
                                        }
                                        text={"Hiking Essentials"}
                                        desc={
                                            "The nice thing about beginning hiking is that you don’t really need any special gear."
                                        }
                                        number={"02"}
                                        id={"02"}
                                        className="flex-row-reverse my-36"
                                    />
                                </section>
                                <section id="03">
                                    <Content
                                        image={"/images/clock.png"}
                                        heading={"Understand Your Map & Timing"}
                                        text={"Where you go is the key"}
                                        desc={
                                            "To start, print out the hiking guide and map."
                                        }
                                        number={"03"}
                                        id={"03"}
                                    />
                                </section>
                            </div>
                        </div>
                    </main>
                    <div className="timeline text-white fixed top-0 right-6 text-end font-['Prompt'] flex gap-6 justify-end z-[9999999999]">
                        <ul className="flex flex-col">
                            <li className="h-[50px] flex justify-end items-center cursor-pointer item">
                                <a href="#main-content" className="h-full">
                                    Start
                                </a>
                            </li>
                            <li className="h-[50px] flex justify-end items-center cursor-pointer item">
                                <a href="#01" id="01" className="h-full">
                                    01
                                </a>
                            </li>
                            <li className="h-[50px] flex justify-end items-center cursor-pointer item">
                                <a href="#02" id="02" className="h-full">
                                    02
                                </a>
                            </li>
                            <li className="h-[50px] flex justify-end items-center cursor-pointer item">
                                <a href="#03" id="03" className="h-full">
                                    03
                                </a>
                            </li>
                        </ul>
                        <div
                            id="marks"
                            className="w-[2px] bg-[#FBD784] absolute top-0 left-0"
                        ></div>
                    </div>
                </div>
            </div>
        </>
    );
}
