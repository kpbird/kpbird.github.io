---
layout: post
title:  "Sony SmartWatch App Development 2"
date:   2013-12-06 16:20:00
category: "SmartWatch"
tags: "Android,SmartWatch, Sony"
excerpt: In previous article ["Sony SmartWatch App Development"][2], I explained basics of SmartWatch, configuration of Sony's Add-On SDK, configuration of SmartWatch emulator and execute simple notification application. This article explains anatomy of SmartWatch development.  
image: "/sonysmartwatch2trio.jpg"
---

Sony SmartWatch App Development 2

![][1]

  
In previous article ["Sony SmartWatch App Development"][2], I explained basics of SmartWatch, configuration of Sony's Add-On SDK, configuration of SmartWatch emulator and execute simple notification application. This article explains anatomy of SmartWatch development.  
  
Sony's Add-on SDK is unified SDK, which includes Smart Extension APIs, Small Apps API, IR Remote API and Camera Add-on API among these Smart Extension API is used for SmartWatch and Smart Wireless Handset Pro application development.  
  
  
**Smart Extension API has following subset for different purpose**  

* **Control API:** It is use to render data on device, It supports Grid view, List view, menu, image rendering, touch event and key press. Older version of Control API was supporting only image rendering but current version (2.0) supports XML based layout.
* **Notification API:** This can be most useful API among others. It is used to display notification in SmartWatch, which is generated in SmartPhone application. Notification API supports notification title,message, icon and colour.
* **Widget API:** It is used to render widget on device.
* **Sensor API:** It is used to fetch sensor data from SmartWatch. i.e. light and accelerometer.
* **Registration &amp; Capabilities API:**&nbsp;Registration is used to specify how many API subset your application requires ? Like I want to use only Notification API or Sensor API etc.. Capabilities API is used to fetch capability of Smart accessory, here capability means sensor, widget or other functionality, which accessory may have.

**SmartWatch Extension API and Development**

![][3]

Source: Sony Smart Extension API documentation  


There are three thing involved in SmartWatch application development.  
  

* **Host Application:** It handles all interaction with SmartWatch, It is installed as a part of Smart Connect (aka LiveWare). When you install host application from Google Play, you may not find it in launcher screen. It will be available in Smart Connect (LiveWare).
* **Smart Connect:** It acts as mediator / manager / framework between Host Application and SmartWatch. SmartWatch connect with Smart Connection application using bluetooth.
* **Smart Extension Apps:** It's our normal Android application, which extends to work with SmartWatch. For example Facebook, SMS, Twitter, etc.

**Communication between Host Application and Smart Extension Application**

![][4]

Above figure shows, How host application communicate with smart extension application. Smart extension API works on Intent and ContentProvider. In coding sense there can be a single application or Android project which contains both Host application and Smart Extension but there isn't restriction to have single codebase. You can develop two different Android Project as per your requirement. My advice is to use single codebase or single Android project because it will be easier for user,when He/She will download from Google Play and You don't require to manage separate codebase.

Next article will deep dive in to the code.

[1]: http://1.bp.blogspot.com/-8M7znWZHNw0/UrLyBfGpvAI/AAAAAAAAEqw/qr9tGg-jKbo/s400/sonysmartwatch2trio.jpg
[2]: http://www.kpbird.com/2013/12/smart-watch-app-development.html
[3]: http://2.bp.blogspot.com/-znsr7IpUOF8/UrLOaqFIdyI/AAAAAAAAEqc/M9QN-tLN2JY/s640/Screen+Shot+2013-12-16+at+4.01.49+pm.png
[4]: http://3.bp.blogspot.com/-YbX5HF75j_w/UrLOannrkhI/AAAAAAAAEqY/5umJNsugJPo/s640/Screen+Shot+2013-12-16+at+4.23.59+pm.png
  