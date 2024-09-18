"use client";

import React from 'react';
import { useEffect, useState } from 'react';
import {Button} from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import {Skeleton} from "@/components/ui/Skeleton";
import {getPosts} from "@/utils/supabaseRequests";


export default function BlogPostList() {
    const [posts, setPosts] = useState<any[]>([]); // Blog post data
    const [page, setPage] = useState(1);           // Track current page
    const [loaded, setLoaded] = useState(false);   // Track if the page has loaded

    // Fetch blog posts when the page changes
    useEffect(() => {
        const GetPosts = async () => {
            const posts = await getPosts({page});
            setPosts(posts);
            setLoaded(true);
        }
    }, [page]);

    return (
        <div className={"flex w-full justify-center"}>
            <div className={"w-full h-full flex flex-col items-center my-40"}>
                <div className={"flex flex-col gap-8"}>
                    {
                        !loaded && (
                            <div className={"flex flex-col gap-8 dark"}>
                                {
                                    [1, 2, 3].map((_, index) => (
                                        <Skeleton key={index} className={"flex flex-col mx-8 h-60 lg:flex-row rounded-xl gap-4 border-2 border-neutral-900/30"}>
                                            <Skeleton className={"rounded-t-xl lg:w-96 lg:rounded-l-xl lg:rounded-tr-none object-cover"} />
                                            <Skeleton className={"flex flex-col gap-2 py-8 px-4 max-w-[32rem]"} />
                                        </Skeleton>
                                    ))
                                }
                            </div>
                        )
                    }

                    {posts.map((post, index) => (
                        <div key={index} className={"flex flex-col mx-8 lg:flex-row rounded-xl border-2 border-neutral-900/30"}>
                            <Image src={post.image} alt={post.title} width={512} height={512} className={"rounded-t-xl lg:w-96 lg:rounded-l-xl lg:rounded-tr-none object-cover"} draggable={false} />
                            <div className={"flex flex-col gap-2 py-8 px-8 w-[32rem]"}>
                                <h2 className={" w-full text-2xl font-bold"}>
                                    {post.title}
                                </h2>
                                <p className={"prose w-full text-lg text-foreground/70 line-clamp-3"} dangerouslySetInnerHTML={{__html: post.content}}>

                                </p>
                                <div className={"flex mt-2 text-foreground/70 justify-between items-end"}>
                                    <p>
                                        {post.date}
                                    </p>

                                    <Link href={"/" + post.slug} className={"text-button underline"}>
                                        Devamını oku
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {posts.length > 9 &&
                    <div className={"flex gap-4 mt-12"}>
                        <Button onClick={() => setPage(page - 1)} disabled={page <= 1}>Önceki Sayfa</Button>
                        <Button onClick={() => setPage(page + 1)}>Sonraki Sayfa</Button>
                    </div>
                }
            </div>
        </div>
    );
}
