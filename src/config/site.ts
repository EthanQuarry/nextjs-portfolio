import { SiteConfig } from "@/types";

const site_url = process.env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
    name: "Ethan Quarry",
    description:
        "Software engineer turned operator. Full-stack and AI engineering, growth and funnel analytics. Dublin, Ireland.",
    url: site_url || "https://ethanquarry.com",
    ogImage: `${site_url}/_static/og.jpg`,
    links: {
        twitter: "https://www.linkedin.com/in/ethanquarry",
        github: "https://github.com/EthanQuarry",
    },
    mailSupport: "me@ethanquarry.com",
};
