"use client";

import React from 'react';
import {ArrowRight} from "lucide-react";
import Image from "next/image";
import { motion } from 'framer-motion';

const AboutUs = () => {
    return (
        <div className={"w-full flex"}>
            <motion.div className={"w-full h-full flex flex-col mx-8 my-12 gap-12 lg:mx-24 2xl:mx-48 4k:mx-[40rem] 4k:my-24"}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{once: true}}
            >
                <div className={"flex flex-col gap-2"}>
                    <p className={"uppercase text-button font-medium text-center 4k:text-2xl"}>Biz Kimiz</p>
                    <h2 className={"font-medium text-3xl text-center 4k:text-6xl"}>Evcil hayvanlarınızın
                        için en uygun
                        veteriner kliniği</h2>
                </div>
                <div className={"w-full flex gap-24"}>
                    <div className={"flex w-full flex-col gap-8"}>
                        <div className={"flex flex-col gap-1"}>
                            <p className={"uppercase font-medium text-sm text-foreground/60 4k:text-3xl"}>
                                Uzman Veteriner Ekibimiz sizin Yanınızda
                            </p>
                            <p className={"font-light text-foreground/50 4k:text-xl"}>
                                Valens Veteriner Kliniği olarak, deneyimli ve uzman veteriner hekimlerimizle, evcil
                                hayvanlarınızın sağlığını en iyi şekilde koruma
                                ve tedavi etme amacıyla hizmet veriyoruz.
                            </p>
                        </div>
                        <div className={"flex flex-col gap-8"}>
                            <div className={"flex flex-col gap-1"}>
                                <p className={"uppercase font-medium text-sm text-foreground/60 4k:text-3xl"}>
                                    modern tesıslerımız ve ekıpmanlarımız
                                </p>
                                <p className={"font-light text-foreground/50 4k:text-2xl"}>
                                    Klinik olarak, son teknoloji tıbbi ekipmanlar ve konforlu bir ortam sunarak, evcil
                                    dostlarınızın sağlığını en üst düzeyde destekliyoruz. Temiz, güvenilir ve huzurlu
                                    tesislerimizde, hayvanlarınızın rahatlığı ve sağlıkları için en iyi hizmeti
                                    sağlıyoruz.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={"relative hidden lg:flex w-full h-full items-center justify-center -space-x-24"}>
                        <Image src={"/image.png"} alt={"Image"} width={512} height={512}
                               className={"absolute top-3 right-12 w-52 2xl:w-64 2xl:right-20 4k:w-96 4k:right-48"}/>
                        <Image src={"/image1.png"} alt={"Image"} width={512} height={512}
                               className={"absolute top-24 w-52 2xl:w-64 4k:w-96"}/>
                        <Image src={"/image2.png"} alt={"Image"} width={512} height={512}
                               className={"absolute left-12 top-12 w-52 2xl:w-64 2xl:left-20 4k:w-96 4k:left-48"}/>
                    </div>
                </div>
                <p className={"flex items-center text-button gap-2 text-left 4k:text-2xl"}>
                    Daha fazla bilgi al <span><ArrowRight size={12}/></span>
                </p>
            </motion.div>
        </div>
    );
};

export default AboutUs;