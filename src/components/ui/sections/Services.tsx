"use client";

import React from 'react';
import Image from "next/image";
import {ArrowRight} from "lucide-react";
import { motion } from 'framer-motion';

const Services = () => {
    return (
        <div className={"w-full flex"}>
            <motion.div className={"w-full h-full flex flex-col lg:flex-row mx-8 my-24 gap-12 lg:mx-36 2xl:mx-48 3xl:mx-64 4k:mx-[50rem] 4k:my-24"}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1}}
                        viewport={{once: true}}
                        id={"services"}

            >
                <div className={"w-full h-96 4k:h-[40rem] grid gap-3 grid-cols-3 grid-rows-3"}>
                    <div className={"flex relative overflow-hidden rounded-lg bg-[url('/image-0.png')]"}>
                        <div className={"flex w-full h-full bg-service z-10"}>
                            <div className={"flex flex-col w-full h-full p-4 justify-end text-light text-xs 4k:text-2xl"}>
                                <p>
                                    Genel Sağlık Kontrolleri
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={"flex relative overflow-hidden rounded-lg bg-[url('/image-1.png')]"}>
                        <div className={"flex w-full h-full bg-service z-10"}>
                            <div className={"flex flex-col w-full h-full p-4 justify-end text-light text-xs 4k:text-2xl"}>
                                <p>
                                    Aşılama ve Koruyucu Sağlık Hizmetleri
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={"flex relative overflow-hidden rounded-lg bg-[url('/image-2.png')]"}>
                        <div className={"flex w-full h-full bg-service z-10"}>
                            <div className={"flex flex-col w-full h-full p-4 justify-end text-light text-xs 4k:text-2xl"}>
                                <p>
                                    Diş Bakımı ve Temizliği
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={"flex relative overflow-hidden rounded-lg bg-[url('/image-3.png')]"}>
                        <div className={"flex w-full h-full bg-service z-10"}>
                            <div className={"flex flex-col w-full h-full p-4 justify-end text-light text-xs 4k:text-2xl"}>
                                <p>
                                    Cerrahi Müdahaleler
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={"flex relative overflow-hidden rounded-lg bg-[url('/image-4.png')]"}>
                        <div className={"flex w-full h-full bg-service z-10"}>
                            <div className={"flex flex-col w-full h-full p-4 justify-end text-light text-xs 4k:text-2xl"}>
                                <p>
                                    Laboratuvar Testi ve Tanı
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={"flex relative overflow-hidden rounded-lg bg-[url('/image-5.png')]"}>
                        <div className={"flex w-full h-full bg-service z-10"}>
                            <div className={"flex flex-col w-full h-full p-4 justify-end text-light text-xs 4k:text-2xl"}>
                                <p>
                                    Röntgen ve Ultrasonografi
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={"flex relative overflow-hidden rounded-lg bg-[url('/image-6.png')]"}>
                        <div className={"flex w-full h-full bg-service z-10"}>
                            <div className={"flex flex-col w-full h-full p-4 justify-end text-light text-xs 4k:text-2xl"}>
                                <p>
                                    Acil Durum Hizmetleri
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={"flex relative overflow-hidden rounded-lg bg-[url('/image-7.png')]"}>
                        <div className={"flex w-full h-full bg-service z-10"}>
                            <div className={"flex flex-col w-full h-full p-4 justify-end text-light text-xs 4k:text-2xl"}>
                                <p>
                                    Beslenme ve Diyet Danışmanlığı
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={"flex relative overflow-hidden rounded-lg bg-[url('/image-8.png')]"}>
                        <div className={"flex w-full h-full bg-service z-10"}>
                            <div className={"flex flex-col w-full h-full p-4 justify-end text-light text-xs 4k:text-2xl"}>
                                <p>
                                    Beslenme ve Diyet Danışmanlığı
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"flex flex-col w-full gap-4 h-full 4k:gap-12"}>
                    <div className={"flex flex-col gap-1"}>
                        <p className={"uppercase text-button font-medium 4k:text-2xl"}>Hizmetlerimiz</p>
                        <p className={"text-3xl font-medium 4k:text-6xl"}>
                            Evcil hayvanlarınız için profesyonel hizmetlerimiz
                        </p>
                    </div>
                    <div className={"flex flex-col gap-8 4k:gap-12"}>
                        <div className={"flex flex-col gap-1"}>
                            <p className={"uppercase font-medium text-sm text-foreground/60 4k:text-3xl"}>
                                Uzman Veteriner Ekibimiz sizin Yanınızda
                            </p>
                            <p className={"font-light text-foreground/50 4k:text-2xl"}>
                                Valens Veteriner Kliniği olarak, deneyimli ve uzman veteriner hekimlerimizle, evcil
                                hayvanlarınızın sağlığını en iyi şekilde koruma
                                ve tedavi etme amacıyla hizmet veriyoruz.
                            </p>
                        </div>
                        <div className={"flex flex-col gap-1"}>
                            <p className={"uppercase font-medium text-sm text-foreground/60 4k:text-3xl"}>
                                modern tesıslerımız ve ekıpmanlarımız
                            </p>
                            <p className={"font-light text-foreground/50 4k:text-2xl"}>
                                Klinik olarak, son teknoloji tıbbi ekipmanlar ve konforlu bir ortam sunarak, evcil
                                dostlarınızın sağlığını en üst düzeyde destekliyoruz. Temiz, güvenilir ve huzurlu
                                tesislerimizde
                            </p>
                        </div>
                    </div>
                    <p className={"flex items-center text-button gap-2 text-left 4k:text-2xl"}>
                        Daha fazla bilgi al <span><ArrowRight size={12}/></span>
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Services;