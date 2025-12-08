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
                <h2 className="text-text text-lg font-bold">{title}</h2>
                {headerAction && <div className="flex-shrink-0">{headerAction}</div>}
            </div>

            <div className="flex w-full flex-col gap-6 md:flex-row md:flex-wrap md:justify-start md:gap-6">{children}</div>
        </section>
    );
}
