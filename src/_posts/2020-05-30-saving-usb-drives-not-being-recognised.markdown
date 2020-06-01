---
title: Saving USB drives that Mac won't recognise
date: 2020-05-30 12:48:54 +10:00
categories:
- tips
layout: post
---

Ever plugged in an external hard drive or USB only to have it blink and not show up in your network?

I had a system crash unexpectedly on my desktop Mac and when it rebooted, I had trouble with the system starting up. There was an external hard drive still plugged in and the hardware was attempting to use it to boot a system to load with.

Unplugging the hard drive allowed the system from the internal drive to boot successfully. But the external hard drive disappeared when plugged back in. 

What is happening? well Mac wants to fix the boot files on the external hard drives to prevent any issues with loss of data. It runs `fsck` which stands for “File System Consistency Check,” is a command-line tool that reviews and repairs the underlying structure of a hard drive.

If you open `Activity Monitor` on the Mac with the hard drive plugged in, you'll see this running. Force quit it. 

Run `Disk Utility` and you'll see the disk in the left pane window, if it isn't mounted you can click to mount in the far right top of the window. 

Select the hard drive and Repair Permissions. It may take a while but will resolve the issues with viewing the hard drive contents.

Alternatively you can try in `Terminal` to use the following commands:

    $ diskutil list

Find your HDD identifier.

    $ diskutil unmountDisk /dev/disk*
    $ diskutil eject /dev/disk*

Replace * with your version