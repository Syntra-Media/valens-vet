"use client";

import React from 'react';
import Image from "next/image";
import {ArrowRight, Mail, MapPin, Phone} from "lucide-react";
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div className={"w-full flex"}>
            <motion.div className={"w-full h-full flex flex-col lg:flex-row mx-8 my-12 gap-12 lg:mx-36 2xl:mx-48 3xl:mx-64 4k:mx-[50rem] 4k:my-24"}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1}}
                        viewport={{once: true}}

            >
                <div className={"flex w-full h-full"}>
                    <Image src={"/map.png"} alt={"Map"} width={1024} height={1024} className={"object-cover"}/>
                </div>
                <div className={"flex flex-col gap-6 4k:gap-12 w-full h-full"}>
                    <div className={"flex flex-col gap-2"}>
                        <p className={"text-button uppercase font-medium 4k:text-2xl"}>
                            Bize Ulaşın
                        </p>
                        <p className={"font-medium text-3xl 4k:text-6xl"}>
                            Kliniğimizin uzmanlarıyla şimdi iletişime geçin!
                        </p>
                    </div>
                    <p className={"text-foreground/50 2xl:text-xl 4k:text-3xl"}>
                        Valens Veteriner Kliniği olarak, deneyimli ve uzman veteriner hekimlerimizle, evcil hayvanlarınızın sağlığını en iyi şekilde koruma
                        ve tedavi etme amacıyla hizmet veriyoruz.
                    </p>
                    <div className={"flex flex-col gap-2"}>
                        <div className={"flex gap-3 items-center"}>
                            <MapPin size={24} className={"text-button lg:text-lg 4k:text-2xl"}/>
                            <p className={"text-sm text-foreground/50 lg:text-lg 4k:text-2xl"}>
                                Merkez Mahallesi, Elmas Sokağı, Beyaz Rezidans B Blok No:65F, 34245
                                Gaziosmanpaşa/İstanbul
                            </p>
                        </div>
                        <div className={"flex gap-3 items-center"}>
                            <Phone size={24} className={"text-button lg:text-lg 4k:text-2xl"}/>
                            <p className={"text-sm text-foreground/50 font-medium lg:text-lg 4k:text-2xl"}>
                                Telefon Numarası: <a href={"tel:+905465952986"} className={"font-normal"}>+90 (546) 595
                                29 86</a>
                                <br/>
                                WhatsApp Hattı: <a href={"https://wa.me/905465952986"} className={"font-normal"}>+90
                                (546) 595 29 86</a>
                            </p>
                        </div>
                        <div className={"flex gap-3 items-center"}>
                            <Mail size={24} className={"text-button lg:text-lg 4k:text-2xl"}/>
                            <p className={"text-sm text-foreground/50 font-medium lg:text-lg 4k:text-2xl"}>
                                E-posta adresi: <a className={"font-normal"} href={"mailto:valensvet@valensvet.com"}>valensvet@valensvet.com</a>
                            </p>
                        </div>
                    </div>
                    <div className={"flex gap-2 text-button items-center 4k:text-2xl cursor-pointer"}>
                        <p>Yol Tarifi Al</p>
                        <ArrowRight size={16}/>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;