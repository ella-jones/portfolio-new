import React from "react";

import MainLayout from "../components/MainLayout";
import { images } from "../constants";
import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const HomePage = () => {
    return (
        <MainLayout>
            <section className="flex justify-between items-center px-28 pt-20 ">
                <div className="w-1/4">
                    <div className="text-5xl font-semibold">
                        <div className="flex gap-2">
                            <h1>Hi, I'm </h1>
                            <h1 className="text-tangerine">ella,</h1>
                        </div>
                        <h1>A junior full-stack</h1>
                        <h1>web-developer.</h1>
                    </div>
                    <p className="mt-5">I create bold websites for daring brands. I create bold websites for daring brands. I create bold websites for daring brands.</p>
                    <NavLink to="/Projects">
                        <button className="flex items-center gap-2 border-2 text-tangerine border-tangerine rounded-3xl px-4 py-2 mt-5">
                            <h1 className="font-semibold">My Work</h1>
                            <FaArrowRightLong />
                        </button>
                    </NavLink>

                </div>
                <img src={images.Headshot} alt="Ella Jones Headshot" className="h-[663px] w-[596px] object-cover rounded-t-full rounded-b-3xl "/>
            </section>
        </MainLayout>
    );
};

export default HomePage;
