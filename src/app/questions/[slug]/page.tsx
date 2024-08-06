import { format, parseISO } from 'date-fns'
import { allQuestions } from 'contentlayer/generated'
import { Mdx } from '@/components/content/mdx-component';

export async function generateStaticParams() {
    return allQuestions.map((question) => ({
        slug: question.slugAsParams,
    }));
}
export const generateMetadata = ({ params }: { params: { slug: string } }) => {
    const question = allQuestions.find((question) => question.slug === params.slug || question._raw.flattenedPath === `questions/${params.slug}`)
    if (!question) throw new Error(`Question not found for slug: ${params.slug}`)
    return { title: question.title }
}

const QuestionLayout = ({ params }: { params: { slug: string } }) => {
    const question = allQuestions.find((question) => question.slugAsParams === params.slug);
    if (!question) throw new Error(`Question not found for slug: ${params.slug}`)

    if (!question) {
        return <div>Question not found</div>;
    }
    return (
        <article className="mx-auto max-w-xl">
            <div className="flex flex-col items-end mb-8 text-center">
                <h1 className="text-2xl">{question.title}</h1>
                <time dateTime={question.date} className="mb-1 text-[#4e4343] text-xs ">
                    {format(parseISO(question.date), 'LLLL d, yyyy')}
                </time>
            </div>
            <div className="px-[.8rem] pb-10 md:px-8">
                <Mdx code={question.body.code} />
            </div>
        </article>
    )
}

export default QuestionLayout