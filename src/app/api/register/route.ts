import { NextApiRequest } from "next";
//@ts-ignore
import bcrypt from "bcrypt";

import prismadb from "@/libs/prisma-db/prisma-db";
import { NextResponse } from "next/server";

export default async function POST(req: NextApiRequest) {
  try {
    if (req.method !== "POST") {
      return NextResponse.json(
        { ok: false, message: "Invalid request!" },
        { status: 400 }
      );
    }

    const { email, name, password } = req.body;

    const existingUser = await prismadb.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { ok: false, message: "Email taken!" },
        { status: 422 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prismadb.user.create({
      data: {
        email,
        name,
        hashedPassword,
        image: "",
        emailVerified: new Date(),
      },
    });

    return NextResponse.json(
      { ok: true, message: "Register Successfully!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { ok: false, message: "Something went wrong!" },
      { status: 400 }
    );
  }
}
