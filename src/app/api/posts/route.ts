///ตรงนี้ที่ต้องเเก้
import prisma from "@/lib/prisma";

import * as bcrypt from "bcrypt";

interface RequestBody {
  title: string;
  content: string;
}

export default async function handler(req: Request) {
  try {
    if (req.method === "POST") {
      const RequestBody = req.body;
    }
  } catch (error) {
    console.error("Error during post creation:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
