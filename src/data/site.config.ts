interface SiteConfig {
    site: string;
    author: string;
    title: string;
    description: string;
    lang: string;
    ogLocale: string;
    shareMessage: string;
    paginationSize: number;
}

export const siteConfig: SiteConfig = {
    site: 'https://shadps4.net/', // Write here your website url
    author: 'ShadPS4', // Site author
    title: 'ShadPS4', // Site title.
    description: 'shadPS4 is an early PlayStation 4 emulator for Windows, Linux and macOS written in C++', // Description to display in the meta tags
    lang: 'en-US',
    ogLocale: 'en_US',
    shareMessage: 'Share this post', // Message to share a post on social media
    paginationSize: 8, // Number of posts per page
};
