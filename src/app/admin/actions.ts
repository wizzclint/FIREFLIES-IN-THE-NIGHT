"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { setMessageHandled } from "@/lib/db";

export async function toggleHandled(formData: FormData) {
  const session = await auth();
  if (!session) throw new Error("Not authorized");

  const id = Number(formData.get("id"));
  const nextHandled = formData.get("handled") === "true";
  await setMessageHandled(id, nextHandled);
  revalidatePath("/admin");
}
