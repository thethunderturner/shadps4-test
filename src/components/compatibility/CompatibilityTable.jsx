const SAMPLE_GAMES = [
    {
        id: 130,
        title: 'NBA 2K18',
        code: 'CUSA08500',
        type: 'PS4game',
        status: 'Menus',
        os: 'Linux',
        version: '0.12.5',
        updatedDate: '22/11/2025',
        region: 'USA',
        image: true,
    },
    {
        id: 129,
        title: 'Monster Hunter World: Iceborne',
        code: 'CUSA07713',
        type: 'PS4game',
        status: 'Boots',
        os: 'Linux',
        version: '0.12.5',
        updatedDate: '22/11/2025',
        region: 'USA',
        image: true,
    },
    {
        id: 938,
        title: '2Dark',
        code: 'CUSA04802',
        type: 'PS4game',
        status: 'Playable',
        os: 'Windows',
        version: '0.12.5',
        updatedDate: '22/11/2025',
        region: 'Europe',
        image: true,
    },
    {
        id: 128,
        title: 'Minecraft',
        code: 'CUSA00744',
        type: 'PS4game',
        status: 'Ingame',
        os: 'Linux',
        version: '0.12.5',
        updatedDate: '22/11/2025',
        region: 'USA',
        image: true,
    },
    {
        id: 1184,
        title: 'Metaphor: ReFantazio',
        code: 'CUSA47038',
        type: 'PS4game',
        status: 'Ingame',
        os: 'Linux',
        version: '0.12.5',
        updatedDate: '22/11/2025',
        region: 'USA',
        image: true,
    },
    {
        id: 167,
        title: 'FINAL FANTASY TYPE-0 HD',
        code: 'CUSA00994',
        type: 'PS4game',
        status: 'Ingame',
        os: 'Windows',
        version: '0.12.5',
        updatedDate: '22/11/2025',
        region: 'USA',
        image: true,
    },
    {
        id: 178,
        title: 'RESIDENT EVIL5',
        code: 'CUSA04437',
        type: 'PS4game',
        status: 'Boots',
        os: 'Windows',
        version: '0.12.5',
        updatedDate: '22/11/2025',
        region: 'USA',
        image: true,
    },
    {
        id: 234,
        title: 'Titanfall™ 2',
        code: 'CUSA04027',
        type: 'PS4game',
        status: 'Menus',
        os: 'Windows',
        version: '0.12.5',
        updatedDate: '22/11/2025',
        region: 'USA',
        image: true,
    },
    {
        id: 1172,
        title: 'Black Clover: Quartet Knights',
        code: 'CUSA10771',
        type: 'PS4game',
        status: 'Menus',
        os: 'Windows',
        version: '0.12.5',
        updatedDate: '22/11/2025',
        region: 'USA',
        image: true,
    },
    {
        id: 1159,
        title: 'Steel Rats',
        code: 'CUSA12994',
        type: 'PS4game',
        status: 'Menus',
        os: 'Windows',
        version: '0.12.5',
        updatedDate: '22/11/2025',
        region: 'Japan',
        image: true,
    },
    {
        id: 180,
        title: 'Resident Evil Origins Collection',
        code: 'CUSA03178',
        type: 'PS4game',
        status: 'Ingame',
        os: 'Windows',
        version: '0.12.5',
        updatedDate: '22/11/2025',
        region: 'USA',
        image: true,
    },
    {
        id: 1050,
        title: 'Destiny 2',
        code: 'CUSA05042',
        type: 'PS4game',
        status: 'Menus',
        os: 'Windows',
        version: '0.12.5',
        updatedDate: '22/11/2025',
        region: 'USA',
        image: true,
    },
    {
        id: 159,
        title: 'Gravity Rush™ Remastered',
        code: 'CUSA01130',
        type: 'PS4game',
        status: 'Ingame',
        os: 'Windows',
        version: '0.12.5',
        updatedDate: '22/11/2025',
        region: 'USA',
        image: true,
    },
    {
        id: 1029,
        title: 'GRAVITY RUSH™ 2',
        code: 'CUSA03694',
        type: 'PS4game',
        status: 'Nothing',
        os: 'Windows',
        version: '0.12.5',
        updatedDate: '22/11/2025',
        region: 'USA',
        image: true,
    },
    {
        id: 1872,
        title: 'DARK SOULS™: REMASTERED',
        code: 'CUSA08692',
        type: 'PS4game',
        status: 'Ingame',
        os: 'Linux',
        version: '0.12.5',
        updatedDate: '21/11/2025',
        region: 'USA',
        image: true,
    },
    {
        id: 233,
        title: "Tiny Tina's Wonderlands",
        code: 'CUSA23766',
        type: 'PS4game',
        status: 'Menus',
        os: 'Windows',
        version: '0.12.5',
        updatedDate: '21/11/2025',
        region: 'Unknown',
        image: false,
    },
    {
        id: 195,
        title: 'Borderlands® 3',
        code: 'CUSA07823',
        type: 'PS4game',
        status: 'Menus',
        os: 'Windows',
        version: '0.12.5',
        updatedDate: '21/11/2025',
        region: 'USA',
        image: true,
    },
    {
        id: 190,
        title: 'Borderlands: The Handsome Collection',
        code: 'CUSA02893',
        type: 'PS4game',
        status: 'Nothing',
        os: 'Windows',
        version: '0.12.5',
        updatedDate: '21/11/2025',
        region: 'USA',
        image: true,
    },
    {
        id: 1827,
        title: 'HORROR TALES: The Wine',
        code: 'CUSA27869',
        type: 'PS4game',
        status: 'Menus',
        os: 'Windows',
        version: '0.12.5',
        updatedDate: '21/11/2025',
        region: 'USA',
        image: true,
    },
    {
        id: 440,
        title: 'inFAMOUS™ Second Son',
        code: 'CUSA00004',
        type: 'PS4game',
        status: 'Ingame',
        os: 'Windows',
        version: '0.12.5',
        updatedDate: '20/11/2025',
        region: 'Europe',
        image: true,
    },
    {
        id: 865,
        title: "Dragon's Crown Pro",
        code: 'CUSA10487',
        type: 'PS4game',
        status: 'Playable',
        os: 'Windows',
        version: '0.12.5',
        updatedDate: '23/11/2025',
        region: 'Europe',
        image: true,
    },
    {
        id: 852,
        title: 'ユニコーンオーバーロード',
        code: 'CUSA27714',
        type: 'PS4game',
        status: 'Playable',
        os: 'Windows',
        version: '0.12.5',
        updatedDate: '23/11/2025',
        region: 'Japan',
        image: true,
    },
    {
        id: 866,
        title: 'Odin Sphere Leifthrasir',
        code: 'CUSA01290',
        type: 'PS4game',
        status: 'Playable',
        os: 'Windows',
        version: '0.12.5',
        updatedDate: '23/11/2025',
        region: 'Japan',
        image: true,
    },
    {
        id: 863,
        title: '十三機兵防衛圏 プロローグ',
        code: 'CUSA14276',
        type: 'PS4game',
        status: 'Menus',
        os: 'Windows',
        version: '0.12.5',
        updatedDate: '23/11/2025',
        region: 'Japan',
        image: true,
    },
    {
        id: 864,
        title: 'Clockwork Aquario',
        code: 'CUSA26908',
        type: 'PS4game',
        status: 'Playable',
        os: 'Windows',
        version: '0.12.5',
        updatedDate: '23/11/2025',
        region: 'Unknown',
        image: false,
    },
    {
        id: 2031,
        title: 'Gran Turismo®SPORT',
        code: 'CUSA03220',
        type: 'PS4game',
        status: 'Boots',
        os: 'Windows',
        version: '0.12.5',
        updatedDate: '23/11/2025',
        region: 'USA',
        image: true,
    },
    {
        id: 1831,
        title: 'MediEvil',
        code: 'CUSA11227',
        type: 'PS4game',
        status: 'Boots',
        os: 'Windows',
        version: '0.12.5',
        updatedDate: '23/11/2025',
        region: 'USA',
        image: true,
    },
    {
        id: 135,
        title: 'PowerWash Simulator',
        code: 'CUSA29983',
        type: 'PS4game',
        status: 'Ingame',
        os: 'Linux',
        version: '0.12.5',
        updatedDate: '22/11/2025',
        region: 'USA',
        image: true,
    },
    {
        id: 932,
        title: 'DEAD OR ALIVE 5 Last Round',
        code: 'CUSA01778',
        type: 'PS4game',
        status: 'Boots',
        os: 'Windows',
        version: '0.09.0',
        updatedDate: '22/11/2025',
        region: 'Europe',
        image: true,
    },
    {
        id: 931,
        title: 'A Plague Tale: Innocence',
        code: 'CUSA10812',
        type: 'PS4game',
        status: 'Nothing',
        os: 'Windows',
        version: '0.12.5',
        updatedDate: '22/11/2025',
        region: 'Europe',
        image: true,
    },
    {
        id: 930,
        title: 'Potion Permit',
        code: 'CUSA33783',
        type: 'PS4game',
        status: 'Playable',
        os: 'Linux',
        version: '0.12.5',
        updatedDate: '22/11/2025',
        region: 'USA',
        image: true,
    },
    {
        id: 933,
        title: 'Control',
        code: 'CUSA11454',
        type: 'PS4game',
        status: 'Menus',
        os: 'Windows',
        version: '0.12.5',
        updatedDate: '22/11/2025',
        region: 'Europe',
        image: true,
    },
    {
        id: 134,
        title: 'Persona 5 Strikers',
        code: 'CUSA19640',
        type: 'PS4game',
        status: 'Menus',
        os: 'Linux',
        version: '0.12.5',
        updatedDate: '22/11/2025',
        region: 'Unknown',
        image: false,
    },
    {
        id: 133,
        title: 'Persona 5 Royal',
        code: 'CUSA17419',
        type: 'PS4game',
        status: 'Ingame',
        os: 'Linux',
        version: '0.12.5',
        updatedDate: '22/11/2025',
        region: 'Europe',
        image: true,
    },
    {
        id: 132,
        title: 'Persona 3 Reload',
        code: 'CUSA37521',
        type: 'PS4game',
        status: 'Menus',
        os: 'Linux',
        version: '0.12.5',
        updatedDate: '22/11/2025',
        region: 'USA',
        image: true,
    },
    {
        id: 131,
        title: 'NEO : The World Ends with You',
        code: 'CUSA26376',
        type: 'PS4game',
        status: 'Menus',
        os: 'Linux',
        version: '0.12.5',
        updatedDate: '22/11/2025',
        region: 'USA',
        image: true,
    },
    {
        id: 934,
        title: "Dead Rising 4: Frank's Big Package",
        code: 'CUSA08558',
        type: 'PS4game',
        status: 'Boots',
        os: 'Windows',
        version: '0.12.5',
        updatedDate: '22/11/2025',
        region: 'Europe',
        image: true,
    },
    {
        id: 937,
        title: 'Bendy and the Ink Machine',
        code: 'CUSA13635',
        type: 'PS4game',
        status: 'Ingame',
        os: 'Windows',
        version: '0.12.5',
        updatedDate: '22/11/2025',
        region: 'Europe',
        image: true,
    },
    {
        id: 936,
        title: 'DEATH STRANDING™',
        code: 'CUSA12605',
        type: 'PS4game',
        status: 'Menus',
        os: 'Windows',
        version: '0.12.5',
        updatedDate: '22/11/2025',
        region: 'Europe',
        image: true,
    },
    {
        id: 919,
        title: 'Need for Speed™ Heat',
        code: 'CUSA15081',
        type: 'PS4game',
        status: 'Nothing',
        os: 'Linux',
        version: '0.12.5',
        updatedDate: '22/11/2025',
        region: 'USA',
        image: true,
    },
];

import React, {useState, useMemo} from 'react';
import {StatusBadge, RegionFlag} from './CompatibilityTableElement';

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
                                    <div className="flex h-8 w-8 items-center justify-center rounded bg-gray-700 text-xs">
                                        IMG
                                    </div>
                                </td>
                                <th scope="row" className="text-heading px-6 py-4 font-medium whitespace-nowrap text-white">
                                    {game.title}
                                </th>
                                <td className="px-6 py-4">{game.code}</td>
                                <td className="px-6 py-4"><RegionFlag region={game.region} /></td>
                                <td className="px-6 py-4"><StatusBadge status={game.status} /></td>
                                <td className="px-6 py-4">{game.version}</td>
                                <td className="px-6 py-4 size-7">{game.os}</td>
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
