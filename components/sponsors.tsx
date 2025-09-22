"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Sponsors() {
    return(
            <div className="container mx-auto py-[20vh]">
                <Image
                    src="/Logo01.svg"
                    alt="sponsor-logo-1"
                    width={257}
                    height={100}
                    className="opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
                <Image
                    src="/Logo02.svg"
                    alt="sponsor-logo-2"
                    width={257}
                    height={100}
                    className="opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
                <Image
                    src="/Logo03.svg"
                    alt="sponsor-logo-3"
                    width={257}
                    height={100}
                    className="opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
                <Image
                    src="/Logo04.svg"
                    alt="sponsor-logo-4"
                    width={257}
                    height={100}
                    className="opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
            </div>
    );
}
