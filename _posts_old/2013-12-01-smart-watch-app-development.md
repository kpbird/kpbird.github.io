
---
layout: post
title:  "Smart Watch App Development"
date:   2013-12-01 16:20:00
category: "Android,SmartWatch"
tags: "Android,SmartWatch,Sony"
excerpt: A smartwatch or smart watch, is a computerized wristwatch with functionality that is enhanced beyond timekeeping, and is often comparable to a personal digital assistant (PDA) device. While early models can perform basic tasks, such as calculations, translations, and game-playing, modern smartwatches are effectively wearable computers. Many smartwatches run mobile apps, while a smaller number of models run a mobile operating system and function as portable media players, offering playback of FM radio, audio, and video files to the user via a Bluetooth headset. Some smartphone models, (also called watch phones) feature full mobile phone capability, and can make or answer phone calls

---

# Smart Watch App Development

**Introduction&nbsp;****Smart Watch or Smartwatch**  
  
"A smartwatch or smart watch, is a computerized wristwatch with functionality that is enhanced beyond timekeeping, and is often comparable to a personal digital assistant (PDA) device. While early models can perform basic tasks, such as calculations, translations, and game-playing, modern smartwatches are effectively wearable computers. Many smartwatches run mobile apps, while a smaller number of models run a mobile operating system and function as portable media players, offering playback of FM radio, audio, and video files to the user via a Bluetooth headset. Some smartphone models, (also called watch phones) feature full mobile phone capability, and can make or answer phone calls"

**\-- Wikipedia**


![][1]

  
SmartWatch's exist since 1980s but it wasn't popular much because of lack in hardware/software technology and wasn't supporting eco-system. Many big companies like Google, Sony, Samsung,etc. launch SmartWatch in 2013. I believe that 2014 will be the **"year of the SmartWatch"**.

  
**Popular SmartWatchs**

* Sony SmartWatch
* Samsung Galaxy Gear
* i'm Watch
* Pebble
* WiMM Labs (WiMM Labs was acquired by Google in 9-Jan-2013)
**Following SmartWatch allows to develop apps** In this article, I will focus on Sony SmartWatch app development. I am using iMac with OSX 10.9 for the development.

**Prerequisites**

* JDK
* Android SDK
* Sony Add-On SDK
* Emulator / Android Phone
**Setup Development Environment for Sony SmartWatch**

**Step 1:** Install JDK [Ref: [http://goo.gl/UUYvez](http://goo.gl/UUYvez)]

**Step 2:** Install Android SDK [Ref: [http://goo.gl/E4nRT3](http://goo.gl/E4nRT3)]

**Step 3:** Download Sony Add-on SDK from this link [http://goo.gl/zcKlGD](http://goo.gl/zcKlGD)

**Step 4:** Extract zip file and copy "sony_add-on_sdk_2_1" into <android sdk="">/add-ons/


![][2]

Android SDK with Sony Add On Folder installed

**Setup SmartWatch Emulator**

**Step 1:** You can use any SmartPhone or Android Emulator for SmartWatch Emulator, In my case I am using Sony Xperia P phone. You can use any Android based Smart Phone.&nbsp;

**Step 2:** Install Sony's Smart Connect (LiveWare) Application from Google Play

**Step 3:** Install "acessory_emulator.apk" from <android sdk="">/add-ons/sony_add-on_sdk_2_1/apks


![][3]

Accessory Emulator and Smart Connect Installed

**Compile & Install Sample Application**

**Step 1:** Open Eclipse

**Step 2:** Import SmartExtensions from <Android SDK>/add-ons/samples/SmartExtensions

![][4]

Right Click and Select Import

![][5]

Select "Sony AddOn" folder from Android SDK

![][6]

Select SmartExtension Projects

![][7]

SamplePreferenceActivity app and two libraries will display as project

**Step 3:** Eclipse will display three projects SimplePerferenceActivity,SmartExtensionAPI and SmartExtensionUtils. SimplePerferenceActivity is our main sample application, SmartExtensionAPI and SmartExtensionUtils are library which requires to develop SmartWatch application.

**Step 4:** Compile & Install "SimplePerferenceActivity" in your smartphone.

**Step 5:** Open "Accessory Emulator" application from smartphone. It will display dialogbox with different options. Select "SmartWatch"

**Step 6:** Accessory Emulator will display different options but only Extensions and Widget API will be active.

**Step 7:** Select Widget API, It will display Sony SmartWatch Emulator with Sample Widget application.

![][8]

Open Accessory Emulator, Select "SmartWatch"

![][9]

Enable options based on application, Select "Widget API"

![][10]

Sample Widget 


**References**

1. [http://developer.sonymobile.com/knowledge-base/sony-add-on-sdk/install-the-sony-add-on-sdk/](http://developer.sonymobile.com/knowledge-base/sony-add-on-sdk/install-the-sony-add-on-sdk/)
2. [http://developer.sonymobile.com/knowledge-base/sony-add-on-sdk/install-the-sony-add-on-sdk/install-detailed-instructions/](http://developer.sonymobile.com/knowledge-base/sony-add-on-sdk/install-the-sony-add-on-sdk/install-detailed-instructions/)
3. [http://developer.sonymobile.com/how-to-install-the-sony-add-on-sdk-manually/](http://developer.sonymobile.com/how-to-install-the-sony-add-on-sdk-manually/)
4. [http://developer.sonymobile.com/knowledge-base/tutorials/android_tutorial/how-to-create-an-app-extension-for-sony-smartwatch-2/](http://developer.sonymobile.com/knowledge-base/tutorials/android_tutorial/how-to-create-an-app-extension-for-sony-smartwatch-2/)


[1]: http://4.bp.blogspot.com/-8M7znWZHNw0/UrLyBfGpvAI/AAAAAAAAEq0/dIdN06TjKC4/s320/sonysmartwatch2trio.jpg
[2]: http://2.bp.blogspot.com/-l2Ty30ZpGxE/UqwAP4bhCFI/AAAAAAAAEoA/94UrDCMuJNg/s320/Screen+Shot+2013-12-14+at+12.22.31+pm.png
[3]: http://4.bp.blogspot.com/-W7wP8TUU5Ow/UqwCWCFRkvI/AAAAAAAAEoM/Fl0Q1YUWfKE/s400/device-2013-12-14-123040.png
[4]: http://4.bp.blogspot.com/-vNKfBuX36aY/UqwG5AgwZKI/AAAAAAAAEoY/9svaEkqk_4M/s1600/Screen+Shot+2013-12-14+at+12.34.49+pm.png
[5]: http://1.bp.blogspot.com/-GGy07vR-qZQ/UqwHZ8Y_6mI/AAAAAAAAEoo/INuySn1VWIY/s1600/Screen+Shot+2013-12-14+at+12.35.03+pm.png
[6]: http://2.bp.blogspot.com/-mhSO62YCtGk/UqwHdbmIk-I/AAAAAAAAEow/43yRuayp1aw/s1600/Screen+Shot+2013-12-14+at+12.35.22+pm.png
[7]: http://2.bp.blogspot.com/-Xj6wJcCPkQw/UqwHgrAu2aI/AAAAAAAAEo4/VQXI_C2IXr8/s1600/Screen+Shot+2013-12-14+at+12.37.28+pm.png
[8]: http://1.bp.blogspot.com/-bhcmL0TJFLw/UqwH-MEs_KI/AAAAAAAAEpI/qQo6uf_4uXA/s1600/device-2013-12-14-123057.png
[9]: http://3.bp.blogspot.com/--o1X7LxlTrc/UqwH-Le3dYI/AAAAAAAAEpE/PHXkT7n5wW0/s1600/device-2013-12-14-123106.png
[10]: http://1.bp.blogspot.com/-s2uWPOOUfHY/UqwH-D-D-lI/AAAAAAAAEpA/W0-ks2OcLwE/s1600/device-2013-12-14-123115.png