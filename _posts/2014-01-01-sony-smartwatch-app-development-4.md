---
layout: post
title:  "Sony SmartWatch App Development 4"
date:   2014-01-06 16:20:00
category: "SmartWatch"
tags: "Android,SmartWatch, Sony"
excerpt: In [previous article][1], we looked at Notification API with Hello SmartWatch demo. In this article, we will focus on Control API.  
image: "/sonysmartwatch2trio.jpg"
---

Sony SmartWatch App Development 4

In [previous article][1], we looked at Notification API with Hello SmartWatch demo. In this article, we will focus on Control API.  

![][2]

  
  
  
Control API is&nbsp;responsible&nbsp;for&nbsp;

* **Extension lifecycle:** It allows you to start and stop extension using Intent. Extension means SmartWatch Host application.
    * Control.Intents.CONTROL_START_INTENT
    * Control.Intents.CONTROL_STOP_INTENT.
* **Controlling the display:** Normally we don't require to control the display. Default screen state is "Auto", for the specific need you can change screen state by using Intent.
    * Control.Intents.SCREEN_STATE_OFF
    * Control.Intents.SCREEN_STATE_AUTO
    * Control.Intents.SCREEN_STATE_DIM
    * Control.Intents.SCREEN_STATE_ON
* **Controlling the LEDs:** It used to switch on /off LEDs based on notification.
    * Control.Intents.CONTROL_LED_INTENT
* **Controlling the vibrator:** It allows you to vibrate SmartWatch.
    * Control.Intents.CONTROL_VIBRATE_INTENT
* **Key event:** It is used to capture hardware key i.e. home, back and menu key, which is available in SmartWatch2.
    * Control.Intents.CONTROL_KEY_EVENT_INTENT
* **Touch event:** It is used to capture touch events.
    * Control.Intents.CONTROL_TOUCH_EVENT_INTENT
    * Control.Intents.CONTROL_SWIPE_EVENT_INTENT
    * Control.Intents.CONTROL_OBJECT_CLICK_EVENT_INTENT&nbsp;
Sony's Add-on SDK version 2.0 supports ListView and GridView but this article focuses on basic controls only. For the demo I will create a simple layout with ImageView and TextView. I will animate ImageView with thread and also capture onClick event of ImageView.  

**Screen Shots**  
  
  


![][3]

Open Accessory emulator and select SmartWatch 2


![][4]

Select Control API

![][5]

Select Hello SmartWatch Extension

![][6]

Enjoy dancing android

![][7]

Click on Android will fire onClick event from host app to extension app


![][8]

Click on menu hardware button to make menu item visible.

Let's extend example which was previously developed.  
**Step 1:** &nbsp;Create java class named "HelloControlSmartWatch2.java" and extend with&nbsp;ControlExtension.

    package com.kpbird.hellosmartwatch;
    import android.content.Context;
    import android.location.Address;
    import android.os.Bundle;
    import android.os.Handler;
    import android.util.Log;
    import android.view.LayoutInflater;
    import android.view.View;
    import android.widget.Toast;

    import com.sonyericsson.extras.liveware.aef.control.Control;
    import com.sonyericsson.extras.liveware.extension.util.control.ControlExtension;
    import com.sonyericsson.extras.liveware.extension.util.control.ControlObjectClickEvent;
    import com.sonyericsson.extras.liveware.extension.util.control.ControlTouchEvent;
    import com.sonyericsson.extras.liveware.extension.util.control.ControlView;
    import com.sonyericsson.extras.liveware.extension.util.control.ControlView.OnClickListener;
    import com.sonyericsson.extras.liveware.extension.util.control.ControlViewGroup;

    public class HelloControlSmartWatch2 extends ControlExtension {

        private static final int ANIMATION_DELTA_MS = 500;
        private static final int MENU_ITEM_0 = 0;
        private static final int MENU_ITEM_1 = 1;
        private static final int MENU_ITEM_2 = 2;

        private boolean mIsShowingAnimation = false;
        private Animation mAnimation = null;
     private Handler mHandler;
        private ControlViewGroup mLayout = null;
        private String TAG = this.getClass().getSimpleName();
        private Bundle[] mMenuItemsText = new Bundle[3];

     public HelloControlSmartWatch2(Context context, String hostAppPackageName,Handler handler) {
      super(context, hostAppPackageName);
       if (handler == null) {
                 throw new IllegalArgumentException("handler == null");
          }
          mHandler = handler;
          LayoutInflater inflater = (LayoutInflater) context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
          View layout = inflater.inflate(R.layout.hello_control_2, null);
          mLayout = parseLayout(layout);
          if(mLayout !=null){
           ControlView androidAnim = mLayout.findViewById(R.id.imgHelloControl);
           androidAnim.setOnClickListener(new OnClickListener() {

        @Override
        public void onClick() {
          Toast.makeText(mContext, "Button Clicked", Toast.LENGTH_LONG).show();
          Log.i(TAG, "Android Button Clicked");
          toggleAnimation();
        }
       });

          }

             mMenuItemsText[0] = new Bundle();
             mMenuItemsText[0].putInt(Control.Intents.EXTRA_MENU_ITEM_ID, MENU_ITEM_0);
             mMenuItemsText[0].putString(Control.Intents.EXTRA_MENU_ITEM_TEXT, "Item 1");

             mMenuItemsText[1] = new Bundle();
             mMenuItemsText[1].putInt(Control.Intents.EXTRA_MENU_ITEM_ID, MENU_ITEM_1);
             mMenuItemsText[1].putString(Control.Intents.EXTRA_MENU_ITEM_TEXT, "Item 2");

             mMenuItemsText[2] = new Bundle();
             mMenuItemsText[2].putInt(Control.Intents.EXTRA_MENU_ITEM_ID, MENU_ITEM_2);
             mMenuItemsText[2].putString(Control.Intents.EXTRA_MENU_ITEM_TEXT, "Item 3");

     }

     @Override
     public void onResume() {
      super.onResume();
       showLayout(R.layout.hello_control_2, null);
       startAnimation();
     }

     @Override
     public void onPause() {
      super.onPause();
            stopAnimation();
     }

        @Override
        public void onDestroy() {
         stopAnimation();
            mHandler = null;
        };

        public static int getSupportedControlWidth(Context context) {
            return context.getResources().getDimensionPixelSize(R.dimen.smart_watch_2_control_width);
        }

        public static int getSupportedControlHeight(Context context) {
            return context.getResources().getDimensionPixelSize(R.dimen.smart_watch_2_control_height);
        }

        @Override
        public void onTouch(ControlTouchEvent event) {
         Log.i(TAG, "onTouch() " + event.getAction());
        }
        @Override
        public void onObjectClick(ControlObjectClickEvent event) {
          Log.i(TAG, "onObjectClick() " + event.getClickType());
          if (event.getLayoutReference() != -1) {
                 mLayout.onClick(event.getLayoutReference());
             }
        }
        @Override
        public void onKey(int action, int keyCode, long timeStamp) {
            Log.i(TAG, "onKey() " + action + "t" + keyCode + "t" + timeStamp);
            if (action == Control.Intents.KEY_ACTION_RELEASE
                    &amp;&amp; keyCode == Control.KeyCodes.KEYCODE_OPTIONS) {
               showMenu(mMenuItemsText);
            }
        }

        @Override
        public void onMenuItemSelected(int menuItem) {
            Log.d(TAG, "onMenuItemSelected() - menu item " + menuItem);
            if (menuItem == MENU_ITEM_0) {
                clearDisplay();
                mHandler.postDelayed(new Runnable() {
                    @Override
                    public void run() {
                        onResume();
                    }
                }, 1000);
            }

        }

        private void toggleAnimation() {
            if (mIsShowingAnimation) {
                stopAnimation();
            }
            else {
                startAnimation();
            }
        }

        private void startAnimation() {
            if (!mIsShowingAnimation) {
                mIsShowingAnimation = true;
                mAnimation = new Animation();
                mAnimation.run();
            }
        }
        private void stopAnimation() {
            if (mIsShowingAnimation) {
                // Stop animation on accessory
                if (mAnimation != null) {
                    mAnimation.stop();
                    mHandler.removeCallbacks(mAnimation);
                    mAnimation = null;
                }
                mIsShowingAnimation = false;
            }
        }

        private class Animation implements Runnable {

            private int mIndex = 1;
            private boolean mIsStopped = false;

            Animation() {
                mIndex = 1;
            }

            public void stop() {
                mIsStopped = true;
            }

            @Override
            public void run() {
                int resourceId;
                switch (mIndex) {
                    case 1:
                        resourceId = R.drawable.dancing_android_0;
                        break;
                    case 2:
                        resourceId = R.drawable.dancing_android_1;
                        break;

                    default:
                        Log.e(TAG, "mIndex out of bounds: " + mIndex);
                        resourceId = R.drawable.dancing_android_0;
                        break;
                }
                mIndex++;
                if (mIndex &gt; 2) {
                    mIndex = 1;
                }

                if (!mIsStopped) {
                    updateAnimation(resourceId);
                }
                if (mHandler != null &amp;&amp; !mIsStopped) {
                    mHandler.postDelayed(this, ANIMATION_DELTA_MS);
                }
            }
            private void updateAnimation(int resourceId) {
                sendImage(R.id.imgHelloControl, resourceId);
            }
        };
    }

  
**Step 2:** Open HelloExtensionService.java and override "createExtensionControl" method. In this method we need to identify accessory type before creating object of HelloControlSmartWatch2 class. To identify accessory type ExtensionUtils class has method named "DeviceInfoHealper".  
  

    @Override
       public ControlExtension createControlExtension(String hostAppPackageName) {
            // First we check if the API level and screen size required for
            // SampleControlSmartWatch2 is supported
            boolean advancedFeaturesSupported = DeviceInfoHelper.isSmartWatch2ApiAndScreenDetected(this, hostAppPackageName);
            if (advancedFeaturesSupported) {
                return new HelloControlSmartWatch2(this,hostAppPackageName, new Handler());
            } else {
             return null;
            }
        }

**Step 3:** Open&nbsp;HelloRegistrationInformation.java and change return value from 0 to 2 of "getRequiredControlApiVersion" method, 0 means our example doesn't require Control API, 1 and 2 represent minimum version of API required. We also need to override method named "isDisplaySizeSupported" for the confirmation of Display Size.  
  

    ...
    ...
    @Override
     public int getRequiredControlApiVersion() {
      return 2;
     }
    ....

    @Override
        public boolean isDisplaySizeSupported(int width, int height) {
            return ((width == HelloControlSmartWatch2.getSupportedControlWidth(mContext)
                    &amp;&amp; height == HelloControlSmartWatch2
                            .getSupportedControlHeight(mContext) || width == HelloControlSmartWatch2
                    .getSupportedControlWidth(mContext) &amp;&amp; height == HelloControlSmartWatch2
                    .getSupportedControlHeight(mContext)) );
        }
    ...
    ...

  
**Step 4:** Finally, Open AndroidManiFest.xml and add following action in HelloExtensionReceiver. It will require to capture onClick, onTouch and onObject click event.

    ...
    ...
                    <action android:name="com.sonyericsson.extras.aef.control.TOUCH_EVENT">
                    <action android:name="com.sonyericsson.extras.aef.control.SWIPE_EVENT">
                    <action android:name="com.sonyericsson.extras.aef.control.OBJECT_CLICK_EVENT">
                    <action android:name="com.sonyericsson.extras.aef.control.MENU_ITEM_SELECTED">
    ...
    ...

  
**Step 5:** Compile &amp; Execute HelloSmartWatch example  
  
  
## [Download Source Code](https://github.com/kpbird/Hello-SmartWatch) ##

Note: 1. Import project in eclipse 2. Make sure that you change SmartExtensionUtils and SmartExtensionAPI path from project properties.

[1]: http://www.kpbird.com/2013/12/sony-smartwatch-app-development-3.html
[2]: http://4.bp.blogspot.com/-8M7znWZHNw0/UrLyBfGpvAI/AAAAAAAAEq0/dIdN06TjKC4/s400/sonysmartwatch2trio.jpg
[3]: http://4.bp.blogspot.com/-GFZGtsAMmJU/Ur0ZaooLj7I/AAAAAAAAEss/qXBfPXSCE9E/s320/1.png 
[4]: http://3.bp.blogspot.com/-H8BKenCO0BU/Ur0ZakKIpgI/AAAAAAAAEsw/tyYAWqk60gY/s320/2.png
[5]: http://4.bp.blogspot.com/-IvspiCJ_F5c/Ur0ZavdqdZI/AAAAAAAAEso/2S-sUItU_mg/s320/3.png
[6]: http://3.bp.blogspot.com/-h8WDiAamRME/Ur0Zbb2TB8I/AAAAAAAAEtE/Jof-1fgO9eI/s320/4.png
[7]: http://2.bp.blogspot.com/-o7IZv0n26x8/Ur0ZbSUHHAI/AAAAAAAAEs8/cHzKjE_ahCg/s320/5.png
[8]: http://3.bp.blogspot.com/-jNlPcmX9x1Y/Ur0cJCwh7hI/AAAAAAAAEtU/_s9R1uHnB-I/s320/6.png
