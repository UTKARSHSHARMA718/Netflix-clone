import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

import prismadb from "@/libs/prisma-db/prisma-db";

export async function POST(req: NextRequest) {
  try {
    console.log("called...");
    const body = await req.json();
    const { userEmail, userName, userPassword } = body;

    console.log("1", {});
    const existingUser = await prismadb.user.findFirst({
      where: {
        email: userEmail,
      },
    });

    console.log("2");
    if (existingUser) {
      return NextResponse.json(
        { ok: false, message: "Email taken!" },
        { status: 422 }
      );
    }

    console.log("3");
    const hashedPassword = await bcrypt.hash(userPassword, 12);
    console.log("4");

    const user = await prismadb.user.create({
      data: {
        email: userEmail,
        name: userName,
        hashedPassword,
        image: "",
        emailVerified: new Date(),
      },
    });
    console.log("5");

    return NextResponse.json(
      { ok: true, message: "Register Successfully!", data: user },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error while creating user: " + error);
    return NextResponse.json(
      { ok: false, message: "Something went wrong!" },
      { status: 400 }
    );
  }
}
