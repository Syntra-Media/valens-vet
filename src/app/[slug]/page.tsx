"use client";

import React, {useEffect} from 'react';
import {usePathname, useRouter} from "next/navigation";
import {Button} from "@/components/ui/Button";
import { motion } from 'framer-motion';
import Image from "next/image";
import {MDXRemote} from "next-mdx-remote";

const SERVICES = [
    {
        name: "Evde Veterinerlik",
        href: "evde-veterinerlik",
        descriptions: [
            {
                title: "Evde Veterinerlik ve Pet Taksi Hizmeti",
                description: (
                    <p>
                        Evde veterinerlik hizmeti ve pet taksi hizmeti, evcil hayvanlarınızın sağlık ve mutluluğunu korumak için önemli bir seçenektir. Bu hizmetler, evcil hayvanlarınızı veteriner kliniğine götürmek için zamanınızın olmadığı durumlarda veya evcil hayvanınızın hareket kabiliyeti sınırlıysa çok faydalı olabilir.
                        <br />
                        <br />
                        Evde veterinerlik hizmeti, deneyimli bir veteriner ekibinin evinize gelerek rutin kontroller, aşılar, tedaviler ve acil durum müdahaleleri gibi hizmetleri sunmasıdır. Bu sayede evcil hayvanlarınızın sağlığı konusunda endişelenmenize gerek kalmaz, çünkü veteriner hizmeti evinizin konforunda sağlanır.
                    </p>
                )
            },
            {
                title: "Randevu ve Ücret Bilgileri",
                description: (
                    <p>
                        Bu hizmetleri almak için randevu almalısınız. Evde veterinerlik hizmeti ve pet taksi hizmetinin ücreti, bulunduğunuz bölgeye ve hizmetin içeriğine bağlı olarak değişiklik gösterebilir. Ancak genellikle kliniğinizdeki fiyatlarla aynı olur ve ekstra bir ücret talep edilmez.
                        <br />
                        <br />
                        Evcil dostlarınızın sağlık ve mutluluğu için evde veterinerlik hizmeti ve pet taksi hizmeti gibi olanakları değerlendirmeniz önemlidir. Onların sağlığı ve refahı için en iyi hizmeti almak için bu seçenekleri göz önünde bulundurabilirsiniz.
                    </p>
                )
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
                title: "Veteriner Hekimlikte Dahiliye Hizmetleri",
                description: (
                    <p>
                        Veteriner hekimlikte dahiliye, evcil hayvanların iç hastalıklarıyla ilgilenen önemli bir alandır. Evcil dostlarımızın aylık kontrolleri ve sağlık durumlarının izlenmesi, sağlıklı bir yaşam için hayati öneme sahiptir. Herhangi bir hastalık veya sağlık sorunuyla karşılaşıldığında, Gaziosmanpaşa’daki veteriner kliniğimize başvurabilirsiniz.
                        <br />
                        <br />
                        Veteriner hekimler, evcil hayvanların iç hastalıklarıyla ilgili çeşitli sorunlarla ilgilenirler. Sindirim sistemi, kalp, akciğer, böbrek ve kan hastalıkları gibi birçok iç hastalık tedavi edilebilir. Ayrıca, enfeksiyonlar, romatizma hastalığı ve alerjik reaksiyonlar gibi durumlar da dahiliye alanında ele alınır.
                    </p>
                )},
            {
                title: "Veteriner Hekimler Kanser Tedavisi",
                description: (
                    <p>
                        Veteriner kliniklerimiz, evcil hayvanların kanser gibi ciddi hastalıklarının teşhis ve tedavisi için gereken uzmanlık ve ekipmana sahiptir. Kanser teşhisi konulduğunda, veteriner hekimler gerekli testleri yapar ve evcil hayvanınızın durumunu değerlendirir. Sonrasında, en uygun tedavi planını belirleyerek tedavi sürecine başlarlar.
                        <br />
                        <br />
                        Evcil hayvanların kanser tedavisi genellikle çoklu disiplinler arası bir yaklaşım gerektirir. Veteriner hekimler, cerrahi müdahale, kemoterapi, radyoterapi ve diğer tedavi yöntemlerini kullanarak evcil hayvanınızın kanserle mücadelesine yardımcı olurlar. Bu süreçte, evcil hayvan sahiplerine sürekli olarak bilgi verilir ve tedaviye dair kararlar birlikte alınır.
                    </p>
                )            },
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
                title: "Cerrahi Müdahale Gerektiren Durumlar",
                description: (
                    <p>
                        Veterinerlik, insan tıbbında olduğu gibi cerrahi müdahale gerektirebilecek ciddi durumlarla karşılaşabileceğimiz bir alandır. Evcil hayvanlarımızın hastalıkları bazen ilaçlarla veya diğer tedavi yöntemleriyle kontrol altına alınamayabilir. Bu durumda cerrahi müdahale gerekebilir.
                        <br />
                        <br />
                        Cerrahi müdahale gerektiren durumlar, genellikle birçok tetkikten sonra ve veteriner hekimin uzman değerlendirmesiyle belirlenir. Bu süreçte, hasta sahiplerine detaylı bilgilendirme yapılır ve birlikte tedavi seçenekleri değerlendirilir.
                    </p>
                )
            },
            {
                title: "Cerrahi Müdahale ve Ameliyat Süreci",
                description: (
                    <p>
                        Cerrahi müdahale öncesinde, veteriner hekim hasta sahipleriyle iletişim halinde olur ve gerekli izinleri alır. Hasta için gerekli testler ve tetkikler yapılır ve ameliyat öncesinde hastanın ameliyat için uygunluğu değerlendirilir.
                        <br />
                        <br />
                        Ameliyat, genellikle veteriner kliniğinin ameliyathanesinde gerçekleştirilir. Veteriner cerrah, müdahaleyi titizlikle yapar ve hastanın güvenliği ve konforu için gerekli tüm önlemleri alır.
                    </p>
                )
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
                title: "Evcil Hayvanlar için Acil Tedavi",
                description: (
                    <p>
                        Evcil hayvanlar için acil tedavi, ani yaralanmalar, kazalar veya beklenmedik sağlık sorunları gibi acil durumlarla başa çıkmak için gereken tıbbi müdahaleyi ifade eder. Evde yaşayan canlılar olan evcil hayvanlar, zaman zaman beklenmedik olaylarla karşılaşabilirler. Bu nedenle, evcil hayvan sahiplerinin bu tür durumlarla başa çıkmak için hazırlıklı olmaları önemlidir.
                        <br />
                        <br />
                        Evcil hayvanların sürekli hareket halinde olmaları, sahiplerinin sorumluluklarını artırır. Oyun oynamak, koşuşturmak veya kavgalara karışmak gibi etkinlikler sırasında yaralanma veya kazalar meydana gelebilir. Bu durumlarda hızlı bir şekilde acil tedavi gerekebilir.
                    </p>
                )
            },
            {
                title: "Acil Tedavi Süreci ve Hazırlık",
                description: (
                    <p>
                        Veteriner klinikleri, acil tedavi ihtiyacı olan evcil hayvanlara yardımcı olmak için donanımlı ve hazır durumda olmalıdır. Acil tedavi süreci genellikle hastalığın veya yaralanmanın teşhisini içerir, ardından uygun tedavi planının belirlenmesi ve uygulanmasıyla devam eder. Bu süreçte, evcil hayvan sahipleriyle iletişim halinde kalarak onları bilgilendirmek de önemlidir.
                        <br />
                        <br />
                        Evcil hayvanların acil tedaviye ihtiyaç duymasının nedenleri arasında trafik kazaları, sokak kavgaları, zehirlenme vakaları ve diğer sağlık sorunları bulunabilir. Bu durumlarda, sahiplerin vakit kaybetmeden veteriner kliniklerine başvurmaları önemlidir.
                    </p>
                )
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
                title: "Evcil Hayvanlarda Ağız ve Diş Sağlığı",
                description: (
                    <p>
                        Evcil hayvanlarınızın ağız ve diş sağlığı, genel sağlık durumları açısından son derece önemlidir. Veteriner klinikleri, evcil hayvanların ağız ve diş sağlığını gözden geçirmek ve gerekli tedavileri sağlamak için ideal merkezlerdir. Bir veteriner hekimin düzenli olarak evcil hayvanınızın ağız ve diş sağlığını kontrol etmesi, olası sorunların erken teşhis edilmesine ve tedavi edilmesine olanak tanır.
                        <br />
                        <br />
                        Veteriner kliniklerinde ağız ve diş kontrolü, evcil hayvanınızın muayenesinin bir parçası olarak yapılır. Bu kontroller genellikle ağız kokusu, diş eti rengi ve dişlerin durumu gibi görsel incelemeleri içerir. Eğer veteriner hekiminiz herhangi bir ağız veya diş sorunu tespit ederse, gerekli tedavileri önerir ve uygular. Bu tedaviler genellikle ilaç tedavisi, diş temizliği veya diş çekimi gibi yöntemleri içerebilir.
                    </p>
                )
            },
            {
                title: "Ağız ve Diş Sağlığı Kontrolü ve Tedavi Süreci",
                description: (
                    <p>
                        Ağız ve diş sağlığı kontrolü sırasında evcil hayvanınıza acı verici bir deneyim yaşatmamak için veterinerler özel teknikler kullanır. Ayrıca, ağrıyı azaltmak için lokal anestezikler veya sedatifler de kullanılabilir. Bu sayede, evcil hayvanınızın rahatlığı sağlanarak tedavi süreci olabildiğince stressiz bir şekilde tamamlanır.
                        <br />
                        <br />
                        Evcil hayvanınızın ağız ve diş sağlığını korumak için düzenli olarak veteriner kliniklerine başvurmanız önemlidir. Erken teşhis edilen ağız ve diş sorunları, daha ciddi sağlık sorunlarının önlenmesine yardımcı olabilir. Bu nedenle, evcil hayvanınızın sağlığını korumak için düzenli veteriner ziyaretleri yapmayı ihmal etmemelisiniz.
                    </p>
                )
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
                title: "Koruyucu Hekimlik ve Önleyici Tedbirler",
                description: (
                    <p>
                        Koruyucu hekimlik, veteriner kliniklerinde uygulanan bir hizmettir. Ancak, bu hizmeti sunabilecek veteriner sayısı sınırlı olabilir çünkü koruyucu hekimlik için gerekli olan profesyonel donanıma sahip olmak önemlidir. İstanbul’da bulunan veteriner klinikleri arasında, koruyucu hekimlik hizmeti sunan kliniğimiz iyi bir seçenektir. Bu klinikler, erken teşhis ve önleyici tedbirler alarak evcil hayvanların sağlığını korumaya odaklanmıştır.
                        <br />
                        <br />
                        Veterinerler, koruyucu hekimlik kapsamında çeşitli önleyici tedbirler alırlar. Bunlar arasında düzenli aşılar, uygun beslenme programları ve periyodik muayeneler bulunur. Ayrıca, evcil hayvan sahiplerine bu süreçte bilgi verilir ve sürece dahil edilirler. Bu sayede, evcil hayvanların sağlığı korunur ve olası hastalıkların önlenmesine yardımcı olunur.
                    </p>
                )
            },
            {
                title: "Koruyucu Hekimliğin Önemi ve Maliyeti",
                description: (
                    <p>
                        Koruyucu hekimliğin temel amacı, hastalıkların belirtileri ortaya çıkmadan önce önleyici önlemler alarak evcil hayvanların sağlığını korumaktır. Özellikle viral hastalıklar gibi bulaşıcı hastalıkların önlenmesi için erken tedbirler alınması önemlidir. Bu şekilde, hem evcil hayvanların hem de sahiplerinin hayatı korunur ve gelecekte yaşanabilecek sağlık sorunlarının maliyeti azaltılır.
                        <br />
                        <br />
                        Veterinerlikte koruyucu hekimlik hizmetleri, evcil hayvana ve uygulanan tedbirlere bağlı olarak değişen bir maliyete sahiptir. Beslenme programları, aşılar ve periyodik muayeneler gibi önleyici tedbirlerin maliyeti farklılık gösterebilir. Ancak, bu tedbirlerin maliyeti, potansiyel olarak daha ciddi bir hastalıkla karşılaşmanın maliyetinden çok daha düşüktür. Bu nedenle, koruyucu hekimlik hizmetlerine yatırım yapmak, uzun vadede hem maddi hem de manevi olarak faydalı olabilir.
                    </p>
                )
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
                title: "Evcil Hayvan Sağlığının İzlenmesi ve Laboratuvar Testleri",
                description: (
                    <p>
                        Evcil hayvanlarımız, zaman zaman çeşitli sağlık sorunlarıyla karşılaşabilirler. Bu nedenle, sahipler olarak sürekli olarak evcil dostlarımızı gözlemlemek ve sağlık durumlarını izlemek önemlidir. Birçok durumda, gözle görülemeyen hastalıklar laboratuvar testleriyle belirlenebilir. Bu süreçte, doğru veteriner kliniği ve uygun laboratuvar işbirliği, evcil hayvanlarımızın sağlık sorunlarının tespit edilmesi ve tedavi edilmesinde kritik bir rol oynar.
                        <br />
                        Bazı veteriner klinikleri kendi laboratuvarlarına sahip olabilirken, diğerleri dış laboratuvarlarla anlaşma yaparlar. Her iki durumda da, laboratuvarlar veteriner hekimlere sağlık sorunlarını teşhis etme ve tedavi planlarını oluşturma konusunda önemli bilgiler sağlarlar. Laboratuvar testleri, genellikle muayene ile belirlenemeyen veya teşhis edilemeyen durumların belirlenmesinde kullanılır.
                    </p>
                )
            },
            {
                title: "Veteriner Laboratuvar Testlerinin Önemi",
                description: (
                    <p>
                        Veteriner hekimler, laboratuvar testlerini genellikle teşhis konulamadığında veya durumun karmaşıklığını belirlemek için kullanırlar. Laboratuvar testleri, kan, idrar, dışkı ve diğer biyolojik örneklerin analiz edilmesini içerebilir. Bu testler, iç organ rahatsızlıkları, enfeksiyonlar, metabolik bozukluklar, alerjik reaksiyonlar ve diğer sağlık sorunlarının teşhisinde ve takibinde önemli bir rol oynar.
                        <br />
                        <br />
                        Evcil hayvanlarımız, hastalıkları hakkında bize bilgi veremezler, bu nedenle laboratuvar testleri hastalıkların belirlenmesi ve tedavi planlarının oluşturulmasında kritik bir araçtır. Laboratuvarlar, basit sağlık sorunlarından ciddi hastalıklara kadar geniş bir yelpazede hizmet verirler. İç organ rahatsızlıkları, enfeksiyonlar, kanser gibi ciddi durumlar laboratuvar testleri ile teşhis edilir ve tedavi edilir.
                    </p>
                )
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
                title: "Pet Kuaför Hizmetinin Önemi",
                description: (
                    <p>
                        Pet kuaför hizmeti, evcil hayvanlar için oldukça önemlidir çünkü düzenli bakım, sağlıklı bir yaşam için gereklidir. Ev içinde yaşayan ve tüy dökme sorunu yaşayan evcil hayvanlar için bu hizmet daha da önemlidir. Pet kuaförler, evcil hayvanların tüy bakımını, düzenli kesimini, taramasını ve diğer kişisel bakım ihtiyaçlarını karşılarlar.
                        <br />
                        <br />
                        Bu düzenli bakım, evcil hayvanların rahatını ve sağlığını artırır, ayrıca sahiplerinin evlerini temiz ve düzenli tutmalarına yardımcı olur. Pet kuaför hizmetleri, evcil hayvanların tüylerinde oluşabilecek düğümlerin, kirlerin ve diğer rahatsızlıkların önüne geçer, böylece evcil hayvanlar daha sağlıklı ve mutlu olur.
                    </p>
                )
            },
            {
                title: "Veteriner Kliniklerinde Pet Kuaför Hizmetleri",
                description: (
                    <p>
                        Veteriner klinikleri genellikle pet kuaför hizmeti de sunarlar ve evcil hayvan sahiplerinin bu ihtiyaçlarını karşılamak için donanımlıdırlar. Veterinerlerin deneyimli ve uzman olmaları, evcil hayvanınızın sağlığı ve güvenliği açısından önemlidir. Bu nedenle, pet kuaför hizmeti alırken güvenilir bir veteriner kliniği seçmek önemlidir.
                        <br />
                        <br />
                        Veteriner kliniklerinde sunulan pet kuaför hizmetleri, evcil hayvanınızın bakımını profesyonel bir şekilde yaparak hem sağlık hem de estetik açıdan yüksek standartları korur. Güvenilir bir klinik, evcil hayvanınızın konforunu ve güvenliğini ön planda tutarak kaliteli hizmet sunar.
                    </p>
                )
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
    const [post, setPost] = React.useState<any>();
    const router = useRouter()

    useEffect(  () => {
        if (!service && !post) {
            fetch(`/api/posts?name=${params.slug}`)
            .then(res => res.json())
            .then(data => {
                setPost(data);
                console.log(data);
            })
            .catch(err => {
                router.push("/404");
            })
        }
    }, [service, post]);

    if (post) {
        return (
            <div className={"flex w-full justify-center items-center overflow-y-auto"}>
                <div className={"w-full flex flex-col gap-4 mx-8 my-36 md:mx-32 lg:mx-80"}>
                    <h1 className={"text-4xl font-medium"}>
                        {post.title}
                    </h1>
                    <Image src={post.image} alt={post.title} width={512} height={512} className={"w-full mt-4 rounded-lg object-cover object-center"}/>
                    <div className={"text-foreground/60 prose-lg lg:prose-xl w-full"}>
                        <p dangerouslySetInnerHTML={{__html: post.content}}>
                        </p>
                    </div>
                    <p>
                        {new Date(post.createdAt).toLocaleDateString()}
                    </p>
                </div>
            </div>
        )
    }

    return (
        <div className={"flex w-full h-screen overflow-y-auto"}>
            <motion.div className={"flex flex-col w-full h-full mx-4 my-36 lg:mx-24 gap-2 lg:gap-8 items-center"}
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
                        <div key={index} className={"flex w-full flex-col gap-2 text-foreground/60"}>
                            <p className={"text-foreground/70 font-medium uppercase"}>
                                {description.title}
                            </p>
                            {description.description}
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
                        <a href={"tel:+902128774903"}>
                            Bize Ulaş
                        </a>
                    </Button>
                    <Button variant={"ghost"} size={"lg"} className={"w-max"}>
                        <a href={"/"}>
                            Anasayfaya Dön
                        </a>
                    </Button>
                </div>
            </motion.div>
        </div>
);
};

export default Page;