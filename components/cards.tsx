"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Card from "./card";

interface CardData {
    title: string;
    description: string;
}

interface CardsProps {
    title: string;
    description: string;
    cards: CardData[];
}

export default function Cards({ title, description, cards }: CardsProps) {
    return(
        <div className="flex flex-col items">
            <h2 className="title">{title}</h2>
            <p className="description">{description}</p>
            <div className="cards-grid">
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>
        </div>
    );
}
