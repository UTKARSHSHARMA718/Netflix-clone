import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

import prismadb from "@/libs/prisma-db/prisma-db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { userEmail, userName, userPassword } = body;

    const existingUser = await prismadb.user.findFirst({
      where: {
        email: userEmail,
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { ok: false, message: "Email taken!" },
        { status: 422 }
      );
    }

    const hashedPassword = await bcrypt.hash(userPassword, 12);

    const user = await prismadb.user.create({
      data: {
        email: userEmail,
        name: userName,
        hashedPassword,
        image: "",
        emailVerified: new Date(),
      },
    });

    return NextResponse.json(
      { ok: true, message: "Register Successfully!", data: user },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { ok: false, message: "Something went wrong!" },
      { status: 400 }
    );
  }
}
