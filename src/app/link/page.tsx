import Image from 'next/image'
import Link from 'next/link'

export default function LinkPage() {
    const links = [
        {
            category: 'Talk',
            title: 'Patch Demo Day — building Jake',
            link: 'https://www.youtube.com/watch?v=1h8588WXh-U',
            date: 'Aug 2026'
        }
    ]
    return (
        <div className="w-full">
            <p className="text-[11px] uppercase tracking-[0.15em] text-[#444] mb-8 font-medium">
                Links
            </p>
            <div className="space-y-8">
                {links.map((item, index) => (
                    <Link
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block group"
                    >
                        <div className="flex items-baseline justify-between mb-3">
                            <h3 className="text-[15px] text-[#ededed] group-hover:text-white transition-colors">
                                {item.title}
                            </h3>
                            <span className="text-[12px] text-[#333] shrink-0 ml-4">
                                {item.date}
                            </span>
                        </div>
                        {'image' in item && typeof item.image === 'string' && (
                            <div className="overflow-hidden rounded-lg">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    className="object-cover w-full opacity-80 group-hover:opacity-100 transition-opacity"
                                    width={620}
                                    height={320}
                                />
                            </div>
                        )}
                        <p className="text-[11px] uppercase tracking-[0.1em] text-[#333] mt-2">
                            {item.category}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
