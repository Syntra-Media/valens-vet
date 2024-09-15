import {NextRequest, NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

async function GetHandler(req: NextRequest) {
    let params = req.nextUrl.searchParams;
    let name = params.get("name");

    if (name) {
        let post = await prisma.post.findFirst({
            where: {
                slug: name
            }
        });

        if (!post) {
            return NextResponse.json("Post not found");
        }

        return NextResponse.json(post)
    }

    let page = params.get("page")

    if (page === "all") {
        let posts = await prisma.post.findMany({
            orderBy: {
                createdAt: "desc"
            }
        });

        return NextResponse.json(posts);
    }

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

    if (!body.title || !body.content || !body.image) {
        return NextResponse.json("Invalid post data");
    }

    let post = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            image: body.image,
            slug: body.slug
        }
    });

    return NextResponse.json(post);
}

async function DeleteHandler(req: NextRequest) {
    let params = req.nextUrl.searchParams;
    let id = params.get("id");

    if (!id) {
        return NextResponse.json("Invalid post ID");
    }

    let post = await prisma.post.delete({
        where: {
            id: parseInt(id)
        }
    });

    return NextResponse.json(post);
}

async function PutHandler(req: NextRequest) {
    let body = await req.json();
    let id = body.slug;

    if (!id) {
        return NextResponse.json("Invalid post ID");
    }

    let post = await prisma.post.update({
        where: {
            slug: id
        },
        data: {
            title: body.title,
            content: body.content,
            image: body.image,
            slug: body.slug
        }
    });

    return NextResponse.json(post);
}

export {GetHandler as GET, PostHandler as POST, DeleteHandler as DELETE, PutHandler as PUT}