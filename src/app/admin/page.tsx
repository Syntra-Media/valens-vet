"use client";

import React from 'react';
import { ClerkProvider } from "@clerk/nextjs";
import { Input } from "@/components/ui/Input";
import { UploadDropzone } from "@/utils/uploadthing";
import { Button } from "@/components/ui/Button";
import { Textarea } from "@/components/ui/Textarea";
import Tiptap from "@/components/ui/Tiptap";


const Page = () => {
    const [imageUrl, setImage] = React.useState("");
    const [content, setContent] = React.useState("");

    const handleContentChange = (reason: any) => {
        setContent(reason);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const title = formData.get("title") as string;
        const description = content as string;
        const image = imageUrl as string;

        // Do something with the form data
        fetch("/api/posts", {
            method: "POST",
            body: JSON.stringify({ title:title, content:description, image:image }),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => {
            if (res.ok) {
                alert("Blog post uploaded!");
            } else {
                alert("Failed to upload blog post.");
            }
        })
    }

    return (
        <ClerkProvider>
            <div className={"flex w-full justify-center"}>
                <div className={"flex mx-8 my-36 md:mx-60 lg:mx-96 w-full flex-col gap-4"}>
                    <form className="flex w-full flex-col space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="title" className="text-sm font-medium text-gray-700">
                                Title
                            </label>
                            <Input
                                id="title"
                                type="text"
                                name="title"
                                required
                                placeholder="Title"
                                className="mt-1"
                            />
                        </div>

                        <div>
                            <label htmlFor="description" className="text-sm font-medium text-gray-700">
                                Content
                            </label>
                            <Tiptap
                                content={content}
                                onChange={(newContent: string) => handleContentChange(newContent)}
                            />
                        </div>

                        <UploadDropzone endpoint={"imageUploader"}
                                        onClientUploadComplete={(res) => {
                                            // Do something with the response
                                            setImage(res[0].url);
                                        }}
                                        onUploadError={(error: Error) => {
                                            // Do something with the error.
                                            alert(`ERROR! ${error.message}`);
                                        }}
                        />

                        <Button type="submit" className="bg-blue-500 text-white p-2 rounded">
                            Upload Blog Post
                        </Button>
                    </form>
                </div>
            </div>
        </ClerkProvider>
    );
};

export default Page;