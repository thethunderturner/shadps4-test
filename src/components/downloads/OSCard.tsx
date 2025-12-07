import { Button, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import {ChevronDownIcon} from '@heroicons/react/16/solid';
import type {IconType} from 'react-icons';

export default function OSCard({name, totalDownloads, Icon}: {name: string, totalDownloads: number, Icon: IconType}) {
    const versions = [
        { id: 'v1', label: 'v0.1.0', url: '/downloads/v1.zip' },
        { id: 'v2', label: 'v0.2.0', url: '/downloads/v2.zip' },
        { id: 'v3', label: 'v0.3.0', url: '/downloads/v3.zip' },
        { id: 'v4', label: 'v0.4.0', url: '/downloads/v4.zip' },
        { id: 'more', label: '...', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    ];

    return(
        <div className="flex max-h-full w-full flex-col rounded-lg bg-compat-card p-4 border-border border-2 lg:w-90">
            {/* Header */}
            <div className="flex flex-row gap-x-4 border-b border-border pb-4">
                {/*IMPORT ICON HERE: icon*/}
                <Icon className="size-12 fill-gray-600 dark:fill-white" />
                <div className="flex flex-col">
                    <span className="text-xl font-normal text-gray-600 dark:text-white">{name}</span>
                    <span className="text-sm font-normal text-gray-600 dark:text-gray-300">Total Downloads: {totalDownloads}</span>
                </div>
            </div>

            <div className="flex flex-row gap-x-4 items-center justify-between mt-4">
                <Button className="rounded-lg bg-header p-2 text-sm text-text border border-border">
                    Download Latest
                </Button>

                {/* Replaced Select with Menu */}
                <Menu>
                    <MenuButton className="w-40 flex items-center gap-2 rounded-lg bg-header p-2 text-sm text-text border border-border">
                        Official Releases
                        <ChevronDownIcon className="size-4 opacity-50" />
                    </MenuButton>

                    <MenuItems
                        anchor="bottom"
                        className="w-40 origin-top-right rounded-lg border border-border bg-header p-1 text-sm text-text shadow-lg focus:outline-none z-10 mt-1"
                    >
                        {versions.map((version) => (
                            <MenuItem key={version.id}>
                                <a
                                    href={version.url}
                                    className="group flex w-full items-center gap-2 rounded-md px-3 py-1.5 data-[focus]:bg-gray-100 dark:data-[focus]:bg-gray-800"
                                >
                                    {version.label}
                                </a>
                            </MenuItem>
                        ))}
                    </MenuItems>
                </Menu>
            </div>
        </div>
    )
}