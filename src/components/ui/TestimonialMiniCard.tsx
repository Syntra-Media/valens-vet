import React from 'react';
import {cn} from "@/lib/utils";
import Image from "next/image";
import {Star} from "lucide-react";

type TestimonialMiniCardProps = {
    className?: React.ReactNode;
    image: string;
    name?: string;
    role?: string;
    stars?: number;
    comment?: string;
};

const TestimonialMiniCard = ({className, name, comment, stars, image, role}: TestimonialMiniCardProps) => {
    return (
        <div className={cn("flex flex-col rounded-lg border border-button bg-light/50 4k:hidden", className)}>
            <div className={"flex w-full h-full max-w-52 flex-col p-4 gap-2"}>
                <div className={"flex gap-2 items-center"}>
                    <Image src={image} alt={"Image"} width={1024} height={1024} className={"rounded-full w-6 h-6 3xl:w-8 3xl:h-8"}/>
                    <div className={"flex flex-col 3xl:text-xs lg:text-[0.625rem]"}>
                        <p className={"text-foreground/80"}>
                            {name}
                        </p>
                        <p className={"text-xs text-foreground/60 lg:text-[0.625rem]"}>
                            {role}
                        </p>
                    </div>
                </div>
                <div className={"flex gap-1 text-button"}>
                    {[...Array(stars)].map((_, index) => (
                        <Star key={index} size={12} className={"text-button"}/>
                    ))}
                </div>
                <p className={"font-light lg:text-sm 3xl:text-base"}>
                    {comment}
                </p>
            </div>
        </div>
    );
};

export default TestimonialMiniCard;