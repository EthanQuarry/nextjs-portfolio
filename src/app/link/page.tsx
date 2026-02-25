import Image from 'next/image'
import Link from 'next/link'

export default function LinkPage() {
    const links = [
        {
            category: 'VC',
            title: 'How to start your own VC fund',
            link: 'https://www.nfx.com/post/how-to-start-your-own-vc-fund',
            image: '/images/BG-3.png',
            date: 'Oct 2024'
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
                        <div className="overflow-hidden rounded-lg">
                            <Image
                                src={item.image}
                                alt={item.title}
                                className="object-cover w-full opacity-80 group-hover:opacity-100 transition-opacity"
                                width={620}
                                height={320}
                            />
                        </div>
                        <p className="text-[11px] uppercase tracking-[0.1em] text-[#333] mt-2">
                            {item.category}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
