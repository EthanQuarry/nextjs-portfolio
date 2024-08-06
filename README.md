# Next.js Portfolio Site with Blog and Questions

This project is a modern, performant portfolio website built with Next.js, featuring a blog and a questions section. It leverages the power of static site generation (SSG) and content management using MDX files.

## Features

- **Blog**: A section to showcase your articles and thoughts.
- **Questions**: A dedicated area for Q&A or frequently asked questions.
- **MDX Content**: Utilizes MDX for content management, allowing for rich, interactive content.
- **Static Site Generation**: Improves performance and SEO by pre-rendering pages at build time.
- **Responsive Design**: Ensures a great user experience across various devices and screen sizes.

## Tech Stack

- **Next.js**: React framework for building the user interface and handling routing.
- **TypeScript**: Adds static typing to JavaScript for improved developer experience and code quality.
- **Contentlayer**: Used for content management and processing MDX files.
- **date-fns**: Library for date formatting and parsing.
- **Tailwind CSS**: Utility-first CSS framework for styling.

## Project Structure

- `src/app`: Contains the main application code, including page components and layouts.
- `src/content`: Stores MDX files for blog posts and questions.
- `src/components`: Reusable React components, including the MDX renderer.
- `contentlayer.config.ts`: Configuration for Contentlayer, defining document types and content processing.

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install` or `yarn install`
3. Run the development server: `npm run dev` or `yarn dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Adding Content

- To add a new blog post, create an MDX file in `src/content/blog/`
- To add a new question, create an MDX file in `src/content/questions/`

Ensure each MDX file includes the required frontmatter (title and date).

## Customization

You can easily customize the site by modifying the components in `src/components` and adjusting the styles using Tailwind CSS classes.

## Deployment

This site can be easily deployed to platforms like Vercel or Netlify, which support Next.js out of the box.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
