---
layout: post
title: Python • Introduction
categories: [Python]
tags: [Python, Introduction to Python]
last_modified_at: 2020-09-04
comments: true
sharersenable: true

---

<span class="first">S</span>tarting to code is a very powerful decision but the way you learn things is what makes you a good programmer.

## Why Am I Writing This?
A simple reason. I couldn't find an on-point written tutorial and wanted to give back to the internet. Also i wanted to find out how bad i am at **Teaching**.

## Why You Should Follow This?
There are many tutorials on the internet for any language such as Python due to it's widespread community base. You need to follow what suits you the most. Try Following this series and if it matches your Understanding Level i.e, if you start understanding and think this is fun Continue, else ask for another source right away. I would be happy to lead you to another Sources to fulfill your Crave of learning Python.

## Why **Python**?
Python is an easy programming language to learn without many complex syntaxes to remember. Ask any Professional about learning other Languages and Python and their simplicity. They can agree more that it is simpler. Another pro is that you can also learn about OOP(Object Oriented Programming) in Python. Also Python is a Versatile Language. You can do almost anything using it. Web Development, Application Development(With and without Graphical User Interfaces), Data Collection(Web Scraping and other sources), using APIs, Game Development(PyGame), Machine Learning, Computer Vision Programs, Artificial Intelligence development, and much more just Name it. Soon You will also be able to do Android App Development using it. Yes you can already do it now but not on the level of Java or Kotlin or Flutter. You will get to know why you should vhoose Python as your First Language rather than others as we move forward. You will hear from others about Python's Speed being low and other stuff but being a beginner i highly doubt you need any thing related to speed. You should just worry about things being able to work rather than speed.

## PreRequisites
* Basic English
* Basic Maths
* any of these (a PC, Laptop or Android Device)
* Patience and Will

## Installation of Tools
### Windows, Linux or Mac 
[Here](https://realpython.com/installing-python/#how-to-install-python-on-macos) is an guide on how to install Python on most of the systems.

### Android
* Get Termux by following this [Guide](/termux/lets-begin.html)
* Also Get a Text Editor preferably [micro](/termux/evolution-in-psuedo-IDE.html) as you can work from Termux without switching much of the apps.

In Termux, just copy and paste the below command.

```sh
pkg update && pkg install python micro
```

what this will do is install `Python3` and `micro`.
<center style='font-size:3em;padding-top:0.5em;padding-bottom:0.5em;'>OR</center>

Install [Pydroid](https://play.google.com/store/apps/details?id=ru.iiec.pydroid3) from The Play Store.
It is a IDEsh environment that has a text editor, debuggur with breakpoints, Pypi support and much more.

##### Test your Installation

python --version


this should give you the version of python distribution you have installed on your system. I myself prefer using the latest version of the distribution that my system has to offer. During the Time fo writing this, the version is 3.8.x. The 3.9 version is in beta and may be launched when you are reading this.

## Basics of running Python Program
Python is an interpreted language. This means it doesn't need to be compiled everytime you make changes to the source code. This is what makes it slow and this is what makes it fast. Fast becuase you dont need to wait for code to compile but slow because if the code is large, it takes more time. Basic usage until you start doing larger resource intensive tasks won't affect this though as you wont even see the difference.

1. You need to save every source-code file with **.py** extension.
2. run the code by doing 
```sh
python <filename>.py
```

thats all you need to know for now. As we move forward we will get to know other methods.

## Hello World

It is more of a ritual in the programming world to make a program that gives a "Hello World!" output when you start working on a new language. Lets write our first Python Program.

{% highlight python linenos %}
print("Hello World!")
{% endhighlight %}


Just one Line of code and you have entered the Programming World!

Now the same in *"c"* would be

{% highlight c linenos %}
#include<stdio.h>

int main(){
    printf("Hello World!");
    return 0;
}
{% endhighlight %}

or in *"C++"* 
{% highlight c++ linenos %}
#include<iostream>

using namespace std;

int main() {
    cout<<"Hello World"<<endl;
    return 0;
}
{% endhighlight %}

now i can give you many more examples but i thing you get the idea that python would be your best choice while starting out programming just for understanding the basics.

## Wrapping Up
Short and Sweet. Do Comment if you need help doing anything. Ping me on my socials. Thank you for reading. Onwards Towards <span class="soon">soon</span>**Data Structures**.
