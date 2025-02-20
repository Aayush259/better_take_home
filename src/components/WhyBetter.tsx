"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useHeader } from "@/context/HeaderContext";
import { whyBetterData } from "@/helpers/constants";
import { IWhyBetter } from "@/helpers/interfaces";
import { ButtonPrimary } from "./Buttons";
import { IoIosStar } from "react-icons/io";
import "@/styles/why_better.css";

export default function WhyBetter() {

    const { setIsHome } = useHeader();

    const [wBetter, setWBetter] = useState<IWhyBetter>(whyBetterData[0]);
    const sectionRef = useRef<HTMLElement>(null);

    const updateWBetter = (index: number) => setWBetter(whyBetterData[index]);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                if (rect.top <= 80) {
                    setIsHome(false);
                } else {
                    setIsHome(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [setIsHome]);

    return (
        <section ref={sectionRef} id="why-better" className="flex">
            <div>
                <Image
                    src={wBetter.image}
                    alt={wBetter.name}
                    width={341}
                    height={606}
                    className="w-better-img"
                />

                <div className="flex w-better-container">
                    {
                        whyBetterData.map((item, idx) => (
                            <button
                                key={idx}
                                onClick={() => updateWBetter(idx)}
                                className={`${wBetter.name === item.name && "active"} w-better-btn`}
                            >
                                {item.name}
                            </button>
                        ))
                    }
                </div>
            </div>

            <div>
                <p className="w-better-text">
                    {"Find out why"}
                </p>
                <p className="w-better-text">
                    {"we're better"}
                </p>

                <ButtonPrimary className="see-stories-btn dark">
                    {"See all our stories"}
                </ButtonPrimary>

                <div className="trustpilot flex">
                    <span className="icon">
                        <IoIosStar size={20} />
                    </span>
                    <span className="main-txt">
                        {"Trustpilot"}
                    </span>
                    <span className="sub-txt">
                        {"Excellent 4.4"}
                    </span>
                    <span>
                        {" out of 5"}
                    </span>
                </div>
            </div>
        </section>
    );
};