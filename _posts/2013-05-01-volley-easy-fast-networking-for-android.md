---
layout: post
title:  "Volley Easy fast networking for Android"
date:   2013-05-01 16:20:00
category: "Android"
tags: "Android, Volley"
excerpt: Volley is a library that makes networking for Android apps easier and most importantly, faster. We'll give an overview of how it works, common patterns that work well with it, and a walkthrough of how you can easily load thumbnail images for your ListView from the network in parallel.

image: "/volley.png"
---

<img src="/assets/images/posts/volley.png" alt="Smart Watch" title="Smart Watch" class="img-responsive">

Volley is a library that makes networking for Android apps easier and most importantly, faster. We'll give an overview of how it works, common patterns that work well with it, and a walkthrough of how you can easily load thumbnail images for your ListView from the network in parallel.

Volley can be powerful alternative of AsyncTask. As Android developers, we are spending lots of time to write AsyncTask for ListView and web service calls. &nbsp;Recently I read&nbsp;awesome&nbsp;article about AsyncTask, I suggest all Android developers to read this article ["Dark Side of AsyncTask"][2]&nbsp;by [+Fré Dumazy][3],&nbsp;&nbsp;AsyncTask is redundant in every project. I hope many developer are agree with me, Thank to Volley framework now we can reduct effort,coding and time to write AsyncTasks.  
  

This article illustrate simple example of Volley library. VolleyTest application fetch JSON feed from Yahoo Pipe and display in ListView.  

![][4]![][5]

  

**Step 1:** Download/Clone Volley library from git repo

&nbsp;git clone https://android.googlesource.com/platform/frameworks/volley

**Step 2:** Create new project in *Android Studio named "VolleyTest"

*Note: This is my first project in Android Studio

**Step 3:** Copy Volley library source code in "VolleyTest" project, Copying source in our project is safe and easy that's why I copy source of Volley in VolleyTest project.&nbsp;

![][6]

**Step 4: Add Internet permission in AndroidManifest.xml**

    <!--?xml version="1.0" encoding="utf-8"?-->
    <manifest xmlns:android="http://schemas.android.com/apk/res/android" package="com.kpbird.volleytest" android:versioncode="1" android:versionname="1.0">

        <uses-sdk android:minsdkversion="9" android:targetsdkversion="14">

        <application android:allowbackup="true" android:icon="@drawable/ic_launcher" android:label="@string/app_name" android:theme="@style/AppTheme">
            <activity android:name="com.kpbird.volleytest.MainActivity" android:label="@string/app_name">
                <intent-filter>
                    <action android:name="android.intent.action.MAIN">

                    <category android:name="android.intent.category.LAUNCHER">
                </category></action></intent-filter>
            </activity>

        </application>
        <uses-permission android:name="android.permission.INTERNET"></uses-permission>
    </uses-sdk></manifest>

**Step 5: Add ListView in activity_main.xml**

    <relativelayout xmlns:android="http://schemas.android.com/apk/res/android" xmlns:tools="http://schemas.android.com/tools" android:layout_width="match_parent" android:layout_height="match_parent" android:paddingleft="@dimen/activity_horizontal_margin" android:paddingright="@dimen/activity_horizontal_margin" android:paddingtop="@dimen/activity_vertical_margin" android:paddingbottom="@dimen/activity_vertical_margin" tools:context=".MainActivity">

        <listview android:layout_width="wrap_content" android:layout_height="wrap_content" android:id="@+id/listView" android:layout_alignparenttop="true" android:layout_alignparentleft="true">
    </listview></relativelayout>

**Step 6: Create new xml for List row named "row_listview.xml"**

    <!--?xml version="1.0" encoding="utf-8"?-->

    <linearlayout xmlns:android="http://schemas.android.com/apk/res/android" android:orientation="vertical" android:layout_width="match_parent" android:layout_height="100dp">

        <textview android:layout_width="fill_parent" android:layout_height="wrap_content" android:textappearance="?android:attr/textAppearanceLarge" android:text="Large Text" android:id="@+id/txtTitle" android:layout_gravity="left|center_vertical">
        <textview android:layout_width="match_parent" android:layout_height="wrap_content" android:textappearance="?android:attr/textAppearanceMedium" android:text="Medium Text" android:id="@+id/txtDesc" android:layout_gravity="left|center_vertical" android:textcolor="#929292" android:minlines="2" android:ellipsize="end" android:maxlines="2">
        <textview android:layout_width="fill_parent" android:layout_height="wrap_content" android:textappearance="?android:attr/textAppearanceSmall" android:text="Small Text" android:id="@+id/txtDate" android:layout_gravity="left|center_vertical" android:textcolor="#d6d6d6">
    </textview></textview></textview></linearlayout>

**  
** **Step 7: Add Following code in MainActivity.java file**  
There are three steps to make web call using Volley

1\. Create new Queue Request object from Volley class  
  

    private RequestQueue mRequestQueue;
    .
    .
    .
    mRequestQueue =  Volley.newRequestQueue(this);

  
2\. Create object of JsonObjectRequest and provide all details like url, http method, listeners for success and error

    JsonObjectRequest jr = new JsonObjectRequest(Request.Method.GET,url,null,new Response.Listener<jsonobject>() {
                @Override
                public void onResponse(JSONObject response) {
                    Log.i(TAG,response.toString());
                    parseJSON(response);
                    va.notifyDataSetChanged();
                    pd.dismiss();
    ;            }
            },new Response.ErrorListener() {
                @Override
                public void onErrorResponse(VolleyError error) {
                    Log.i(TAG,error.getMessage());
                }
            });

  
3\. Add JsonObjectRequest to RequestQueue&nbsp;

  
Following code has regular Adapter, Model class. I took everything in one java file for simplicity,&nbsp;  
  
**Complete Source Code**   
**  
**

	package com.kpbird.volleytest;

	import android.app.ProgressDialog;
	import android.os.Bundle;
	import android.app.Activity;
	import android.util.Log;
	import android.view.LayoutInflater;
	import android.view.Menu;
	import android.view.View;
	import android.view.ViewGroup;
	import android.widget.BaseAdapter;
	import android.widget.ListView;
	import android.widget.TextView;
	import com.android.volley.Request;
	import com.android.volley.RequestQueue;
	import com.android.volley.Response;
	import com.android.volley.VolleyError;
	import com.android.volley.toolbox.JsonObjectRequest;
	import com.android.volley.toolbox.Volley;
	import org.json.JSONArray;
	import org.json.JSONObject;

	import java.util.ArrayList;

	public class MainActivity extends Activity {

    private String TAG = this.getClass().getSimpleName();
    private ListView lstView;
    private RequestQueue mRequestQueue;
    private ArrayList<NewsModel> arrNews ;
    private LayoutInflater lf;
    private VolleyAdapter va;
    private ProgressDialog pd;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        lf = LayoutInflater.from(this);


        arrNews = new ArrayList<NewsModel>();
        va = new VolleyAdapter();

        lstView = (ListView) findViewById(R.id.listView);
        lstView.setAdapter(va);
        mRequestQueue =  Volley.newRequestQueue(this);
        String url = "http://pipes.yahooapis.com/pipes/pipe.run?_id=giWz8Vc33BG6rQEQo_NLYQ&_render=json";
        pd = ProgressDialog.show(this,"Please Wait...","Please Wait...");
        try{
            Thread.sleep(2000);
        }catch(Exception e){

            }
        JsonObjectRequest jr = new JsonObjectRequest(Request.Method.GET,url,null,new Response.Listener<JSONObject>() {
            @Override
            public void onResponse(JSONObject response) {
                Log.i(TAG,response.toString());
                parseJSON(response);
                va.notifyDataSetChanged();
                pd.dismiss();
	;            }
        },new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                Log.i(TAG,error.getMessage());
            }
        });
        mRequestQueue.add(jr);



    }

    private void parseJSON(JSONObject json){
        try{
            JSONObject value = json.getJSONObject("value");
            JSONArray items = value.getJSONArray("items");
            for(int i=0;i<items.length();i++){

                    JSONObject item = items.getJSONObject(i);
                    NewsModel nm = new NewsModel();
                    nm.setTitle(item.optString("title"));
                    nm.setDescription(item.optString("description"));
                    nm.setLink(item.optString("link"));
                    nm.setPubDate(item.optString("pubDate"));
                    arrNews.add(nm);
            }
        }
        catch(Exception e){
            e.printStackTrace();
        }


    }


    class NewsModel{
        private String title;
        private String link;
        private String description;
        private String pubDate;

        void setTitle(String title) {
            this.title = title;
        }

        void setLink(String link) {
            this.link = link;
        }

        void setDescription(String description) {
            this.description = description;
        }

        void setPubDate(String pubDate) {
            this.pubDate = pubDate;
        }

        String getLink() {
            return link;
        }

        String getDescription() {
            return description;
        }

        String getPubDate() {
            return pubDate;
        }

        String getTitle() {

            return title;
        }
    }


    class VolleyAdapter extends BaseAdapter{

        @Override
        public int getCount() {
            return arrNews.size();
        }

        @Override
        public Object getItem(int i) {
            return arrNews.get(i);
        }

        @Override
        public long getItemId(int i) {
            return 0;
        }

        @Override
        public View getView(int i, View view, ViewGroup viewGroup) {
            ViewHolder vh ;
           if(view == null){
               vh = new ViewHolder();
               view = lf.inflate(R.layout.row_listview,null);
               vh.tvTitle = (TextView) view.findViewById(R.id.txtTitle);
               vh.tvDesc = (TextView) view.findViewById(R.id.txtDesc);
               vh.tvDate = (TextView) view.findViewById(R.id.txtDate);
               view.setTag(vh);
          }
            else{
               vh = (ViewHolder) view.getTag();
           }

            NewsModel nm = arrNews.get(i);
            vh.tvTitle.setText(nm.getTitle());
            vh.tvDesc.setText(nm.getDescription());
            vh.tvDate.setText(nm.getPubDate());
            return view;
        }

         class  ViewHolder{
            TextView tvTitle;
             TextView tvDesc;
             TextView tvDate;

        }

    }
	}

[1]: http://1.bp.blogspot.com/-0qIfJ_PmlGU/UZ3pQGy0u_I/AAAAAAAAD-c/8ZQgalhJlFI/s320/Screen+Shot+2013-05-23+at+3.32.46+PM.png
[2]: http://bon-app-etit.blogspot.in/2013/04/the-dark-side-of-asynctask.html
[3]: http://plus.google.com/106214265123129218556
[4]: http://2.bp.blogspot.com/-yn52R38ZQEM/UZ8usxVEhAI/AAAAAAAAD_E/541CNRi0i4Y/s320/Screen+Shot+2013-05-24+at+2.39.03+PM.png
[5]: http://3.bp.blogspot.com/-zRuqVKGoHys/UZ8utKYHuPI/AAAAAAAAD_I/K7WiJq4x_lc/s320/Screen+Shot+2013-05-24+at+2.39.13+PM.png
[6]: http://2.bp.blogspot.com/-xXRUVyaxs0Q/UZ4UCR0WtEI/AAAAAAAAD-0/cJBzvVM_m0g/s640/Screen+Shot+2013-05-23+at+3.49.11+PM.png
  </items.length();i++){></jsonobject></newsmodel></newsmodel></jsonobject>