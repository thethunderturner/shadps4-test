import {useState} from 'react';
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
} from '@headlessui/react';
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

export default function Header1({children}) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header>
            {/*Header*/}
            <nav className="mb-16 flex h-16 w-full items-center justify-between border-b border-border bg-header px-4">
                {/*Logo*/}
                <div className="flex items-center gap-x-2 lg:flex-row w-fit">
                    {children}
                    <span className="text-2xl/6 font-semibold text-white">ShadPS4</span>
                </div>

                {/*Pages*/}
                <div className="hidden flex-row gap-x-4 lg:flex">
                    {pages.map(item => (
                        <a key={item.name} href={item.href} className="text-base/6 font-semibold text-white">
                            {item.name}
                        </a>
                    ))}
                    {/*About Page*/}
                    <div className="relative">
                        <button
                            popovertarget="about-popover"
                            className="inline-flex items-center gap-x-1"
                            id="popover-button-0"
                            type="button"
                            aria-haspopup="true"
                            aria-controls="about-popover"
                            aria-expanded="false"
                        >
                            <span className="text-base/6 font-semibold text-white">About</span>
                            <svg
                                viewBox="0 0 20 20"
                                data-slot="icon"
                                aria-hidden="true"
                                className="size-5"
                            >
                                <path
                                    d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                                    clip-rule="evenodd"
                                    fill-rule="evenodd"
                                    className="fill-black dark:fill-white"
                                ></path>
                            </svg>
                        </button>

                        <el-popover
                            id="about-popover"
                            anchor="bottom"
                            popover=""
                            data-default-open=""
                            className="border-border bg-header absolute mt-3 h-fit w-screen max-w-54 overflow-hidden rounded-lg border"
                        >
                            <div className="flex flex-col p-2">
                                {about.map(item => (
                                    <a href={item.href}>
                                        <span className="block p-2 font-semibold text-white">{item.name}</span>
                                    </a>
                                ))}
                            </div>
                        </el-popover>
                    </div>
                    {/*Gallery Page*/}
                    <div className="relative">
                        <button
                            popovertarget="gallery-popover"
                            className="inline-flex items-center gap-x-1"
                            id="popover-button-1"
                            type="button"
                            aria-haspopup="true"
                            aria-controls="gallery-popover"
                            aria-expanded="false"
                        >
                            <span className="text-base/6 font-semibold text-white">Gallery</span>
                            <svg
                                viewBox="0 0 20 20"
                                data-slot="icon"
                                aria-hidden="true"
                                className="size-5"
                            >
                                <path
                                    d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                                    clip-rule="evenodd"
                                    fill-rule="evenodd"
                                    className="fill-black dark:fill-white"
                                ></path>
                            </svg>
                        </button>

                        <el-popover
                            id="gallery-popover"
                            anchor="bottom"
                            popover=""
                            data-default-open=""
                            className="border-border bg-header absolute mt-3 h-fit w-screen max-w-54 overflow-hidden rounded-lg border"
                        >
                            <div className="flex flex-col p-2">
                                {gallery.map(item => (
                                    <a href={item.href}>
                                        <span className="block p-2 font-semibold text-white">{item.name}</span>
                                    </a>
                                ))}
                            </div>
                        </el-popover>
                    </div>
                </div>

                <div className="hidden flex-row justify-evenly gap-x-4 lg:flex">
                    <div className="size-7 bg-white"></div>
                    <div className="size-7 bg-white"></div>
                    <div className="size-7 bg-white"></div>
                    <div className="size-7 bg-white"></div>
                    <div className="size-7 bg-white"></div>
                </div>

                <div className="block size-7 bg-white lg:hidden"></div>
            </nav>
        </header>
    );
}
