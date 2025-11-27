import React, {useState, useMemo} from 'react';
import {MdKeyboardArrowDown} from 'react-icons/md';
import type {CollectionEntry} from 'astro:content';
import Post from './Post.tsx';

type BlogPost = CollectionEntry<'blog'>;
interface BlogPageProps {
    posts: BlogPost[];
}

export default function BlogPage({posts}: BlogPageProps) {
    const [filterValue, setFilterValue] = useState('all');

    const categories = useMemo(() => {
        const t = posts.flatMap(post => post.data.category || []);
        return [...new Set(t)].sort();
    }, [posts]);

    const tags = useMemo(() => {
        const t = posts.flatMap(post => post.data.tags || []);
        return [...new Set(t)].sort();
    }, [posts]);

    const filteredPosts = useMemo(() => {
        if (filterValue === 'all') return posts;

        const [type, value] = filterValue.split(':');

        return posts.filter(post => {
            if (type === 'cat') {
                return post.data.category === value;
            }
            if (type === 'tag') {
                return post.data.tags?.includes(value);
            }
            return true;
        });
    }, [posts, filterValue]);

    return (
        <div>
            <div className="mb-12 flex flex-col items-end justify-end gap-4 md:flex-row">
                <div className="flex w-full flex-col gap-2 sm:w-45 md:w-64">
                    <label htmlFor="content-filter" className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
                        Filter Content
                    </label>
                    <div className="relative">
                        <select
                            id="content-filter"
                            value={filterValue}
                            onChange={e => setFilterValue(e.target.value)}
                            className="bg-header border-border w-full cursor-pointer appearance-none rounded-lg border-2 px-4 py-2 text-sm text-white outline-none"
                        >
                            <option value="all">All Posts</option>
                            {categories.length > 0 && (
                                <optgroup label="Categories" className="bg-header text-text font-semibold">
                                    {categories.map(cat => (
                                        <option key={`cat-${cat}`} value={`cat:${cat}`} className="text-white">
                                            {cat}
                                        </option>
                                    ))}
                                </optgroup>
                            )}
                            {tags.length > 0 && (
                                <optgroup label="Tags" className="bg-header text-text font-semibold">
                                    {tags.map(tag => (
                                        <option key={`tag-${tag}`} value={`tag:${tag}`} className="text-white">
                                            {tag}
                                        </option>
                                    ))}
                                </optgroup>
                            )}
                        </select>

                        <div className="text-text pointer-events-none absolute inset-y-0 right-0 flex items-center justify-end pr-4">
                            <MdKeyboardArrowDown />
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredPosts.map(post => (
                    <Post post={post} />
                ))}
            </div>
        </div>
    );
}
