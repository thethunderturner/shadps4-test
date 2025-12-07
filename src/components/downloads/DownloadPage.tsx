import { useState, useEffect } from 'react';
import OSCard from '@/components/downloads/OSCard.tsx';
import {FaWindows} from 'react-icons/fa';

export default function DownloadPage() {
    return (
        <OSCard name={"Windows"} totalDownloads={420} icon={FaWindows}/>
    );
}
