'use client';
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import RecentPosts from "@/components/content/posts";
import Achievements from "@/components/content/achievements";
import SectionWithOffset from "@/components/shared/section-offset-title";
import { allPosts, Post as ContentLayerPost } from 'contentlayer/generated'
import { Post } from '@/types/index'
import { compareDesc } from 'date-fns';
import Navbar from "@/components/ui/navbar";
import CustomLink from "@/components/ui/link";

export default function Home() {
  const posts: Post[] = allPosts.map(post => ({
    ...post,
    body: { raw: post.body?.raw ?? '', html: post.body?.html ?? '' }
  })).sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  return (
    <main className="">
      <SectionWithOffset title="Bio">
        <p className="mb-4 font-semibold">Hi, I'm Ethan – a seventeen year old software engineer living in Ireland.</p>
        <p className="mb-4">I'm currently trying to land a fulltime software engineering role, so I can nail it to the top of my <CustomLink href="https://mit.edu">MIT</CustomLink>/<CustomLink href="https://stanford.edu">Standford</CustomLink> application.</p>
        <p className="mb-4">Once I have a fulltime role, I'll spend the next 6-8 months building my own startup in my free time with the goal of getting acquired as soon as possible, similiar to <CustomLink href="https://brev.dev" target="_blank">Brev.dev</CustomLink> so I can have a strong chance of getting into a top university.</p>
        <p>Don't worry I'm not all ambition and no action, I've got a pretty good plan.</p>
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
  );
}