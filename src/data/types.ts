import type {IconType} from 'react-icons';

type Page = {
    name: string;
    href: string;
};

type ExternalPage = {
    name: string;
    href: string;
    icon: IconType;
};

type Game = {
    id: number;
    title: string;
    code: string;
    type: string;
    status: GameStatus;
    os: GameOs;
    version: string;
    updatedDate: string;
    region: GameRegion;
    image: boolean;
};

type Post = {
    slug: string;
    optimizedImageSrc: string;
    data: {
        title: string;
        description: string;
        pubDate: Date;
        heroImage?: {src: string};
        category?: string;
        tags?: string[];
    };
};

type Heading = {
    depth: number;
    slug: string;
    text: string;
    subheadings: Heading[];
};

type OS = {
    tag: GameStatus;
    percent: number;
    count: number;
    total: number;
};

type GameStatus = 'Nothing' | 'Boots' | 'Menus' | 'Ingame' | 'Playable';
type GameRegion = 'USA' | 'Europe' | 'Japan' | 'Asia' | 'Unknown';
type GameOs = 'Windows' | 'Linux' | 'macOS';

export type {Game, OS, GameRegion, GameStatus, GameOs, Post, Heading, Page, ExternalPage};
