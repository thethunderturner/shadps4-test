import {useState} from 'react';
import OSCard from '@/components/downloads/OSCard.tsx';
import VersionSelector, {type VersionOption} from '@/components/downloads/VersionSelector.tsx';
import DownloadSection from '@/components/downloads/DownloadSection.tsx';
import {FaWindows, FaLinux, FaApple} from 'react-icons/fa';

const QT_VERSIONS: VersionOption[] = [
    {id: 'qt-1', label: 'shadPS4QtLauncher-v0.1.1', value: 'shadPS4QtLauncher-v0.1.1'},
    {id: 'qt-2', label: 'shadPS4QtLauncher-v0.1.0', value: 'shadPS4QtLauncher-v0.1.0'},
];

const CORE_VERSIONS: VersionOption[] = [
    {id: 'v0.12.5', label: '0.12.5 (Latest)', value: '0.12.5'},
    {id: 'v0.12.0', label: '0.12.0', value: '0.12.0'},
    {id: 'v0.11.0', label: '0.11.0', value: '0.11.0'},
];

export default function DownloadPage() {
    const [selectedQtVersion, setSelectedQtVersion] = useState(QT_VERSIONS[0]);
    const [selectedCoreVersion, setSelectedCoreVersion] = useState(CORE_VERSIONS[0]);

    // Legacy interface is removed in 0.12.5+
    const isLegacyAvailable = selectedCoreVersion.value !== '0.12.5';

    return (
        <div className="text-text mx-auto flex max-w-7xl flex-col gap-12 p-8">
            {/* Qt Launcher Section */}
            <DownloadSection
                title="shadPS4 Qt launcher (GUI) - recommended"
            >
                <OSCard
                    name="Windows"
                    description={`Download ${selectedQtVersion.value} version for Windows.`}
                    Icon={FaWindows}
                    buttonLabel="Download"
                    buttonColor="blue"
                />
                <OSCard
                    name="Linux"
                    description={`Download ${selectedQtVersion.value} version for Linux.`}
                    Icon={FaLinux}
                    buttonLabel="Download"
                    buttonColor="green"
                />
                <OSCard
                    name="macOS"
                    description={`Download ${selectedQtVersion.value} version for macOS.`}
                    Icon={FaApple}
                    buttonLabel="Download"
                    buttonColor="red"
                />
            </DownloadSection>

            <div className="h-px w-full bg-gray-800" />

            <DownloadSection
                title="shadPS4 latest version"
                headerAction={<VersionSelector label="Version" options={CORE_VERSIONS} selected={selectedCoreVersion} onSelect={setSelectedCoreVersion} />}
            >
                {/* Legacy Qt Interface */}
                <div className="w-full space-y-6">
                    <h3 className="text-xl font-bold">shadPS4 latest version with Qt GUI (legacy interface)</h3>

                    <div className="flex w-full flex-col gap-6 lg:flex-row lg:justify-start lg:gap-6">
                        <OSCard
                            name="Windows"
                            description={`Download ${selectedCoreVersion.value} (QT) version for Windows.`}
                            Icon={FaWindows}
                            buttonLabel={isLegacyAvailable ? 'Download' : 'Not available'}
                            buttonColor="blue"
                            disabled={!isLegacyAvailable}
                        />
                        <OSCard
                            name="Linux"
                            description={`Download ${selectedCoreVersion.value} (QT) version for Linux.`}
                            Icon={FaLinux}
                            buttonLabel={isLegacyAvailable ? 'Download' : 'Not available'}
                            buttonColor="green"
                            disabled={!isLegacyAvailable}
                        />
                        <OSCard
                            name="macOS"
                            description={`Download ${selectedCoreVersion.value} (QT) version for macOS.`}
                            Icon={FaApple}
                            buttonLabel={isLegacyAvailable ? 'Download' : 'Not available'}
                            buttonColor="red"
                            disabled={!isLegacyAvailable}
                        />
                    </div>
                </div>

                {/* CLI Interface */}
                <div className="w-full space-y-6 pt-6">
                    <h3 className="text-xl font-bold">shadPS4 latest version (cli)</h3>
                    <div className="flex w-full flex-col gap-6 lg:flex-row lg:justify-start lg:gap-6">
                        <OSCard
                            name="Windows"
                            description={`Download ${selectedCoreVersion.value} (CLI) version for Windows.`}
                            Icon={FaWindows}
                            buttonLabel="Download"
                            buttonColor="blue"
                        />
                        <OSCard
                            name="Linux"
                            description={`Download ${selectedCoreVersion.value} (CLI) version for Linux.`}
                            Icon={FaLinux}
                            buttonLabel="Download"
                            buttonColor="green"
                        />
                        <OSCard
                            name="macOS"
                            description={`Download ${selectedCoreVersion.value} (CLI) version for macOS.`}
                            Icon={FaApple}
                            buttonLabel="Download"
                            buttonColor="red"
                        />
                    </div>
                </div>
            </DownloadSection>
        </div>
    );
}
