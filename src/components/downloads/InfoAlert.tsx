import {InformationCircleIcon} from '@heroicons/react/24/outline';

interface InfoAlertProps {
    children: React.ReactNode;
}

export default function InfoAlert({children}: InfoAlertProps) {
    return (
        <div className="flex items-start gap-3 rounded-lg border border-blue-900/50 bg-blue-900/10 p-4 text-blue-100 table-fixed">
            <InformationCircleIcon className="size-6 flex-shrink-0 text-blue-400" />
            <div className="text-sm leading-relaxed text-gray-300">{children}</div>
        </div>
    );
}
