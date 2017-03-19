---
title:  "Gmail new security feature"
image: google-hq-old.png
tag: [Google]
---

In honor of the [Safer Internet](https://www.saferinternetday.org/) Day, Google on Tuesday announced in a blog post that it has added a lock icon in Gmail’s web interface to denote whether or not your emails are encrypted. Additionally, a question mark icon on a sender’s avatar indicates messages that are not authenticated.

Gmail has supported encrypted connections between a user’s machine and its servers for some time now, but this doesn’t provide the full protection if a sender’s email client or email service does not support encryption in transit using TLS.

The new lock icon makes it easier to see if a message you received from someone is encrypted or not, and whether or not it can be authenticated.

A broken lock icon in the message indicates two things:

Firstly, a message your received from a contact or a new email you’re about to send to someone will be delivered via an email service that doesn’t support encryption, making the message prone to eavesdropping as it travels between different email providers.

![Gmail new security feature](/images/large/Google/gmail-lock-screenshot.PNG "Gmail new security feature"){: .img-responsive .thumbnail}

Gmail lock icon animation 001

And secondly, a message you received cannot be authenticated—as indicated by a question mark in place of the sender’s profile photo, corporate logo or avatar—meaning it could be a phishing message.

Authenticated emails are recognized by an email provider as genuine. If a message isn’t authenticated, you should verify its source by opening it in the web interface and clicking on the Show Details icon below the sender’s name.
![Gmail new security feature](/images/large/Google/Gmail-unauthenticated-avatar-web-screenshot-001.png "Gmail new security feature"){: .img-responsive .thumbnail}

To avoid phishing scams, be careful about replying to messages that are not authenticated and especially avoid opening any attachments. For example, if you see messages claiming to be from google.com, but are not properly authenticated as coming from google.com, these are phishing messages.

![Gmail new security feature](/images/large/Google/Gmail-unauthenticated-message-web-screenshot-001.gif
 "Gmail new security feature"){: .img-responsive .thumbnail}
 
“Not all affected email will necessarily be dangerous,” notes Google. “But we encourage you to be extra careful about replying to, or clicking on links in messages that you’re not sure about.”

By the way, Google is also offering two gigabytes of free Drive space if you’re willing to complete a Security Checkup for your account.

Source: [Google](http://gmailblog.blogspot.hr/2016/02/making-email-safer-for-you-posted-by.html)