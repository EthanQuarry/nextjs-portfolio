import { allQuestions } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import Link from 'next/link';

export default function QuestionsPage() {
    const questions = allQuestions.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

    return (
        <div className="mx-auto max-w-xl">
            <ul className="space-y-4">
                {questions.map((question) => (
                    <li key={question.slug} className="border-b pb-4">
                        <Link href={`/questions/${question.slugAsParams}`} className="block">
                            <h2 className="text-xl font-semibold transition-colors">{question.title}</h2>
                            <time dateTime={question.date} className="text-sm text-gray-500">
                                {new Date(question.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                            </time>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
