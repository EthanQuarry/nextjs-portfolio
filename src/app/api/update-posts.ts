import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const POSTS_FILE = path.join(process.cwd(), '@/src/content/posts.json');

export async function POST(
    request: Request,
    { params }: { params: { id: string } }
) {
    const id = params.id;

    try {
        const data = await fs.readFile(POSTS_FILE, 'utf8');
        const posts = JSON.parse(data);

        const post = posts.find((p: any) => p.id === id);
        if (post) {
            post.reads += 1;
            await fs.writeFile(POSTS_FILE, JSON.stringify(posts, null, 2));
            return NextResponse.json({ success: true, reads: post.reads });
        } else {
            return NextResponse.json({ success: false, error: 'Post not found' }, { status: 404 });
        }
    } catch (error) {
        console.error('Error updating post reads:', error);
        return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
    }
}