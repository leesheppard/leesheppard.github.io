---
title: Create a bootable USB for MacOS Mojave
date: 2018-09-27 12:48:54 +10:00
categories:
- tips
layout: post
---

Download the MacOS Mojave in the App Store or from the developer website from Apple. If the installer opens when download is complete, Quit and don't install as yet. 

**Prepare the drive**

Mount the USB volume that you want to install on. That drive can be called anything you like but so that you can just copy and paste these Terminal instructions, rename it `macinstall`. You can rename it again later.


Open [Terminal](https://en.wikipedia.org/wiki/Terminal_(macOS)) and type (or cut and paste) the following command:

```
$ sudo /Applications/Install\ macOS\ Mojave.app/Contents/Resources/createinstallmedia --volume /Volumes/macinstall
```

Hit return and you'll be asked for your admin password. Terminal starts running a program called `createinstallmedia`. It's an Apple program they've created for us, they just haven't mentioned it much.

You will be reminded that this means erasing the drive and if you enter `Y` it will start the process. It will erase and then begin to create the installer on the USB.

Once the process is complete, you will have a bootable USB to install Mojave on other devices. 