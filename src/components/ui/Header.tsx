"use client";

import React, {useEffect, useState} from 'react';
import Image from "next/image";
import {ArrowLeft, ChevronDown, Home, Menu, XCircle} from "lucide-react";
import {cn} from "@/lib/utils";
import {
    NavigationMenu, NavigationMenuContent,
    NavigationMenuItem, NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/NavigationMenu";
import { Button } from './Button'  // Make sure it's 'Button', not 'button'
import {AnimatePresence, motion} from "framer-motion";
import {usePathname, useRouter} from "next/navigation";
import Link from 'next/link';

const ROUTES = [
    {
        name: "Anasayfa",
        href: "home",
    },
    {
        name: "Blog",
        href: "blog",
    },
    {
        name: "Hakkımızda",
        href: "about",
    },
    {
        name: "Sahiplendirme",
        href: "sahiplendirme",
    },
    {
        name: "Hizmetlerimiz",
        href: "services",
    },
    {
        name: "Müşteri Yorumları",
        href: "testimonials",
    },
    {
        name: "İletişim",
        href: "contact",
    }
]

const SERVICES = [
    {
        name: "Evde Veterinerlik",
        href: "/evde-veterinerlik",
    },
    {
        name: "Dahiliye",
        href: "/dahiliye",
    },
    {
        name: "Cerrahi",
        href: "/cerrahi",
    },
    {
        name: "Acil Tedavi",
        href: "/acil-tedavi",
    },
    {
        name: "Ağız ve Diş Sağlığı",
        href: "/agiz-ve-dis-sagligi",
    },
    {
        name: "Koruyucu Hekimlik",
        href: "/koruyucu-hekimlik",
    },
    {
        name: "Laboratuvar",
        href: "/laboratuvar",
    },
    {
        name: "Pet Kuaför",
        href: "/pet-kuafor",
    }
]

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [NavigationMenuOpen, setNavigationMenuOpen] = useState(false);

    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const domSection = document.getElementById(activeSection);
        domSection?.scrollIntoView({behavior: "smooth"});

        if (menuOpen) {
            setMenuOpen(false);
        }

        if (NavigationMenuOpen) {
            setNavigationMenuOpen(false);
        }
    }, [activeSection, pathname, menuOpen, NavigationMenuOpen]);

    const handleClick = (section: string) => {
        setActiveSection(section);

        if (pathname !== "/") {
            router.push("/")
        }
    }

    return (
        <motion.div className={"flex w-full h-20 absolute 4k:h-40"}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1}}
                    viewport={{once: true}}
        >
            <div className={"flex justify-between items-center w-full h-full mx-12 2xl:text-xl 4k:text-4xl"}>
                <Image src={"/valenslogo.png"} alt={"Valens Veteriner Kliniği"} width={200} height={200}
                       onClick={() => router.push("/")}/>
                <div className={"sm:hidden flex z-20"}>
                    <button onClick={() => setMenuOpen(!menuOpen)} className={"flex items-center"}>
                        <Menu size={32} className={cn("text-button transition-all", menuOpen && "rotate-90")}/>
                    </button>
                    <AnimatePresence>
                        {
                            menuOpen && (
                                <motion.div
                                    className={"fixed w-full h-screen backdrop-blur flex flex-col justify-center items-center top-0 right-0 bg-primary/50 border border-border rounded-lg shadow-lg text-xl"}
                                    initial={{opacity: 0, x: 100}}
                                    animate={{opacity: 1, x: 0}}
                                    exit={{opacity: 0, x: 100}}
                                >
                                    <div
                                        className={cn("flex flex-col gap-4 items-center text-light", NavigationMenuOpen && "hidden")}>
                                        <a onClick={() => handleClick(ROUTES[0].href)}>
                                            {ROUTES[0].name}
                                        </a>
                                        <a href={"/"+ ROUTES[1].href}>
                                            {ROUTES[1].name}
                                        </a>
                                        <a onClick={() => setNavigationMenuOpen(!NavigationMenuOpen)}
                                                className={"flex"}>
                                            {ROUTES[2].name} <ChevronDown size={24}
                                                                          className={cn("transition-all", NavigationMenuOpen && "rotate-180")}/>
                                        </a>
                                        <a onClick={() => handleClick(ROUTES[3].href)}>
                                            {ROUTES[3].name}
                                        </a>
                                        <a onClick={() => handleClick(ROUTES[4].href)}>
                                            {ROUTES[4].name}
                                        </a>
                                        <a onClick={() => handleClick(ROUTES[5].href)}>
                                            {ROUTES[5].name}
                                        </a>
                                    </div>
                                    <div
                                        className={cn("hidden flex-col gap-4 items-center text-light", NavigationMenuOpen && "flex")}>
                                        {
                                            SERVICES.map((route, index) => (
                                                <a key={index} href={route.href}>
                                                    {route.name}
                                                </a>
                                            ))
                                        }
                                        <div
                                            className={"absolute left-0 top-0 flex items-center justify-start gap-4 px-8 py-8"}
                                        >
                                            <button onClick={() => setNavigationMenuOpen(!NavigationMenuOpen)}>
                                                <ArrowLeft size={36}/>
                                            </button>
                                        </div>
                                    </div>
                                    <div
                                        className={"absolute right-0 top-0 flex items-center justify-end gap-4 px-8 py-8"}
                                    >
                                        <button onClick={() => setMenuOpen(!menuOpen)}>
                                            <XCircle size={36} className={"text-white"}/>
                                        </button>
                                    </div>
                                </motion.div>
                            )
                        }
                    </AnimatePresence>
                </div>
                <div className={"gap-6 z-20 items-center hidden sm:flex cursor-pointer"}>
                    <a onClick={() => handleClick(ROUTES[0].href)}>
                        {ROUTES[0].name}
                    </a>
                    <a href={"/"+ ROUTES[1].href}>
                        {ROUTES[1].name}
                    </a>
                    <a onClick={() => handleClick(ROUTES[2].href)}>
                        {ROUTES[2].name}
                    </a>
                    <Link href={"/" + ROUTES[3].href}>
                        {ROUTES[3].name}
                    </Link>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    {ROUTES[4].name}
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="flex flex-col w-full px-8 py-4 gap-2 justify-center">
                                        {
                                            SERVICES.map((route, index) => (
                                                <li key={index} className={"cursor-pointer w-full"}>
                                                    <NavigationMenuLink href={route.href}>
                                                        {route.name}
                                                    </NavigationMenuLink>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <a onClick={() => handleClick(ROUTES[3].href)}>
                        {ROUTES[5].name}
                    </a>
                    <Button variant={"default"} className={"4k:px-16 4k:py-8 4k:text-2xl"}
                    >
                        <a onClick={() => handleClick(ROUTES[5].href)}>
                            {ROUTES[6].name}
                        </a>
                    </Button>
                </div>
            </div>
        </motion.div>
    );
};

export default Header;
