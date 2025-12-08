import type { Post } from '@/data/types.ts';
const BASE_URL = '/shadps4-test';

export default function PostCard({ post, priority = false }: { post: Post; priority?: boolean }) {
    return (
        <article key={post.slug} className="mx-auto flex max-w-xl flex-col items-start justify-between">
            <a className="w-full overflow-hidden rounded-lg" href={`${BASE_URL}/blog/${post.slug}`}>
                <img
                    src={post.optimizedImageSrc}
                    alt={post.data.title}
                    className="aspect-video w-full object-cover transition duration-300 ease-in-out hover:scale-105"
                    // This is done to improve loading speeds for images by downloading the top images immediately
                    loading={priority ? 'eager' : 'lazy'}
                    decoding={priority ? 'sync' : 'async'}
                />
            </a>

            <div className="flex w-full justify-between pt-4 text-xs">
                <div className="font-medium text-zinc-800 dark:text-zinc-100">
                    {new Date(post.data.pubDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                    })}
                </div>

                <div className="flex items-center gap-x-4">
                    {post.data.category && <span className="font-bold text-blue-600/90">{post.data.category}</span>}

                    <div className="flex flex-wrap gap-2">
                        {post.data.tags &&
                            post.data.tags.map(tag => (
                                <span
                                    key={tag}
                                    className="border-border bg-compat-card rounded-full border px-2 py-0.5 text-xs font-medium text-zinc-800 dark:text-zinc-100"
                                >
                                    {tag}
                                </span>
                            ))}
                    </div>
                </div>
            </div>

            <div className="group relative grow w-full min-w-0">
                <h3 className="text-text mt-3 text-lg/6 font-semibold line-clamp-1">
                    <a href={`${BASE_URL}/blog/${post.slug}`}>{post.data.title}</a>
                </h3>
                <p className="mt-5 line-clamp-2 text-sm/6 text-zinc-800 dark:text-zinc-100">{post.data.description}</p>
            </div>
        </article>
    );
}
