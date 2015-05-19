---
layout: post
title:  "Android Simple SyncAdapter"
date:   2015-04-26 16:20:00
category: "Android"
tags: "Android"
excerpt: SyncAdapter is standard and preferred way to sync application data with server, cloud or MBaaS backend. SyncAdapter is the most efficient way to make your application update to date. It will help you to present fresh data when user open application. You can increase user experience by not making wait to user till you call web service and fetch the data. Almost all popular android application use SyncAdapter, you check from Setting -> Account, you will find accounts i.e. google, twitter, facebook, etc.. It means these application use SyncAdapter.

image: "/SyncAdapter_small.png"
---

<a href="/assets/images/posts/SyncAdapter_large.png" target="_blank">
<img src="/assets/images/posts/SyncAdapter_small.png" alt="Android SyncAdapter" title="Android SyncAdapter" class="img-responsive"></a>

SyncAdapter is standard and preferred way to sync application data with server, cloud or MBaaS backend. SyncAdapter is the most efficient way to make your application update to date. It will help you to present fresh data when user open application. You can increase user experience by not making wait to user till you call web service and fetch the data. Almost all popular android application use SyncAdapter, you check from Setting -> Account, you will find accounts i.e. google, twitter, facebook, etc.. It means these application use SyncAdapter.

**Why SyncAdapter?**

As Lazy developer you might think why should I put an effort to write SyncAdapter. SyncAdapter is complex!!, I can directly make network call when required, and more... 

Let’s compare custom sync with SyncAdapter

| Custom Sync                          | Sync Adapter                         |
|--------------------------------------|--------------------------------------|
| Network Availability - manually      | Network Availability - Automatically |
| Pending Queue - manually             | Pending Queue - Automatically        |
| Refresh on Network - manually        | Refresh on Network - Automatically   |                                     
| Periodic Update - manually           | Periodic Update - Automatically      |
| Sync Setting - manually              | Sync Setting - Automatically         |
| Network Bandwidth - manually         | Network Bandwidth - Automatically    |
| Battery Efficient - ?? Depend on you | Battery Efficient - Yes              |
| And many more                        | And many more                        |

I hope above table is sufficient to convince to create sync adapter demo. 

**Concepts**

Concepts are very important to read before jump to the demo. Many developer don’t read API document or understand concept and directly start sample and try to learn from it but I suggest to read concept first before open your IDE and read the code. SyncAdapter has mainly two section 1. Account management 2. Sync Adapter. If your app requires user credentials or server login, you can optionally integrate account management and authentication into your data transfer.

SyncAdapter has following sections.

1. **Sqlite Database:** I guess you all are master of Sqlite database, SyncAdapter will store data in Sqlite using Content Provider. You may choose other options as well. 
2. **Content Provider:**  Act as bridge between your database and SyncAdapter. To expose your data in Rest like URL pattern.
3. **AbstractAccountAuthenticator:** As developer we need to extend this class and override methods, It is primarily used to manage authentication and account management. To use SyncAdapter you must have custom account. This class is responsible to create account, maintain auth token and various things related to authentication.
4. **Authenticator Service:** This is normal Service, which we are using daily. The only difference is that this service create object of AbstractAccountAuthenticator class and bind.
5. **AbstractThreadedSyncAdapter:** As developer we need to extend this class and override methods. . This is the main piece of SyncAdapter puzzle. It has method onPerformSync, in which we need to write our code.  
6. **Sync Service:** This is normal Service. It use to create object of AbstractThreadedSyncAdapter class and bind.
7. **Authenticator.xml:** You need to create this file under res/xml/ folder. This file is required to bind your authenticator component into the sync adapter and account frameworks, you need to provide these framework with metadata that describes the component. You can choose your own file name. 
8. **SyncAdapter.xml:** You need to create this file under res/xml/ folder.  The metadata specifies the account type you've created for your sync adapter, declares a content provider authority associated with your app.
9. **AndroidManifast.xml:** You must register Sync Service, Authenticator service and few other things in AndroidManifast file in order to work SyncAdapter, This is the final piece of puzzle.

**Diagram**

Following diagram depicted relationship between all different components of Sync Adapter. Account Manager and Sync Manager are provided by Android OS, except these two thing everything else you need to implement.
<a href="/assets/images/posts/SyncAdapter_large.png" target="_blank">
<img src="/assets/images/posts/SyncAdapter_small.png" alt="Android SyncAdapter" title="Android SyncAdapter" class="img-responsive"></a>

**Coding - Let’s jump to the code**

I am taking simple example ToDo list sync with Parse.com (Parse is BaaS service, If you want to know more about BaaS or MBaaS Service, please refer this article). 

You will find many sync adapter example with “AccountAuthenticatorActivity”, In this situation you need to develop your login screen by extending “AccountAuthenticatorActivity”, but this might not be case in every project. In few situation you might want to use sync adapter without login / registration. In this demo I will explain how to create ToDo list with Parse.com as backend and without login / registration. 

When user start application, It will fetch primary Gmail account and create Parse User through coding. For simplicity I will sync ToDo list only single direction, from Parse.com to local, you can have bi-directional sync based on need. 

1. Open Android Studio
2. Create Project Name “SimpleSyncAdapter”
	- Minimum SDK: 4.0
	- Package Name: com.kpbird.simplesyncadapter
3. Create Blank Activity
4. Download Parse Android SDK (https://parse.com/docs/downloads), Copy Parse.jar in lib folder and click “Sync Project with Gradle File” button in toolbar.
5. We will create following files

<table>
  <tr>
    <th>Sr</th>
    <th>File</th>
    <th>Purpose</th>
  </tr>
  <tr>
    <td>1</td>
    <td>SimpleAuthenticator.java</td>
    <td>This class will hold authentication related information</td>
  </tr>
  <tr>
    <td>2</td>
    <td>SimpleAuthenticatorService.java</td>
    <td>This class will provide object of SimpleAuthenticator class </td>
  </tr>
  <tr>
    <td>3</td>
    <td>SimpleContentProvider.java</td>
    <td>This class is responsible for database operation</td>
  </tr>
  <tr>
    <td>4</td>
    <td>SimpleInit.java</td>
    <td>This will initialize Parse library and fetch default Gmail account</td>
  </tr>
  <tr>
    <td>5</td>
    <td>SimpleSyncAdapter.java</td>
    <td>This class ir responsible for Sync, Android OS will call onPerformSync method, we need to write our sync code in onPerformSync method.</td>
  </tr>
  <tr>
    <td>6</td>
    <td>SimpleSyncAdapterService.java</td>
    <td>This will provide object of SimpleSyncAdapter to the sync framework</td>
  </tr>
  <tr>
    <td>7</td>
    <td>SyncConstants.java</td>
    <td>This will hold all required constants</td>
  </tr>
  <tr>
    <td>8</td>
    <td>SyncUtil.java</td>
    <td>This will have common methods </td>
  </tr>
  <tr>
    <td>9</td>
    <td>authenticator.xml</td>
    <td>Meta information of Authentication</td>
  </tr>
  <tr>
    <td>10</td>
    <td>sync_adapter.xml</td>
    <td>Meta information of Sync Adapter</td>
  </tr>
</table>


**Note:** Please update Parse.com API key before execute sample

###**https://github.com/kpbird/SimpleSyncAdapter**

**Reference**

1. [http://developer.android.com/training/sync-adapters/creating-sync-adapter.html](http://developer.android.com/training/sync-adapters/creating-sync-adapter.html)

2. [http://udinic.wordpress.com/2013/07/24/write-your-own-android-sync-adapter/](http://udinic.wordpress.com/2013/07/24/write-your-own-android-sync-adapter/)

3. [http://chariotsolutions.com/blog/post/android-data-sync/](http://chariotsolutions.com/blog/post/android-data-sync/)

4. [https://www.youtube.com/watch?v=5onKZcJyJwI](https://www.youtube.com/watch?v=5onKZcJyJwI)


