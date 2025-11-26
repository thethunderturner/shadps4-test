import React, {useMemo, useState} from 'react';
import {SAMPLE_GAMES, type Game, StatusBadge, OsBadge, RegionBadge} from './utils.tsx';

import {
    useReactTable,
    getCoreRowModel,
    getPaginationRowModel,
    getFilteredRowModel,
    flexRender,
    createColumnHelper,
    type ColumnFiltersState,
} from '@tanstack/react-table';

const columnHelper = createColumnHelper<Game>();

export default function CompatibilityTable() {
    const [globalFilter, setGlobalFilter] = useState('');
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

    const columns = useMemo(
        () => [
            columnHelper.accessor('image', {
                header: 'Cover',
                cell: info => info.getValue(),
            }),
            columnHelper.accessor('code', {
                header: 'Code',
            }),
            columnHelper.accessor('title', {
                header: 'Title',
            }),
            columnHelper.accessor('region', {
                header: 'Region',
                cell: info => <RegionBadge region={info.getValue()} />,
            }),
            columnHelper.accessor('status', {
                header: 'Status',
                cell: info => <StatusBadge status={info.getValue()} />,
            }),
            columnHelper.accessor('version', {
                header: 'Version',
            }),
            columnHelper.accessor('os', {
                header: 'OS',
                cell: info => <OsBadge os={info.getValue()} />,
            }),
            columnHelper.accessor('updatedDate', {
                header: 'Last Updated',
            }),
        ],
        [],
    );

    // initialize the table
    const table = useReactTable({
        data: SAMPLE_GAMES,
        columns,
        state: {
            globalFilter,
            columnFilters,
        },
        initialState: {
            pagination: {
                pageSize: 10,
            },
        },
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onGlobalFilterChange: setGlobalFilter,
        onColumnFiltersChange: setColumnFilters,
    });

    const pageIndex = table.getState().pagination.pageIndex;
    const pageCount = table.getPageCount();

    return (
        <div>
            <div className="mb-3 flex flex-col items-center justify-between gap-4 sm:flex-row">
                {/* status Filter */}
                <div className="relative w-full md:w-48">
                    <select
                        className="bg-header border-border w-full cursor-pointer appearance-none rounded-lg border-2 px-4 py-2 text-sm text-white outline-none"
                        onChange={e => {
                            const val = e.target.value;
                            table.getColumn('status')?.setFilterValue(val === 'All' ? '' : val);
                        }}
                    >
                        <option value="All">All</option>
                        <option value="Playable">Playable</option>
                        <option value="Ingame">In-game</option>
                        <option value="Boots">Boots</option>
                        <option value="Menus">Menus</option>
                        <option value="Nothing">Nothing</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                        <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                    </div>
                </div>

                {/* search filter */}
                <div className="text-text flex items-center space-y-4 md:flex-row md:space-y-0">
                    <input
                        type="text"
                        value={globalFilter ?? ''}
                        onChange={e => setGlobalFilter(e.target.value)}
                        placeholder="Search games"
                        className="bg-header border-border w-full cursor-pointer appearance-none rounded-lg border-2 px-4 py-2 text-sm outline-none"
                    />
                </div>
            </div>

            {/* --- Table --- */}
            <div className="border-border overflow-x-auto rounded-lg border-2">
                <table className="w-full border-collapse text-left">
                    <thead className="bg-header">
                        {table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map(header => (
                                    <th
                                        key={header.id}
                                        className="border-b border-zinc-200 px-6 py-3 text-xs font-medium tracking-wider text-gray-500 uppercase dark:border-zinc-900"
                                    >
                                        {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody className="divide-y divide-zinc-200 dark:divide-zinc-900">
                        {table.getRowModel().rows.length === 0 ? (
                            <tr>
                                <td colSpan={columns.length} className="text-text px-6 py-8 text-center">
                                    No games found matching your criteria.
                                </td>
                            </tr>
                        ) : (
                            table.getRowModel().rows.map(row => (
                                <tr key={row.id} className="text-text dark:bg-zinc-950 dark:hover:bg-zinc-900">
                                    {row.getVisibleCells().map(cell => (
                                        <td key={cell.id} className="px-6 py-4 text-sm whitespace-nowrap">
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </td>
                                    ))}
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="mt-4 flex flex-col items-center justify-between gap-4 sm:flex-row">
                <span className="text-sm text-white">
                    Showing <span className="font-semibold">{pageIndex + 1}</span> of <span className="font-semibold">{pageCount}</span> Pages
                    <span className="ml-2">({table.getFilteredRowModel().rows.length} Total Games)</span>
                </span>

                <div className="flex items-center gap-2">
                    <button
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                        className="border-border rounded-md border px-3 py-1 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-950 dark:hover:bg-zinc-900"
                    >
                        Previous
                    </button>

                    <button
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                        className="border-border rounded-md border px-3 py-1 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-950 dark:hover:bg-zinc-900"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
