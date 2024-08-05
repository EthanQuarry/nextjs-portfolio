import { defineDocumentType, makeSource } from 'contentlayer2/source-files'

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `blog/**/*.md`,
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
    filePathPattern: `questions/**/*.md`,
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


export default makeSource({ contentDirPath: './src/content', documentTypes: [Post, Question] })