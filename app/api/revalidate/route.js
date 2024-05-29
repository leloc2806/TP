// app/api/revalidate/route.js

import { NextResponse } from 'next/server';

export async function POST(req) {
    const { searchParams } = new URL(req.url);
    const secret = searchParams.get('secret');

    if (secret !== process.env.NEXT_PUBLIC_REVALIDATION_SECRET) {
        return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
    }

    try {
        const { paths } = await req.json();

        if (!paths || !Array.isArray(paths)) {
            return NextResponse.json({ message: 'Invalid paths' }, { status: 400 });
        }

        // Revalidate each path
        for (const path of paths) {
            await res.revalidate(path);
        }

        return NextResponse.json({ revalidated: true });
    } catch (err) {
        return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
    }
}
