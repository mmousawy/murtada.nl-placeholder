import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST() {
  await revalidateTag("prismic", {});

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
