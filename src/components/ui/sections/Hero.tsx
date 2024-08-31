"use client";

import React from 'react';
import Image from "next/image";
import {Button} from "@/components/ui/Button";
import TestimonialMiniCard from "@/components/ui/TestimonialMiniCard";
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className={"w-full h-screen bg-hero flex flex-col justify-center"}>
            <div id={"home"} className={"relative flex w-full h-full flex-col items-center py-60 4k:py-0 4k:justify-center overflow-y-hidden"}>
                <div className={"flex relative justify-center"}>
                    <motion.h1 className={"text-[1.75rem] text-center font-medium lg:text-6xl 2xl:text-8xl 4k:text-[12rem]"}
                                 initial={{opacity: 0}}
                                 animate={{opacity: 1}}
                                 transition={{duration: 0.5}}
                    >
                        En iyi dostlarınız için,
                        <br/>
                        <span className={"flex justify-center"}>
                        <span className={"z-10"}>güvenilir veteriner hizmetleri.</span>
                        </span>
                    </motion.h1>
                    <motion.div className={"flex absolute w-[calc(100%+1rem)] h-full z-0 justify-center"}
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{duration: 1, delay: 0.5}}
                    >
                        <span className={"w-full h-4 lg:h-6 absolute -bottom-0 lg:-bottom-1 bg-button z-0 2xl:h-8 4k:h-16 xs:hidden"}></span>
                        <Image src={"/dog.png"} alt={"Köpek"} width={700} height={700}
                               className={"z-[100] absolute w-full top-48 opacity-30 lg:opacity-100 lg:w-[30rem] lg:top-24 2xl:w-[40rem] 2xl:top-40 4k:hidden"}/>
                        {/* Left */}
                        <TestimonialMiniCard className={"absolute hidden lg:-bottom-48 lg:left-0 2xl:left-32 2xl:-bottom-52 3xl:-bottom-64 lg:flex"} image={"/client6.png"} name={"Eda Ballı"} comment={"Aradığım ilacı buldum ve doktor güler yüzlü"} stars={5} role={"Pet sahibi"}/>
                        <TestimonialMiniCard className={"absolute hidden lg:-bottom-96 lg:-left-8 2xl:left-20 2xl:-bottom-[24rem] 3xl:-bottom-[28rem] lg:flex"} image={"/client7.png"} name={"Mazlum Gülten"} comment={"Çok temiz ve hijyenik bir klinik"} stars={5} role={"Kedi sahibi"}/>

                        {/* Right */}
                        <TestimonialMiniCard className={"absolute hidden lg:-bottom-48 lg:right-0 2xl:right-32 2xl:-bottom-52 3xl:-bottom-64 lg:flex"} image={"/client4.png"} name={"Berat Berke Yavuzkılıç"} comment={"Ekibi ile güven veren bir klinik"} stars={5} role={"Pet sahibi"}/>
                        <TestimonialMiniCard className={"absolute hidden lg:-bottom-96 lg:-right-8 2xl:right-20 2xl:-bottom-[24rem] 3xl:-bottom-[28rem] lg:flex"} image={"/client5.png"} name={"Zeynep Akdere"} comment={"İşini en iyisiyle yapan ilgili hekimler"} stars={5} role={"Pet sahibi"}/>

                    </motion.div>
                </div>
                <motion.p className={"block mt-3 lg:hidden text-center text-sm mx-4"}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1, delay: 2}}
                >
                    Valens Veteriner Kliniği olarak, dostlarınızın sağlığı ve mutluluğu için buradayız.
                </motion.p>
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1, delay: 2}}
                >
                    <Button variant={"default"} className={"mt-5 lg:hidden"} size={"lg"}>
                        <a href={"tel:+902128774903"}>
                            İletişime Geç
                        </a>
                    </Button>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;