'use client';
import RecentPosts from "@/components/content/posts";
import Achievements from "@/components/content/achievements";
import SectionWithOffset from "@/components/shared/section-offset-title";
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
    <main className="relative z-10">
      {/* Bio */}
      <section className="animate-fade-in">
        <SectionWithOffset title="Bio">
          <p className="mb-3 font-medium text-[15px] leading-relaxed">
            Hi, I&apos;m Ethan – a nineteen-year-old software engineer studying at Trinity College Dublin.
          </p>
          <p className="text-[15px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            I like programming &amp; selling. Currently 5 months in as a growth engineer at{' '}
            <Link href="https://www.popcorn.space" target="_blank" className="custom-underline" style={{ color: 'var(--text-primary)' }}>
              Popcorn
            </Link>.
          </p>
        </SectionWithOffset>
      </section>

      {/* Featured Project */}
      <section className="animate-fade-in-delay-1">
        <SectionWithOffset title="Featured">
          <div className="card-glow">
            <div className="gradient-border-card p-6">
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <h2 className="text-lg font-semibold tracking-tight mb-1">
                    OrbitalShield
                  </h2>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                    aka &ldquo;Space Palantir&rdquo;
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="badge badge-accent">3rd Place</span>
                  <span className="badge">HackEurope 2026</span>
                </div>
              </div>

              {/* Metrics row */}
              <div className="flex flex-wrap gap-4 mb-5 py-3 border-y" style={{ borderColor: 'var(--border)' }}>
                <div>
                  <p className="text-xs uppercase tracking-wider mb-1" style={{ color: 'var(--text-muted)' }}>Prize</p>
                  <p className="text-sm font-semibold metric gradient-text">&euro;2,000</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider mb-1" style={{ color: 'var(--text-muted)' }}>Sponsor</p>
                  <p className="text-sm font-medium">Susquehanna International Group</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider mb-1" style={{ color: 'var(--text-muted)' }}>Duration</p>
                  <p className="text-sm font-medium">30 hours</p>
                </div>
              </div>

              {/* Story */}
              <div className="space-y-3 text-[14px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                <p>
                  30 hours, countless bugs, five concurrent ClaudeCode instances and one of the coolest demos ever.
                </p>
                <p>
                  Today, ~11,000 satellites are actively operating in orbit. Within four years, that number is projected to exceed 100,000. But the number of operators monitoring them? Roughly the same. Satellite operations are still largely manual — critical decisions like anomaly response, collision avoidance, and intent analysis are made by small teams while orbital environments get denser by the month.
                </p>
                <p style={{ color: 'var(--text-primary)' }}>
                  So we built something to change that.
                </p>
                <p>
                  OrbitalShield is a real-time space defence platform that fuses live orbital data from SpaceTrack, runs it through Bayesian threat scoring, and deploys a multi-agent AI pipeline to detect, analyse, and recommend responses to hostile satellite behaviour.
                </p>
                <p>
                  In our demo, a Chinese satellite executes an unannounced manoeuvre toward a US reconnaissance asset. OrbitalShield flags the orbit change, pulls 730 days of TLE history, cross-references five intelligence databases, classifies the threat — and executes a trajectory manoeuvre before a human operator would have finished reading the alert. All rendered on a 3D globe with live trajectories, threat lines, and an AI console showing the agents&apos; reasoning in real time.
                </p>
              </div>

              {/* Team */}
              <div className="mt-5 pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                <p className="text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>Team</p>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Ethan Quarry, Harper Dammann Smith, Prince K &amp; William Fahie
                </p>
              </div>

              {/* Demo link */}
              <div className="mt-5">
                <Link
                  href="https://lnkd.in/ee4a4j7m"
                  target="_blank"
                  className="demo-link"
                >
                  Try the demo
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </SectionWithOffset>
      </section>

      <div className="section-divider" />

      {/* Posts */}
      <section className="animate-fade-in-delay-2">
        <SectionWithOffset title="Posts">
          <RecentPosts posts={posts} onPostView={() => { }} />
        </SectionWithOffset>
      </section>

      {/* Achievements */}
      <section className="animate-fade-in-delay-3">
        <SectionWithOffset title="Highlights">
          <Achievements achievements={[
            { title: "HackEurope 2026", description: "3rd place with OrbitalShield — real-time space defence platform. €2,000 from Susquehanna International Group", link: "https://lnkd.in/ee4a4j7m" },
            { title: "Popcorn", description: "Growth engineer, 5 months and counting", link: "https://www.popcorn.space" },
            { title: "Cyntex.ai", description: "Building an AI Receptionist startup ($40K+ in credits from AWS, ElevenLabs, Anthropic)", link: "https://cyntex.ai" },
            { title: "YC AI Startup School", description: "Cool talks, met loads of fun people (and Sam Altman)", link: "https://www.linkedin.com/posts/ethanquarry_what-a-fcking-week-from-meeting-sam-altman-activity-7341316035012104192-jZjQ" },
            { title: "HackIreland", description: "Selected from 500+ applicants for Ireland's first national hackathon (27% acceptance rate)", link: "https://hackireland.com" },
            { title: "EX-Software Engineer", description: "@ Naviro", link: "https://naviro.ai" },
            { title: "Hackathon Winner", description: "Won an NDRC startup sprint — got tickets to Web Summit 2025", link: "https://www.linkedin.com/posts/cajbarrett_congratulations-to-the-winners-from-the-activity-7294664796350664705-eKw5" },
            { title: "Founder", description: "Of an EdTech startup (Nextgrade)", link: "https://www.tella.tv/video/nextgrade-intro-video-btjh" },
            { title: "100m", description: "At some point was the 7th fastest U18 in Ireland at 15", link: "#" },
            { title: "Munster Rugby", description: "Played with the Munster rugby underage until crippling injuries set in", link: "https://www.munsterrugby.ie/" },
          ]} />
        </SectionWithOffset>
      </section>
    </main>
  );
}
