import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import { Mdx } from '@/components/content/mdx-component';

export async function generateStaticParams() {
    return allPosts.map((post) => ({
        slug: post.slugAsParams,
    }));
}
export const generateMetadata = ({ params }: { params: { slug: string } }) => {
    const post = allPosts.find((post) => post.slug === params.slug)
    if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
    return { title: post.title }
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
    const post = allPosts.find((post) => post.slugAsParams === params.slug);
    if (!post) throw new Error(`Post not found for slug: ${params.slug}`)

    if (!post) {
        // Handle the case when the post is not found
        return <div>Post not found</div>;
    }
    return (
        <article className="mx-auto max-w-xl">
            <div className="flex flex-col items-end mb-8 text-center">

                <h1 className="text-2xl">{post.title}</h1>
                <time dateTime={post.date} className="mb-1 text-[#4e4343] text-xs ">
                    {format(parseISO(post.date), 'LLLL d, yyyy')}
                </time>
            </div>
            <div className="px-[.8rem] pb-10 md:px-8">
                <Mdx code={post.body.code} />
            </div>
        </article>
    )
}

export default PostLayout