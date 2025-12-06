import {Popover, PopoverButton, PopoverPanel} from '@headlessui/react';
import {about} from '@/data/navigation.ts';
import {MdKeyboardArrowDown} from 'react-icons/md';

export default function AboutPopover() {
    return (
        <Popover className="relative">
            <PopoverButton className="group flex items-center gap-x-1 text-base/6 text-text cursor-pointer font-semibold outline-none">
                <span>About</span>
                <MdKeyboardArrowDown
                    className="size-5 text-text/80 transition-transform duration-200 group-data-[open]:rotate-180"
                    aria-hidden="true"
                    focusable="false"
                    role="presentation"
                />
            </PopoverButton>

            <PopoverPanel
                anchor="bottom start"
                transition
                className="border-border bg-header z-50 mt-3 flex max-w-54 flex-col overflow-hidden rounded-lg border shadow-xl transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
            >
                <div className="flex flex-col p-2">
                    {about.map(item => (
                        <a href={item.href} role="menuitem" aria-label={item.name}>
                            <span className="block p-2 font-semibold text-text">
                                {item.name}
                            </span>
                        </a>
                    ))}
                </div>
            </PopoverPanel>
        </Popover>
    );
}
