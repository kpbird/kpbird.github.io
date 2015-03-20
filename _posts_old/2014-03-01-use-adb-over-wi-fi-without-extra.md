---
layout: post
title:  "Use ADB over Wi-Fi without extra application or software"
date:   2014-03-06 16:20:00
category: "Android"
tags: "Android,ADB"
excerpt: Normally developers use USB cable to connect Android device with computer for debug and other purposes.

---

# Use ADB over Wi-Fi without extra application or software


![][1]

Image Source:&nbsp;http://techbeasts.com/wp-content/uploads/2013/08/Android-Developer2.png

  
Normally developers use USB cable to connect Android device with computer for debug and other purposes.

**What are the problems with USB ?**

1\. You can not move around with device (some app require to move around for testing)

2\. Cable damage

3\. USB socket of Android device can be damage

**What is solution of above problems ?**

Normally &nbsp;developers use ADB over USB but it is also possible to use ADB over Wi-fi. Following steps explain how to use ADB over Wifi  

**Prerequisites**

Android device and computer should be connected in same network. &nbsp;

**Step 1:** Connect Android device with USB cable to computer

**Step 2:** Use following command in terminal to make sure adb is running in USB mode.

	$adb usb

restarting in USB mode

Connect to the device over USB.

**Step 3:** Execute following command in terminal to make sure adb identify/list gets connected with the device.

	$adb devices

**Step 4:** Change adb mode from USB to tcpip using following command.

	$adb tcpip 5555

restarting in TCP mode port: 5555

**Step 5:** Now, adb is running over TCP/IP mode, Let's find IP address of Android device. Go to Settings in Android device -&gt; About -&gt; Status -&gt; IP address. note down the IP address of connected Android Device.

**Step 6:** Use following command to connect ADB with IP address

	$adb connect #.#.#.#

	connected to #.#.#.#:5555

**Step 7:** Now adb is working over Wi-fi, You can remove USB cable from Android device.

**Step 8:** To confirm adb is working over Wi-fi and your device is still connect. you can use following command

	$adb devices

	#.#.#.#:5555 device

You're now ready to go!, Enjoy ADB over Wi-fi.  
  
Note: Use following command to change ADB mode to USB  
  
	$adb usb  
  

[1]: http://2.bp.blogspot.com/-Wiba-cAGHCA/UyFBLX-36OI/AAAAAAAAEy0/vSyJ2jcdoto/s1600/Android-Developer2.png
  