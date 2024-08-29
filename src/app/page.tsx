import React from 'react';
import Header from "@/components/ui/Header";
import Hero from "@/components/sections/Hero";
import AboutUs from "@/components/sections/AboutUs";
import Services from '@/components/sections/Services';
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/Footer";

const Home = () => {
    return (
        <div className={"flex flex-col w-full"}>
            <Header/>
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