---
layout: article
title: Install Jekyll on Windows Using WSL
description: These are the steps I took to install and run the Jekyll static site generator on my Windows 10 operating system.
categories: [notes]
tags: [jekyll, windows, bash, wsl, linux, debian]
date: 2020-07-26
---

{% assign _image_folder = 'assets/images/article/install-jekyll-on-windows-using-wsl/' %}

I was not interested in installing Jekyll and dependency software directly on my Windows operating system: 1) because I like to keep my environment as free as possible from development software as possible, 2) it frees me up from going in to modify my Windows path environment variable, 3) the Linux deb packages make things go much more smoothly.

Jekyllrb does have installation instructions on how to install and run Jekyll via Windows Subsystem for Linux(wsl)[^Jekyllrb-install-instructions] but I like to record the steps that I took in case I ever have to recreate my environment.  And often times I find there is an important tweek here or there that I have to make.

[^Jekyllrb-install-instructions]: [Install Jekyll on Windows](https://jekyllrb.com/docs/installation/windows){:target="_blank"}

###### Install WSL

Open ***Windows Features*** and enable **Windows Subsystem for Linux**.  ***Windows Features*** can be found using the Windows search tool.  

![Windows Features]({% link {{ _image_folder }}windows-features.png %}){:class="img-fluid"}

###### Install the Debian app

Open ***Microsoft Store***, search for ***Debian*** and install the app.

![Debian Microsoft Store]({% link {{ _image_folder }}debian-microsoft-store.png %}){:class="img-fluid"}

###### Configure Debian

Update the local repository index in order to install the latest software versions from the repositories.

<pre><code>
$ sudo apt-get update
$ sudo apt-get dist-upgrade
</code></pre>

###### Install Ruby

Jekyll is a Ruby Gem.

<pre><code>
$ sudo apt-get install ruby-full build-essential zlib1g-dev
</code></pre>

You can check what version of Ruby, RubyGems and the installation location.

<pre><code>
$ ruby -v
$ gem -v
$ gem env
</code></pre>

###### Install Gem

Don't install gems as the root user.  Rather setup a gems folder in your user account home.  Make sure you are in the user's home directory and run the following.

<pre><code>
$ cd ~
$ echo '# Install Ruby Gems to ~/gems' >> .bashrc
$ echo 'export GEM_HOME="$HOME/gems"' >> .bashrc
$ echo 'export PATH="$HOME/gems/bin:$PATH"' >> .bashrc
$ source .bashrc
$ nano .bashrc
</code></pre>

###### Install Bundler

The next step that jekyllrb.com has is to install both Jekyll and [Bundler](https://bundler.io){:target="_blank"}.  I'm going to deviate from that and just install bundler and opt to use Bundler to add Jekyll as a dependency in any jekyll projects that I create.

<pre><code>
$ gem install bundler
</code></pre>

###### Configure Jekyll

At this this point, I found that I had to restart my computer to get the remaining steps to work.

Create your project folder and change to that directory.  Then create a new Bundler project.

<pre><code>
$ bundle init
</code></pre>

Configure Bundler[^configure-bundler] to install gems in a local isolated environment to prevent conflict with other gems on your system. 

[^configure-bundler]: [Bundler tracks dependencies on a per-project basis](https://jekyllrb.com/tutorials/using-jekyll-with-bundler/#configure-bundler){:target="_blank"}

<pre><code>
$ bundle install --path vendor/bundle
</code></pre>

Now whenever you see the message *Run 'bundle install' to install missings gems.* when performing a build, running the below command will install the gems into './vendor/bundle' keeping your project environment clean and isolated.

<pre><code>
$ bundle install
</code></pre>

Add Jekyll as a dependency of the project.

<pre><code>
$ bundle add jekyll
</code></pre>

To build the project

<pre><code>
$ bundle exec jekyll build
</code></pre>

To serve the content in order to build and test locally

<pre><code>
$ bundle exec jekyll serve
</code></pre>

