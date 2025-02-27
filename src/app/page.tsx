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
        <p className="mb-4 font-semibold">Hi, I'm Ethan – an eighteen-year-old software engineer based in Ireland.</p>
        <p className="mb-4">I'm currently working with the awesome team @ <CustomLink href="https://naviro.io">Naviro</CustomLink> to build the AI agent for audiences.</p>
        <p className="mb-4">After <CustomLink href="https://hackireland.com">HackIreland</CustomLink>, I'm now working on building automated internal documentation after an engineering manager @ <CustomLink href="https://tines.com">Tines</CustomLink> said they would use the product I pitched.</p>
        <p className="mb-4">But for the moment I'm really focusing on work and making sure I provide the best ROI for them hiring an 18 year old.</p>
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
          { title: "Software Engineer", description: "Not hired but passed all the technical assessments :(", link: "#" },
          { title: "Founder", description: "Of a net negative startup 💪", link: "https://studypoo.ie" },
        ]} />
      </SectionWithOffset>
    </main>
  );
}