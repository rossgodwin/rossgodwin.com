---
layout: rg/article
title: Migrate a Divi Wordpress Site Between Environments
categories: [information-technology]
tags: [wordpress, divi, divi-theme, import, export]
date: 2020-10-4
---

The following are steps that I took to migrate a Wordpress site running the Divi theme between two different environments.
<!--more-->

![{{ page.tags | join: " "}}]({% link assets/images/article/migrate-a-divi-wordpress-site-between-environments/banner.png %}){:class="pf-image-responsive"}

Porting a Wordpress site between environments involves a process of export files from the source environment and importing the files in to the target environment. The number of steps, or files to export and import, is contingent on the Wordpress environment, primary theme and plugins used, but the following will be a good starting point for anyone looking to port their site. At the time of this migration, I was running Wordpress 5.4.2 running Divi theme version 4.4.9.

###### Export Wordpress

Log in to the Wordpress installation, source environment, running the site that you are looking to migrate.

<ul class="rg-ul-marker-fa-chevron">
	<li>Under the Wordpress menu select <i><b>Tools</b></i> and then <i><b>Export</b></i></li>
	<li>This will take you to a export page where you can customize the content that you want to port to the new environment. I left <i><b>All content</b></i> selected.</li>
	<li>Upon selecting <i><b>Download Export File</b></i>, a XML file is generated</li>
</ul>

The XML file created contains posts, pages, comments, custom fields, categories, tags and more that will be used for importing in to another Wordpress environment.

###### Import Wordpress

Log in to the Wordpress installation that you are migrating the content to, the target environment.

<ul class="rg-ul-marker-fa-chevron">
	<li>Under the Wordpress menu select <i><b>Tools</b></i> and then <i><b>Import</b></i></li>
	<li>There are several import tools that are listed, look for <i><b>Wordpress</b></i> and select <i><b>Install Now</b></i></li>
	<li>After the installation is complete, run the import tool by selecting <i><b>Run Importer</b></i></li>
	<li>Choose the XML file created from the export and select <i><b>Upload file and import</b></i></li>
</ul>

###### Export Divi Theme

**Theme Options**

<ul class="rg-ul-marker-fa-chevron">
	<li>Under the Wordpress menu select <i><b>Theme Options</b></i> under the <i><b>Divi</b></i> menu option.</li>
	<li>On the <i><b>Divi Theme Options</b></i> page, select the portability button, which is a icon button with up and down arrows and no text.</li>
	<li>A popup window displays. Make sure the <i><b>Export</b></i> is selected where you can optionally specify a different export file name.</li>
	<li>Upon selecting <i><b>Export Divi Theme Options</b></i>, a JSON format file will be generated.</li>
</ul>

**Theme Builder**

<ul class="rg-ul-marker-fa-chevron">
	<li>Under the Wordpress menu select <i><b>Theme Builder</b></i> under the <i><b>Divi</b></i> menu option.</li>
	<li>On the <i><b>Divi Theme Builder</b></i> page, select the portability button, which is a icon button with up and down arrows and no text.</li>
	<li>A popup window displays. Make sure the <i><b>Export</b></i> is selected where you can optionally specify a different export file name.</li>
	<li>Upon selecting <i><b>Export Divi Theme Builder Templates</b></i>, a JSON format file will be generated.</li>
</ul>

**Theme Customizer**

<ul class="rg-ul-marker-fa-chevron">
	<li>Under the Wordpress menu select <i><b>Theme Customizer</b></i> under the <i><b>Divi</b></i> menu option.</li>
	<li>On the theme customization page, select the import and export button, which is a icon button with up and down arrows and no text.</li>
	<li>A popup window displays. Make sure the <i><b>Export</b></i> is selected where you can optionally specify a different export file name.</li>
	<li>Upon selecting <i><b>Export Divi Customizer Settings</b></i>, a JSON format file will be generated.</li>
</ul>

**Role Editor**

<ul class="rg-ul-marker-fa-chevron">
	<li>Under the Wordpress menu select <i><b>Role Editor</b></i> under the <i><b>Divi</b></i> menu option.</li>
	<li>On the <i><b>Divi Role Editor</b></i> page, select the portability button, which is a icon button with up and down arrows and no text.</li>
	<li>A popup window displays. Make sure the <i><b>Export</b></i> is selected where you can optionally specify a different export file name.</li>
	<li>Upon selecting <i><b>Export Divi Role Editor Settings</b></i>, a JSON format file will be generated.</li>
</ul>

**Divi Library**

<ul class="rg-ul-marker-fa-chevron">
	<li>Under the Wordpress menu select <i><b>Divi Library</b></i> under the <i><b>Divi</b></i> menu option.</li>
	<li>On the <i><b>Layouts</b></i> page, select the <i><b>Import & Export</b></i> button.</li>
	<li>A popup window displays. Make sure the <i><b>Export</b></i> is selected where you can optionally specify a different export file name.</li>
	<li>Upon selecting <i><b>Export Divi Builder Layouts</b></i>, a JSON format file will be generated.</li>
</ul>

###### Manual Adjustments

The migration utilities will take care of a bulk of the content porting but as you run through the target Wordpress installation you may find that some difference in how the site looks compared to the source site. If you find that to be the case you will then how to navigate through the menu options and manually compare settings to locate differences. In a project that I worked on where I did this for my employer, I had to make manual adjustments to Appearance, Settings and Divi menu options.


As a side note, the export files that were created during this process can be used as a backup snapshot of the website.
