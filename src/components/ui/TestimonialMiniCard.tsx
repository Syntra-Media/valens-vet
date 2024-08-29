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
            <div className={"flex w-full h-full max-w-64 flex-col p-4 gap-2"}>
                <div className={"flex gap-2 items-center"}>
                    <Image src={image} alt={"Image"} width={1024} height={1024} className={"rounded-full w-10 h-10"}/>
                    <div className={"flex flex-col text-sm"}>
                        <p className={"text-foreground/80"}>
                            {name}
                        </p>
                        <p className={"text-xs text-foreground/60"}>
                            {role}
                        </p>
                    </div>
                </div>
                <div className={"flex gap-1 text-button"}>
                    {[...Array(stars)].map((_, index) => (
                        <Star key={index} size={16} className={"text-button"}/>
                    ))}
                </div>
                <p className={"text-xl font-light"}>
                    {comment}
                </p>
            </div>
        </div>
    );
};

export default TestimonialMiniCard;