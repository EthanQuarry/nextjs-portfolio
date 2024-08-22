'use client';
import RecentPosts from "@/components/content/posts";
import Achievements from "@/components/content/achievements";
import SectionWithOffset from "@/components/shared/section-offset-title";
import { allPosts } from 'contentlayer/generated';
import { Post } from '@/types/index';
import { compareDesc } from 'date-fns';
import CustomLink from "@/components/ui/link";

export default function Home() {
  const posts: Post[] = allPosts.map(post => ({
    ...post,
    body: { raw: post.body?.raw ?? '', html: post.body?.raw ?? '' }
  })).sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  return (
    <main className="">
      <SectionWithOffset title="Bio">
        <p className="mb-4 font-semibold">Hi, I'm Ethan – a seventeen year old software engineer living in Ireland.</p>
        <p className="mb-4">I just landed a software engineering role at a funded startup (contract), so I can now nail it to the top of my <CustomLink href="https://mit.edu">MIT</CustomLink>/<CustomLink href="https://stanford.edu">Standford</CustomLink> application.</p>
        <p className="mb-4">Now, I plan spend the next 6-8 months building my own startup in my free time with the goal of getting acquired as soon as possible, similiar to <CustomLink href="https://brev.dev" target="_blank">Brev.dev</CustomLink> so I can have a strong chance of getting into a top university.</p>
        <p>Don't worry I'm not all ambition and no action, I've got a pretty good plan.</p>
      </SectionWithOffset>

      <SectionWithOffset title="Posts">
        <RecentPosts posts={posts} onPostView={() => { }} />
      </SectionWithOffset>

      <SectionWithOffset
        title="Achievements"
      >
        <Achievements achievements={[
          { title: "100m", description: "At some point was the 7th fastest U18 in Ireland at 15", link: "#" },
          { title: "Martial Artist", description: "Somehow got a black belt in KSW at 11", link: "https://www.kuksoolwon.com/" },
          { title: "Munster Rugby", description: "Played with the munster rugby underage until crippling injuries set in", link: "https://www.munsterrugby.ie/" },
          { title: "Software Engineer", description: "At 17, will know for sure on the 16/08/24, hopefully 🤞 (#confirmed we got the job)", link: "#" },
        ]} />
      </SectionWithOffset>
    </main>
  );
}