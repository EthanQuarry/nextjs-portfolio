import { SidebarNavItem, SiteConfig } from "@/types";

const site_url = process.env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
    name: "Solution Lair",
    description:
        "SolutionLair",
    url: site_url || "http://localhost:3000",
    ogImage: `${site_url}/_static/og.jpg`,
    links: {
        twitter: "http://localhost:3000",
        github: "http://localhost:3000",
    },
    mailSupport: "dev.ethanquarry@gmail.com",
};

export const footerLinks: SidebarNavItem[] = [
    {
        title: "Solution Lair",
        items: [
            { title: "About", href: "#" },
            { title: "Enterprise", href: "#" },
            { title: "Terms", href: "/terms" },
            { title: "Privacy", href: "/privacy" },
        ],
    },
    {
        title: "Product",
        items: [
            { title: "Security", href: "#" },
            { title: "Customization", href: "#" },
            { title: "Customers", href: "#" },
            { title: "Changelog", href: "#" },
        ],
    },
    {
        title: "Docs",
        items: [
            { title: "Introduction", href: "#" },
            { title: "Installation", href: "#" },
            { title: "Components", href: "#" },
            { title: "Code Blocks", href: "#" },
        ],
    },
];
