# Quick start

#### This guide gives you the basics for installing the emulator in the best possible conditions, including all the pre-requisites for launching a game.

> [!WARNING]
> shadPS4 is still early in development. Many games do not work, and the few that do work usually face various emulation issues.
<br /> You can view the official compatibility list at https://shadps4.net/compatibility/
---

## 1. Requirements

### 1.1 Minimum System Requirements

#### CPU

- A processor with at least 4 cores and 6 threads
- Above 2.5 GHz frequency
- A CPU supporting the x86-64-v3 baseline.
    - **Intel**: Haswell generation or newer
    - **AMD**: Excavator generation or newer
    - **Apple**: Rosetta 2 on macOS 15.4 or newer

#### GPU

- A graphics card with at least 2GB of VRAM
- Vulkan 1.3 with the `VK_KHR_swapchain` and `VK_KHR_push_descriptor` extensions

#### RAM

- 8GB of RAM or more

#### OS

- At least Windows 10, Ubuntu 22.04, or macOS 15.4

### 1.2 Required Drivers

Before proceeding, ensure your drivers are up to date:

1. Find out which brand of graphics card you use.
2. Download the appropriate one for your operating system:
    - **Nvidia: https://www.nvidia.com/en-us/drivers**
    - **AMD: https://www.amd.com/en/support/download/drivers.html**
    - **Intel: https://www.intel.com/content/www/us/en/download-center/home.html**

> [!TIP]
> Make sure to update the drivers for all graphics cards in your computer, including any integrated graphics cards.
<br /> Outdated drivers, even for a graphics card you aren't using, can interfere with shadPS4.

---

## 2. Installation

### 2.1 Download shadPS4

> [!TIP]
> For a quick start, we will use the **Qt** version. The Qt version of shadPS4 comes with a GUI that makes it easier to use and configure.
<br /> There are also SDL builds, which run through the command line. These builds are less user-friendly, so using Qt builds is recommended for newer users.

1. Follow this link: **https://github.com/shadps4-emu/shadPS4/releases**
2. You can decide between two release version:
- `Pre-release-xxx` (These are unstable builds with the most recent development changes)
- `Release` (Latest stable release, eg 0.10.0)
3. Click on `⏵ Assets`, and find a file with your OS (`win64`, `linux`, `macos`) and the word `Qt` in the name.
    - For example, if you want the latest version for Windows, click on `shadps4-win64-qt-xxxx-xx-xx-xxxxxxx.zip`.
4. Extract the downloaded archive to your preferred location.
> [!WARNING]
> Do not extract shadPS4, or set any of it's user-selected directories into a folder that requires privileges to access!
<br /> This can cause various weird emulation issues, or prevent shadPS4 from running entirely.
---


**For Windows:**
1. First, you will need **Microsoft Visual C++ 2022** to run it.
    - Download it from here: **https://aka.ms/vs/17/release/vc_redist.x64.exe** and install it before next step
2. Open the extracted folder and run shadPS4.exe.

**For Linux:**
1. Open the extracted folder.
2. Start `Shadps4-qt.AppImage`.

**For macOS:**
1. Open the extracted folder.
2. A window should pop up with the text `shadps4 Not Opened`, tap on `Done`.
3. Navigate to the Apple icon on the top left of your screen and tap on it. In the newly appeared menu there is an option called `System Settings`, tap on it.
4. After the `System Settings` application has been opened, navigate to the `Privacy & Security` tab and scroll down in the new opened tab till you see the message `shadps4 was blocked to protect your Mac`
5. On the right side of the message, there is a button called `Open Anyway`, tap on it.
6. A new window should pop up which says `Open shadps4? `, tap on the `Open Anyway` button and enter your password or use your fingerprint to confirm.
---

## 3. Install games and related content
> [!CAUTION]
> **Games, updates, and DLC are copyrighted content and must be dumped from your own copy of the game.**

The emulator is now started. Now you want to install your first game(s).
1. Use a dumper tool (app/payload) on your jailbroken PS4 to dump your game files. Most game dumpers come with instructions for using them.
    - Itemzflow is a easy-to-use homebrew app you can install on your jailbroken PS4 for this, though many other solutions exist.
2. Prepare your game dump by making sure the folder has the right name format: `CUSAxxxxx` (where `xxxxx` is the game's serial).
    - If you're using Itemzflow, your game folder will already have the correct name.
3. Find the game installation directory provided on first boot. This can be found in the settings.
4. Take your game dump and copy it to the game installation directory.
5. Once finished, the game should appear in the UI.

The process for installing updates is the same:
1. Prepare your dump of the game update by making sure the folder has the right name format: `CUSAxxxxx-patch`/`CUSAxxxxx-UPDATE`
    - If you're using Itemzflow, your update folder will already have the correct name.
2. Copy the game update to your game installation directory.
3. Once finished, the game should show the installed update version in the UI.

Installing DLC is slightly different:
1. Navigate to your set additional content directory, this is something you set when first booting shadPS4.
    - For SDL users, you'll need to manually add an additional content path to the "addonInstallDir" setting in your config.toml file.
2. Create a folder in your additional content directory, and give it the same name as your game folder from before.
3. Copy your dumped DLCs to the folder you created.
4. Once finished, your installed DLC should appear ingame.
---


## 4. Dumping firmware modules
shadPS4 can load some modules in:
* `LLE mode`: Low Level Emulation: Using the firmware files of the console directly;
* `HLE mode`: High Level Emulation: Providing a reimplementation for the original module in the emulator source code.

While several modules are reimplemented, there are still some modules we haven't implemented yet. To work around this, we can load firmware files directly to improve game compatibility.

Below is a list of currently used firmware modules:

<div align="left">

| Modules                 |                         |                         |                         |
|-------------------------|-------------------------|-------------------------|-------------------------|  
| libSceCesCs.sprx        | libSceFont.sprx         | libSceFontFt.sprx       | libSceFreeTypeOt.sprx   | 
| libSceJson.sprx         | libSceJson2.sprx        | libSceLibcInternal.sprx | libSceNgs2.sprx         |
| libSceUlt.sprx          |                         |                         |

</div>

To dump your firmware modules:
1. Enable an FTP server on your PS4
2. Open an FTP client on your computer (like FileZilla).
3. Enter the IP Address and FTP server port into your FTP client.
4. Once connected, navigate to ``/system/common/lib/`` on your PS4, and copy all the files you see into a folder on your device.
5. Once they're dumped you can place them in the shadPS4 ``sys_modules`` folder.
    - You can find this folder by right clicking on a game, choosing `Open Folder -> Open Log Folder`, and backing out to the previous folder. There you should see the ``sys_modules`` folder.

---

## 5. Dumping the trophy key
1. Using the FTP setup from the prior step, navigate to ``/system/vsh`` on your PS4, and copy the file named `SceShellCore.elf` to your device.
2. Download [tropy_key_export.zip](https://github.com/user-attachments/files/21354959/tropy_key_export.zip), and extract it anywhere.
    - Credits to https://github.com/red-prig for creating this tool.
    - This tool is designed for Windows. Linux users can use Wine to open this program, but there isn't a native option for Mac users yet.
3. Drag your dumped `SceShellCore.elf` onto `tropy_key_export.exe`, a command prompt window will appear showing the trophy key.
4. Enter the trophy key into your shadPS4 settings, or directly into your shadPS4 config.toml.

Once these steps are completed, shadPS4 will unlock trophies as you play.

## 6. Configure the emulator
Congratulations, your emulator has all the files needed to run your games!
<br />You can now start to configure the emulator settings [**here**](https://github.com/shadps4-emu/shadPS4/wiki/II.-Setting-up-shadPS4-%5BUsers%5D).