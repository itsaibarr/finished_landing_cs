"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Navbar() {
    return(
        <div className="container navbar">
            <h3 className="text-2xl font-bold">Performance</h3>
            <nav>
                <ul className="nav-links">
                    <li><a href="#" className="nav-link">Product</a></li>
                    <li><a href="#" className="nav-link">Academy</a></li>
                    <li><a href="#" className="nav-link">Careers</a></li>
                    <li><a href="#" className="nav-link">Blog</a></li>
                </ul>
            </nav>
            <div className="flex space-x-4 items-center gap-12">
                <a href="#" className="">Signin</a>
                <a href="#" className="px-6 bg-[#323F73] py-4 text-white rounded-[8px]">Signup</a>
            </div>
        </div>
    );
}
