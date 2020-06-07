---
layout: post
title : Simplify Workings Using SSH
categories: [Git, Github]
tags: [Git-Cli, Github, SSH]
comments: true
sharersenable: true
last_modified_at: 2020-06-07
---

Copying and Pasting the git OAuth token everytime you push to your remote repo quuckly becomes tiresome when you are pushing hundreds of time a day. Thankfully Github provides SSH support for increasing your efficiency.

# What even is SSH?
SSH stands for **S**ecure **SH**ell. It is a network protocol that gives you a secure shell through a unsecured connection. SSH can provide you with a remote command-line and/or let you transfer data across a client-server network. The client most of the time being you and the server the other user. For Github:-
> Using the SSH protocol, you can connect and authenticate to remote servers and services. With SSH keys, you can connect to GitHub without supplying your username or password at each visit.  
> ~ Github

# Setting up SSH credentials.
Less talking More Work. Lets setup the credentials and your Github account for working with SSH

### Creating keys and Locating them.
##### Locating keys
If you are unsure, if you have already made ssh keys or not just run the following command.

{% highlight bash %}
$ ls -al ~/.ssh
{% endhighlight %}

Most of you must be on Windows, so you will need to install Git Bash to do this.

If the output contains 
* id_rsa.pub
* id_ecdsa.pub
* id_ed25519.pub  
check the Using The Keys section.

The output of the above command if throws an error or does not give any output then you dont have any keys so read on go to learn how to create one.

##### Creating keys
1. `ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`   
Replace your email in the placeholder and you will have created a ssh key. To make it work with Github, Use your Email associated with Github.
2. After it asks where to save file just press enter to save it to the default location. 
```bash
Enter file in which to save the key (/data/data/com.termux/files/home/.ssh/id_rsa):
```
3. ```bash
> Enter passphrase (empty for no passphrase): [Type a passphrase]
> Enter same passphrase again: [Type passphrase again]
```
Enter a passphrase if you want else just press enter to not have one.
4. And you have successfully created the keys.

### Using the Keys
#### Adding the keys to ssh-agent
1. Run a instance of the ssh-agent in the background.
```bash
$ eval "$(ssh-agent -s)"
```
You will be presented with a PID(Process ID).
2. now if you saved the key in other file taking the hard path above you need to find the file's absolute path and enter it in the command below.
```bash
$ ssh-add <path to key>
```
if you saved the file in the default path 
```bash
ssh-add ~/.ssh/id_rsa
```
this command should take care of everything.

3. get your public ssh key by typing in this command. Obviously modify it according to how you did the earlier steps.
```bash
$ cat /path/to/key(.pub)
```
Yes, You have to add the .pub at the end. This is the public key you need. All of the key will be visible to you on the terminal now. Copy the full output.

4. Visit [Github Account Settings](https://github.com/settings/keys).

5. Click on the New SSH Key button on the top right. 
<figure>
<img src="/assets/images/new-ssh-key.png" alt="new SSH key button">
<figcaption>New SSH key button</figcaption>
</figure>

6. Paste the output you copied earlier and give an appropriate title to define what this key is. And press the Add SSH Key button.
<figure>
<img src="/assets/images/new-ssh-key-add.png" alt="add SSH key button">
<figcaption> Add SSH key button.</figcaption>
</figure>
7. If asked for, Put your github password.
8. DONE!

### Checking your connection
To check weather the setup was successful, Restart the terminal and type in the following command which tries to connect to Github's SSH server.
```bash
$ ssh -T git@github.com
```

If you see a warning like this:

> The authenticity of host 'github.com (IP ADDRESS)' can't be established.
> RSA key fingerprint is 16:27:ac:a5:76:28:2d:36:63:1b:56:4d:eb:df:a6:48.
> Are you sure you want to continue connecting (yes/no)?

or like this:

> The authenticity of host 'github.com (IP ADDRESS)' can't be established.
> RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
> Are you sure you want to continue connecting (yes/no)?

check that the fingerprints of the warning in the terminal match to those here and then type in `yes`.

If the connection is successful you will see a message such as the below one:
> Hi username! You've successfully authenticated, but GitHub does not provide shell access.

The Username will be replaced by your username. 

If you are asked for the passphrase enter the one you have set at the creation of the keys.

If you get any Errors feel free to hop on to my socials and i will try to help you as soon as possible.

Hope you learnt something today whcih will be helpful to you. Check-out my other posts and for any reccomendation, shoot a comment. Thanks.