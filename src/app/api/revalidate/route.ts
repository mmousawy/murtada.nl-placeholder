import { NextResponse } from "next/server";
import { revalidateTag, revalidatePath } from "next/cache";

export async function POST(request: Request) {
  try {
    // Verify webhook secret if configured (for security)
    const secret = request.headers.get("x-prismic-webhook-secret");
    const expectedSecret = process.env.PRISMIC_WEBHOOK_SECRET;
    
    if (expectedSecret && secret !== expectedSecret) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Revalidate the cache tag for Prismic data
    await revalidateTag("prismic", {});
    
    // Revalidate the blog overview page
    await revalidatePath("/blog");
    
    // Optionally revalidate specific blog post if uid is provided in the request
    const body = await request.json().catch(() => ({}));
    if (body.uid) {
      await revalidatePath(`/blog/${body.uid}`);
    }

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (error) {
    return NextResponse.json(
      { error: "Error revalidating", message: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
