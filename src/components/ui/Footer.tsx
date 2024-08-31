import React from 'react';
import ReactCountryFlag from "react-country-flag";

const Footer = () => {
    return (
        <div className={"flex w-full bg-white"}>
            <div className={"flex flex-col gap-4 w-full h-full mx-8 my-4 "}>
                <div className={"flex flex-col md:flex-row justify-between gap-2"}>
                    <div className={"flex gap-2 items-center text-sm 4k:text-3xl"}>
                        <ReactCountryFlag countryCode={"TR"} svg className={"text-3xl 4k:text-6xl"}/>
                        <p>Türkiye | Türkçe</p>
                    </div>
                    <div className={"flex flex-col lg:flex-row gap-x-4 gap-y-2 mb-2 text-sm 4k:text-3xl text-foreground/50"}>
                        <p>
                            &copy; 2024 Valens Veteriner Kliniği
                        </p>
                        <div className={"flex gap-4"}>
                            <p>
                                Müşteri Yorumları
                            </p>
                            <p>
                                Gizlilik Politikası
                            </p>
                            <p>
                                Kullanım Koşulları
                            </p>
                            <p>
                                Çerezler
                            </p>
                        </div>
                    </div>
                </div>
                <div className={"flex w-full h-full justify-center"}>
                    <p className={"text-sm font-light 4k:text-3xl"}>
                        valensveteriner.com sitesi <a className={"underline font-medium"} href={"https://syntramedia.com"}>Syntra Media</a> tarafından tasarlanmış ve geliştirilmiştir. Tüm hakları saklıdır © 2024 Valens Veteriner Kliniği.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;