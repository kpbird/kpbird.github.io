---
layout: post
title:  "Android App Review: First Run C25K Fitness Trainer"
date:   2015-06-21 16:20:00
category: "App Review"
tags: "Android App Review, First Run"
excerpt: First Run C25K Fitness Trainer Android application review. It include Design, Performance, Security and insight  

image: "/firstrun.png"
---

<img src="/assets/images/posts/firstrun.png" alt="Android App Review: First Run C25K Fitness Trainer" title="Android App Review: First Run C25K Fitness Trainer" class="img-responsive">



###Design Review
First Run application design don't have 'Wow' factor but it's also not ugly. You will find inconsistency in many screens. At first, the application will impress you with splash screen and login / signup screen. Sign In / Signup screen's design looks perfect with social login options as well as manual signup and sign in options. You can also use this application without Sign In / Sign Up. 

Here is my observation for the design 

<img src="/assets/images/posts/firstrun/firstrun1.png" alt="Android App Review: First Run C25K Fitness Trainer" title="Android App Review: First Run C25K Fitness Trainer" class="img-responsive">

This screen is part of application. Yes, Entire screen without design. When user select Music folder this screen appear. 

<img src="/assets/images/posts/firstrun/firstrun2.png" alt="Android App Review: First Run C25K Fitness Trainer" title="Android App Review: First Run C25K Fitness Trainer" class="img-responsive">

Sign Up or Sign In screen. Looks perfect. Application logo and background image are placed perfectly. Nice design to provide Social and manual login options. 


<img src="/assets/images/posts/firstrun/firstrun3.png" alt="Android App Review: First Run C25K Fitness Trainer" title="Android App Review: First Run C25K Fitness Trainer" class="img-responsive">

Sign Up Dialog. When I looked at this screen first time, I had a question in my mind, Why EditText are rounded corner and Button with square corner? Both looks very odd. When dialog appear cursor blink to Email EditText but keyboard is not visible. Generally, when cursor blinks keyboard should be visible. The height of EditText is larger than button's height. It gives feeling like button is squeezed.

When you click on Sign Up without typing anything, Application display message "Invalid Email ID" in toast. Message text and the way it is displayed, is not professional. There isn't any visual indication for wrong data (email or password). Application displays only Toast messages.

<img src="/assets/images/posts/firstrun/firstrun4.png" alt="Android App Review: First Run C25K Fitness Trainer" title="Android App Review: First Run C25K Fitness Trainer" class="img-responsive">

Sign In screen. When you click on Sign Up button, Application will open dialog on same screen but when you click on Sign In button, Application will open new screen / activity without background image. Which gives feeling inconsistency. 

<img src="/assets/images/posts/firstrun/firstrun5.png" alt="Android App Review: First Run C25K Fitness Trainer" title="Android App Review: First Run C25K Fitness Trainer" class="img-responsive">

When user selects program, above screen appear. "Prepare your run..." message is not vertically centre. Entire screen is blank except this message. It looks ugly. 

<img src="/assets/images/posts/firstrun/firstrun6.png" alt="Android App Review: First Run C25K Fitness Trainer" title="Android App Review: First Run C25K Fitness Trainer" class="img-responsive">

You can easily recognise that the content display, inside WebView. 1) Back arrow is non standard. 2) Running form label and the arrow image is not properly align. This screens can be improved a lot. There can be three steps wizard with nice designs. Caption text below video can justify.


<img src="/assets/images/posts/firstrun/firstrun7.png" alt="Android App Review: First Run C25K Fitness Trainer" title="Android App Review: First Run C25K Fitness Trainer" class="img-responsive">

Inconsistency, Few screen has action bar back button and few screen don't have. Actionbar Title and Sub title is in italic. Point 2 in image, thickness and cap between lines are different. Point 3 player control is too small.

<br>
###Performance Review
  
<img src="/assets/images/posts/firstrun/firstrun8.png" alt="Android App Review: First Run C25K Fitness Trainer" title="Android App Review: First Run C25K Fitness Trainer" class="img-responsive">

This is GPU Overdraw benchmark, It's good that only centre section is red. Read this link for more information about GPU Overdraw [https://developer.android.com/tools/performance/debug-gpu-overdraw/index.html](https://developer.android.com/tools/performance/debug-gpu-overdraw/index.html)

<img src="/assets/images/posts/firstrun/firstrun9.png" alt="Android App Review: First Run C25K Fitness Trainer" title="Android App Review: First Run C25K Fitness Trainer" class="img-responsive">

Profile GPU Rendering gives you a quick visual representation of how much time it takes to render the frames of a UI window relative to the 16-ms-per-frame benchmark. Above image has issue in few frame rendering. Read this link for more information [https://developer.android.com/tools/performance/profile-gpu-rendering/index.html](https://developer.android.com/tools/performance/profile-gpu-rendering/index.html)

<br>
###Memory Profile

<img src="/assets/images/posts/firstrun/firstrun10.png" alt="Android App Review: First Run C25K Fitness Trainer" title="Android App Review: First Run C25K Fitness Trainer" class="img-responsive">

This application is memory hungry, Above screen shot illustrate memory allocation of the application on start. 58 MB Heap Size and 42 MB allocation is huge. Application may have issue with lower end devices. 33 MB is allocated as 1-byte array. It might happen that application persist high resolution images in memory.

<br>
###Security

**Security is always major flow in Android application. In this application there are many security flows ranging from minor to serious.**  

<br>
### Library, Framework & Services

Following libraries, frameworks and services are integrated in the application.

1. AChart Engine - [http://www.achartengine.org/](http://www.achartengine.org/)
2. Amazon AWS - [http://aws.amazon.com/mobile/sdk/](http://aws.amazon.com/mobile/sdk/)
3. AppVirality - [https://www.appvirality.com/](https://www.appvirality.com/)
4. Facebook SDK - [https://developers.facebook.com/docs/android/](https://developers.facebook.com/docs/android/)
5. Flurry - [https://developer.yahoo.com/flurry/](https://developer.yahoo.com/flurry/)
6. Mint Splunk -  [https://mint.splunk.com/](https://mint.splunk.com/)
7. Twitter4j - [http://twitter4j.org/en/index.html](http://twitter4j.org/en/index.html)
8. Bolts-Android  - [https://github.com/BoltsFramework/Bolts-Android](https://github.com/BoltsFramework/Bolts-Android)
9. Google Analytics - [https://developers.google.com/analytics/devguides/collection/android/v4/](https://developers.google.com/analytics/devguides/collection/android/v4/)



<br>
#### Android Manifest Statics


1. Package Name: com.firstrun.prototyze
2. Version Code: 21
3. Version Name: 5.0.1-1624448
4. Support Screen: Any
5. GCM: Yes
6. User Permission: 17
7. Activity: 23
8. Receiver: 6
9. Service: 3
10. Meta Data: 5

<br>  

####Summary

Overall I would say it's an average application from technical perspective. Wow factor is missing in Design. Performance is good, Security need drastic improvement.

<img src="/assets/images/posts/firstrun/firstrun11.png" alt="Android App Review: First Run C25K Fitness Trainer" title="Android App Review: First Run C25K Fitness Trainer" class="img-responsive"> 


<br>
####Disclaimer 
The information provided in this article is purely for knowledge sharing purpose. No intension to favour or harm reputation of the application. Insight information of application is provided for knowledge sharing and learning purpose. Owner of the blog don't have any responsibility of how, when and what purpose reader use this information. 




