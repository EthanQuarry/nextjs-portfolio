'use client';
import RecentPosts from "@/components/content/posts";
import Achievements from "@/components/content/achievements";
import { allPosts } from 'contentlayer/generated';
import { Post } from '@/types/index';
import { compareDesc, differenceInMonths } from 'date-fns';
import Link from 'next/link';

const POPCORN_START = new Date('2025-09-01');

export default function Home() {
  const posts: Post[] = allPosts.map(post => ({
    ...post,
    body: { raw: post.body?.raw ?? '', html: post.body?.raw ?? '' }
  })).sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  const popcornMonths = differenceInMonths(new Date(), POPCORN_START);

  return (
    <main className="w-full">
      {/* Bio */}
      <section className="mb-16">
        <p className="font-serif text-[16px] leading-[1.8] text-[#999]">
          Nineteen-year-old software engineer studying at Trinity College Dublin.
          I like programming &amp; selling. Currently {popcornMonths} months in as a growth engineer
          at{' '}
          <Link
            href="https://www.popcorn.space"
            target="_blank"
            className="text-[#ccc] hover:text-white transition-colors border-b border-[#333] hover:border-[#666]"
          >
            Popcorn
          </Link>.
        </p>
      </section>

      {/* Featured Project */}
      <section className="mb-20">
        <p className="text-[11px] uppercase tracking-[0.15em] text-[#444] mb-6 font-medium">
          Featured Project
        </p>

        <h2 className="text-[22px] font-semibold text-white tracking-[-0.02em] mb-1">
          OrbitalShield
        </h2>
        <p className="text-[13px] text-[#555] mb-8">
          3rd place at HackEurope 2026 &middot; &euro;2,000 from Susquehanna International Group &middot; 30 hours
        </p>

        <div className="space-y-4 font-serif text-[15px] text-[#888] leading-[1.85]">
          <p>
            30 hours, countless bugs, five concurrent ClaudeCode instances and one of
            the coolest demos ever.
          </p>
          <p>
            Today, ~11,000 satellites are actively operating in orbit. Within four years,
            that number is projected to exceed 100,000. But the number of operators
            monitoring them? Roughly the same. Satellite operations are still largely
            manual &mdash; critical decisions like anomaly response, collision avoidance,
            and intent analysis are made by small teams while orbital environments get
            denser by the month.
          </p>
          <p className="text-[#ddd]">
            So we built something to change that.
          </p>
          <p>
            OrbitalShield is a real-time space defence platform that fuses live orbital
            data from SpaceTrack, runs it through Bayesian threat scoring, and deploys a
            multi-agent AI pipeline to detect, analyse, and recommend responses to hostile
            satellite behaviour.
          </p>
          <p>
            In our demo, a Chinese satellite executes an unannounced manoeuvre toward a US
            reconnaissance asset. OrbitalShield flags the orbit change, pulls 730 days of
            TLE history, cross-references five intelligence databases, classifies the
            threat &mdash; and executes a trajectory manoeuvre before a human operator
            would have finished reading the alert. All rendered on a 3D globe with live
            trajectories, threat lines, and an AI console showing the agents&apos;
            reasoning in real time.
          </p>
        </div>

        <p className="mt-6 text-[12px] text-[#333]">
          Ethan Quarry &middot; Harper Dammann Smith &middot; Prince K &middot; William Fahie
        </p>

        <Link
          href="http://52.31.207.242/"
          target="_blank"
          className="inline-flex items-center gap-1.5 text-[13px] text-[#999] hover:text-white transition-colors mt-3 border-b border-[#333] hover:border-[#666] pb-px"
        >
          Try the demo
          <span className="text-[10px]">&#8599;</span>
        </Link>
      </section>

      {/* Writing */}
      <section className="mb-20">
        <p className="text-[11px] uppercase tracking-[0.15em] text-[#444] mb-6 font-medium">
          Writing
        </p>
        <RecentPosts posts={posts} onPostView={() => { }} />
      </section>

      {/* Highlights */}
      <section className="mb-20">
        <p className="text-[11px] uppercase tracking-[0.15em] text-[#444] mb-6 font-medium">
          Highlights
        </p>
        <Achievements achievements={[
          { title: "HackEurope 2026", description: "3rd place with OrbitalShield, €2K from SIG", link: "https://www.hackeurope.com/" },
          { title: "Popcorn", description: `Growth engineer, ${popcornMonths} months`, link: "https://www.popcorn.space" },
          { title: "Cyntex.ai", description: "AI Receptionist startup ($40K+ in credits)", link: "https://cyntex.ai" },
          { title: "YC AI Startup School", description: "Cool talks, met Sam Altman", link: "https://www.linkedin.com/posts/ethanquarry_what-a-fcking-week-from-meeting-sam-altman-activity-7341316035012104192-jZjQ" },
          { title: "HackIreland", description: "Selected from 500+ applicants (27% acceptance)", link: "https://hackireland.com" },
          { title: "Naviro", description: "Ex-Software Engineer", link: "https://naviro.ai" },
          { title: "NDRC Winner", description: "Startup sprint, Web Summit 2025 tickets", link: "https://www.linkedin.com/posts/cajbarrett_congratulations-to-the-winners-from-the-activity-7294664796350664705-eKw5" },
          { title: "Nextgrade", description: "EdTech startup founder", link: "https://www.tella.tv/video/nextgrade-intro-video-btjh" },
          { title: "100m Sprint", description: "7th fastest U18 in Ireland at 15", link: "#" },
          { title: "Munster Rugby", description: "Played underage until injuries", link: "https://www.munsterrugby.ie/" },
        ]} />
      </section>
    </main>
  );
}
