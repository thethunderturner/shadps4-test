import {gallery} from '@/data/navigation.ts';
import {Popover, PopoverButton, PopoverPanel} from '@headlessui/react';
import {MdKeyboardArrowDown} from 'react-icons/md';

export default function GalleryPopover() {
    return (
        <Popover className="relative">
            <PopoverButton className="group text-text flex cursor-pointer items-center gap-x-1 text-base/6 font-semibold outline-none">
                <span>Gallery</span>
                <MdKeyboardArrowDown
                    className="text-text/80 size-5 transition-transform duration-200 group-data-[open]:rotate-180"
                    aria-hidden="true"
                    focusable="false"
                    role="presentation"
                />
            </PopoverButton>

            <PopoverPanel
                anchor="bottom start"
                transition
                className="border-border bg-header z-50 mt-3 flex w-54 flex-col overflow-hidden rounded-lg border shadow-xl transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
            >
                <div className="flex flex-col p-2">
                    {gallery.map(item => (
                        <a href={item.href} role="menuitem" aria-label={item.name}>
                            <span className="text-text block p-2 font-semibold">{item.name}</span>
                        </a>
                    ))}
                </div>
            </PopoverPanel>
        </Popover>
    );
}
