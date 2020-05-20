---
layout: post
categories: [linux, shell scripting]
tags: [dotfiles, shell scripting]
title: Dotfiles - Automating System Startup Tasks
comments: true
sharersenable: true
last_modified_at: 2020-05-20
---

If you are a beginner or a experienced developer, you must be at least once during your cruise, fed up of doing things repeatedly. In linux, Dot files come to your rescue. In this post you will learn how to set them up, customize them, and make absolute macros all by yourself.

## ‘.’ Files
As the Name suggests these files start with a '.' prefix. Any file that starts with a '.' is hidden. There are files in your phone's internal memory even now that start with a fullstop and you cant find them. Some of them are Important, some not so much. But in the context of linux dot files are something different.

Dot files, for a particular application, are like a set of commands that they need to execute when they start. For a Terminal like Bash, you can change your working directory to where you primarily navigate to, at the start of a new session, Or, You can execute certain command like clearing the screen for example, or setup aliases or should i say, certain shortcuts or commands that when executed perform a set of tasks without you typing them multiple times. 

### Bash's Dotfiles
Dotfiles for Bash are nothing but shell scripts that run automatically when you log on to the Terminal. now bash runs in three forms, if you choose to, You can run it interactively in login form or non-login form, or use it to run a script. 

<p class="message orange">If you have been following my posts related to Termux, We run Bash in Interactive Non-Login Form and/or use it to run a script.</p>

On an Interactive Login shell you have different dotfiles but they all function the same. So whatever you read from now onwards just remeber to implement this according to your system workings.

##### Quick Check
To check weather you are in a login or a non-login shell, Tyoe the following command in your Bash Terminal.
{% highlight bash %}
shopt login_shell
{% endhighlight %}
What we did was check for the **login_shell** option using the **shell options** command. 
Now what you get is the mode your shell is set to. if you are on an non-login shell you should get an output saying
```bash
$ shopt login_shell
login_shell     off
```
If you get an output different from this, Then probably you are on a login shell.

### What Dotfiles to use?
* For Interactive Login Shell You need to use `.bash_profile` file.
* For Interactive Non-Login Shell you use `.bashrc` file.

Keep in mind that you have to keep these files in your home directory. You can use your favorite text editor to create and edit the files. If you are on Termux, micro would be a great choice. I have covered on how to set it up in one of my [articles](/termux/evolution-in-psuedo-IDE.html).
   
### Lets get scripting.
##### Changing Working Directory
To Change your Working Directory on start of every session all you need to do is specify a line in the Dotfile. The `cd` command will do the work for us. 
{% highlight bash %}
cd path/to/directory/
{% endhighlight %}

On Termux, you could put the path to your internal memory so that you can access data on your internal memory. `/storage/emulated/0` . But remember to give storage permissions to Termux. 

##### Aliases
> a False or Assumed Identity.  
> a psuedonym  
> a nickname   
> <cite>~ Google :( </cite>   

Now what an alias does is it stores the command in it as a variable. Just like you would store 5 in x, You can Store the command `cd ..` in an alias named `..`, or you can store `cd /path/to/directory` in `directory`. Typing in the aliases in the terminal and pressing enter will be equal to typing the whole command and executing it. Now how do we implement this? some examples would be, like stated above, set `..` as alias to perform `cd ..` that is change the working directory to one directory behind, Or, set `...` as alias to perform `cd ../..` that is traverse two directories back. But how do we do it? **Simp**le. We use the `alias` command.

{% highlight bash %}                 
alias 'alias_name'='command to perform'
alias '..'='cd ..'
alias '...'='cd ../..'
alias '....'='cd ../../..'
alias 'internal'='cd /storage/emulated/0/'' # Only For Termux
{% endhighlight %}

Remember to  keep the alias name and commnd in quotes, as shown in the example above.

You can also print all aliases set into your system by using the `alias` command without an argument.
```bash
alias
```

Thats all about aliases. Aliases are nothing but nicknames for long commands so that you dont have to type all that long things.

##### Setting Environment Variables.
Evironment Variables are variables which are accesible, anytime, anywhere, just to say so. Most of them are set up by the System itself. We use `export` command to set Environment Variables. You may need some of them to manipulate the running of programs in one way or other. You can set them at the start of your session everytime using Dotfiles by adding a line for each environment variable.
{% highlight bash %}
export VAR="value"
{% endhighlight %}
using `export` command without a argument spews out a lot of env. variables which are set currently. What you can use this is to set a program installed externally in the Path which helps you execute the binaries, scripts and other things in the installation folder, anywhere.

##### Function Declaration.
Functions are Sets of Commands That can be called whenever you want.They are just like aliases but aliases can only nicknam-ize one command. Functions can nicknam-ize multiple commands.
{% highlight bash %}
function_name() {
	...
	# commands to execute
	...
}
{% endhighlight %}
This is basic Bash Scripting which you are seeing right now. I am going to make a post about it sometime soon. So what you have done just now is declared the function. To make use of it, You need to invoke it, and you can do so by just typing in the function_name.
Just For an example we will declare a function which says "Hello Sir" when we call upon it.
{% highlight bash %}
$ hi() { #Function Declaration Start
>     echo "Hello Sir!" #Actual Commands to execute
> } #Function Declaration End
$ hi #Invoking the Function
Hello Sir!  #Output
{% endhighlight %}
You can declare variable in the functions using the syntax, `var=value`, where value can be a string, array, integer, etc., Variables in bash can be acceses by using the `$` sign. for above example, `$var` will expand to return you the `value`.
Now how to give and work on the Parameters and Arguments provided to the functions? Its really Simple.   
* Parameters Provided are numbered and stored in variables starting from `1` to `n`, and can be accessed inside functions using `$1` to `$n`. 
* The `0th` position is reserved for the function name. So `$0` will yeild you the function name. 
* `$#` stores the number of arguments passed to the function during the invocation. 
* `$@` variable holds all the **arguments passed**(not `$0, $#, $@ or $*`) and so does `$*`, but the difference between them is seen when we use them inside double-quotes(“ here ”) else they are the same.
	* `$@` expands into a single string like `"$1 $2 ... $n"` each value separated by a space.
	* `$*` expands into multiple strings like `"$1" "$2" ... "$n"` each string separated by space.

Lets design a function to use all of them into a single function.
{% highlight bash %}
$ hi() { 
>     echo "Hello $1!";
> 	  echo "the number of arguments passed are $#";
> 	  echo "and all arguments are "
> 	  echo "$*"
> 	  echo "$@"
> } #Function Declaration End
$ hi Usr argument2 arg3 112233 444555 666
Hello Usr!
the number of arguments passed are 6
and all arguments are
Usr argument2 arg3 112233 444555 666
Usr argument2 arg3 112233 444555 666
{% endhighlight %}

Thats all about basic function making. If you want me to make a separate post for this, Please leave a comment and i will do it on a Priority Basis.

# Wrapping It all up.
Place all of your Alias Declaration, Evironment Variable Setup statements and Function Declarations into a Dot File and store in your Home folder. To navigate to Your Home folder you can do `cd ~` or just `cd`. Then you can either do one of two things, You can `source` the Dotfile i.e, run the Dotfile manually. To do so do `source <dotfile name>` remember that the name consistes of the dot(.) at the beginning.   
The other thing that you could do is just restart the terminal or open a new session to see the effects of your Dotfile.   
Hope that this helps in some way possible to all the people learning about this. Thanks.👋Until Next Time. 