import {compatColor} from '../utils/utils';
import React from 'react';
import '/node_modules/flag-icons/css/flag-icons.min.css';

function StatusBadge({status}) {
    const badgeColor = compatColor[status] ?? 'bg-gray-500';
    return <span className={`rounded ${badgeColor} px-2 py-1 text-xs font-semibold`}>{status}</span>;
}

function RegionFlag({region}) {
    switch (region) {
        case 'USA':
            return <span className="fi fi-us"></span>;
        case 'Europe':
            return <span className="fi fi-eu"></span>;
        case 'Japan':
            return <span className="fi fi-jp"></span>;
        default:
            return <span className="fi fi-xx"></span>;
    }
}

export {StatusBadge, RegionFlag};
