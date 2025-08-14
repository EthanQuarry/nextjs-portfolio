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
        <p className="mb-4">I like programming</p>
      </SectionWithOffset>


      <SectionWithOffset title="Posts">
        <RecentPosts posts={posts} onPostView={() => { }} />
      </SectionWithOffset>

      <SectionWithOffset
        title="Achievements"
      >
        <Achievements achievements={[
          { title: "YC AI Startup School", description: "cool talks met loads of fun people", link: "https://www.linkedin.com/posts/ethanquarry_what-a-fcking-week-from-meeting-sam-altman-activity-7341316035012104192-jZjQ?utm_source=share&utm_medium=member_ios&rcm=ACoAAEJ33zIBaC4DVxVEKgGaoO7n5UrAiLzr8Tc" },
          { title: "Grantee", description: "25k AWS credits, dm if you want some claude credits", link: "https://www.tella.tv/video/nextgrade-intro-video-btjh" },
          { title: "HackIreland", description: "Selected for Ireland's first national hackathon from a competitive pool of 500+ university applicants, despite not being a college student (27% acceptance rate)", link: "https://hackireland.com" },
          { title: "Software Engineer", description: "@ Naviro", link: "https://naviro.ai" },
          { title: "Hackathon Winner", description: "Won an NDRC startup sprint competition which got me tickets to web summit 2025", link: "https://www.linkedin.com/posts/cajbarrett_congratulations-to-the-winners-from-the-activity-7294664796350664705-eKw5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEJ33zIBaC4DVxVEKgGaoO7n5UrAiLzr8Tc" },
          { title: "Founder", description: "Of an EdTech startup", link: "https://www.tella.tv/video/nextgrade-intro-video-btjh" },
          { title: "100m", description: "At some point was the 7th fastest U18 in Ireland at 15", link: "#" },
          { title: "Munster Rugby", description: "Played with the munster rugby underage until crippling injuries set in", link: "https://www.munsterrugby.ie/" },
        ]} />
      </SectionWithOffset>
    </main>
  );
}
