import { InformationCircleIcon } from '@heroicons/react/24/outline';

interface InfoAlertProps {
    children: React.ReactNode;
}

export default function InfoAlert({ children }: InfoAlertProps) {
    return (
        <div className="flex items-start gap-3 rounded-lg border border-blue-200 bg-blue-50 p-4 text-blue-900 dark:border-blue-900/50 dark:bg-blue-900/10 dark:text-gray-300 table-fixed">
            <InformationCircleIcon className="size-6 flex-shrink-0 text-blue-500 dark:text-blue-400" />
            <div className="leading-relaxed">{children}</div>
        </div>
    );
}
