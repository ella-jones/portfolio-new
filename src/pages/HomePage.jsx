import React from "react";

import MainLayout from "../components/MainLayout";
import { images } from "../constants";
import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import InfiniteScroll from "../components/InfiniteScroll";

const HomePage = () => {
    return (
        <MainLayout>
            <section className="flex justify-between items-center px-28 py-20 ">
                <div className="w-1/2">
                    <div className="text-5xl font-semibold">
                        <div className="flex gap-2">
                            <h1>Hi, I'm </h1>
                            <h1 className="text-tangerine">ella,</h1>
                        </div>
                        <h1 className="mt-3">A junior full-stack</h1>
                        <h1 className="mt-3">web-developer.</h1>
                    </div>
                    <p className="mt-8">I create bold websites for daring brands. I create bold</p>
                    <p className="mt-1">websites for daring brands. I create bold websites for</p>
                    <p className="mt-1">daring brands.</p>
                    <NavLink to="/Projects">
                        <button className="flex items-center gap-2 border-2 text-tangerine border-tangerine rounded-3xl px-4 py-2 mt-10">
                            <h1 className="font-semibold">My Work</h1>
                            <FaArrowRightLong />
                        </button>
                    </NavLink>

                </div>
                <div className="rounded-b-3xl overflow-hidden">
                    <img src={images.Headshot} alt="Ella Jones Headshot" className="h-[663px] w-[520px] object-cover rounded-t-full"/>
                </div>
            </section>
            <InfiniteScroll />
        </MainLayout>
    );
};

export default HomePage;
