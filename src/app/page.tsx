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
        <p className="mb-4">After landing a role at a funded startup, I've now ventured into building my own project, driven by the ambition to scale it into something remarkable for my <CustomLink href="https://stanford.edu">Stanford</CustomLink> application.</p>
        <p className="mb-4">For the next 6-8 months, I'll be focused on growing this startup, with an eye on creating something acquisition-worthy. I’ve already seen promising early interest from notable figures, hinting that the potential is there.</p>
        <p className="mb-4">If things continue on this trajectory, who knows what might be next… 🫨</p>
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