import React from 'react';
import { format, parseISO } from 'date-fns';
import { Post } from '@/types';
import Link from 'next/link';

interface RecentPostsProps {
    posts: Post[];
    onPostView: (postId: string) => void;
}

const PostCard: React.FC<{ post: Post }> = ({ post }) => {
    return (
        <div className="flex flex-col mb-3 cursor-pointer group">
            <div className="flex justify-between items-center py-1">
                <h2>
                    <Link
                        href={`/blog/${post.slug}`}
                        className="text-[14px] font-medium custom-underline"
                        style={{ color: 'var(--text-primary)' }}
                    >
                        {post.title}
                    </Link>
                </h2>
                <time
                    dateTime={post.date}
                    className="text-xs shrink-0 ml-4"
                    style={{ color: 'var(--text-muted)' }}
                >
                    {format(parseISO(post.date), 'MMM yyyy')}
                </time>
            </div>
            <div className="w-full h-px mt-1" style={{ background: 'var(--border-subtle)' }} />
        </div>
    )
}

const RecentPosts: React.FC<RecentPostsProps> = ({ posts }) => {
    return (
        <div className="mb-4">
            {posts.map((post, index) => (
                <PostCard key={index} post={post} />
            ))}
        </div>
    );
};

export default RecentPosts;
