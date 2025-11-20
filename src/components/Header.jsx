import {useState} from 'react';
import {Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel, Popover, PopoverButton, PopoverGroup, PopoverPanel} from '@headlessui/react';
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline';
import {ChevronDownIcon} from '@heroicons/react/20/solid';
import {FaDiscord, FaYoutube, FaGithub, FaTwitter, FaCoffee} from 'react-icons/fa';

const pages = [
    {name: 'Home', href: '/'},
    {name: 'Downloads', href: '/downloads'},
    {name: 'Quickstart', href: '/quickstart'},
    {name: 'Forums', href: '/forums'},
    {name: 'Compatibility', href: '/compatibility'},
    {name: 'FAQ', href: '/faq'},
];

const gallery = [
    {name: 'Photos', href: '/gallery/photos'},
    {name: 'Videos', href: '/gallery/videos'},
];

const about = [
    {name: 'Privacy Policy', href: '/about/privacy-policy'},
    {name: 'Terms and Conditions', href: '/about/terms-and-conditions'},
];

const external = [
    {name: 'YouTube', href: 'https://www.youtube.com/@gmoralistube', icon: FaYoutube},
    {name: 'Discord', href: 'https://discord.gg/bFJxfftGW6', icon: FaDiscord},
    {name: 'GitHub', href: 'https://github.com/shadps4-emu/shadPS4', icon: FaGithub},
    {name: 'X', href: 'https://twitter.com/shadps4', icon: FaTwitter},
    {name: 'KoFi', href: 'https://ko-fi.com/shadps4', icon: FaCoffee},
];

export default function Header({children}) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="border-border bg-header mb-16 border-b">
            <nav aria-label="Global" className="flex flex-1 items-center justify-between p-4 px-16">
                {/*Logo*/}
                <div className="flex items-center gap-x-2 lg:flex-1">
                    {children}
                    <span className="text-2xl/6 font-semibold text-white">ShadPS4</span>
                </div>

                {/*Collapsed sidebar button (visible on mobile)*/}
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>

                {/*Header menu*/}
                <PopoverGroup className="hidden lg:flex lg:gap-x-8">
                    {pages.map(item => (
                        <a key={item.name} href={item.href} className="text-base/6 font-semibold text-white">
                            {item.name}
                        </a>
                    ))}
                    <Popover className="relative">
                        <PopoverButton className="flex items-center gap-x-1 text-base/6 font-semibold text-white">
                            Gallery
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-white" />
                        </PopoverButton>

                        <PopoverPanel
                            transition
                            className="border-border bg-header absolute top-full -left-8 z-10 mt-3 w-screen max-w-54 overflow-hidden rounded-lg border transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                        >
                            <div className="p-4">
                                {gallery.map(item => (
                                    <div key={item.name} className="group relative flex items-center gap-x-6 rounded-lg p-2 text-base/6">
                                        <div className="flex-auto">
                                            <a href={item.href} className="block font-semibold text-white">
                                                {item.name}
                                                <span className="absolute inset-0" />
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </PopoverPanel>
                    </Popover>

                    <Popover className="relative">
                        <PopoverButton className="flex items-center gap-x-1 text-base/6 font-semibold text-white">
                            About
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-white" />
                        </PopoverButton>

                        <PopoverPanel
                            transition
                            className="border-border bg-header absolute top-full -left-8 z-10 mt-3 w-screen max-w-54 overflow-hidden rounded-lg border transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                        >
                            <div className="p-4">
                                {about.map(item => (
                                    <div key={item.name} className="group relative flex items-center gap-x-6 rounded-lg p-2 text-base/6">
                                        <div className="flex-auto">
                                            <a href={item.href} className="block font-semibold text-white">
                                                {item.name}
                                                <span className="absolute inset-0" />
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </PopoverPanel>
                    </Popover>
                </PopoverGroup>

                {/*Social media icons*/}
                <div className="hidden items-center gap-x-4 lg:flex lg:flex-1 lg:justify-end">
                    {external.map(item => (
                        <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-white">
                            <item.icon className="size-7" />
                        </a>
                    ))}
                    <button id="themeToggle" aria-label="Toggle theme">
                        <svg aria-hidden="true" width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                className="sun"
                                fillRule="evenodd"
                                d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0 1.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm12-7a.8.8 0 0 1-.8.8h-2.4a.8.8 0 0 1 0-1.6h2.4a.8.8 0 0 1 .8.8zM4 12a.8.8 0 0 1-.8.8H.8a.8.8 0 0 1 0-1.6h2.5a.8.8 0 0 1 .8.8zm16.5-8.5a.8.8 0 0 1 0 1l-1.8 1.8a.8.8 0 0 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM6.3 17.7a.8.8 0 0 1 0 1l-1.7 1.8a.8.8 0 1 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM12 0a.8.8 0 0 1 .8.8v2.5a.8.8 0 0 1-1.6 0V.8A.8.8 0 0 1 12 0zm0 20a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-1.6 0v-2.4a.8.8 0 0 1 .8-.8zM3.5 3.5a.8.8 0 0 1 1 0l1.8 1.8a.8.8 0 1 1-1 1L3.5 4.6a.8.8 0 0 1 0-1zm14.2 14.2a.8.8 0 0 1 1 0l1.8 1.7a.8.8 0 0 1-1 1l-1.8-1.7a.8.8 0 0 1 0-1z"
                            />
                            <path
                                className="moon"
                                fillRule="evenodd"
                                d="M16.5 6A10.5 10.5 0 0 1 4.7 16.4 8.5 8.5 0 1 0 16.4 4.7l.1 1.3zm-1.7-2a9 9 0 0 1 .2 2 9 9 0 0 1-11 8.8 9.4 9.4 0 0 1-.8-.3c-.4 0-.8.3-.7.7a10 10 0 0 0 .3.8 10 10 0 0 0 9.2 6 10 10 0 0 0 4-19.2 9.7 9.7 0 0 0-.9-.3c-.3-.1-.7.3-.6.7a9 9 0 0 1 .3.8z"
                            />
                        </svg>
                    </button>
                </div>
            </nav>

            {/*Sidebar Dialog(visible on mobile)*/}
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="bg-header fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-x-2 lg:flex-1">
                            {children}
                            <span className="text-2xl font-semibold text-white">ShadPS4</span>
                        </div>
                        <button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 rounded-md p-2.5 text-white">
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {pages.map(item => (
                                    <a key={item.name} href={item.href} className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white">
                                        {item.name}
                                    </a>
                                ))}

                                <Disclosure as="div" className="-mx-3">
                                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-white">
                                        About
                                        <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                                    </DisclosureButton>
                                    <DisclosurePanel className="mt-2 space-y-2">
                                        {about.map(item => (
                                            <DisclosureButton
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-white"
                                            >
                                                {item.name}
                                            </DisclosureButton>
                                        ))}
                                    </DisclosurePanel>
                                </Disclosure>
                                <Disclosure as="div" className="-mx-3">
                                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-white">
                                        External
                                        <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                                    </DisclosureButton>
                                    <DisclosurePanel className="mt-2 space-y-2">
                                        {external.map(item => (
                                            <DisclosureButton
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className="flex flex-1 gap-x-2 rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-white"
                                            >
                                                <item.icon key={item.icon} className="size-7" />
                                                {item.name}
                                            </DisclosureButton>
                                        ))}
                                    </DisclosurePanel>
                                </Disclosure>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}
