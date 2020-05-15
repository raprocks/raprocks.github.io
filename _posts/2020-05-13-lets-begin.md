---
layout: post
title: Termux • Lets-Begin
categories: [termux]
tags: [Termux, coding on android]
last_modified_at: 2019-05-14
---

So You want to learn coding, but don't know where to start. And above all of this you are in a bigger problem, You don't have a personal computer to code on. **Dont Worry** is what I will say to you. Until you got your Ambition to do something you can do it in any Conditions possible. Today I will introduce to you a very important tool for Android devices that I use on a daily basis. In fact, this whole site and even this post are being written on the tool itself on my Android Device.
<figure>
	<img src="/assets/images/lets-begin1.jpg" alt="termux-lets-begin">
	<figcaption> screenshot taken while i was constructing this post</figcaption>
</figure>

Even I Don't have a PC myself (don't know when you are reading this though. Check [about] (/about)), So, primarily I am working on my mobile. Obviously I have to compensate, some things. Like I don't get to use a fully fledged IDE for coding and stuff **But** my phone does the things.   So to give you an overview what we are going to do, as you read and follow along, is make your phone into a workable setup for basic functions like for a beginner friendly tasks. 

# Termux
**Termux** is a **Terminal Emulator** and **Linux Environment**. As per the description on Google Play Store

>Termux combines powerful terminal emulation with an extensive Linux package collection.

And this is True. The packages available on termux are really high in number. I'm yet to fully explore this but the most useful packages are here. You name it 

* **Python(CPython)**
* **Ruby**
* **Nodejs**
* **clang for compiling C/C++/objective-C code**
* even the latest **julia** is here. 
* and many more...

To get a full list you can visit the [Termux Package Repo](https://github.com/termux/termux-packages/blob/master/README.md#project-structure).

Termux's default terminal is bash. Hence if you are a total beginner, you also get to learn the workings of Linux itself as the commands in Termux are mostly same as that in the terminals on desktop Linux.


## Installation
 There are 2 ways to Install Termux. The most simple way will be visiting the Google Play Store and download it, but the alternative from FDroid has its own advantages of being Free.
<p class="message-yellow"><small><b>Warning!</b> This is a sentence inside of a message box.</small></p>
#### From The Google Play Store.
1. You Can simply Follow the link [Here](https://play.google.com/store/apps/details?id=com.termux) to install the app.
2. If you need to interact with your phones features like starting the flashlight, you will need to install a separate app named [Termux:API](https://play.google.com/store/apps/details?id=com.termux.api).
3. If you want to Stylize the Terminal you will need to install the [Termux:Styling](https://play.google.com/store/apps/details?id=com.termux.styling) app. It will cost you money so *think before you buy*.  

#### From F-Droid 
 F-Droid is a Play Store alternative for Free and Open Source Softwares. It is Completely Safe. And morever it is **Free**. So every app on here is free because it is open source. Hence you can even check the downloaded apps integrity by comparing the PGP keys. 


* I will Recommend you to download the [FDroid Client](https://f-droid.org/F-Droid.apk)(the link is clickable so it will start to download) because it will be easier to track the updates and installation of the apps. But you are free to download the Apks standalone by following instruction down below.
1. To download Termux visit [Here](https://f-droid.org/en/packages/com.termux/). Scroll down to find the download button for the latest version and download The Apk. 
2. Termux:API can be downloaded [here](https://f-droid.org/en/packages/com.termux.api/).
3. Termux:Styling can be downloaded [here](https://f-droid.org/en/packages/com.termux.styling/) following the same instruction.
4. The downloaded Apks should be installed and just opening them in file manager should suffice and you will be treated by the instructions. Just follow them and you will be good to go.  


So now we have installed all the apps required. Just double check that you see a Termux Icon and You are Done. The other 2 apps dont have a launcher icon as they act like plugins to the main apps so dont be alarmed if you dont see their icons.

## Initialization
Just Open Termux and you will be greeted by a Installing message. Just let it finish and you will see a message on the screen. Now what you see is the most basic terminal window without any customization. Lets see what you have here


<figure>
	<img src="/assets/images/lets-begin2.jpg">
	<figcaption> Various components in Termux.</figcaption>
</figure>

As you can see, we have a bunch of keys like the Ctrl, Alt, Tab and the Esc button. We will customize and add to them later on in this post. These are very important keys and we need them during operations done on the terminal.  
If you swipe from the left edge of the screen towards the right side you will see the **Keyboard** and **New Session** buttons  
As the name suggests the Keyboard button is used to turn the input from the keyboard on and off by simply vanishing the keyboard form the screen and making it appear. This is helpful when tapping on the screen wont make the keyboard appear for some reason.  
The New Session button is used to, Create New Sessions, of the terminal which are totally independantly functioning. This is useful to edit multiple files on the go instead of closing and reopening or to run an instance of a server in the background. You can rename the sessions to make them more identifiable.

## Sessions
<figure><img src="/assets/images/lets-begin3i.png"><figcaption>The Session List</figcaption></figure>
*  To create a new session just tap on the New Session Button. To rename the session hold on the Session you want to rename. This will open a dialog box for you to enter the new name of the session. Here i created a New session(number 2) and will rename it.
<figure><img src="/assets/images/lets-begin3ii.png"><figcaption>Renaming The Session </figcaption></figure>
*  It is renamed to "test session" and we can switch between sessions by tapping on them.
<figure><img src="/assets/images/lets-begin3iii.png"><figcaption>The Renamed Session </figcaption></figure>

## Adding Additional Keys
To add additional keys to the termux screen like Arrow keys we need to add them in the `termux.properties` file in `~/.termux/` folder. And to do that we will use the `echo` command to push a string to the file.
```bash
echo "extra-keys = [['ESC','/','-','HOME','UP','END'],['TAB','CTRL','ALT','LEFT','DOWN','RIGHT']]" >> ~/.termux/termux.properties
```
you can customize and experiment with the positioning of these keys by moving their position in the command and replacing them with others from the list [Here](https://wiki.termux.com/wiki/Touch_Keyboardx)

also as you may have noticed till now that your keyboard is not giving you any suggestions and the auto-complete is not working so to use these features you need to swipe the buttons on the screen (the button list above the keyboard ) towards left. you will see a text box and there you have it, all your keyboard features have come back.
