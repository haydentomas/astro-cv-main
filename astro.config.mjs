import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';
import remarkGfm from 'remark-gfm';
import remarkSmartypants from 'remark-smartypants';
import rehypeExternalLinks from 'rehype-external-links';
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://haydentomas.co.uk',
  integrations: [mdx(), svelte(), tailwind(), icon(), mdx(), partytown(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'nord'
    },
    remarkPlugins: [remarkGfm, remarkSmartypants],
    rehypePlugins: [[rehypeExternalLinks, {
      target: '_blank'
    }]]
  }
});