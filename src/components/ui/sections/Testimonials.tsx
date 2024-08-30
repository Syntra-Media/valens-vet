"use client"

import React, {useEffect, useState} from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';

const CLIENT_ID: string = "859078722830104";
const CLIENT_SECRET: string = "c35e731f0b2f5f41946cd5ffdd7fb5fb";


const Testimonials = () => {
    return (
        <div className={"w-full flex"}>
            <motion.div
                className={"w-full h-full flex flex-col lg:flex-row mx-8 my-36 gap-12 lg:mx-12 2xl:mx-12 3xl:mx-24 4k:mx-[50rem] 4k:my-24"}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1}}
                viewport={{once: true}}
                id={"testimonials"}

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
                    <div className={"w-full h-full flex-col gap-2"}>
                        <div className={"flex flex-col gap-8 w-full h-full lg:grid lg:grid-cols-2 lg:grid-rows-2"}>
                            <div className={"flex flex-col gap-4"}>
                                <Image src={"/client.png"} alt={"Client"} width={256} height={256}
                                       className={"w-16 h-16 4k:w-32 4k:h-32 rounded-full"}/>
                                <p className={"text-foreground/50 4k:text-2xl"}>
                                    Yeni sahiplendiğim köpeğim için aşılama ve muayene için gittim çok ilgilendiler
                                    hekimlerinize çok minnatarız minik patililerimiz sizin sayenizde emin ellerde.
                                </p>
                                <p className={"text-foreground/80 4k:text-2xl"}>
                                    — Ahmet Keskin
                                </p>
                            </div>
                            <div className={"flex flex-col gap-4"}>
                                <Image src={"/client1.png"} alt={"Client"} width={256} height={256}
                                       className={"w-16 h-16 4k:w-32 4k:h-32 rounded-full"}/>
                                <p className={"text-foreground/50 4k:text-2xl"}>
                                    Gençlik hastalığına yakalanan köpeğimi kurtardılar.Ben ve Pera sizlere
                                    minnettarım.Yusuf ve Baran hocaya ilgi ve alakalarından dolayı teşekür ederim🙏
                                </p>
                                <p className={"text-foreground/80 4k:text-2xl"}>
                                    — Ayşe Taşpınar
                                </p>
                            </div>
                            <div className={"flex flex-col gap-4"}>
                                <Image src={"/client2.png"} alt={"Client"} width={256} height={256}
                                       className={"w-16 h-16 4k:w-32 4k:h-32 rounded-full"}/>
                                <p className={"text-foreground/50 4k:text-2xl"}>
                                    Çok ilgililer Öncelikle Sizi dinliyor cevap veriyorlar. Herşeyin maddiyat olmadığı
                                    bir yer.Hayvanlarınızı seviyorlar ilgileniyorlar kesinlikle önerdiğim ve
                                    sürprizlerin yaşanmadığı bir işletme.
                                </p>
                                <p className={"text-foreground/80 4k:text-2xl"}>
                                    — Ertuğrul Kırbıyık
                                </p>
                            </div>
                            <div className={"flex flex-col gap-4"}>
                                <Image src={"/client3.png"} alt={"Client"} width={256} height={256}
                                       className={"w-16 h-16 4k:w-32 4k:h-32 rounded-full"}/>
                                <p className={"text-foreground/50 4k:text-2xl"}>
                                    Kısırlastırma için ilk kez gittik kedim hayati on dk içinde uyandı ve çok hareketli
                                    ameliyat olmamış gibi çok kısa sürdü kedim hırcın olmasına rağmen sorunsuz atlattık
                                    çok çok teşekkür ederim klinik tertemizdi. </p>
                                <p className={"text-foreground/80 4k:text-2xl"}>
                                    — Gulcin Durdu
                                </p>
                            </div>
                        </div>
                        <div className={"flex gap-3 items-center w-full h-full mt-12"}>
                            <div className={"flex -space-x-4"}>
                                <Image src={"/client.png"} alt={"Client"} width={128} height={128}
                                       className={"w-8 h-8 border-light border rounded-full"}/>
                                <Image src={"/client1.png"} alt={"Client"} width={128} height={128}
                                       className={"w-8 h-8 border-light border rounded-full"}/>
                                <Image src={"/client2.png"} alt={"Client"} width={128} height={128}
                                       className={"w-8 h-8 border-light border rounded-full"}/>
                                <Image src={"/client3.png"} alt={"Client"} width={128} height={128}
                                       className={"w-8 h-8 border-light border rounded-full"}/>
                            </div>
                            <p className={"text-base"}>
                                200+ müşterimiz bizi Google’da <span className={"text-button"}>4.9/5</span> olarak puanladı!
                            </p>
                        </div>
                    </div>

                </div>
                <div className={"self-end grid grid-cols-3 grid-rows-3 gap-4 w-full h-full aspect-square"}>
                    <Image src={"/testimonial1.png"} alt={"Cat"} width={256} height={256}
                           className={"w-full h-full rounded-lg"}/>
                    <Image src={"/testimonial2.png"} alt={"Cat"} width={256} height={256}
                           className={"w-full h-full rounded-lg"}/>
                    <Image src={"/testimonial3.png"} alt={"Cat"} width={256} height={256}
                           className={"w-full h-full rounded-lg"}/>
                    <Image src={"/testimonial4.png"} alt={"Cat"} width={256} height={256}
                           className={"w-full h-full rounded-lg"}/>
                    <Image src={"/testimonial5.png"} alt={"Cat"} width={256} height={256}
                           className={"w-full h-full rounded-lg"}/>
                    <Image src={"/testimonial6.png"} alt={"Cat"} width={256} height={256}
                           className={"w-full h-full rounded-lg"}/>
                    <Image src={"/testimonial7.png"} alt={"Cat"} width={256} height={256} className={"w-full h-full rounded-lg"}/>
                    <Image src={"/testimonial8.png"} alt={"Cat"} width={256} height={256} className={"w-full h-full rounded-lg"}/>
                    <Image src={"/testimonial9.png"} alt={"Cat"} width={256} height={256} className={"w-full h-full rounded-lg"}/>
                </div>
            </motion.div>
        </div>
    );
};

export default Testimonials;