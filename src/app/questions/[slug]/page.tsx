import { format, parseISO } from 'date-fns'
import { allQuestions } from 'contentlayer/generated'

export const generateStaticParams = async () => allQuestions.map((question) => ({ slug: question._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
    const question = allQuestions.find((question) => question.slug === params.slug || question._raw.flattenedPath === `questions/${params.slug}`)
    if (!question) throw new Error(`Question not found for slug: ${params.slug}`)
    return { title: question.title }
}

const QuestionLayout = ({ params }: { params: { slug: string } }) => {
    const question = allQuestions.find((question) => question._raw.flattenedPath === `questions/${params.slug}`)
    if (!question) throw new Error(`Question not found for slug: ${params.slug}`)

    return (
        <article className="mx-auto max-w-xl py-8">
            <div className="mb-8 text-center">
                <time dateTime={question.date} className="mb-1 text-xs text-gray-600">
                    {format(parseISO(question.date), 'LLLL d, yyyy')}
                </time>
                <h1 className="text-3xl font-bold">{question.title}</h1>
            </div>
            <div className="[&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: question.body.html }} />
        </article>
    )
}

export default QuestionLayout