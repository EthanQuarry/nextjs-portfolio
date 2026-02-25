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

    return (
        <article className="w-full">
            <div className="mb-10">
                <h1 className="text-[22px] font-semibold text-white tracking-[-0.02em] mb-2">
                    {post.title}
                </h1>
                <time dateTime={post.date} className="text-[12px] text-[#444]">
                    {format(parseISO(post.date), 'LLLL d, yyyy')}
                </time>
            </div>
            <div className="font-serif text-[15px] leading-[1.85] text-[#999]">
                <Mdx code={post.body.code} />
            </div>
        </article>
    )
}

export default PostLayout
