import Link from 'next/link';

const quotes = [
    { text: "Do not despair. I know you will not despair. You have a manly and a proud heart. A proud heart can survive failure because such a failure does not prick its pride. It is more difficult and more bitter when a man fails alone.", author: "Chinua Achebe" },
    { text: "You must assume responsibility for what you believe.", author: "Richard W. Hamming" },
    { text: "Do birds trust the branch on which they land or do they trust their wings, I have never seen a branch break and the bird die, therefore trust your wings.", author: "Random Old Guy" },
    { text: "True genius, in strategy or anywhere, lies in self-control, self-mastery, presence of mind and fluidity of thought.", author: "Robert Greene" },
    { text: "There is absolutely nothing you're supposed to be doing.", author: "Eckhart Tolle" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "The unexamined life is not worth living.", author: "Socrates" },
    { text: "A smooth sea never made a skilled sailor.", author: "Roosevelt" },
    { text: "One of the most powerful lessons failure teaches is how fast uninformed optimisim turns into informed pessimism.", author: "Ethan" },
]

export default function QuotesPage() {
    return (
        <div className="w-full">
            <p className="text-[11px] uppercase tracking-[0.15em] text-[#444] mb-8 font-medium">
                Quotes
            </p>
            <div className="space-y-10">
                {quotes.map((quote, index) => (
                    <QuoteCard key={index} {...quote} />
                ))}
            </div>
        </div>
    )
}

function QuoteCard({ text, author }: { text: string, author: string }) {
    return (
        <div>
            <p className="font-serif text-[15px] leading-[1.85] text-[#888] italic">
                &ldquo;{text}&rdquo;
            </p>
            <Link
                href={`https://www.google.com/search?q=${author}`}
                target="_blank"
                className="text-[13px] text-[#555] hover:text-[#999] transition-colors mt-2 inline-block"
            >
                &mdash; {author}
            </Link>
        </div>
    )
}
