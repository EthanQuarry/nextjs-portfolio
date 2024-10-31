import SectionWithOffset from '@/components/shared/section-offset-title';
import Image from 'next/image'

export default function LinkPage() {
    const links = [
        {
            oneWord: 'VC',
            title: 'How to start your own VC fund',
            link: 'https://www.nfx.com/post/how-to-start-your-own-vc-fund',
            image: '/images/BG-3.png',
            date: 'Oct 2024'
        }
    ]
    return (
        <div className="mx-auto max-w-xl">
            <ul className="space-y-4">
                {links.map((item, index) => (
                    <li key={index} className="rounded-xl ">
                        <SectionWithOffset title={item.oneWord}>
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
                                <div className="flex justify-between pb-4">
                                    <h3 className="font-semibold text-lg ">{item.title} </h3>
                                    <span>{item.date}</span>
                                </div>

                                <Image
                                    src={item.image}
                                    alt={item.title}

                                    className="object-cover"
                                    width={500}
                                    height={500}
                                />

                            </a>
                        </SectionWithOffset>
                    </li>
                ))}
            </ul>
        </div>
    );
}