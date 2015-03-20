---
layout: post
title:  "Migrating Web Site to AWS Cloud - A Quick Guide"
date:   2014-06-05 16:20:00
category: "Architecture"
tags: "Architecture, AWS, Migration"
excerpt: This is a quick tip to migrate your existing website to AWS Cloud.I assume that you have basic knowledge of AWS Cloud and server side architecture. This post does not include a discussion of pros and cons of AWS or Cloud services. Elasticity and Auto-Scaling are two main features of Cloud. If we don't leverage these feature then there isn't any difference between hosting website in dedicate server or AWS Cloud. You can create EC2 instance and deploy your existing code. It will work perfect, but in this case you cannot apply auto-scale. There is no purpose of migrating web site to AWS Cloud without auto-scaling.


image: "/33c24ac.jpg"
---

<img src="/assets/images/posts/33c24ac.jpg" alt="Migrating Web Site to AWS Cloud - A Quick Guide" class="img-responsive">


This is a quick tip to migrate your existing website to AWS Cloud.I assume that you have basic knowledge of AWS Cloud and server side architecture. This post does not include a discussion of pros and cons of AWS or Cloud services. Elasticity and Auto-Scaling are two main features of Cloud. If we don't leverage these feature then there isn't any difference between hosting website in dedicate server or AWS Cloud. You can create EC2 instance and deploy your existing code. It will work perfect, but in this case you cannot apply auto-scale. There is no purpose of migrating web site to AWS Cloud without auto-scaling.

**AWS Cloud Service: Following list has description of essential AWS Cloud service.**

**1. EC2 (Elastic Compute Cloud)** - It supports operating systems that includes numerous Linux distributions, and Microsoft Windows Server. Amazon EC2 enables you to increase or decrease capacity within minutes, not hours or day.

**2. RDS (Relational Database Service)** - Amazon RDS gives you access to the capabilities of a familiar MySql, Oracle, Microsoft SQL Server, or PostgreSql database engine.

**3. S3 (Simple Storage Service)** - Amazon S3 provides a highly durable and available store for a variety of content, ranging from web applications to media files.

**4. CloudFront** - CloudFront is content delivery network. It can be used to deliver your entire website, including dynamic, static, streaming, and interactive content using a global network of edge locations.

**5. ELB (Elastic Load Balancer)** - Elastic Load Balancing automatically distributes incoming application traffic across multiple Amazon EC2 instances.

**6. Auto-Scaling** - Auto Scaling allows you to scale your Amazon EC2 capacity up or down automatically according to conditions you define. Mainly It's based on incoming traffic or CPU utilization.

**7. Route 53 (DNS Service)** - Amazon Route 53 is a highly available and scalable Domain Name System (DNS)

**Architecture**: Let's assume two different architecture, one deployed on dedicated server and another deployed in AWS Cloud. website developed in PHP/ASP/Java with MySql as backend.

**Dedicated Server Architecture:** This architecture has mainly three components load balancer, application servers and database.

<img src="/assets/images/posts/3ee65b8.jpg" alt="Migrating Web Site to AWS Cloud - A Quick Guide" class="img-responsive">

AWS Cloud Architecture: This architecture has Route 53, ELB, EC2, CloudFront, S3, RDS and Auto-Scaling services used.

<img src="/assets/images/posts/2d2962b.jpg" alt="Migrating Web Site to AWS Cloud - A Quick Guide" class="img-responsive">

**Migration Phases**

**1. Planning** – It will include financial assessment (TOC/ROI), technical assessment, prototype creation or proof of concept, data migration planning and application migration planning.

**2. Execution** – It will have execution of planning, modification of application source code and testing.

**3. Deployment** – It will have deploy application and data migration, AWS Cloud has various tools like AWS Elastic Beanstalk, AWS CloudFormation, AWS OpsWorks, etc.. for deployment and management.

**4. Monitor** – AWSCloud has AWS CloudTrail and Amazon CloudWatch services for monitor AWS resources.

**Tips for the developers:** Migrating to AWS Cloud require code and structure changes.

* Migrate MySQL database to RDS, MySql database can directly migrate (export - import) to RDS-MySql engine.

* As you are migrating to AWS Cloud, you have more storage options like SimpleDB and DynemoDB. You can take advantage of these storage services to off load data from MySql . It’s call hybrid approach -SQL and NOSQL

* In dedicated architecture all files, (for eg:- images, videos, etc...)are stored in web space /some folder in server. In case of AWS Cloud all files (images, videos, etc ...) should be stored on S3.

* In dedicated architecture, all web assets (CSS, JS, Icons, and Images) are stored in virtual directory of web server and web server or application will serve these assets, which is unnecessary on servers. In AWS Cloud, all web assets (CSS, JS, Icons, and Images) should be stored in S3 and link with CloudFront.

* In dedicated architecture, your cron jobs will run on same web server. In case of AWS Cloud, you may require dedicated EC2 instance for cron jobs or you can create schedule EC2 instance.

* In dedicate architecture, you may have only application which serves all request. For AWS you can use two separate servers, Web Server (i.e. Apache HTTP Server, Nginx Server, etc...) and Application Server (Tomcat, IIS, etc...)

* Few application services are available in AWS Cloud that you can use depending upon the requirement.

* Amazon SQS – Amazon Simple Queue Service (SQS) is a fast, reliable, scalable, fully managed message queuing service.

* Amazon SNS - Amazon Simple Notification Service is a fast, flexible, fully managed push messaging service. It also supports push notifications to Apple, Google, Fire OS, and Windows devices.

* Amazon SES - Amazon Simple Email Service is a cost-effective outbound-only email-sending service.

**References:**

[http://aws.amazon.com/whitepapers/migrating-your-existing-applications-to-the-aws-cloud-with-3-example-scenarios/
](http://aws.amazon.com/whitepapers/migrating-your-existing-applications-to-the-aws-cloud-with-3-example-scenarios/)

[http://highscalability.com/blog/2010/12/21/sql-nosql-yes.html](http://highscalability.com/blog/2010/12/21/sql-nosql-yes.html)


[http://aws.amazon.com/products/](http://aws.amazon.com/products/)