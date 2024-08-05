'use client';
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import RecentPosts from "@/components/content/posts";
import Achievements from "@/components/content/achievements";
import SectionWithOffset from "@/components/shared/section-offset-title";
import { allPosts, Post as ContentLayerPost } from 'contentlayer/generated'
import { Post } from '@/types/index'
import { compareDesc } from 'date-fns';
import Navbar from "@/components/ui/navbar";

export default function Home() {
  const posts: Post[] = allPosts.map(post => ({
    ...post,
    body: { raw: post.body?.raw ?? '', html: post.body?.html ?? '' }
  })).sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  return (
    <MaxWidthWrapper className="flex flex-col items-center justify-between py-24">
      <header className="text-center mb-6">
        <Navbar />
      </header>
      <main className="w-full max-w-2xl">
        <SectionWithOffset title="Bio">
          <p className="mb-4 font-semibold">Hi, I'm Ethan – a seventeen year old software engineer.</p>
          <p className="mb-4">I'm currently building <a href="#" className="text-accent-rgb">Overtone</a>, a local-first music app that unifies your music library across various streaming services (Spotify, Youtube, ...) and personal collections.</p>
          <p className="mb-4">I love the craft of software engineering and run the <a href="#" className="text-accent-rgb">localfirst.fm podcast</a>. I'm also involved in the <a href="#" className="text-accent-rgb">Effect</a> TypeScript ecosystem. Previously, I founded <a href="#" className="text-accent-rgb">Prisma</a> with the goal to make working with databases easier.</p>
          <p>I also enjoy <a href="#" className="text-accent-rgb">helping founders</a> on their journeys building developer-focussed products and companies.</p>
        </SectionWithOffset>

        <SectionWithOffset title="Posts">
          <RecentPosts posts={posts} onPostView={() => { }} />
        </SectionWithOffset>

        <SectionWithOffset
          title="Achievements"
        >
          <Achievements achievements={[
            { title: "voxelize", description: "build your own minecraft in < 500 lines of code", link: "#" },
            { title: "typehere.app", description: "textarea with vim (with workspaces and ⌘ K)", link: "#" },
            { title: "inko.cat", description: "building blocks for productivity w/ @guo_hq", link: "#" },
            { title: "DMCA copyright strike from Microsoft", description: "2.8k stars!!", link: "#" },
          ]} />
        </SectionWithOffset>
      </main>
    </MaxWidthWrapper>
  );
}