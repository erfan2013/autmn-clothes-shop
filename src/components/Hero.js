import React from "react";
import WomanPic from '../img/Remove-bg.ai_1711098947645.png';
import { Link } from "react-router-dom";
import BgPic from '../img/HeroPic.png';
const Hero = () => {
    return(
        <section className="h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24">
            <div className="container mx-auto flex justify-around h-full">
                <div className="flex flex-col justify-center">
                    <div className="font-semibold flex items-center uppercase">
                        <div className="w-10 h-[2px] bg-red-500 mr-3"></div>NEW TREND</div>
                        <h1 className="text-[70px] leading-[1.1] font-light mb-4">AUTUMN SALE STYLISH 
                            <br />
                            <span className="font-semibold">WOMANS</span>
                                </h1>
                                <Link className="self-start uppercase font-semibold border-b-2 border-primary" to={'/'}>discover more</Link>
                    
                </div>
                <div className="hidden lg:block">
                    <img className="w-full h-full" src={WomanPic} alt="woman pic" />
                </div>


            </div>
            
        </section>
    )
}

export default Hero;