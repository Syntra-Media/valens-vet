import React from 'react';
import Header from "@/components/ui/Header";
import Hero from "@/components/ui/sections/Hero";
import AboutUs from "@/components/ui/sections/AboutUs";
import Services from '@/components/ui/sections/Services';
import Testimonials from "@/components/ui/sections/Testimonials";
import Contact from "@/components/ui/sections/Contact";
import Footer from "@/components/ui/Footer";

const Home = () => {
    return (
        <div className={"flex flex-col w-full"}>
            <Hero/>
            <AboutUs/>
            <Services/>
            <Testimonials/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;