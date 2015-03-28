---
layout: post
title:  "Android Login with Facebook"
date:   2014-11-22 16:20:00
category: "Android"
tags: "Android Facebook Login"
excerpt: Accessing segment tags might not be something you have to do everyday but there might be some scenarios where you need to manipulate the tags of your segments. This can be done using Studio File Type Framework which is part of the Studio SDK. The documentation is providing an overview of the entire framework and also includes high level overview of what I'm going to discuss in this article."
image: "/device-2014-11-22-154940.png"
---
![][1]![][2]

![][3]

**Pre-requisite**

2\. Facebook API Key from Facebook Application - [Detail][4]

3\. Hash Key of your debug certificate &nbsp;- [Detail][5]

**Usage**

Step 1: Import "FacebookLoginUtils.java" class in your package

Step 2: Implement callback listener

     public class MyActivity extends Activity implements FacebookLoginUtils.FacebookLoginStatus

Step 3: Declare callback method

        @Override
        public void OnSuccessFacebookLogin(Bundle profile) {
            Log.i(TAG,profile.getString(FacebookLoginUtils.USERID));
            Log.i(TAG,profile.getString(FacebookLoginUtils.EMAIL));
            Log.i(TAG,profile.getString(FacebookLoginUtils.NAME));
            Log.i(TAG,profile.getString(FacebookLoginUtils.FIRST_NAME));
            Log.i(TAG,profile.getString(FacebookLoginUtils.LAST_NAME));

        }

Step 4: Declare object of FacebookLoginUtils.java

        private FacebookLoginUtils fLogin;

Step 5: Initialize object in onCreate method

            fLogin = new FacebookLoginUtils(this, R.id.activity_login_fb);
            fLogin.setLoginStatus(this);
            fLogin.setEnable(true);

Step 6: Declare few supporting methods&nbsp;

        protected void onResume() {
            super.onResume();
            fLogin.onResume();
        };

        @Override
        protected void onPause() {
            super.onPause();
            fLogin.onPause();
        }

        @Override
        protected void onDestroy() {
            super.onDestroy();
            fLogin.onDestroy();
        }

        @Override
        protected void onActivityResult(int requestCode, int responseCode,Intent intent) {
            fLogin.onActivityResult(requestCode, responseCode, intent);
        }

**FAQ**

Q: What is the problem of above approach ?

A: You activity has a lot of scattered code for Facebook login, It will be more complex and unmanageable when you will have another social network login like Facebook and Twitter.

Q: How I will receive a response for login success?

A: You need to implement interface "FacebookLoginStatus", on successful login you will receive callback "OnSuccessFacebookLogin"

Q: What will be received on login success ?

A: You will have Name, Email , First Name, Last Name, User Id.

Q: Do I need to handle login failure / error ?

A: No, FacebookLoginUtils.java will handle login failure, error and display appropriate message on screen. &nbsp;

**_Note: Change facebook app key in /res/values/strings.xml#facebook_app_id_**

[1]: http://1.bp.blogspot.com/-iCx0todkMGM/VHBoCFbte1I/AAAAAAAAFQk/kwWnGCSH0zM/s400/device-2014-11-22-154940.png
[2]: http://2.bp.blogspot.com/-4i7paQCAuI8/VHBoBI8q9OI/AAAAAAAAFQY/4iYGAbS4ncw/s400/device-2014-11-22-155020.png
[3]: http://3.bp.blogspot.com/-K9IoL8Kubeo/VHBoAuZ00qI/AAAAAAAAFQU/JV4_06ckPGM/s400/Screen%2BShot%2B2014-11-22%2Bat%2B3.50.35%2Bpm.png
[4]: https://developers.facebook.com/docs/android/getting-started
[5]: http://sonyarouje.com/2011/09/18/facebook-hash-key-for-android-apps/
  