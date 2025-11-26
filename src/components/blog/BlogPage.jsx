import React, {useState, useMemo} from 'react';
import {MdKeyboardArrowDown} from 'react-icons/md';
import defaultImage from '../../assets/images/default-hero-image.jpg'

export default function BlogPage({posts}) {
    const [selectedTag, setSelectedTag] = useState('all');

    // extract unique tags (memoized for performance)
    const allTags = useMemo(() => {
        const tags = posts.flatMap(post => post.data.tags);
        return [...new Set(tags)].sort();
    }, [posts]);

    // filter Posts based on selection
    const filteredPosts = useMemo(() => {
        if (selectedTag === 'all') return posts;
        return posts.filter(post => post.data.tags.includes(selectedTag));
    }, [posts, selectedTag]);

    return (
        <div>
            {/* Header & Filter Section */}
            <div className="mb-12 flex flex-col items-end justify-end gap-4 md:flex-row">
                {/* The Select Component */}
                <div className="flex w-full flex-col gap-2 sm:w-45 md:w-64">
                    <label htmlFor="tag-filter" className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
                        Filter by Tag
                    </label>
                    <div className="relative">
                        <select
                            id="tag-filter"
                            value={selectedTag}
                            onChange={e => setSelectedTag(e.target.value)}
                            className="bg-header border-border w-full cursor-pointer appearance-none rounded-lg border-2 px-4 py-2 text-sm text-white outline-none"
                        >
                            <option value="all">All Posts</option>
                            {allTags.map(tag => (
                                <option key={tag} value={tag}>
                                    {tag}
                                </option>
                            ))}
                        </select>

                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center justify-end pr-4 text-gray-400">
                            <MdKeyboardArrowDown />
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredPosts.map(post => (
                    <article key={post.slug} className="animate-in fade-in flex max-w-xl flex-col items-start justify-between duration-500">
                        <a className="w-full overflow-hidden rounded-lg bg-gray-800" href={post.url}>
                            <img
                                src={post.data.heroImage?.src ?? defaultImage.src}
                                alt={post.data.title}
                                className="aspect-video w-full object-cover transition duration-300 ease-in-out hover:scale-105"
                            />
                        </a>

                        <div className="flex items-center gap-x-4 pt-4 text-xs">
                            <div className="text-gray-400">
                                {new Date(post.data.pubDate).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric',
                                })}
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {post.data.tags && post.data.tags.map(tag => (
                                    <span key={tag} className="border-border bg-compat-card rounded-full border px-2 py-0.5 text-xs font-medium text-gray-500">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="group relative grow">
                            <h3 className="mt-3 text-lg/6 font-semibold text-white">
                                <a href={post.url}>{post.data.title}</a>
                            </h3>
                            <p className="mt-5 line-clamp-3 text-sm/6 text-gray-400">{post.data.description}</p>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
