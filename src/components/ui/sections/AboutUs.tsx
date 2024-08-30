"use client";

import React from 'react';
import {ArrowRight} from "lucide-react";
import Image from "next/image";
import { motion } from 'framer-motion';

const AboutUs = () => {
    return (
        <div className={"w-full flex"}>
            <motion.div className={"w-full h-full flex flex-col mx-8 2xl:my-24 my-24 gap-12 lg:mx-36 2xl:mx-48 3xl:mx-64 4k:mx-[50rem] 4k:my-24"}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{once: true}}
                        id={"about"}
            >
                <div className={"flex flex-col gap-2"}>
                    <p className={"uppercase text-button font-medium text-center 4k:text-2xl"}>Biz Kimiz</p>
                    <h2 className={"font-medium text-3xl text-center 4k:text-6xl"}>Evcil hayvanlarınızın
                        için en uygun
                        veteriner kliniği</h2>
                </div>
                <div className={"w-full flex gap-24 items-center"}>
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
                            <p className={"flex items-center text-button gap-2 text-left 4k:text-2xl"}>
                                Daha fazla bilgi al <span><ArrowRight size={12}/></span>
                            </p>
                        </div>
                    </div>
                    <div className={"relative hidden lg:flex w-full h-full items-center justify-center -space-x-24"}>
                        <Image src={"/image.png"} alt={"Image"} width={256} height={256} className={"w-full"}/>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default AboutUs;