import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'

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
        <article className="mx-auto max-w-xl py-8">
            <div className="mb-8 text-center">
                <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
                    {format(parseISO(post.date), 'LLLL d, yyyy')}
                </time>
                <h1 className="text-3xl font-bold">{post.title}</h1>
            </div>
            <div className="[&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: post.body.html }} />
        </article>
    )
}

export default PostLayout