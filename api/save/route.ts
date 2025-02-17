import { PrismaClient } from '@prisma/client';
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { userId } = await auth()

    if(!userId) {
        return NextResponse.json("Unauthorized", { status: 500 })
    }
    
    const body = await req.json()

    const prisma = new PrismaClient()
    const newSave = await prisma.save.create({
        data: {
            ...body
        }
    })

    return NextResponse.json(newSave, { status: 201 })
}