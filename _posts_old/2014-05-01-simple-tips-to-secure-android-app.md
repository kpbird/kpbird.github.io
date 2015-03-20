---
layout: post
title:  "Simple tips to secure Android app"
date:   2014-05-06 16:20:00
category: "Android,Security"
tags: "Android,Security"
excerpt: Android has security features built into the operating system that significantly reduce the frequency and impact of application security issues but as application developer, its our job to secure application. The level of security is depends upon application type &amp; domain. There are &nbsp;few security aspects we need not forget. I am collecting those common tips in this article.


---

# Simple tips to secure Android app


![][1]

Src: http://www.oneclickroot.com/wp-content/uploads/2012/10/Android-security.jpg

Android has security features built into the operating system that significantly reduce the frequency and impact of application security issues but as application developer, its our job to secure application. The level of security is depends upon application type &amp; domain. There are &nbsp;few security aspects we need not forget. I am collecting those common tips in this article.

Here, I list down most common things that developers should take care to protect the application.

1\. Do not store private or sensitive data on SDCard. To store file on internal storage, use following methods with private mode (Context.MODE_PRIVATE) [openFileOutput][2] &amp; [openFileInput][3]. If you really wants to store data in sdcard then encrypt it. You will find many encryption libraries. I prefer [conceal][4] from facebook. &nbsp;&nbsp;&nbsp; 

2\. Restrict ContentProvider using [exported flag][5] set as false. It's not the case that every time we develop ContentProvider for data exchange between applications but ContentProvider can be developed for single application or private.

	<provider android:exported="false" android:name="MyContentProvider" android:authorities="com.example.mycontentprovider">

3\. Restrict WebView to access local data. HTML5 and related technologies have become popular &nbsp;to develop Mobile Web App app or Hybrid app. For Hybrid uses WebView to display content from locally store HTML or fetch HTML and other content from the server. &nbsp;Major security concerns for WebView are [setAllowFileAccess()][6] and [setAllowContentAccess()][7] methods.

4\. Do not pass sensitive information through Broadcast &amp; Intent. Use LocalBroadcastManager for broadcast data within process / app. [LocalBroadcastManager][8] is available in Support Library V4.

5\. Don't print sensitive information in LogCat. Information like username, password, web service URL, request or response, etc detail.

6\. Remove unnecessary Log before publishing app.

7\. Don't process malicious Intents. &nbsp;Before process Intent received in onReceive method of BroadcastReceiver, validate callers package name, action and other information.

8\. Protect your [Service][9] with Permission. Use exposed flag as &nbsp;false When Service is developed for your app only.

9\. Restrict access to Activities. If the activity is intended solely for the internal use of the app then use [exported flag][10] set as false.

	<activity android:name=".view.MyActivity" android:exported="false"> </activity>

10\. &nbsp;Make sure that debug mode is false before publish APK.    

11\. Encrypt sensitive data even if you store in internal storage.  

12\. For cross app functionality, validate calling application before response.   

13\. Properly verify server certificate TLS/SSL for HTTPS web call.  

14\. Use NDK whenever you feel that information is not safe in Java code because It can decompile easily. i.e. Constant.  

15\. Use [ProGuard][11] that shrinks, optimizes, and obfuscates your code.  

16\. Remove unwanted / unused <user-permission> from AndroidManifest.xml  
  
17\. Loading classes.dex outside of application is major security risk. [DexClassLoader][12] allowed developer to load classes.dex on demand.

**Reference:**

[http://developer.android.com/training/articles/security-tips.html](http://developer.android.com/training/articles/security-tips.html)

[1]: http://www.oneclickroot.com/wp-content/uploads/2012/10/Android-security.jpg
[2]: http://developer.android.com/reference/android/content/Context.html#openFileOutput%28java.lang.String,%20int%29
[3]: http://developer.android.com/reference/android/content/Context.html#openFileInput%28java.lang.String%29
[4]: https://github.com/facebook/conceal
[5]: http://developer.android.com/guide/topics/manifest/provider-element.html#exported
[6]: http://developer.android.com/reference/android/webkit/WebSettings.html#setAllowFileAccess%28boolean%29
[7]: http://developer.android.com/reference/android/webkit/WebSettings.html#setAllowContentAccess%28boolean%29
[8]: http://developer.android.com/reference/android/support/v4/content/LocalBroadcastManager.html
[9]: http://developer.android.com/guide/topics/manifest/service-element.html
[10]: http://developer.android.com/guide/topics/manifest/activity-element.html#exported
[11]: http://developer.android.com/tools/help/proguard.html
[12]: http://developer.android.com/reference/dalvik/system/DexClassLoader.html
