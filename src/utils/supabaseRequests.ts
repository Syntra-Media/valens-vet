import { supabaseClient } from "@/utils/supabaseClient";

type GetPostProps = {
    page?: number;
};

export const getPosts = async ({ page }: GetPostProps) => {
    const supabase = await supabaseClient();

    let offset = 0;
    if (page && page > 1) {
        offset = (page - 1) * 10;
    }

    const { data, error } = await supabase
        .from("posts")
        .select()
        .range(offset, offset + 9);

    if (error) {
        console.error(error);
        return [];
    }

    data?.forEach((post: any) => {
        post.reading_time = Math.ceil(post.content.split(" ").length / 200);
        post.date = new Date(post.created_at).toLocaleDateString("tr-TR");
    });

    return data;
};

export const createPost = async ({token, title, content, image, slug}: any) => {
    const supabase = await supabaseClient(token);

    const {data, error} = await supabase.from("posts").insert([{title, content, image, slug}]);

    if (error) {
        console.error(error);
        return false;
    }

    return data;
}

export const deletePost = async ({token, title}: any) => {
    const supabase = await supabaseClient(token);

    const {data, error} = await supabase.from("posts").delete().eq("title", title);

    if (error) {
        console.error(error);
        return false;
    }

    return data;
}

export const updatePost = async ({ token, id, title, slug, content, image }: any) => {
    const supabase = await supabaseClient(token);

    const { data, error } = await supabase
        .from("posts")
        .update({ title, slug, content, image })
        .eq("id", id);

    if (error) {
        console.error("Update error:", error.message, error.details);
        return false;
    }

    return data;
};

export const getPost = async ({title}: any) => {
    const supabase = await supabaseClient();

    const {data, error} = await supabase.from("posts").select().eq("slug", title);

    if (data) {
        data[0].date = new Date(data[0].created_at).toLocaleDateString("tr-TR");
        data[0].reading_time = Math.ceil(data[0].content.split(" ").length / 200);
    }

    if (error) {
        console.error(error);
        return false;
    }

    return data;
}