"use client";

import React, {useEffect} from 'react';
import { ClerkProvider } from "@clerk/nextjs";
import { Input } from "@/components/ui/Input";
import { UploadDropzone } from "@/utils/uploadthing";
import { Button } from "@/components/ui/Button";
import {CircleX, Delete, Eye, Pen} from "lucide-react";
import Image from "next/image";
import {EditorContent, useEditor} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Toolbar from "@/components/ui/Toolbar";
import Link from "next/link";


const Page = () => {
    const [imageUrl, setImage] = React.useState("");
    const [content, setContent] = React.useState("");
    const [posts, setPosts] = React.useState<any[]>([]);
    const [mode, setMode] = React.useState("create")
    const titleRef = React.useRef<HTMLInputElement>(null);
    const slugRef = React.useRef<HTMLInputElement>(null);

    useEffect(() => {
        // Fetch data from the API
        const response = fetch("/api/posts?page=all")
        .then((res) => res.json())
        .then((data) => {
            setPosts(data);
        });
    }, []);

    const handleReset = () => {
        editor?.commands.setContent('<p>Buraya yaz!</p>');
        setImage("");
        setContent("");
        if (titleRef.current) {
            titleRef.current.value = "";
        }
        if (slugRef.current) {
            slugRef.current.value = "";
        }
    }

    const handleEdit = (post: any) => {
        setMode("edit");
        if (post.image) {
            setImage(post.image);
        }
        if (titleRef.current) {
            titleRef.current.value = post.title;
        }
        if (slugRef.current) {
            slugRef.current.value = post.slug;
        }
        editor?.commands.setContent(post.content);
        setContent(post.content);
    }

    const handleContentChange = (reason: any) => {
        setContent(reason);
    }

    const handleDelete = (id: string) => {
        fetch(`/api/posts?id=${id}`, {
            method: "DELETE",
        }).then((res) => {
            if (res.ok) {
                alert("Post deleted!");
            } else {
                alert("Failed to delete post.");
            }
        })
            .then(() => {
                fetch("/api/posts?page=all")
                .then((res) => res.json())
                .then((data) => {
                    setPosts(data);
                });
            });
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const title = formData.get("title") as string;
        const slug = formData.get("slug") as string;
        const description = content as string;
        const image = imageUrl as string;

        if (!title || !description || !image || !slug) {
            alert("Please fill out all fields.");
            return;
        }

        if (mode === "edit") {
            fetch("/api/posts", {
                method: "PUT",
                body: JSON.stringify({ title:title, content:description, image:image, slug:slug }),
                headers: {
                    "Content-Type": "application/json",
                },
            }).then((res) => {
                if (res.ok) {
                    alert("Blog post updated!");
                    setMode("create");
                    handleReset();
                    fetch("/api/posts?page=all")
                    .then((res) => res.json())
                    .then((data) => {
                        setPosts(data);
                    });
                } else {
                    alert("Failed to update blog post.");
                }
            })

            return;
        }

        // Do something with the form data
        fetch("/api/posts", {
            method: "POST",
            body: JSON.stringify({ title:title, content:description, image:image, slug:slug }),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => {
            if (res.ok) {
                alert("Blog post uploaded!");
                handleReset();
                fetch("/api/posts?page=all")
                .then((res) => res.json())
                .then((data) => {
                    setPosts(data);
                });
            } else {
                alert("Failed to upload blog post.");
            }
        })
    }

    const editor = useEditor({
        extensions: [StarterKit, Underline],
        content: '<p>Buraya yaz!</p>',

        editorProps: {
            attributes: {
                class: "prose lg:prose-sm max-w-none [&_ol]:list-decimal [&_ul]:list-disc w-full flex flex-col px-4 py-3 justify-start items-start border border-gray-700 rounded-b-lg min-h-60"
            }
        },

        onUpdate: ({ editor }) => {
            handleContentChange(editor.getHTML())
        }
    })

    return (
        <ClerkProvider>
            <div className={"flex w-full justify-center"}>
                <div className={"flex mx-8 my-36 md:mx-60 lg:mx-20 w-full gap-32"}>
                    <form className="flex w-full flex-col gap-4" onSubmit={handleSubmit}>
                        {
                            mode === "create" ? (
                                <h1 className={"text-4xl font-bold"}>
                                    Yeni Post
                                </h1>
                            ) : (
                                <div>
                                    <h1 className={"text-4xl font-bold"}>
                                        Post Düzenle
                                    </h1>
                                    <Button onClick={() => {setMode("create"); handleReset();}} className={"bg-blue-500 text-white p-2 rounded"}>
                                        Yeni Post
                                    </Button>
                                </div>
                            )
                        }
                        <div>
                            <label htmlFor="title" className="text-sm font-medium text-gray-700">
                                Başlık
                            </label>
                            <Input
                                id="title"
                                type="text"
                                name="title"
                                required
                                placeholder="Başlık"
                                className="mt-1"
                                ref={titleRef}
                            />
                        </div>

                        <div>
                            <label htmlFor="slug" className="text-sm font-medium text-gray-700">
                                Slug
                            </label>
                            <Input
                                id="slug"
                                type="text"
                                name="slug"
                                required
                                placeholder="Slug"
                                className="mt-1"
                                ref={slugRef}
                            />
                        </div>

                        <div>
                            <label htmlFor="description" className="text-sm font-medium text-gray-700">
                                İçerik
                            </label>
                            <Toolbar editor={editor} content={content}/>
                            <EditorContent editor={editor} style={{whiteSpace: "pre-line"}} />
                        </div>

                        {
                            imageUrl.length > 0 ? (
                                <div className={"relative flex w-full"}>
                                    <Image src={imageUrl} alt={"Uploaded image"} width={512} height={512} className={"aspect-video object-cover w-full"} />
                                    <div className={"absolute w-8 h-8 bg-neutral-900/30 backdrop-blur rounded-full -top-3 -right-3 flex justify-center items-center"}>
                                        <CircleX onClick={() => setImage("")} className={"cursor-pointer"} />
                                    </div>
                                </div>
                            ) : (
                                <UploadDropzone endpoint={"imageUploader"}
                                                onClientUploadComplete={(res) => {
                                                    // Do something with the response
                                                    setImage(res[0].url);
                                                }}
                                                config={{mode: "auto"}}
                                                onUploadError={(error: Error) => {
                                                    // Do something with the error.
                                                    alert(`ERROR! ${error.message}`);
                                                }}
                                />
                            )
                        }

                        <Button type="submit" className="bg-blue-500 text-white p-2 rounded">
                            {
                                mode === "create" ? "Yayınla" : "Güncelle"
                            }
                        </Button>
                    </form>
                    <div className={"flex w-full h-full bg-neutral-800/10 rounded-lg"}>
                        <div className={"m-8 w-full flex flex-col"}>
                            <h2 className={
                                "text-2xl font-bold mb-2"
                            }>
                                Postlar
                            </h2>
                            {
                                posts.map((post) => (
                                    <div key={post.id} className={"flex flex-col gap-2 rounded-lg p-2 border border-neutral-900/50 my-2"}>
                                        <h2 className={"text-lg font-bold"}>
                                            {post.title}
                                        </h2>
                                        <p className={"text-neutral-900 line-clamp-2"} dangerouslySetInnerHTML={{__html: post.content}}></p>
                                        <div className={"flex flex-col gap-2"}>
                                            <p>
                                                {new Date(post.createdAt).toLocaleDateString()}
                                            </p>
                                            <div className={"flex gap-2"}>
                                                <CircleX onClick={() => handleDelete(post.id)} className={"text-red-500 cursor-pointer"} />
                                                <Pen onClick={() => handleEdit(post)} className={"text-orange-500 cursor-pointer"}/>
                                                <Link href={"/" + post.slug} className={"text-blue-500 cursor-pointer"}>
                                                    <Eye />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </ClerkProvider>
    );
};

export default Page;