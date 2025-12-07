import {about, external, gallery, pages} from '@/data/navigation.ts';
import {useEffect, useState} from 'react';

export default function MobileSidebar() {
    const [isOpen, setIsOpen] = useState(false);

    // Prevent scrolling on the body when the menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    return (
        <div className="lg:hidden">
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="text-text -m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                aria-label="Open main menu"
            >
                <span className="sr-only">Open main menu</span>
                <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>

            {isOpen && (
                <div className="relative z-50" aria-modal="true" role="dialog">
                    <div className="fixed inset-0 bg-gray-900/25 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

                    {/* Sidebar Panel */}
                    <div className="bg-header border-border fixed inset-y-0 left-0 z-50 w-full overflow-y-auto border-l px-6 py-6 shadow-xl sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <span className="text-text text-lg font-bold">Menu</span>
                            <button type="button" onClick={() => setIsOpen(false)} className="text-text -m-2.5 rounded-md p-2.5">
                                <span className="sr-only">Close menu</span>
                                <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="mt-6">
                            <h2 className="text-text text-lg/6 font-semibold text-pretty">Pages</h2>
                            <div className="mt-4 flex flex-col gap-4 border-l border-gray-950/10 text-base/7 text-gray-700 sm:mt-3 sm:gap-3 sm:text-sm/6 dark:border-white/10 dark:text-gray-400">
                                {pages.map(item => (
                                    <span className="-ml-px flex border-l border-transparent pl-4 hover:text-gray-950 dark:hover:text-white">
                                        <a href={item.href} key={item.name}>
                                            {item.name}
                                        </a>
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="mt-6">
                            <h2 className="text-text text-lg/6 font-semibold text-pretty">About</h2>
                            <div className="mt-4 flex flex-col gap-4 border-l border-gray-950/10 text-base/7 text-gray-700 sm:mt-3 sm:gap-3 sm:text-sm/6 dark:border-white/10 dark:text-gray-400">
                                {about.map(item => (
                                    <span className="-ml-px flex border-l border-transparent pl-4 hover:text-gray-950 dark:hover:text-white">
                                        <a href={item.href} key={item.name}>
                                            {item.name}
                                        </a>
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="mt-6">
                            <h2 className="text-text text-lg/6 font-semibold text-pretty">Gallery</h2>
                            <div className="mt-4 flex flex-col gap-4 border-l border-gray-950/10 text-base/7 text-gray-700 sm:mt-3 sm:gap-3 sm:text-sm/6 dark:border-white/10 dark:text-gray-400">
                                {gallery.map(item => (
                                    <span className="-ml-px flex border-l border-transparent pl-4 hover:text-gray-950 hover:not-has-aria-[current=page]:border-gray-400 has-aria-[current=page]:border-gray-950 dark:hover:text-white dark:has-aria-[current=page]:border-white">
                                        <a href={item.href} key={item.name}>
                                            {item.name}
                                        </a>
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="mt-6 flow-root">
                            <div className="divide-border -my-6 divide-y">
                                {/* External Links / Socials */}
                                <div className="py-6">
                                    <div className="flex gap-x-4">
                                        {external.map(item => (
                                            <a key={item.name} href={item.href} className="text-text" aria-label={item.name} target="_blank">
                                                {/* Render the icon component directly */}
                                                <item.icon className="size-6" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
