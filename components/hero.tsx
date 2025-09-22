"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
    return(
        <div className="container">
            <div className="hero_text">
                <h1 className="hero_title">Your Next Performance Management Platform</h1>
                <p className="text">Fully Customizable performance management platform that suits your culture. not the other way around</p>
                <form action="#" className="flex items-center ">
                    <div className="hero_form_input">
                        <Image  
                            src="/mail.svg"   // путь из public/
                            alt="mail"
                            width={20}
                            height={16}
                        />
                        <input 
                            type="email"
                            placeholder="Add your email addresss"
                            className=""
                        />
                    </div>
                    <button type="submit" className="px-8 py-6 bg-gradient-to-r from-[#FF416C] to-[#FF4B2B] font-medium text-white rounded-r-2xl">Get Started for free</button>
                </form>
            </div>
            <Image  
                src="/Background.svg"   // путь из public/
                alt="mail"
                width={683}
                height={794}
                className="absolute right-0 top-0 z-[-2]"
            />
            <Image  
                src="/Hero.svg"   // путь из public/
                alt="mail"
                width={624}
                height={523} 
                className="absolute right-0 top-[25vh] z-[-1]"
            />
        </div>
    );
}