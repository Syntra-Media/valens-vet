"use client";

import React, {useEffect} from 'react';
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/Button";
import { motion } from 'framer-motion';
import Image from "next/image";

const SERVICES = [
    {
        name: "Evde Veterinerlik",
        href: "evde-veterinerlik",
        descriptions: [
            {
                title: "Evde Tedavi Hizmeti",
                content: "Veteriner hekimlerimizin sağladığı evde tedavi hizmeti ile evcil hayvanlarınızın rahatı ve sağlığı ön planda tutulur. Bu hizmet, evcil hayvanların stresini en aza indirir ve alıştıkları ortamda tedavi olmalarını sağlar."
            },
            {
                title: "Konforlu ve Güvenli Bakım",
                content: "Evde veterinerlik hizmetimiz, evcil hayvanlarınızın evde güvende ve rahat bir şekilde bakım almasını sağlar. Hekimlerimiz gerekli tüm tıbbi ekipmanlarla gelir ve evcil dostlarınızın sağlık ihtiyaçlarını eksiksiz karşılar."
            },
        ],
        images: [
            {
                src: "/testimonial1.png"
            },
            {
                src: "/testimonial2.png"
            },
            {
                src: "/testimonial3.png"
            }
        ]
    },
    {
        name: "Dahiliye",
        href: "dahiliye",
        descriptions: [
            {
                title: "İç Hastalıkları Uzmanı",
                content: "Dahiliye bölümümüzde, evcil hayvanlarınızın iç organları ile ilgili hastalıkların tanı ve tedavisi yapılır. Deneyimli veteriner hekimlerimiz, evcil dostlarınızın sağlığını korumak için en uygun tedavi yöntemlerini uygular."
            },
            {
                title: "Geniş Kapsamlı Tetkikler",
                content: "Laboratuvar destekli dahiliye hizmetlerimiz, evcil hayvanlarınızın tüm iç hastalıklarının detaylı bir şekilde incelenmesini sağlar. Erken teşhis ve tedavi ile sağlıklı bir yaşam süreci hedeflenir."
            },
        ],
        images: [
            {
                src: "/testimonial1.png"
            },
            {
                src: "/testimonial2.png"
            },
            {
                src: "/testimonial3.png"
            }
        ]
    },
    {
        name: "Cerrahi",
        href: "cerrahi",
        descriptions: [
            {
                title: "Uzman Cerrahi Müdahale",
                content: "Kliniğimizde, veteriner cerrahi müdahaleler uzman ekipler tarafından titizlikle gerçekleştirilir. Her türlü cerrahi işlemde evcil hayvanlarınızın güvenliği ve sağlığı birinci önceliğimizdir."
            },
            {
                title: "Modern Cerrahi Ekipmanlar",
                content: "Cerrahi bölümümüzde en güncel ve modern ekipmanlar kullanılarak, operasyonlar başarıyla gerçekleştirilir. Evcil hayvanlarınızın ameliyat sonrası iyileşme süreci de yakından takip edilir."
            },
        ],
        images: [
            {
                src: "/testimonial1.png"
            },
            {
                src: "/testimonial2.png"
            },
            {
                src: "/testimonial3.png"
            }
        ]
    },
    {
        name: "Acil Tedavi",
        href: "acil-tedavi",
        descriptions: [
            {
                title: "24/7 Acil Müdahale",
                content: "Acil tedavi hizmetimizle, günün her saati acil durumlarda veteriner desteği sağlıyoruz. Hızlı ve etkili müdahaleler ile evcil hayvanlarınızın hayati tehlikeleri en aza indirilir."
            },
            {
                title: "Hızlı ve Etkili Çözümler",
                content: "Acil tedavi ekibimiz, ani gelişen sağlık sorunlarında hızlı tanı ve tedavi yöntemleriyle evcil hayvanlarınızın yanında. En kısa sürede sağlığına kavuşmaları için özveriyle çalışıyoruz."
            },
        ],
        images: [
            {
                src: "/testimonial1.png"
            },
            {
                src: "/testimonial2.png"
            },
            {
                src: "/testimonial3.png"
            }
        ]
    },
    {
        name: "Ağız ve Diş Sağlığı",
        href: "agiz-ve-dis-sagligi",
        descriptions: [
            {
                title: "Diş Taşı Temizliği",
                content: "Ağız ve diş sağlığı hizmetimiz kapsamında, evcil hayvanlarınızın diş taşı temizliği ve ağız hijyeni sağlanır. Bu hizmet, diş hastalıklarını önlemek için düzenli aralıklarla yapılmalıdır."
            },
            {
                title: "Diş Sağlığının Korunması",
                content: "Diş sağlığını korumak için öneriler sunuyor ve gerekli durumlarda cerrahi müdahaleler gerçekleştiriyoruz. Evcil hayvanlarınızın ağız sağlığına dikkat ederek, genel sağlığını koruyun."
            },
        ],
        images: [
            {
                src: "/testimonial1.png"
            },
            {
                src: "/testimonial2.png"
            },
            {
                src: "/testimonial3.png"
            }
        ]
    },
    {
        name: "Koruyucu Hekimlik",
        href: "koruyucu-hekimlik",
        descriptions: [
            {
                title: "Aşı ve Kontroller",
                content: "Koruyucu hekimlik hizmetlerimiz ile evcil hayvanlarınızın düzenli aşıları ve sağlık kontrolleri gerçekleştirilir. Bu hizmet, hastalıkların önceden önlenmesi ve sağlıklı bir yaşam sürdürülmesi için önemlidir."
            },
            {
                title: "Hastalık Önleyici Tedbirler",
                content: "Evcil hayvanlarınızın hastalanmadan önce alınacak önlemlerle, genel sağlık durumlarını koruyun. Veteriner hekimlerimiz, sağlıklı bir yaşam için gerekli tüm koruyucu tedbirleri almanızı sağlar."
            },
        ],
        images: [
            {
                src: "/testimonial1.png"
            },
            {
                src: "/testimonial2.png"
            },
            {
                src: "/testimonial3.png"
            }
        ]
    },
    {
        name: "Laboratuvar",
        href: "laboratuvar",
        descriptions: [
            {
                title: "Gelişmiş Tanı Hizmetleri",
                content: "Laboratuvar hizmetlerimiz, evcil hayvanlarınızın hastalıklarının doğru tanısı için gerekli testleri içerir. Kan, idrar, dışkı ve diğer numuneler üzerinde yapılan analizler ile hastalıklar erken teşhis edilir."
            },
            {
                title: "Hızlı ve Güvenilir Sonuçlar",
                content: "Kliniğimizdeki laboratuvar ekipmanları, hızlı ve güvenilir sonuçlar verir. Veteriner hekimlerimiz, bu sonuçları değerlendirerek en uygun tedavi planını oluşturur."
            },
        ],
        images: [
            {
                src: "/testimonial1.png"
            },
            {
                src: "/testimonial2.png"
            },
            {
                src: "/testimonial3.png"
            }
        ]
    },
    {
        name: "Pet Kuaför",
        href: "pet-kuafor",
        descriptions: [
            {
                title: "Profesyonel Tımar Hizmeti",
                content: "Pet kuaför hizmetimiz, evcil hayvanlarınızın tüy bakımı ve hijyen ihtiyaçlarını karşılar. Profesyonel tımar ile evcil dostlarınız her zaman sağlıklı ve bakımlı görünür."
            },
            {
                title: "Özel Bakım Paketleri",
                content: "Pet kuaförümüzde, evcil hayvanlarınızın cinsine ve ihtiyaçlarına uygun özel bakım paketleri sunulur. Her türlü tımar işlemi, onların rahat ve mutlu olması için özenle yapılır."
            },
        ],
        images: [
            {
                src: "/testimonial1.png"
            },
            {
                src: "/testimonial2.png"
            },
            {
                src: "/testimonial3.png"
            }
        ]
    }

]

const Page = ({ params }: {params: {slug: string}}) => {
    const [service, setService] = React.useState(SERVICES.find(service => service.href === params.slug));
    const router = useRouter()

    useEffect(() => {
        if (!service) {
            router.push("/not-found")
        }
    }, [service]);

    return (
        <div className={"flex w-full h-screen overflow-y-auto lg:overflow-hidden"}>
            <motion.div className={"flex flex-col w-full h-full mx-4 lg:mx-24 gap-2 lg:gap-8 justify-center items-center"}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
            >
                <div className={"relative flex justify-center"}>
                    <h1 className={"text-4xl lg:text-7xl z-10 font-medium"}>
                        {service?.name}
                    </h1>
                    <motion.div className={"flex absolute w-[calc(100%+1rem)] h-full z-0 justify-center"}
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{duration: 1, delay: 0.5}}
                    >
                        <span
                            className={"w-full h-4 lg:h-6 absolute -bottom-0 lg:-bottom-1 bg-button z-0 2xl:h-6 4k:h-16 xs:hidden"}></span>
                    </motion.div>
                </div>
                <div className={"flex flex-col lg:flex-row gap-4 w-2/3 mt-8 text-sm lg:text-base"}>
                    {service?.descriptions.map((description, index) => (
                        <div key={index} className={"flex flex-col gap-2"}>
                            <p className={"text-foreground/70 font-medium uppercase"}>
                                {description.title}
                            </p>
                            <p className={"text-foreground/50"}>
                                {description.content}
                            </p>
                        </div>
                    ))}
                </div>
                <div className={"justify-center gap-4 hidden lg:flex"}>
                    {
                        service?.images.map((image, index) => (
                            <Image key={index} src={image.src} alt={"Service Image"} width={256} height={128} className={"w-full object-cover aspect-video rounded-lg object-center"}/>
                        ))
                    }
                </div>
                <div className={"flex mt-4"}>
                    <Button variant={"default"} size={"lg"} className={"w-max"}>
                        Bize Ulaş
                    </Button>
                    <Button variant={"ghost"} size={"lg"} className={"w-max"} onClick={() => router.push("/")}>
                        Anasayfaya Dön
                    </Button>
                </div>
            </motion.div>
        </div>
);
};

export default Page;