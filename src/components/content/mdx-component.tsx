import * as React from "react";
import NextImage, { ImageProps } from "next/image";
import Link from "next/link";
import { useMDXComponent } from "next-contentlayer2/hooks";

import { cn } from "@/lib/utils";

import { MdxCard } from "./mdx-card";
import BlurImage from "../shared/blur-image";
import { Callout } from "../shared/callout";
import { CopyButton } from "../shared/copy-button";

const components: Record<string, React.ComponentType<any>> = {
    h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h1
            className={cn(
                "mt-2 scroll-m-20 text-[22px] font-sans font-semibold tracking-[-0.02em] text-white",
                className
            )}
            {...props}
        />
    ),
    h2: ({ className, ...props }) => (
        <h2
            className={cn(
                "mt-10 scroll-m-20 border-b border-[#1a1a1a] pb-2 text-[18px] font-sans font-semibold tracking-[-0.01em] text-white first:mt-0",
                className,
            )}
            {...props}
        />
    ),
    h3: ({ className, ...props }) => (
        <h3
            className={cn(
                "mt-8 scroll-m-20 text-[16px] font-sans font-semibold tracking-tight text-white",
                className,
            )}
            {...props}
        />
    ),
    h4: ({ className, ...props }) => (
        <h4
            className={cn(
                "mt-8 scroll-m-20 text-[15px] font-sans font-semibold tracking-tight text-[#ededed]",
                className,
            )}
            {...props}
        />
    ),
    h5: ({ className, ...props }) => (
        <h5
            className={cn(
                "mt-8 scroll-m-20 text-[15px] font-sans font-semibold tracking-tight text-[#ededed]",
                className,
            )}
            {...props}
        />
    ),
    h6: ({ className, ...props }) => (
        <h6
            className={cn(
                "mt-8 scroll-m-20 text-[14px] font-sans font-semibold tracking-tight text-[#ededed]",
                className,
            )}
            {...props}
        />
    ),
    a: ({ className, ...props }) => (
        <a
            className={cn("text-[#ccc] underline underline-offset-4 decoration-[#333] hover:text-white hover:decoration-[#666] transition-colors", className)}
            {...props}
        />
    ),
    p: ({ className, ...props }) => (
        <p
            className={cn("leading-[1.85] [&:not(:first-child)]:mt-5 text-[#999]", className)}
            {...props}
        />
    ),
    ul: ({ className, ...props }) => (
        <ul className={cn("my-5 ml-6 list-disc text-[#999]", className)} {...props} />
    ),
    ol: ({ className, ...props }) => (
        <ol className={cn("my-5 ml-6 list-decimal text-[#999]", className)} {...props} />
    ),
    li: ({ className, ...props }) => (
        <li className={cn("mt-2", className)} {...props} />
    ),
    blockquote: ({ className, ...props }) => (
        <blockquote
            className={cn(
                "mt-5 border-l-2 border-[#222] pl-5 italic text-[#666]",
                className,
            )}
            {...props}
        />
    ),
    img: ({
        className,
        alt,
        ...props
    }: React.ImgHTMLAttributes<HTMLImageElement>) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img className={cn("rounded-lg border border-[#1a1a1a]", className)} alt={alt} {...props} />
    ),
    hr: ({ ...props }) => <hr className="my-6 md:my-8 border-[#1a1a1a]" {...props} />,
    table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
        <div className="my-5 w-full overflow-y-auto">
            <table className={cn("w-full", className)} {...props} />
        </div>
    ),
    tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
        <tr
            className={cn("m-0 border-t border-[#1a1a1a] p-0", className)}
            {...props}
        />
    ),
    th: ({ className, ...props }) => (
        <th
            className={cn(
                "border border-[#1a1a1a] px-4 py-2 text-left font-sans font-semibold text-[#ededed] [&[align=center]]:text-center [&[align=right]]:text-right",
                className,
            )}
            {...props}
        />
    ),
    td: ({ className, ...props }) => (
        <td
            className={cn(
                "border border-[#1a1a1a] px-4 py-2 text-left text-[#999] [&[align=center]]:text-center [&[align=right]]:text-right",
                className,
            )}
            {...props}
        />
    ),
    pre: ({
        className,
        __rawString__,
        ...props
    }: React.HTMLAttributes<HTMLPreElement> & { __rawString__?: string }) => (
        <div className="group relative w-full overflow-hidden">
            <pre
                className={cn(
                    "max-h-[650px] overflow-x-auto rounded-lg border border-[#1a1a1a] bg-[#0d0d0d] py-4",
                    className,
                )}
                {...props}
            />
            {__rawString__ && (
                <CopyButton
                    value={__rawString__}
                    className={cn(
                        "absolute right-4 top-4 z-20",
                        "duration-250 opacity-0 transition-all group-hover:opacity-100",
                    )}
                />
            )}
        </div>
    ),
    code: ({ className, ...props }) => (
        <code
            className={cn(
                "relative rounded-md border border-[#1a1a1a] bg-[#111] px-[0.4rem] py-1 font-mono text-sm text-[#ccc]",
                className,
            )}
            {...props}
        />
    ),
    Callout,
    Card: MdxCard,
    Step: ({ className, ...props }: React.ComponentProps<"h3">) => (
        <h3
            className={cn(
                "mt-8 scroll-m-20 text-[16px] font-sans font-semibold tracking-tight text-white",
                className,
            )}
            {...props}
        />
    ),
    Steps: ({ ...props }) => (
        <div
            className="[&>h3]:step steps mb-12 ml-4 border-l border-[#222] pl-8 [counter-reset:step]"
            {...props}
        />
    ),
    Link: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
        <Link
            className={cn("text-[#ccc] underline underline-offset-4 decoration-[#333] hover:text-white transition-colors", className)}
            {...props}
        />
    ),
    LinkedCard: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
        <Link
            className={cn(
                "flex w-full flex-col items-center rounded-xl border border-[#1a1a1a] bg-[#111] p-6 text-[#ededed] transition-colors hover:bg-[#161616] sm:p-10",
                className,
            )}
            {...props}
        />
    ),
};

interface MdxProps {
    code: string;
    images?: { alt: string; src: string; blurDataURL: string }[];
}

export function Mdx({ code, images }: MdxProps) {
    const Component = useMDXComponent(code);

    const MDXImage = (props: any) => {
        if (!images) return null;
        const blurDataURL = images.find(
            (image) => image.src === props.src,
        )?.blurDataURL;

        return (
            <div className="mt-5 w-full overflow-hidden rounded-lg border border-[#1a1a1a]">
                <BlurImage
                    {...props}
                    blurDataURL={blurDataURL}
                    className="size-full object-cover object-center"
                />
            </div>
        );
    };

    return (
        <div className="mdx">
            <Component
                components={{
                    ...components,
                    Image: MDXImage,
                }}
            />
        </div>
    );
}
