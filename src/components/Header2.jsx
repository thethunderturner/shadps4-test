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
import {ChevronDownIcon, PhoneIcon, PlayCircleIcon} from '@heroicons/react/20/solid';
import shadPS4Logo from '../assets/shadPS4Logo.png';

const about = [
    {name: 'Privacy Policy', href: '/about/privacy-policy'},
    {name: 'Terms and Conditions', href: '/about/terms-and-conditions'},
];

export default function Header2({children}) {
    const [aboutMenuOpen, setAboutMenuOpen] = useState(false);

    return (
        <header className="bg-white">
            <nav aria-label="Global" className="mx-auto flex h-16 items-center bg-blue-950 p-6">
                <div className="flex flex-1 items-center gap-x-2">
                    {children}
                    <span className="text-2xl font-semibold text-white">ShadPS4</span>
                </div>
                <div className="flex justify-center gap-8 text-center">
                    <a className="font-semibold text-white" href="/">
                        Home
                    </a>
                    <a className="font-semibold text-white" href="/forums">
                        Forums
                    </a>
                    <a className="font-semibold text-white" href="/downloads">
                        Downloads
                    </a>
                    <a className="font-semibold text-white" href="/compatibility">
                        Compatibility
                    </a>
                    <a className="font-semibold text-white" href="/gallery">
                        Gallery
                    </a>
                    <a className="font-semibold text-white" href="/videos">
                        Videos
                    </a>
                    <a className="font-semibold text-white" href="/faq">
                        FAQ
                    </a>
                    <a className="font-semibold text-white">About</a>
                </div>
                <div className="flex-1 text-right">03</div>
            </nav>
        </header>
    );
}
