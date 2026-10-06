'use client';
import RecentPosts from "@/components/content/posts";
import Achievements from "@/components/content/achievements";
import Experience from "@/components/content/experience";
import { allPosts } from 'contentlayer/generated';
import { Post } from '@/types/index';
import { compareDesc } from 'date-fns';
import Link from 'next/link';

export default function Home() {
  const posts: Post[] = allPosts.map(post => ({
    ...post,
    body: { raw: post.body?.raw ?? '', html: post.body?.raw ?? '' }
  })).sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <main className="w-full">
      {/* Bio */}
      <section className="mb-16">
        <p className="font-serif text-[16px] leading-[1.8] text-[#999]">
          Software engineer turned operator. Trained in full-stack and AI engineering
          &mdash; TypeScript, Next.js, Python, AWS serverless &mdash; and now equally at
          home in growth, funnel analytics and the product decisions in between. Shipped
          production LLM agents at three startups before turning 20, most recently{' '}
          <Link
            href="https://tryjake.ai"
            target="_blank"
            className="text-[#ccc] hover:text-white transition-colors border-b border-[#333] hover:border-[#666]"
          >
            Jake
          </Link>
          , built at{' '}
          <Link
            href="https://joinpatch.org"
            target="_blank"
            className="text-[#ccc] hover:text-white transition-colors border-b border-[#333] hover:border-[#666]"
          >
            Patch
          </Link>
          . Left Trinity College Dublin to work full-time. Open to what&apos;s next &mdash;{' '}
          <Link
            href="mailto:me@ethanquarry.com"
            className="text-[#ccc] hover:text-white transition-colors border-b border-[#333] hover:border-[#666]"
          >
            me@ethanquarry.com
          </Link>
          .
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

      {/* Experience */}
      <section className="mb-20">
        <p className="text-[11px] uppercase tracking-[0.15em] text-[#444] mb-6 font-medium">
          Experience
        </p>
        <Experience roles={[
          {
            company: "microagi",
            role: "Founders Associate (work trial)",
            place: "London",
            dates: "Aug 2026",
            description: "Nine days on-site at an industrial robotics startup that raised a $55M seed in July 2026, the largest in German history. Worked on orchestration of vision-language-action agents for robot deployment, and implemented funnel tracking across the app to cut cost per lead. Project specifics are under NDA.",
          },
          {
            company: "Patch",
            link: "https://joinpatch.org",
            role: "Founder, Summer Programme",
            place: "Dublin",
            dates: "Jul — Aug 2026",
            description: "Selected for Ireland's programme for exceptional young technologists, backed by OpenAI and Stripe. Built Jake, an AI support agent that configures itself from a company's docs and ticket history and resolves routine tickets. Presented at Demo Day; drew inbound interest from companies including Manna.",
          },
          {
            company: "Popcorn",
            role: "Growth / Software Engineer",
            place: "New York, remote",
            dates: "Oct 2025 — May 2026",
            description: "Built and deployed a production customer support agent serving 1,100 customers with real-time responses, using semantic search and multi-layer agent orchestration. Optimised Meta ad event tracking, cutting cost per lead from roughly $200 to roughly $30, and set up the monitoring that kept both stable in production.",
          },
          {
            company: "Naviro",
            link: "https://naviro.ai",
            role: "Software Engineer",
            place: "Cork",
            dates: "Jan — Jun 2025",
            description: "Full-stack development with a distributed team on SST and Next.js. Designed the AI chat interface, built the pipeline that replicates a user's tone of voice on Twitter, wrote end-to-end tests in Playwright, and redesigned onboarding to improve activation.",
          },
          {
            company: "NextGrade",
            link: "https://www.tella.tv/video/nextgrade-intro-video-btjh",
            role: "Founder",
            place: "Cork",
            dates: "Sep 2024 — Jan 2025",
            description: "Designed and built an AI tutoring site for Leaving Cert maths. Grew it to 120 users and €400 ARR at 17. The launch video landed my first engineering job, with no degree.",
          },
        ]} />
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
          { title: "Cyntex.ai", description: "AI Receptionist startup ($40K+ in credits)", link: "https://cyntex.ai" },
          { title: "YC AI Startup School", description: "One of 2,000 from CS students worldwide (10% acceptance)", link: "https://www.linkedin.com/posts/ethanquarry_what-a-fcking-week-from-meeting-sam-altman-activity-7341316035012104192-jZjQ" },
          { title: "HackIreland", description: "Selected from 500+ applicants; pitched to the Tines engineering team", link: "https://hackireland.com" },
          { title: "Open source", description: "31 public repositories, including jarbis (Go)", link: "https://github.com/EthanQuarry" },
          { title: "NDRC Winner", description: "Startup Sprint, won against 30+ teams", link: "https://www.linkedin.com/posts/cajbarrett_congratulations-to-the-winners-from-the-activity-7294664796350664705-eKw5" },
          { title: "100m Sprint", description: "7th fastest U18 in Ireland at 15", link: "#" },
          { title: "Munster Rugby", description: "Played underage until injuries", link: "https://www.munsterrugby.ie/" },
        ]} />
      </section>
    </main>
  );
}
