import {Button, Select} from '@headlessui/react';

export default function OSCard({name, totalDownloads, icon}: {name: string, totalDownloads: number, icon: any}) {
    return(
        <div className="flex max-h-full w-full flex-col rounded-lg bg-compat-card p-4 border-border border-2 lg:w-110">
            {/* Header */}
            <div className="flex flex-row gap-x-4 border-b border-border pb-4">
                <div className="flex flex-col">
                    <span className="text-xl font-normal text-gray-600 dark:text-white">{name}</span>
                    <span className="text-sm font-normal text-gray-600 dark:text-gray-300">Total Downloads: {totalDownloads}</span>
                </div>
            </div>
            <div className="flex flex-row gap-x-4 items-center justify-between mt-4">
                <Button className="rounded bg-header p-2 text-sm text-text">
                    Download Latest
                </Button>
                <Select
                    className="bg-header rounded p-2 text-sm text-text"
                    name="downloads"
                    aria-label="Official Releases"
                    defaultValue="placeholder"
                >
                    <option value="placeholder" disabled>
                        Official Releases
                    </option>
                    <option value="1">v1</option>
                    <option value="2">v2</option>
                    <option value="3">v3</option>
                    <option value="4">v4</option>
                    <option value="more">...</option>
                </Select>
            </div>
        </div>
    )
}