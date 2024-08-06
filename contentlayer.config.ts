import {
    defineDocumentType,
    makeSource
} from "contentlayer2/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { visit } from "unist-util-visit";
import rehypePrettyCode from "rehype-pretty-code";

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `blog/**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        date: { type: 'date', required: true },
    },
    computedFields: {
        slug: {
            type: 'string',
            resolve: (post) => post._raw.flattenedPath.replace(/^blog\//, '')
        },
        slugAsParams: {
            type: "string",
            resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
        },
    },
}))

export const Question = defineDocumentType(() => ({
    name: 'Question',
    filePathPattern: `questions/**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        date: { type: 'date', required: true },
    },
    computedFields: {
        slug: {
            type: 'string',
            resolve: (question) => question._raw.flattenedPath.replace(/^questions\//, '')
        },
        slugAsParams: {
            type: "string",
            resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
        },
    },
}))


export default makeSource({
    contentDirPath: './src/content',
    documentTypes: [Post, Question],
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
            rehypeSlug,
            () => (tree) => {
                visit(tree, (node) => {
                    if (node?.type === "element" && node?.tagName === "pre") {
                        const [codeEl] = node.children;

                        if (codeEl.tagName !== "code") return;

                        node.__rawString__ = codeEl.children?.[0].value;
                    }
                });
            },
            [
                rehypePrettyCode,
                {
                    theme: "github-dark",
                    keepBackground: false,
                    onVisitLine(node: any) {
                        // Prevent lines from collapsing in `display: grid` mode, and allow empty lines to be copy/pasted
                        if (node.children.length === 0) {
                            node.children = [{ type: "text", value: " " }];
                        }
                    },
                },
            ],
            () => (tree) => {
                visit(tree, (node: any) => {
                    if (node?.type === "element" && node?.tagName === "figure") {
                        if (!("data-rehype-pretty-code-figure" in node.properties)) {
                            return;
                        }

                        const preElement = node.children.at(-1);
                        if (preElement.tagName !== "pre") {
                            return;
                        }

                        preElement.properties["__rawString__"] = node.__rawString__;
                    }
                });
            },
            [
                rehypeAutolinkHeadings,
                {
                    properties: {
                        className: ["subheading-anchor"],
                        ariaLabel: "Link to section",
                    },
                },
            ],
        ],
    },
})