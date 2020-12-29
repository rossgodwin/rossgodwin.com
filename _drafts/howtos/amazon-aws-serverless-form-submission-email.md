---
layout: article
title: Migrate a Divi Wordpress Site Between Environments
categories: [howtos]
tags: [amazon-aws, api-gateway, lambda, serverless]
date: 2020-10-6
---

Using Amazon AWS Services 
Utilize Amazon AWS Services for Serverless Form
Utilize Amazon AWS Services to Accept HTTP Form Post for Emailing
Utilize Amazon AWS Services to accept Http Form Data For Emailing

{% assign _image_folder = 'assets/images/article/aws/' %}

The following are steps that I took to utilize the Amazon AWS services, API Gateway and Lambda, to accept HTTP form posts and email the content of the form to a recipient.
<!--more-->

I took on a project where I converted my employer's Wordpress site to a static site. The website had a "contact us" page that contained user input fields allowing the user to reach out to the company by submitting a request for proposal. Once the user submitted the form, the content of what the user entered would be emailed to employees in the company in order to respond to the potential client. One of the challenges with making the transition to a static site was keeping the functionality of this one page that because, under the covers, this page was a form post and getting away from Wordpress hosting meant I would no longer have PHP doing the form processing.

I had to figure out a way to support http form post processing to support the "contact us" page on the website by accepting a user's input and then emailing the content of what the user entered to specific recipients. Below are the steps that I took to utilized Amazon AWS services to provide this functionality. In these steps, I will create the functionality for my employer's demo website.

###### Create a Lambda Function

In the project I mentioned, I need the content of what the user enters to be emailed to TSD employees. This is simple functionality that I need to provide but I don't want to go to all the trouble of setting up web and/or mail servers. I just need a lightweight backend service and here is where Amazon's [AWS Lambda](https://aws.amazon.com/lambda) comes in very handy. The role that the Lambda function will play, is to accept a JSON string, format the content of string into a nice HTML markup for a email message body and then deliver the email to the target recipients. The following are steps to do so.

1. Open ***Lambda*** under ***Compute*** services.

2. Select ***Create function***

3. There are a few different options for creating the function but a quick way to create on is select ***Use a blueprint*** and then under ***Blueprints*** search for *hello-world*. This will provide a ***hello-world*** starter lambda function. Highlight this blueprint and select ***Configure***.

	![{{ page.tags | join: " "}}]({% link {{ _image_folder }}select-lambda-blueprint.png %}){:class="image-responsive" style="max-width: 600px;"}

4. On the configure screen, provide the name of the function, leave the default execution role selected, and select ***Create function***. At this stage I would not worry about modifying the function code. Because this function is being used for my employeer Triangle Site Design, I prefix the function with *tsd* and then name it according to what it does.

	![{{ page.tags | join: " "}}]({% link {{ _image_folder }}create-lambda-function.png %}){:class="image-responsive" style="max-width: 500px;"}

###### Lambda Function Code

Now that the function is created lets add the code and test.

1. Update the Lambda function source code.

	Select the function *tsd_email_request_for_proposal* and scroll down to the ***Function code*** section. The existing configuration will look something like the following:

	![{{ page.tags | join: " "}}]({% link {{ _image_folder }}lambda-function-default-code.png %}){:class="image-responsive" style="max-width: 800px;"}

	Remove all the code in the *index.js* and replace with the code in the following gist block.

	{% gist 33ac46746579fee8503541c36c5e6caa %}
	
	I won't go in to a lot of detail about the code sequence because it is self explanatory rather I'll provide a brief overview of the below code. This Lambda function code defines a event handler function and three helper functions: *buildHtmlBody*, *buildTextBody*, and *sendEmail*. The Lambda function defines a function on the event handler for when the Lambda function is invoked, see line 11. The handler then calls a *sendEmail* function which extracts values from the JSON string to be used to build the email. *sendEmail* uses to other helper functions: *buildHtmlBody* which builds a HTML formated email message body and *buildTextBody* which builds a plain text email message. *sendEmail* utilizes the [Amazon Simple Email Service (SES) API](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/using-ses-api.html){:target="_blank"} to send the email.

2. Configure the function ***Permissions***

	Select ***Permissions*** and under the ***Execution role*** section select the link below ***Role name***.
	
	![{{ page.tags | join: " "}}]({% link {{ _image_folder }}select-lambda-permissions-role.png %}){:class="image-responsive" style="max-width: 750px;"}
	
	This will open a new tab in the browser and redirect you to the *Identity and Access Management (IAM)* service with the role given to the Lambda function opened.
	
	Now we will create a new inline policy for this function.
	
	Under ***Permissions*** select ***Add inline policy***
	
	![{{ page.tags | join: " "}}]({% link {{ _image_folder }}select-lambda-role-attach-policy.png %}){:class="image-responsive" style="max-width: 750px;"}
	
	Search and select the *PinPoint Email*. Assign this service a ***Actions*** of *Write*. Under ***Resources*** select the *All resources* option.
	
	Select ***Add additional permssions***
	
	Search and select the *SES*. Under ***Actions*** select *All SES actions (ses:*)* and under ***Resources*** select the *All resources* option. Then select ***Review Policy***
	
	![{{ page.tags | join: " "}}]({% link {{ _image_folder }}select-lambda-inline-policies.png %}){:class="image-responsive" style="max-width: 650px;"}
	
	Specify a ***Name*** for the new policy and select ***Create policy***
	
	![{{ page.tags | join: " "}}]({% link {{ _image_folder }}create-lambda-policy.png %}){:class="image-responsive" style="max-width: 600px;"}
	
	

3. Configure a test event for the function.

	Under ***Function code*** select ***Configure Events*** under ***Test***

	![{{ page.tags | join: " "}}]({% link {{ _image_folder }}select-lambda-function-test-configure.png %}){:class="image-responsive" style="max-width: 800px;"}

	With ***Create new test event*** selected, provide a ***Event name*** and replace the JSON string with the JSON string in the below gist block. Then select ***Create***.
	
	{% gist e29b9624401ab4411c83bd41499f715b %}
	
	The ***test event*** would look something like the following. Make sure to update the from and to email addresses.

	![{{ page.tags | join: " "}}]({% link {{ _image_folder }}create-lambda-test-event.png %}){:class="image-responsive" style="max-width: 550px;"}

###### Create an API

Because the contact us page was a HTTP form post, I needed to provide a server resource that would accept the form fields from the post to then be processed. [Read more](https://aws.amazon.com/api-gateway) about Amazon API Gateway.

1. Open ***API Gateway*** under ***Networking & Content Delivery*** services.

2. Select ***Create API***

3. For ***Choose an API type*** select ***Build*** under for ***REST API***

	![{{ page.tags | join: " "}}]({% link {{ _image_folder }}select-rest-api.png %}){:class="image-responsive" style="max-width: 450px;"}

4. There are a few different options on this screen but you can leave the default values selected, name the API, and select ***Create API***. Because I am creating this for my employer, Triange Site Design, and this is a demo, I am going to name this API *tsd-demo*.

	![{{ page.tags | join: " "}}]({% link {{ _image_folder }}create-api.png %}){:class="image-responsive" style="max-width: 650px;"}

###### Create a Resource for API

The next step is to create a resource under this API. After creating the API, you will have a empty screen that looks like the following.

![{{ page.tags | join: " "}}]({% link {{ _image_folder }}api-no-methods.png %}){:class="image-responsive" style="max-width: 400px;"}

1. Select ***Create Resource*** under ***Actions***

	![{{ page.tags | join: " "}}]({% link {{ _image_folder }}create-resource.png %}){:class="image-responsive" style="max-width: 300px;"}

2. Provide the resource a name and check the option ***Enable API Gateway CORS***. Because I am creating a API resource whose purpose is to email the contents of what the user entered which will be a request for proposal, I named this resource *email_request_for_proposal*.

	![{{ page.tags | join: " "}}]({% link {{ _image_folder }}create-child-resource.png %}){:class="image-responsive" style="max-width: 650px;"}

3. After creating the resource, highlight the resource and select ***Create Method*** under ***Actions***

	![{{ page.tags | join: " "}}]({% link {{ _image_folder }}create-method.png %}){:class="image-responsive" style="max-width: 300px;"}

4. This will provide a drop down of options, select ***POST***.

	![{{ page.tags | join: " "}}]({% link {{ _image_folder }}create-method-post.png %}){:class="image-responsive" style="max-width: 450px;"}

5. The next step is to create a integration point for the new POST method. For this demostration, I selected ***Lambda Function*** for the ***Integration Type*** and for the ***Lambda Function*** selected the function I created called *tsd-email-rfp*. Select ***Save***.

	![{{ page.tags | join: " "}}]({% link {{ _image_folder }}create-method-post-integration.png %}){:class="image-responsive" style="max-width: 650px;"}

6. A popup window will then a display asking you to confirm that you want to give API Gateway permission to invoke the Lambda function that you specified in the previous step, which in my case was the function *tsd-email-rfp*. Go ahead and select ***Ok***.

7. If you did forget to enable CORS when creating the child resource in step 2, that needs to be done now. Highlight the ***POST*** method and select ***Enable CORS*** under ***Actions***.

	![{{ page.tags | join: " "}}]({% link {{ _image_folder }}select-enable-cors.png %}){:class="image-responsive" style="max-width: 300px;"}

###### Deploy the API

Now that the Lambda service is configured and integrated with the API resource, it's time to deploy the API for public consumption.

1. With the target API selected, in my case *tsd-demo*, select the resource to deploy under ***Resources***. I'm deploying the *email_request_for_proposal* resource, so I highlighted that resource and selected ***Deploy API*** under ***Actions***.

	![{{ page.tags | join: " "}}]({% link {{ _image_folder }}select-deploy-api.png %}){:class="image-responsive" style="max-width: 450px; box-shadow: 5px 10px 8px #888888;"}

2. To deploy the API, you will need to select/enter a staging environment. For this demonstration, I selected their recommended stage *beta*.

	![{{ page.tags | join: " "}}]({% link {{ _image_folder }}deploy-api.png %}){:class="image-responsive" style="max-width: 450px; box-shadow: 5px 5px 8px #888888;"}

