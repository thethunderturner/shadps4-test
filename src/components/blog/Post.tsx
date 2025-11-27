import defaultImage from '../../assets/images/default-hero-image.jpg';
import React from 'react';

interface Post {
    slug: string;
    data: {
        title: string;
        description: string;
        pubDate: Date;
        heroImage?: {src: string};
        category?: string;
        tags?: string[];
    };
}
const BASE_URL = '/shadps4-test';

export default function Post({post}: {post: Post}) {
    return (
        <article key={post.slug} className="flex max-w-xl flex-col items-start justify-between">
            <a className="w-full overflow-hidden rounded-lg" href={`${BASE_URL}/blog/${post.slug}`}>
                <img
                    src={post.data.heroImage?.src ?? defaultImage.src}
                    alt={post.data.title}
                    className="aspect-video w-full object-cover transition duration-300 ease-in-out hover:scale-105"
                />
            </a>

            <div className="flex w-full justify-between pt-4 text-xs">
                <div className="text-gray-400">
                    {new Date(post.data.pubDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                    })}
                </div>

                <div className="flex items-center gap-x-4">
                    {post.data.category && <span className="font-medium text-blue-400/90">{post.data.category}</span>}

                    <div className="flex flex-wrap gap-2">
                        {post.data.tags &&
                            post.data.tags.map(tag => (
                                <span key={tag} className="border-border bg-compat-card rounded-full border px-2 py-0.5 text-xs font-medium text-gray-500">
                                    {tag}
                                </span>
                            ))}
                    </div>
                </div>
            </div>

            <div className="group relative grow">
                <h3 className="mt-3 text-lg/6 font-semibold text-white">
                    <a href={`${BASE_URL}/blog/${post.slug}`}>{post.data.title}</a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-400">{post.data.description}</p>
            </div>
        </article>
    );
}
