import {useMemo, useState} from 'react';
import {FaFilter} from 'react-icons/fa';
import {IoIosSearch} from 'react-icons/io';
import {MdKeyboardArrowDown} from 'react-icons/md';
import {OsBadge, RegionBadge, SAMPLE_GAMES, StatusBadge, type Game} from './utils.tsx';

import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    useReactTable,
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
                size: 100,
                cell: info => info.getValue(),
            }),
            columnHelper.accessor('code', {
                header: 'Code',
                size: 150,
            }),
            columnHelper.accessor('title', {
                header: 'Title',
                size: 300,
            }),
            columnHelper.accessor('region', {
                header: 'Region',
                size: 110,
                cell: info => <RegionBadge region={info.getValue()} />,
            }),
            columnHelper.accessor('status', {
                header: 'Status',
                size: 130,
                cell: info => <StatusBadge status={info.getValue()} />,
            }),
            columnHelper.accessor('version', {
                header: 'Version',
                size: 110,
            }),
            columnHelper.accessor('os', {
                header: 'OS',
                size: 110,
                cell: info => <OsBadge os={info.getValue()} />,
            }),
            columnHelper.accessor('updatedDate', {
                header: 'Last Updated',
                size: 150,
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
        getColumnCanGlobalFilter: column => {
            return column.id === 'title' || column.id === 'code';
        },
    });

    const pageIndex = table.getState().pagination.pageIndex;
    const pageCount = table.getPageCount();
    const statuses = ['All', 'Playable', 'Ingame', 'Boots', 'Menus', 'Nothing'];

    return (
        <div>
            <div className="mb-3 flex flex-row items-center justify-between gap-4">
                {/* status Filter */}
                <div className="relative w-60">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                        <FaFilter className="size-3.5" />
                    </div>

                    <select
                        className="bg-header border-border text-text w-full cursor-pointer appearance-none rounded-lg border-2 py-2 pr-8 pl-9 text-sm outline-none"
                        onChange={e => {
                            const val = e.target.value;
                            table.getColumn('status')?.setFilterValue(val === 'All' ? '' : val);
                        }}
                    >
                        {statuses.map(status => (
                            <option key={status} value={status}>
                                {status}
                            </option>
                        ))}
                    </select>

                    <div className="text-text pointer-events-none absolute inset-y-0 right-0 flex items-center justify-end pr-4">
                        <MdKeyboardArrowDown />
                    </div>
                </div>

                {/* search filter */}
                <div className="text-text flex w-60 items-center space-y-4 md:flex-row md:space-y-0">
                    <div className="relative w-full">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                            <IoIosSearch />
                        </div>

                        <input
                            type="text"
                            value={globalFilter ?? ''}
                            onChange={e => setGlobalFilter(e.target.value)}
                            placeholder="Search games"
                            className="bg-header border-border text-text w-full appearance-none rounded-lg border-2 py-2 pr-3 pl-9 text-sm outline-none"
                        />
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="border-border overflow-x-auto rounded-lg border-2">
                <table className="w-full table-fixed border-collapse text-left" style={{minWidth: table.getTotalSize()}}>
                    <thead className="bg-header">
                        {table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map(header => {
                                    const isTitle = header.column.id === 'title';
                                    const widthStyle = isTitle ? 'auto' : `${header.getSize()}px`;

                                    return (
                                        <th
                                            key={header.id}
                                            style={{width: widthStyle}}
                                            className="border-b border-zinc-200 px-6 py-3 text-xs font-medium tracking-wider text-gray-500 uppercase dark:border-zinc-900"
                                        >
                                            {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                        </th>
                                    );
                                })}
                            </tr>
                        ))}
                    </thead>
                    <tbody className="divide-y divide-zinc-200 dark:divide-zinc-900">
                        {table.getRowModel().rows.length === 0 ? (
                            <tr>
                                <td colSpan={columns.length} className="text-text px-6 py-8 text-center dark:bg-zinc-950">
                                    No games found matching your criteria.
                                </td>
                            </tr>
                        ) : (
                            table.getRowModel().rows.map(row => (
                                <tr
                                    key={row.id}
                                    className="text-text cursor-pointer bg-zinc-100 hover:bg-zinc-50 dark:bg-zinc-950 dark:hover:bg-zinc-900"
                                    onClick={() => {
                                        window.open(
                                            `https://github.com/shadps4-compatibility/shadps4-game-compatibility/issues/${row.original.id}`,
                                            '_blank',
                                            'noopener,noreferrer',
                                        );
                                    }}
                                >
                                    {row.getVisibleCells().map(cell => (
                                        <td key={cell.id} className="overflow-hidden px-6 py-4 text-sm text-ellipsis whitespace-nowrap">
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
                <span className="text-text text-sm">
                    Showing <span className="font-semibold">{pageIndex + 1}</span> of <span className="font-semibold">{pageCount}</span> Pages
                    <span className="ml-2">({table.getFilteredRowModel().rows.length} Total Games)</span>
                </span>

                <div className="flex items-center gap-2">
                    <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()} className="button">
                        Previous
                    </button>

                    <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()} className="button">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
