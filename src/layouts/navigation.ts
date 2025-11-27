import {FaCoffee, FaDiscord, FaGithub, FaYoutube} from 'react-icons/fa';
import {RiTwitterXFill} from 'react-icons/ri';
import type {IconType} from 'react-icons';

interface PageItem {
    name: string;
    href: string;
}

interface ExternalItem {
    name: string;
    href: string;
    icon: IconType;
}

const pages: PageItem[] = [
    {name: 'Home', href: '/shadps4-test'},
    {name: 'Downloads', href: '/shadps4-test/downloads'},
    {name: 'Quickstart', href: '/shadps4-test/quickstart'},
    {name: 'Forums', href: '/shadps4-test/forums'},
    {name: 'Blog', href: '/shadps4-test/blog'},
    {name: 'Compatibility', href: '/shadps4-test/compatibility'},
];

const external: ExternalItem[] = [
    {name: 'YouTube', href: 'https://www.youtube.com/@gmoralistube', icon: FaYoutube},
    {name: 'Discord', href: 'https://discord.gg/bFJxfftGW6', icon: FaDiscord},
    {name: 'GitHub', href: 'https://github.com/shadps4-emu/shadPS4', icon: FaGithub},
    {name: 'X', href: 'https://twitter.com/shadps4', icon: RiTwitterXFill},
    {name: 'KoFi', href: 'https://ko-fi.com/shadps4', icon: FaCoffee},
];

const about: PageItem[] = [
    {name: 'Privacy Policy', href: '/shadps4-test/about/privacy-policy'},
    {name: 'Terms and Conditions', href: '/shadps4-test/about/terms-and-conditions'},
    {name: 'FAQ', href: '/shadps4-test/about/faq'},
];

const gallery: PageItem[] = [
    {name: 'Photos', href: '/shadps4-test/gallery/photos'},
    {name: 'Videos', href: '/shadps4-test/gallery/videos'},
];

export {pages, external, about, gallery};
