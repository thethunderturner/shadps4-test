import React, {useState, useMemo} from 'react';
import {StatusBadge, RegionFlag} from './CompatibilityTableElement';
import {SAMPLE_GAMES} from '../utils/utils.js';

export default function CompatibilityTable({games = SAMPLE_GAMES}) {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // search logic
    const filteredGames = useMemo(() => {
        return games.filter(game => {
            const term = searchTerm.toLowerCase();
            const titleMatch = game.title.toLowerCase().includes(term);
            const codeMatch = game.code.toLowerCase().includes(term);
            return titleMatch || codeMatch;
        });
    }, [games, searchTerm]);

    // pagination logic
    const totalItems = filteredGames.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // calculate the slice of data to show
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentGames = filteredGames.slice(startIndex, startIndex + itemsPerPage);

    // handlers for pagination
    const handleSearch = e => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const handlePageChange = newPage => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    // helper that generates page numbers (e.g [1, 2, 3, ..., 10])
    const getPageNumbers = () => {
        const pages = [];
        const maxVisibleButtons = 5;

        if (totalPages <= maxVisibleButtons) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            // logic to show generic if there are too many pages
            if (currentPage <= 3) {
                return [1, 2, 3, 4, '...', totalPages];
            } else if (currentPage >= totalPages - 2) {
                return [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
            } else {
                return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
            }
        }
        return pages;
    };

    return (
        <div className="bg-gray-750 border-border relative overflow-x-auto rounded-lg border shadow-xs">
            <div className="flex flex-row items-center justify-end">
                <div className="flex-column flex flex-wrap items-center justify-between space-y-4 p-4 md:flex-row md:space-y-0">
                    <label htmlFor="table-search" className="sr-only">
                        Search
                    </label>
                    <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                            <svg
                                className="text-body text-text h-4 w-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="table-search"
                            value={searchTerm}
                            onChange={handleSearch}
                            className="bg-neutral-secondary-medium border-border text-heading focus:ring-brand focus:border-brand placeholder:text-body text-text block w-full max-w-96 rounded-lg border py-2 ps-9 pe-3 text-sm shadow-xs outline-none"
                            placeholder="Search Title or ID"
                        />
                    </div>
                </div>
            </div>

            <table className="text-body text-text w-full text-left text-sm rtl:text-right">
                <thead className="text-body bg-header border-border border-b text-sm uppercase">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Icon
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Title
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Code
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Region
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Version
                        </th>
                        <th scope="col" className="px-6 py-3">
                            OS
                        </th>
                        <th scope="col" className="px-6 py-3 whitespace-nowrap">
                            Last Updated
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {currentGames.length > 0 ? (
                        currentGames.map(game => (
                            <tr key={game.id} className="bg-neutral-primary-soft border-border border-b hover:bg-white/5">
                                <td className="px-6 py-4">
                                    <div className="flex h-8 w-8 items-center justify-center rounded bg-gray-700 text-xs">IMG</div>
                                </td>
                                <th scope="row" className="text-heading px-6 py-4 font-medium whitespace-nowrap text-white">
                                    {game.title}
                                </th>
                                <td className="px-6 py-4">{game.code}</td>
                                <td className="px-6 py-4">
                                    <RegionFlag region={game.region} />
                                </td>
                                <td className="px-6 py-4">
                                    <StatusBadge status={game.status} />
                                </td>
                                <td className="px-6 py-4">{game.version}</td>
                                <td className="size-7 px-6 py-4">{game.os}</td>
                                <td className="px-6 py-4">{game.updatedDate}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="8" className="px-6 py-8 text-center text-gray-500">
                                No games found matching "{searchTerm}"
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            {/* Pagination */}
            {totalItems > 0 && (
                <nav className="flex-column text-text flex flex-wrap items-center justify-between rounded-lg p-4 md:flex-row" aria-label="Table navigation">
                    <span className="text-body mb-4 block w-full text-sm font-normal text-gray-400 md:mb-0 md:inline md:w-auto">
                        Showing{' '}
                        <span className="text-heading font-semibold text-white">
                            {startIndex + 1}-{Math.min(startIndex + itemsPerPage, totalItems)}
                        </span>{' '}
                        of <span className="text-heading font-semibold text-white">{totalItems}</span>
                    </span>

                    <ul className="flex h-8 -space-x-px text-sm">
                        <li>
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className={`flex h-8 items-center justify-center rounded-s-lg border px-3 text-sm font-medium ${
                                    currentPage === 1
                                        ? 'cursor-not-allowed border-gray-700 bg-gray-800 text-gray-600'
                                        : 'border-gray-700 bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                                }`}
                            >
                                Previous
                            </button>
                        </li>

                        {getPageNumbers().map((page, index) => (
                            <li key={index}>
                                {page === '...' ? (
                                    <span className="flex h-8 items-center justify-center border border-gray-700 bg-gray-800 px-3 text-sm text-gray-400">
                                        ...
                                    </span>
                                ) : (
                                    <button
                                        onClick={() => handlePageChange(page)}
                                        aria-current={currentPage === page ? 'page' : undefined}
                                        className={`flex h-8 w-9 items-center justify-center border text-sm font-medium ${
                                            currentPage === page
                                                ? 'z-10 border-gray-600 bg-gray-600 text-white'
                                                : 'border-gray-700 bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                                        }`}
                                    >
                                        {page}
                                    </button>
                                )}
                            </li>
                        ))}

                        <li>
                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className={`flex h-8 items-center justify-center rounded-e-lg border px-3 text-sm font-medium ${
                                    currentPage === totalPages
                                        ? 'cursor-not-allowed border-gray-700 bg-gray-800 text-gray-600'
                                        : 'border-gray-700 bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                                }`}
                            >
                                Next
                            </button>
                        </li>
                    </ul>
                </nav>
            )}
        </div>
    );
}
