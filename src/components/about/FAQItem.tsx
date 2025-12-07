import {Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react';
import React from 'react';
import {FaChevronDown} from 'react-icons/fa';

export default function FAQItem({title, children}: {title: string; children: React.ReactNode}) {
    return (
        <Disclosure as="div" className="border-border border-b">
            {({open}) => (
                <>
                    <DisclosureButton className="text-text flex w-full justify-between py-4 text-left text-lg font-medium focus:outline-none">
                        <span>{title}</span>
                        <FaChevronDown className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-gray-500 transition-transform duration-200`} />
                    </DisclosureButton>
                    <DisclosurePanel className="prose dark:prose-invert max-w-none pb-4 text-gray-400">{children}</DisclosurePanel>
                </>
            )}
        </Disclosure>
    );
}
