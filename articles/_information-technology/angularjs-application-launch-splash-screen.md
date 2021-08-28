---
layout: rg/article
title: AngularJS Application Launch Splash Screen
description: The following is a explanation of how to create a launch screen (or splash screen) for a AngularJS user interface.
categories: [information-technology]
tags: [angularjs]
date: 2018-01-17
---

The following is a explanation of how to create a splash screen for a AngularJS client, with references to example code from a [J2EE AngularJS starter project]({{ site.data.me.social.github.url }}/rg-archetype-j2ee-angularjs){:target="_blank"} I created. This could be useful in the case where the developer has created a single page application was created
This could be useful to display to a user while the single page application is loading.

The first thing I did was to define the html/css content for the splash screen content in the [entry point index page]({{ site.data.me.social.github.url }}/rg-archetype-j2ee-angularjs/blob/master/WebContent/client/src/index-app-secure.jsp){:target="_blank"}.

{% gist 2b51dd400db9a8bbf881324a80b91aca %}

This div tag contains the image element referencing the splash image and also contains inline css styling.  This splash display will be the only thing the user sees until the ```<div>``` element is removed.  The div element can be removed when the app is bootstrapped and the module gets built and run.  [See here]({{ site.data.me.social.github.url }}/rg-archetype-j2ee-angularjs/blob/master/WebContent/client/src/app/app-secure.js){:target="_blank"} for a example of this.

Notice a couple of things:

* I let the splash screen [display for a couple of seconds]({{ site.data.me.social.github.url }}/rg-archetype-j2ee-angularjs/blob/62336a6e6a6c4f8e234f6e52e8c07da315dc8c25/WebContent/client/src/app/app-secure.js#L27){:target="_blank"} before bootstrapping the app.  This is certainly optional, but let's the user absorb your nice logo briefly.

* ```function removeSplash()``` removes the splash html element containing the splash content.  This gets invoked when the main module is run ```module.run()``` but [after the initial route state is called]({{ site.data.me.social.github.url }}/rg-archetype-j2ee-angularjs/blob/62336a6e6a6c4f8e234f6e52e8c07da315dc8c25/WebContent/client/src/app/app-secure.js#L23){:target="_blank"}.