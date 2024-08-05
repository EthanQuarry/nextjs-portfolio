import React from 'react';
import { format, parseISO } from 'date-fns';
import { Post } from '@/types';
import CustomLink from '@/components/ui/link';



interface RecentPostsProps {
    posts: Post[];
    onPostView: (postId: string) => void;
}

const PostCard: React.FC<{ post: Post }> = ({ post }) => {
    return (
        <div className="flex flex-col mb-4 cursor-pointer">
            <div className="flex justify-between items-center">
                <h2 className="">
                    <CustomLink href={`/blog/${post.slug}`}>
                        {post.title}
                    </CustomLink>
                </h2>
                <time dateTime={post.date} className="text-sm text-foreground-rgb opacity-60">
                    {format(parseISO(post.date), 'MMM yyyy')}
                </time>
            </div>
            <div className="w-full h-px bg-foreground-rgb opacity-20 mt-2"></div>
        </div>
    )
}

const RecentPosts: React.FC<RecentPostsProps> = ({ posts, onPostView }) => {
    return (
        <div className="mb-8">
            {posts.map((post, index) => (
                <PostCard key={index} post={post} />
            ))}
        </div>
    );
};

export default RecentPosts;