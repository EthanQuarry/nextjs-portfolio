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
        <p className="mb-4">I'm currently working @ <CustomLink href="https://naviro.io">Naviro</CustomLink> to build the AI agent for audiences.</p>
        <p className="mb-4">After <CustomLink href="https://hackireland.com">HackIreland</CustomLink>, I'm now working on building automated internal documentation after an engineering manager @ <CustomLink href="https://www.tines.com/blog/series-c-fundraise/">Tines</CustomLink> said they would use the product I pitched.</p>
        <p className="mb-4">But for the moment I'm really focusing on work and making sure I provide the best ROI for them hiring an 18 year old.</p>
      </SectionWithOffset>


      <SectionWithOffset title="Posts">
        <RecentPosts posts={posts} onPostView={() => { }} />
      </SectionWithOffset>

      <SectionWithOffset
        title="Achievements"
      >
        <Achievements achievements={[
          { title: "HackIreland", description: "Selected for Ireland's first national hackathon from a competitive pool of 500+ university applicants, despite not being a college student (27% acceptance rate)", link: "https://hackireland.com" },
          { title: "Software Engineer", description: "Working @ Naviro with the best team in the world", link: "#" },
          { title: "Hackathon Winner", description: "Won an NDRC startup sprint competition which got me tickets to web summit 2025", link: "https://www.linkedin.com/posts/cajbarrett_congratulations-to-the-winners-from-the-activity-7294664796350664705-eKw5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEJ33zIBaC4DVxVEKgGaoO7n5UrAiLzr8Tc" },
          { title: "Founder", description: "Of an EdTech startup", link: "https://studypoo.ie" },
          { title: "100m", description: "At some point was the 7th fastest U18 in Ireland at 15", link: "#" },
          { title: "Munster Rugby", description: "Played with the munster rugby underage until crippling injuries set in", link: "https://www.munsterrugby.ie/" },
        ]} />
      </SectionWithOffset>
    </main>
  );
}
