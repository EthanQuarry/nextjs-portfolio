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
        <div className="flex justify-between items-baseline py-1.5">
            <Link
                href={`/blog/${post.slug}`}
                className="text-[14px] text-[#ededed] hover:text-white transition-colors"
            >
                {post.title}
            </Link>
            <time
                dateTime={post.date}
                className="text-[12px] text-[#333] shrink-0 ml-4 tabular-nums"
            >
                {format(parseISO(post.date), 'MMM yyyy')}
            </time>
        </div>
    )
}

const RecentPosts: React.FC<RecentPostsProps> = ({ posts }) => {
    return (
        <div>
            {posts.map((post, index) => (
                <PostCard key={index} post={post} />
            ))}
        </div>
    );
};

export default RecentPosts;
