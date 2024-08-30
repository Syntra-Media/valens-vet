"use client"

import React from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';

const Testimonials = () => {
    return (
        <div className={"w-full flex"}>
            <motion.div
                className={"w-full h-full flex flex-col lg:flex-row mx-8 my-36 gap-12 lg:mx-36 2xl:mx-48 3xl:mx-64 4k:mx-[50rem] 4k:my-24"}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1}}
                viewport={{once: true}}

            >
                <div className={"flex flex-col w-full h-full gap-24"}>
                    <div className={"flex flex-col gap-2 4k:gap-4"}>
                        <p className={"text-button uppercase font-medium 4k:text-2xl"}>
                            Müşteri Yorumları
                        </p>
                        <p className={"font-medium text-3xl 4k:text-6xl"}>
                            200+ mutlu müşterimiz bizim
                            hakkımızda neler söylüyor?
                        </p>
                    </div>
                    <div className={"flex flex-col gap-8 w-full h-full lg:grid lg:grid-cols-2 lg:grid-rows-2"}>
                        <div className={"flex flex-col gap-4"}>
                            <Image src={"/client.png"} alt={"Client"} width={256} height={256}
                                   className={"w-16 h-16 4k:w-32 4k:h-32 rounded-full"}/>
                            <p className={"text-foreground/50 4k:text-2xl"}>
                                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in
                                hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula.
                            </p>
                            <p className={"text-foreground/80 4k:text-2xl"}>
                                — Emir Ayaz
                            </p>
                        </div>
                        <div className={"flex flex-col gap-4"}>
                            <Image src={"/client.png"} alt={"Client"} width={256} height={256}
                                   className={"w-16 h-16 4k:w-32 4k:h-32 rounded-full"}/>
                            <p className={"text-foreground/50 4k:text-2xl"}>
                                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in
                                hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula.
                            </p>
                            <p className={"text-foreground/80 4k:text-2xl"}>
                                — Emir Ayaz
                            </p>
                        </div>
                        <div className={"flex flex-col gap-4"}>
                            <Image src={"/client.png"} alt={"Client"} width={256} height={256}
                                   className={"w-16 h-16 4k:w-32 4k:h-32 rounded-full"}/>
                            <p className={"text-foreground/50 4k:text-2xl"}>
                                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in
                                hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula.
                            </p>
                            <p className={"text-foreground/80 4k:text-2xl"}>
                                — Emir Ayaz
                            </p>
                        </div>
                        <div className={"flex flex-col gap-4"}>
                            <Image src={"/client.png"} alt={"Client"} width={256} height={256}
                                   className={"w-16 h-16 4k:w-32 4k:h-32 rounded-full"}/>
                            <p className={"text-foreground/50 4k:text-2xl"}>
                                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in
                                hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula.
                            </p>
                            <p className={"text-foreground/80 4k:text-2xl"}>
                                — Emir Ayaz
                            </p>
                        </div>

                    </div>
                </div>
                <div className={"self-end grid grid-cols-3 grid-rows-3 gap-4 w-full h-full"}>
                    <Image src={"/cat.png"} alt={"Cat"} width={256} height={256}
                           className={"w-full h-full rounded-lg"}/>
                    <Image src={"/cat.png"} alt={"Cat"} width={256} height={256}
                           className={"w-full h-full rounded-lg"}/>
                    <Image src={"/cat.png"} alt={"Cat"} width={256} height={256}
                           className={"w-full h-full rounded-lg"}/>
                    <Image src={"/cat.png"} alt={"Cat"} width={256} height={256}
                           className={"w-full h-full rounded-lg"}/>
                    <Image src={"/cat.png"} alt={"Cat"} width={256} height={256}
                           className={"w-full h-full rounded-lg"}/>
                    <Image src={"/cat.png"} alt={"Cat"} width={256} height={256} className={"w-full h-full rounded-lg"}/>
                    <Image src={"/cat.png"} alt={"Cat"} width={256} height={256} className={"w-full h-full rounded-lg"}/>
                    <Image src={"/cat.png"} alt={"Cat"} width={256} height={256} className={"w-full h-full rounded-lg"}/>
                    <Image src={"/cat.png"} alt={"Cat"} width={256} height={256} className={"w-full h-full rounded-lg"}/>
                </div>
            </motion.div>
        </div>
    );
};

export default Testimonials;