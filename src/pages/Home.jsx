import React, { useEffect, useState } from "react";
import banner from "../assets/img_hero_artwork_en.webp"
import playstore from "../assets/img_playstore_logo.svg"
import appstore from "../assets/img_appstore_logo.svg"
import bedge from "../assets/img_achievement.webp"
import seva from "../assets/ic_puja_seva.svg"
import panchang from "../assets/ic_panchang.svg"
import astro from "../assets/ic_astro.svg"
import festivals from "../assets/ic_festivals.svg"
import music from "../assets/ic_music.svg"
import mandir_darshan from "../assets/ic_mandir_darshan.svg"
import sahitya from "../assets/ic_sahitya.svg"
import chadhava from "../assets/ic_chadhava_seva.svg"
import link1 from "../assets/img_link_01.webp"
import link2 from "../assets/img_link_02.webp"
import link3 from "../assets/img_link_03.webp"
import link4 from "../assets/img_link_04.webp"
import family from "../assets/img_showcase_section_family.webp"
import Navbar from "../components/Navbar";
const Home = () => {
    return (
        <>
            <Navbar />
            <div>
                <div class="flex bg-orange-50 justify-between mt-16 py-6">
                    <div style={{ width: "50%" }} className="mt-24 px-36">
                        <p className="flex text-left"><img src={bedge} alt="" /> WORLD’S LARGEST APP FOR HINDU DEVOTEES</p>
                        <h2 className="font-bold text-left text-4xl my-4 mb-10">Pray daily with <span style={{ color: "#f18c33" }}>Sri Mandir</span>.
                            One App for all your devotional needs.</h2>
                        <div class="flex">
                            <img src={playstore} alt="" className="mx-2" />
                            <img src={appstore} alt="" className="mx-2" />
                        </div>
                    </div>
                    <div style={{ width: "50%" }}>
                        <img src={banner} alt="" className="mx-2 my-2 ml-24" style={{ height: "450px" }} />
                    </div>
                </div>
                <div className="mt-16">
                    <h2 className="font-bold text-4xl my-4 mb-10">Explore Sri Mandir</h2>
                    <div className="flex" style={{ width: "80%", margin: "auto" }}>
                        <div style={{ width: "10%", margin: "auto" }}>
                            <img src={seva} alt="" className="h-20 w-20 mx-auto" />
                            <p className="mx-4 font-semibold text-gray-600">Book Pujas at temples</p>
                        </div>
                        <div style={{ width: "10%", margin: "auto" }}>
                            <img src={astro} alt="" className="h-20 w-20 mx-auto" />
                            <p className="mx-4 font-semibold text-gray-600">Book Pujas at temples</p>
                        </div>
                        <div style={{ width: "10%", margin: "auto" }}>
                            <img src={chadhava} alt="" className="h-20 w-20 mx-auto" />
                            <p className="mx-4 font-semibold text-gray-600">Book Pujas at temples</p>
                        </div>
                        <div style={{ width: "10%", margin: "auto" }}>
                            <img src={festivals} alt="" className="h-20 w-20 mx-auto" />
                            <p className="mx-4 font-semibold text-gray-600">Book Pujas at temples</p>
                        </div>
                        <div style={{ width: "10%", margin: "auto" }}>
                            <img src={music} alt="" className="h-20 w-20 mx-auto" />
                            <p className="mx-4 font-semibold text-gray-600">Book Pujas at temples</p>
                        </div>
                        <div style={{ width: "10%", margin: "auto" }}>
                            <img src={mandir_darshan} alt="" className="h-20 w-20 mx-auto" />
                            <p className="mx-4 font-semibold text-gray-600">Book Pujas at temples</p>
                        </div>
                        <div style={{ width: "10%", margin: "auto" }}>
                            <img src={sahitya} alt="" className="h-20 w-20 mx-auto" />
                            <p className="mx-4 font-semibold text-gray-600">Book Pujas at temples</p>
                        </div>
                        <div style={{ width: "10%", margin: "auto" }}>
                            <img src={panchang} alt="" className="h-20 w-20 mx-auto" />
                            <p className="mx-4 font-semibold text-gray-600">Book Pujas at temples</p>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-50 mt-16 pt-8">
                    <h2 className="font-bold text-4xl my-4 mb-10">Our Divine Mission recognised by Prominent Media Outlets</h2>
                    <div className="flex justify-between mx-auto" style={{width:"80%"}}>
                        <img src={link1} alt="" className="w-72"/>
                        <img src={link2} alt="" className="w-72"/>
                        <img src={link3} alt="" className="w-72"/>
                        <img src={link4} alt="" className="w-72"/>
                    </div>
                </div>
                <div class="flex justify-between ">
                    <div style={{ width: "50%" }} className="mt-44 px-24">
                        <h2 className="font-bold text-left text-4xl my-4"> Download Sri Mandir app now !!</h2>
                        <p className="flex text-left mb-4 text-xl">Connect to your beloved God, anytime, anywhere!</p>
                        <div class="flex">
                            <img src={playstore} alt="" className="mx-2" />
                            <img src={appstore} alt="" className="mx-2" />
                        </div>
                    </div>
                    <div style={{ width: "50%" }}>
                        <img src={family} alt="" className="mx-2" style={{ height: "650px" }} />
                    </div>
                </div>
                <div className="flex bg-orange-600 px-4 py-4 pl-24">
                    <img src={mandir_darshan} alt="" />
                    <p className="text-white text-left px-2 py-4 font-semibold">Sri Mandir</p>
                </div>
                <div className="flex px-4 py-2 pl-24">
                    <p className="text-white text-left px-2 py-4 font-semibold">Sri Mandir</p>
                </div>
            </div>
        </>
    )
}

export default Home;