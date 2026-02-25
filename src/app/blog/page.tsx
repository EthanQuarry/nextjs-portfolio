import { allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import Link from 'next/link';

export default function BlogPage() {
    const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

    return (
        <div className="w-full">
            <p className="text-[11px] uppercase tracking-[0.15em] text-[#444] mb-8 font-medium">
                Writing
            </p>
            <div className="space-y-1">
                {posts.map((post) => (
                    <div key={post.slug} className="flex justify-between items-baseline py-2">
                        <Link
                            href={`/blog/${post.slugAsParams}`}
                            className="text-[14px] text-[#ededed] hover:text-white transition-colors"
                        >
                            {post.title}
                        </Link>
                        <time
                            dateTime={post.date}
                            className="text-[12px] text-[#333] shrink-0 ml-4 tabular-nums"
                        >
                            {new Date(post.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </time>
                    </div>
                ))}
            </div>
        </div>
    );
}
