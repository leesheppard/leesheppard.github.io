---
title: Change the default location for Screenshots in MacOS
date: 2016-10-01 12:48:54 +10:00
categories:
- tips
layout: post
---
<img src="https://res.cloudinary.com/leesheppard/image/upload/v1591440551/Stock%20photos/nathan-de-fortunato-hnH-Kj5YrUQ-unsplash.jpg" width="100%" alt="image">

_Photo by Nathan De Fortunato on Unsplash_

Open [Terminal](https://en.wikipedia.org/wiki/Terminal_(macOS)) and type the following command:

```
defaults write com.apple.screencapture location ~/Documents/Screenshots
killall SystemUIServer
```

You can customise the directory that you want to save screenshots to. It doesn’t
have to be `~/Documents/Screenshots` if you would prefer another location you
adjust the code above to your preferred folder.

To revert back to saving screenshots to your desktop, type the
following into the terminal window:

```
defaults write com.apple.screencapture location ~/Desktop
killall SystemUIServer
```
