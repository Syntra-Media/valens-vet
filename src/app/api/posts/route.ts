import {NextRequest, NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";
import {serialize} from "next-mdx-remote/serialize";

const prisma = new PrismaClient();

async function GetHandler(req: NextRequest) {
    let params = req.nextUrl.searchParams;
    let name = params.get("name");

    if (name) {
        let post = await prisma.post.findFirst({
            where: {
                title: decodeURIComponent(name)
            }
        });

        if (!post) {
            return NextResponse.json("Post not found");
        }

        return NextResponse.json(post)
    }

    let page = params.get("page")
    let pageOffset = 0;

    if (page) {
        pageOffset = parseInt(page) - 1;
    }

    let posts = await prisma.post.findMany({
        skip: pageOffset * 10,
        take: 10,
        orderBy: {
            createdAt: "desc"
        }
    });

    return NextResponse.json(posts);
}

async function PostHandler(req: NextRequest) {
    let body = await req.json();
    let post = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            image: body.image
        }
    });

    return NextResponse.json(post);
}

export {GetHandler as GET, PostHandler as POST}