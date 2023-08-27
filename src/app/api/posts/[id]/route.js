import { NextResponse } from "next/server"
import connect from "@/util/db";
import Post from "@/models/Post";

export const GET = async (request, {params}) => {
    const {id} = params;
    try {
        await connect()
        const post = await Post.findById(id)
        return new NextResponse(JSON.stringify(post),{ status: 200 });

    } catch (err) {
        return new NextResponse('Erro na base de dados',{ status: 500 });
    }
  
};