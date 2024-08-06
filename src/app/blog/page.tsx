import { allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import Link from 'next/link';

export default function BlogPage() {
    const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

    return (
        <ul className="space-y-4">
            {posts.map((post) => (
                <li key={post.slug} className="border-b pb-4">
                    <Link href={`/blog/${post.slugAsParams}`} className="block">
                        <h2 className="text-xl font-semibold transition-colors">{post.title}</h2>
                        <time dateTime={post.date} className="text-sm text-gray-500">
                            {new Date(post.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </time>
                    </Link>
                </li>
            ))}
        </ul>
    );
}
