import { defineConfig } from "tinacms";
import {BlogPost} from './collections/blog-post.ts';
import {Faq} from './collections/faq.ts';
import {Quickstart} from './collections/quickstart.ts';
import {About} from './collections/about.ts';

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

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
            mediaRoot: '',
            publicFolder: 'public',
        },
    },
    // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/r/content-modelling-collections/
    schema: {
        collections: [BlogPost, Faq, Quickstart, About],
    },
});
