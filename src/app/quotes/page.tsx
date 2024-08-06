import LightText from "@/components/ui/light-text"
import CustomLink from "@/components/ui/link"


const quotes = [
    { text: "Do not despair. I know you will not despair. You have a manly and a proud heart. A proud heart can survive failure because such a failure does not prick its pride. It is more difficult and more bitter when a man fails alone.", author: "Chinua Achebe" },
    { text: "True genius, in strategy or anywhere, lies in self-control, self-mastery, presence of mind and fluidity of thought.", author: "Robert Greene" },
    { text: "There is absolutely nothing you're supposed to be doing.", author: "Eckhart Tolle" },
    { text: "The only way to do great work is to love what you do. - Steve Jobs", author: "Steve Jobs" },
]

export default function QuotesPage() {
    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            <div className="space-y-8">
                {quotes.map((quote, index) => (
                    <QuoteCard key={index} {...quote} />
                ))}
            </div>
        </div>
    )
}

function QuoteCard({ text, author }: { text: string, author: string }) {
    return (
        <div className="flex flex-col items-end">
            <LightText className="text-[#9c9292] self-start">"{text}"</LightText>
            <CustomLink
                href={`https://www.google.com/search?q=${author}`}
                target="_blank"
                className="text-md">- {author}</CustomLink>
        </div>
    )
}