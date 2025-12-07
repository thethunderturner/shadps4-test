import OSCard from '@/components/downloads/OSCard.tsx';
import {FaWindows, FaLinux, FaApple} from 'react-icons/fa';

export default function DownloadPage() {
    return (
        <>
            <div className="text-text font-bold">shadPS4 latest version with Qt GUI (legacy interface)</div>
            <div className="flex w-full flex-col gap-6 lg:flex-row lg:justify-evenly">
                <OSCard name={'Windows'} totalDownloads={420} Icon={FaWindows} />
                <OSCard name={'Linux'} totalDownloads={1234} Icon={FaLinux} />
                <OSCard name={'macOS'} totalDownloads={20000000} Icon={FaApple} />
            </div>
        </>
    );
}
