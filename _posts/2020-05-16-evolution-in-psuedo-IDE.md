---
layout: post
title: Evolution in a psuedo IDE
categories: [termux]
tags: [text-editor, terminal]
---
In the [last post](/termux/lets-begin.html) we had setup the Termux terminal emulator for getting ready to transform our phone into a development setup. Here i will show you how to achieve our final goal.

You may be wondering, what do i mean by a Psuedo IDE. Let's be realistic and think that working on a phone will never be same as working on a full workstation. You wont have the whole GUI, No VS code or other IDEs and morever no physical keyboard. But until the end of this post you may have achieved a part of what a workstation consists.

A few things which are needed to perform this task will be
* a text editor
	: Here we will use **micro**
* the packages needed for our developmental tasks
	: I work with python so i will setup this whole thing for python but will list the packages for different setups. if i miss something do comment and i will update the list.
## Installation of Required Packages
As we saw in the last post to install packages we use the `pkg` package manager in Termux.   
Installing the editor and the packages is really simple.
* first lets upgrade the packages already installed.
```bash
pkg upgrade
```
this upgrades all installed packages and now we are ready to install the required packages
* just type in the below command in Termux and press Enter.
```bash
pkg install micro python/nodejs/ruby/golang/clang
```
choose one or more of the last options just separate them by a space so that they install correctly. Obviouly you cant use flutter and/or Kotlin and other programs directly. These are some things which we cant do anything about but you wont need them just now i hope. If you do need them just leave a comment and i will write a post about how to install them. After the installation completes successfully you will be able to use the respective programs. Next Up setting up the editor.
# Setting Up Micro
micro is a single binary executable with a small size and zero dependancies. It has many features useful for someone who is working in a headless environment and has no access to GUI.   
It has many features including syntax highlighting, colorschemes, plugin support, etc.,
## Basic functions
Basic functions of micro are listed below like opening, saving a file, etc.,
* opening a file
	: you can open a file present in the current working directory or open an empty file.
	: simply typing in `micro` opens an empty file.
	: if you specify a filename after micro and there is no file named similar to it present micro creates a file named what you gave as argument.
	: typing in `micro <filename>` will open the file
	: be sure to type in the filename with extension.
	: for example, if you type in `micro py.py` it will open a file named "py.py" in the current working directory and if it is not there micro will create a file named "py.py".
<p class="message green"><b>Quick Tip</b> using tab autocompletes if the characters you typed earlier suggest some filename or command. for example, if you type `pyt` and press tab Bash Autocompletes the command for you.</p>
* Saving
	: Changes made in an open file can be saved by pressing `CTRL+s` on your keyboard
* Save As
	: For resaving a file with different name you need to Open the Command Bar of micro. 
	: Pressing `Ctrl+e` will open the command bar at the bottom of the screen. It will be indicated by `>` and the curson will be relocated to the command bar and no interaction will be possible with the open file until the command bar is open.
	: type in `save <newfilename>` and remember to provide the newfilename with an extension.
* Quitting
	: `Ctrl+q` quits the editor 
	: if you havent saved the file you will get a prompt at the bottom. asking you to save, ignore changes or cancel the quitting operation.

## Advanced functions 
Just like an IDE you can spawn a terminal in the current working directory within `micro` itself. You didnt see it coming did you? 
### Terminal Inside Editor.
Now there are pretty much everytime you will close the editor and run the program you have been typing in the editor and if you get an error you will be need to open the file back to fix it.   
No. Don't do this recurring task. Open a terminal window in your editor to run the program adjacently. I personally use this to test the python scripts i create in micro.
1. Open The Command Bar of micro by pressing `CTRL+e`.
2. Type `term` to get a terminal window.
3. The Terminal Window opens in a New Tab of micro. To switch between the tabs tap on the top bar where you see the name of the opened file.   
<figure><img src="/assets/images/evolution-tabs-micro.jpg" alt="image showing the tabs in micro"><figcaption>current tabs in micro</figcaption></figure>
This is a good way to reduce the wastage of time between the trial runs of the programs you are working on.  
Also in Termux you have access to sessions and it provides you with another way if you want to access the terminal. 
<figure><img src="/assets/images/evolution-sessions.jpg" alt="sessions in Termux"><figcaption>Sessions in Termux</figcaption></figure>