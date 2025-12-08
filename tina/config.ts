import { defineConfig } from "tinacms";
import {BlogPost} from './collections/blog-post.ts';
import {Faq} from './collections/faq.ts';
import {Quickstart} from './collections/quickstart.ts';
import {About} from './collections/about.ts';

const branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";

export default defineConfig({
    branch,

    // Get this from tina.io
    clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
    // Get this from tina.io
    token: process.env.TINA_TOKEN,

    build: {
        outputFolder: 'admin',
        publicFolder: 'public',
    },
    media: {
        tina: {
            mediaRoot: '/src/assets/images',
            publicFolder: 'public',
        },
    },
    schema: {
        collections: [BlogPost, Faq, Quickstart, About],
    },
});
