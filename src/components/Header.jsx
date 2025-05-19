import { useState } from 'react'
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { FaDiscord, FaYoutube, FaGithub, FaTwitter, FaCoffee } from "react-icons/fa";

const pages = [
    {name: 'Home', href: '/'},
    {name: 'Forums', href: '/forums'},
    {name: 'Downloads', href: '/downloads'},
    {name: 'Compatibility', href: '/compatibility'},
    {name: 'Gallery', href: '/gallery'},
    {name: 'Videos', href: '/videos'},
    {name: 'FAQ', href: '/faq'},
]

const about = [
    { name: 'Privacy Policy', href: '/about/privacy-policy' },
    { name: 'Terms and Conditions', href: '/about/terms-and-conditions' },
]

const external = [
    { name: 'YouTube', href: 'https://www.youtube.com/@gmoralistube', icon: FaYoutube},
    { name: 'Discord', href: 'https://discord.gg/bFJxfftGW6' , icon: FaDiscord},
    { name: 'GitHub', href: 'https://github.com/shadps4-emu/shadPS4', icon: FaGithub },
    { name: 'X', href: 'https://twitter.com/shadps4', icon: FaTwitter },
    { name: 'KoFi', href: 'https://ko-fi.com/shadps4', icon: FaCoffee },
]

export default function Header({children}) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white">
            <nav aria-label="Global" className="flex flex-1 items-center justify-between p-4 lg:px-16">
                {/*Logo*/}
                <div className="flex items-center gap-x-2 lg:flex-1">
                    {children}
                    <span className="text-2xl/6 font-semibold text-gray-700">ShadPS4</span>
                </div>

                {/*Collapsed sidebar button (visible on mobile)*/}
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>

                {/*Header menu*/}
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    {pages.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-base/6 font-semibold text-gray-900"
                        >
                            {item.name}
                        </a>
                    ))}
                    <Popover className="relative">
                        <PopoverButton className="flex items-center gap-x-1 text-base/6 font-semibold text-gray-900">
                            About
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                        </PopoverButton>

                        <PopoverPanel
                            transition
                            className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-54 overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                        >
                            <div className="p-4">
                                {about.map((item) => (
                                    <div
                                        key={item.name}
                                        className="group relative flex items-center gap-x-6 rounded-lg p-2 text-base/6 hover:bg-gray-50"
                                    >
                                        <div className="flex-auto">
                                            <a href={item.href} className="block font-semibold text-gray-900">
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
                <div className="hidden lg:flex items-center gap-x-4 lg:flex-1 lg:justify-end">
                    {external.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-sm/6 font-semibold text-gray-900"
                        >
                            <item.icon className="size-7" />
                        </a>
                    ))}
                </div>
            </nav>

            {/*Sidebar Dialog(visible on mobile)*/}
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-x-2 lg:flex-1">
                            {children}
                            <span className="text-2xl font-semibold text-gray-700">ShadPS4</span>
                        </div>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {pages.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </a>
                                ))}

                                <Disclosure as="div" className="-mx-3">
                                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                                        About
                                        <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                                    </DisclosureButton>
                                    <DisclosurePanel className="mt-2 space-y-2">
                                        {about.map((item) => (
                                            <DisclosureButton
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </DisclosureButton>
                                        ))}
                                    </DisclosurePanel>
                                </Disclosure>
                                <Disclosure as="div" className="-mx-3">
                                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                                        External
                                        <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                                    </DisclosureButton>
                                    <DisclosurePanel className="mt-2 space-y-2">
                                        {external.map((item) => (
                                            <DisclosureButton
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className="flex-1 flex rounded-lg py-2 pr-3 pl-6 gap-x-2 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
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
    )
}