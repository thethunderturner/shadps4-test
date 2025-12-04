import React, {useState, useMemo} from 'react';
import {MdKeyboardArrowDown} from 'react-icons/md';
import type {Post} from '../../data/types.ts';
import PostCard from './PostCard.tsx';

const ITEMS_PER_PAGE = 8;

export default function BlogPage({posts}: {posts: Post[]}) {
    const [filterValue, setFilterValue] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);

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
            if (type === 'cat') return post.data.category === value;
            if (type === 'tag') return post.data.tags?.includes(value);
            return true;
        });
    }, [posts, filterValue]);

    // Pagination Logic
    const totalItems = filteredPosts.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

    const paginatedPosts = useMemo(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        return filteredPosts.slice(startIndex, endIndex);
    }, [filteredPosts, currentPage]);

    // Handler to change filter
    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilterValue(e.target.value);
        setCurrentPage(1);
    };

    // Handlers for buttons
    const goToNextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
    const goToPrevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));

    return (
        <div>
            <div className="mb-12 flex flex-col items-end justify-end gap-4 md:flex-row">
                <div className="flex w-full flex-col gap-2 xs:45 sm:w-45 md:w-64">
                    <label htmlFor="content-filter" className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
                        Filter Content
                    </label>
                    <div className="relative">
                        <select
                            id="content-filter"
                            value={filterValue}
                            onChange={handleFilterChange}
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

                        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 flex items-center justify-end pr-4 text-white">
                            <MdKeyboardArrowDown className="text-xl" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {paginatedPosts.map((post, index) => (
                    <PostCard key={post.slug} post={post} priority={index < 4} />
                ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="mt-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
                    <span className="text-sm text-white">
                        Showing <span className="font-semibold">{currentPage}</span> of <span className="font-semibold">{totalPages}</span> Pages
                        <span className="ml-2 text-gray-400">({totalItems} Total Posts)</span>
                    </span>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={goToPrevPage}
                            disabled={currentPage === 1}
                            className="border-border rounded-md border px-3 py-1 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-950 dark:hover:bg-zinc-900"
                        >
                            Previous
                        </button>

                        <button
                            onClick={goToNextPage}
                            disabled={currentPage === totalPages}
                            className="border-border rounded-md border px-3 py-1 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-950 dark:hover:bg-zinc-900"
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
