import {Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/react';
import {ChevronDownIcon} from '@heroicons/react/16/solid';

export interface VersionOption {
    id: string;
    label: string;
    value: string;
}

interface VersionSelectorProps {
    options: VersionOption[];
    selected: VersionOption;
    onSelect: (option: VersionOption) => void;
    label?: string;
}

export default function VersionSelector({options, selected, onSelect, label}: VersionSelectorProps) {
    return (
        <div className="flex items-center gap-4">
            {label && <span className="text-text">{label}:</span>}
            <Menu>
                <MenuButton className="flex w-auto min-w-24 items-center justify-between gap-2 rounded-lg border border-border bg-header px-4 py-2 text-sm text-text outline-none">
                    {selected.label}
                    <ChevronDownIcon className="size-4 opacity-50" />
                </MenuButton>
                <MenuItems
                    anchor="bottom"
                    className="z-10 mt-1 w-auto min-w-24 origin-top-right rounded-lg border border-border bg-header p-1 text-sm text-text shadow-lg focus:outline-none"
                >
                    {options.map(opt => (
                        <MenuItem key={opt.id}>
                            <button
                                onClick={() => onSelect(opt)}
                                className="group flex w-full items-center gap-2 rounded-md px-3 py-1.5 data-[focus]:bg-gray-100 dark:data-[focus]:bg-gray-800"
                            >
                                {opt.label}
                            </button>
                        </MenuItem>
                    ))}
                </MenuItems>
            </Menu>
        </div>
    );
}
