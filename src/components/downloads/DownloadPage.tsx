import { useState, useEffect } from 'react';
import OSCard from '@/components/downloads/OSCard.tsx';

export default function DownloadPage() {
    return (
        <OSCard name={"Windows"} totalDownloads={420} />
    );
}
