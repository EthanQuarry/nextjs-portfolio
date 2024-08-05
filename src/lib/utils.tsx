import { Metadata } from "next";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { siteConfig } from "@/config/site";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function constructMetadata({
    title = siteConfig.name,
    description = siteConfig.description,
    icons = "/favicon.ico",
    noIndex = false,
}: {
    title?: string;
    description?: string;
    image?: string;
    icons?: string;
    noIndex?: boolean;
} = {}): Metadata {
    return {
        title,
        description,
        keywords: [
            "Next.js",
            "Portfolio",
            "Blog",
            "Software Engineer"
        ],
        authors: [
            {
                name: "ethanldq",
            },
        ],
        creator: "ethanldq",
        openGraph: {
            type: "website",
            locale: "en_IE",
            url: siteConfig.url,
            title,
            description,
            siteName: title,
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            creator: "@ethanldq",
        },
        icons,
        metadataBase: new URL(siteConfig.url),
        manifest: `${siteConfig.url}/site.webmanifest`,
        ...(noIndex && {
            robots: {
                index: false,
                follow: false,
            },
        }),
    };
}

export function formatDate(input: string | number): string {
    const date = new Date(input);
    return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
}

export function absoluteUrl(path: string) {
    return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}


export function capitalize(str: string) {
    if (!str || typeof str !== "string") return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const truncate = (str: string, length: number) => {
    if (!str || str.length <= length) return str;
    return `${str.slice(0, length)}...`;
};

export const getBlurDataURL = async (url: string | null) => {
    if (!url) {
        return "data:image/webp;base64,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=";
    }

    if (url.startsWith("/_static/")) {
        url = `${siteConfig.url}${url}`;
    }

    try {
        const response = await fetch(
            `https://wsrv.nl/?url=${url}&w=50&h=50&blur=5`,
        );
        const buffer = await response.arrayBuffer();
        const base64 = Buffer.from(buffer).toString("base64");

        return `data:image/png;base64,${base64}`;
    } catch (error) {
        return "data:image/webp;base64,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=";
    }
};

export const placeholderBlurhash =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAoJJREFUWEfFl4lu4zAMRO3cx/9/au6reMaOdkxTTl0grQFCRoqaT+SQotq2bV9N8rRt28xms87m83l553eZ/9vr9Wpkz+ezkT0ej+6dv1X81AFw7M4FBACPVn2c1Z3zLgDeJwHgeLFYdAARYioAEAKJEG2WAjl3gCwNYymQQ9b7/V4spmIAwO6Wy2VnAMikBWlDURBELf8CuN1uHQSrPwMAHK5WqwFELQ01AIXdAa7XawfAb3p6AOwK5+v1ugAoEq4FRSFLgavfQ49jAGQpAE5wjgGCeRrGdBArwHOPcwFcLpcGU1X0IsBuN5tNgYhaiFFwHTiAwq8I+O5xfj6fOz38K+X/fYAdb7fbAgFAjIJ6Aav3AYlQ6nfnDoDz0+lUxNiLALvf7XaDNGQ6GANQBKR85V27B4D3QQRw7hGIYlQKWGM79hSweyCUe1blXhEAogfABwHAXAcqSYkxCtHLUK3XBajSc4Dj8dilAeiSAgD2+30BAEKV4GKcAuDqB4TdYwBgPQByCgApUBoE4EJUGvxUjF3Q69/zLw3g/HA45ABKgdIQu+JPIyDnisCfAxAFNFM0EFNQ64gfS0EUoQP8ighrZSjn3oziZEQpauyKbfjbZchHUL/3AS/Dd30gAkxuRACgfO+EWQW8qwI1o+wseNuKcQiESjALvwNoMI0TcRzD4lFcPYwIM+JTF5x6HOs8yI7jeB5oKhpMRFH9UwaSCDB2Jmg4rc6E2TT0biIaG0rQhNqyhpHBcayTTSXH6vcDL7/sdqRK8LkwTsU499E8vRcAojHcZ4AxABdilgrp4lsXk8oVqgwh7+6H3phqd8J0Kk4vbx/+sZqCD/vNLya/5dT9fAH8g1WdNGgwbQAAAABJRU5ErkJggg==";