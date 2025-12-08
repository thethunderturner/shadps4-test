import {Button} from '@headlessui/react';
import clsx from 'clsx';
import type {IconType} from 'react-icons';

interface OSCardProps {
    name: string;
    description: string;
    Icon: IconType;
    buttonLabel: string;
    buttonColor: 'blue' | 'green' | 'red';
    disabled?: boolean;
    onClick?: () => void;
}

export default function OSCard({name, description, Icon, buttonLabel, buttonColor, disabled, onClick}: OSCardProps) {
    const colorClasses = {
        blue: 'bg-blue-600 hover:bg-blue-500 text-white',
        green: 'bg-green-600 hover:bg-green-500 text-white',
        red: 'bg-red-600 hover:bg-red-500 text-white',
    };

    const buttonClass = clsx(
        'rounded-lg px-4 py-2 text-sm font-semibold transition-colors mt-auto',
        disabled ? 'bg-gray-700 text-gray-500 cursor-not-allowed' : colorClasses[buttonColor] || colorClasses.blue,
    );

    return (
        <div className="bg-compat-card border-border flex max-h-full w-full flex-col rounded-lg border-2 p-4 lg:w-96">
            <div className="border-border flex flex-row gap-x-4 border-b pb-4">
                <Icon className="size-12 fill-gray-900 dark:fill-white" />
                <div className="flex flex-col">
                    <span className="text-xl font-normal text-text">{name}</span>
                    <span className="text-sm font-normal text-gray-600 dark:text-gray-300">Tested games: 12112</span>
                </div>
            </div>
            <p className="py-4 text-sm text-text">{description}</p>

            <Button className={buttonClass} disabled={disabled} onClick={onClick}>
                {buttonLabel}
            </Button>
        </div>
    );
}
