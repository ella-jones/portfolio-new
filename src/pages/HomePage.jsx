import React from "react";

import MainLayout from "../components/MainLayout";
import { images } from "../constants";
import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import InfiniteScroll from "../components/InfiniteScroll";
import ContactForm from "../components/ContactForm";

const HomePage = () => {
    return (
        <MainLayout>
            <section className="flex flex-col-reverse lg:flex-row justify-between items-center px-16 lg:px-28 py-8 lg:py-20 text-center lg:text-left ">
                <div className="md:w-1/2 lg:pr-10">
                    <div className="text-3xl  md:text-4xl lg:text-5xl font-semibold">
                        <div className="flex justify-center lg:justify-start gap-2 mt-8 lg:mt-0">
                            <h1>Hi, I'm </h1>
                            <h1 className="text-tangerine">ella,</h1>
                        </div>
                        <h1 className="mt-3 leading-relaxed">A junior full-stack web-developer.</h1>
                    </div>
                    <div>
                        <p className="mt-8 text-sm md:text-base leading-relaxed">I create bold websites for daring brands. I create bold websites for daring brands. I create bold websites for daring brands.</p>
                    </div>
                    <NavLink to="/Projects" className="flex justify-center lg:justify-start">
                        <button className="flex items-center gap-2 border-2 text-lg text-tangerine border-tangerine rounded-3xl px-4 py-2 mt-10">
                            <h1 className="font-semibold">My Work</h1>
                            <FaArrowRightLong />
                        </button>
                    </NavLink>

                </div>
                <div className="rounded-b-3xl overflow-hidden">
                    <img src={images.Headshot} alt="Ella Jones Headshot" className=" h-[350px] md:h-[500px] lg:h-[663px] w-[300px] md:w-[420px] lg:w-[520px] object-cover rounded-t-full"/>
                </div>
            </section>

            <InfiniteScroll />

            <section className="px-16 lg:px-28 py-8 lg:py-20">
                <h2 className="text-3xl  md:text-4xl lg:text-5xl font-semibold lg:w-1/3 text-center lg:text-left">Projects I've Worked On</h2>
                <div className="mt-12 flex flex-col items-center gap-3 md:flex-row md:justify-between">
                    <div> 
                        <img src={images.Headshot} alt='Placeholder' className="w-80 h-96 object-cover rounded-3xl"/>
                    </div>
                    <div> 
                        <img src={images.Headshot} alt='Placeholder' className="w-80 h-96 object-cover rounded-3xl"/>
                    </div>
                    <div> 
                        <img src={images.Headshot} alt='Placeholder' className="w-80 h-96 object-cover rounded-3xl"/>
                    </div>
                </div>
                <NavLink to="/Projects" className="flex justify-center">
                    <button className="flex items-center gap-2 border-2 text-lg text-tangerine border-tangerine rounded-3xl px-4 py-2 mt-16">
                        <h1 className="font-semibold">View All</h1>
                        <FaArrowRightLong />
                    </button>
                </NavLink>

            </section>

            <InfiniteScroll />

            <ContactForm />

        </MainLayout>
    );
};

export default HomePage;
