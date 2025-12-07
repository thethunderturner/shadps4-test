import type {ReactNode} from 'react';

interface DownloadSectionProps {
    title: string;
    children: ReactNode;
    headerAction?: ReactNode;
}

export default function DownloadSection({title, children, headerAction}: DownloadSectionProps) {
    return (
        <section className="flex w-full flex-col gap-6">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <h2 className="text-lg font-bold text-white">{title}</h2>
                {headerAction && <div className="flex-shrink-0">{headerAction}</div>}
            </div>

            <div className="flex w-full flex-col flex-wrap gap-6 lg:flex-row lg:justify-start lg:gap-6">{children}</div>
        </section>
    );
}
