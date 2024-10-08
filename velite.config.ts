import { defineConfig, defineCollection, s } from "velite";
// import rehypeSlug from "rehype-slug";
// import rehypePrettyCode from "rehype-pretty-code";
// import rehypeAutolinkHeadings from "rehype-autolink-headings";

const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split("/").slice(1).join("/"),
});

const process = defineCollection({
  name: "Process",
  pattern: "process/**/*.mdx",
  schema: s
    .object({
      published: s.boolean().default(true),
      name: s.string().max(99),
      desc: s.string().max(999),
      img: s.string(),
      icon: s.string(),
      id: s.number(),
      slug: s.path(),
      url: s.string().optional(),
      body: s.mdx(),
    })
    .transform(computedFields),
});

const work = defineCollection({
  name: "work",
  pattern: "work/index.yml",
  single: true,
  schema: s.object({
    title: s.string().max(99),
    subtitle: s.string().max(99),
    workItems: s.array(
      s.object({
        id: s.number(),
        draft: s.boolean().default(false),
        url: s.string(),
        title: s.string(),
        category: s.string().max(999),
        tools: s.array(s.string()),
        src: s.string(),
      })
    ),
  }),
});

const services = defineCollection({
  name: "Services",
  pattern: "services/index.yml",
  single: true,
  schema: s.object({
    title: s.string().max(99),
    subtitle: s.string().max(99),
    description: s.array(s.string()),
    toolstitle: s.string().max(99),
    toolsitems: s.array(
      s.object({
        name: s.string(), 
        icon: s.string(),
      })
    ),
  }),
});

const options = defineCollection({
  name: "Options",
  pattern: "options/index.yml",
  single: true,
  schema: s.object({
    name: s.string().max(99),
    title: s.string().max(99),
    description: s.string().max(999).optional(),
    basepath: s.string().url(),
    ogImageURL: s.string().max(99),
    keywords: s.array(s.string()),
    author: s.object({
      name: s.string(),
      email: s.string().email(),
      url: s.string().url(),
    }),
    heroslider: s.array(
      s.object({
        title: s.string().max(99),
        subtitle: s.string().max(999),
        image: s.string(),
        blurDataURL: s.string(),
        btnText: s.string(),
        link: s.string(),
      })
    ),
    links: s.array(s.object({ text: s.string(), link: s.string() })),
    processtitle: s.string().optional(), 
    footnote1: s.string().optional(),
    footnote: s.string().optional(),
    copyright: s.string().optional(),
  }),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { services, process, work, options },
  mdx: {
    rehypePlugins: [],
    remarkPlugins: [],
  },
});
