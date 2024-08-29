"use client";

import React, {useEffect, useState} from 'react';
import Image from "next/image";
import {ChevronDown, Home, Menu, XCircle} from "lucide-react";
import {cn} from "@/lib/utils";
import {
    NavigationMenu, NavigationMenuContent,
    NavigationMenuItem, NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/NavigationMenu";
import {Button} from "@/components/ui/Button";
import {motion} from "framer-motion";

const ROUTES = [
    {
        name: "Anasayfa",
        section: "home",
    },
    {
        name: "Hakkımızda",
        section: "about",
    },
    {
        name: "Hizmetlerimiz",
        section: "services",
    },
    {
        name: "Müşteri Yorumları",
        section: "testimonials",
    },
    {
        name: "İletişim",
        section: "contact",
    }
]

const SERVICES = [
    {
        name: "Evde Veterinerlik",
        href: "/servisler/evde-veterinerlik",
    },
    {
        name: "Dahiliye",
        href: "/servisler/dahiliye",
    },
    {
        name: "Cerrahi",
        href: "/servisler/cerrahi",
    },
    {
        name: "Acil Tedavi",
        href: "/servisler/acil-tedavi",
    },
    {
        name: "Ağız ve Diş Sağlığı",
        href: "/servisler/agiz-ve-dis-sagligi",
    },
    {
        name: "Koruyucu Hekimlik",
        href: "/servisler/koruyucu-hekimlik",
    },
    {
        name: "Laboratuvar",
        href: "/servisler/laboratuvar",
    },
    {
        name: "Pet Kuaför",
        href: "/servisler/pet-kuaför",
    }
]

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const section = document.getElementById(activeSection);
        if (section) {
            section.scrollIntoView({behavior: "smooth"});
        }
    }, [activeSection, setActiveSection])

    return (
        <motion.div className={"flex w-full h-20 absolute 4k:h-40"}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}
        >
            <div className={"flex justify-between items-center w-full h-full mx-12 2xl:text-xl 4k:text-4xl"}>
                <Image src={"/valenslogo.png"} alt={"Valens Veteriner Kliniği"} width={200} height={200}/>
                <div className={"sm:hidden flex"}>
                    <button onClick={() => setMenuOpen(!menuOpen)} className={"flex items-center"}>
                        <Menu size={32} className={cn("text-primary transition-all", menuOpen && "rotate-90")}/>
                    </button>
                        {
                            menuOpen && (
                                <div
                                    className={"fixed w-full h-screen backdrop-blur flex flex-col justify-center top-0 right-0 bg-primary/50 border border-border rounded-lg shadow-lg text-xl"}>
                                    {
                                        ROUTES.map((route, index) => (
                                            <button key={index} onClick={() => setActiveSection(route.section)}
                                                    className={cn("flex items-center justify-center gap-4 w-full px-8 py-4", activeSection === route.section && "bg-light foreground-primary")}>
                                                <span>{route.name}</span>
                                            </button>
                                        ))

                                    }
                                    <button
                                        className={"absolute right-0 top-0 flex items-center justify-end gap-4 w-full px-8 py-8"}
                                        onClick={() => setMenuOpen(!menuOpen)}>
                                        <XCircle size={36}/>
                                    </button>
                                </div>
                            )
                        }
                </div>
                <div className={"gap-6 items-center hidden sm:flex cursor-pointer"}>
                    <a onClick={() => setActiveSection(ROUTES[0].section)} className={cn("flex items-center", activeSection === "home" && "text-primary")}>
                        {ROUTES[0].name}
                    </a>
                    <a onClick={() => setActiveSection(ROUTES[1].section)} className={cn("flex items-center", activeSection === "about" && "text-primary")}>
                        {ROUTES[1].name}
                    </a>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    {ROUTES[2].name}
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
                    <a onClick={() => setActiveSection(ROUTES[3].section)}
                            className={cn("flex items-center", activeSection === "testimonials" && "text-primary")}>
                        {ROUTES[3].name}
                    </a>
                    <Button variant={"default"} className={"4k:px-16 4k:py-8 4k:text-2xl"}>
                        Bize Ulaş
                    </Button>
                </div>
            </div>
        </motion.div>
);
};

export default Header;