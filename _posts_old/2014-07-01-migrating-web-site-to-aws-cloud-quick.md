---
layout: post
title:  "Migrating Web Site to AWS Cloud"
date:   2014-07-06 16:20:00
category: "Amazon AWS"
tags: "AWS,Migrate, Cloud"
excerpt: Android 5.0 Lollipop API change and Major Features

---
# Migrating Web Site to AWS Cloud

![][1]

This is a quick tip to migrate your existing website to AWS Cloud. I assume that you have basic knowledge of AWS Cloud and server side architecture. &nbsp;This post does not include a discussion of pros and cons of AWS or Cloud services. &nbsp;Elasticity and Auto-Scaling are two main features of Cloud. &nbsp;If we don't leverage these feature then there isn't any difference between hosting website in dedicate server or AWS Cloud. You can create EC2 instance and deploy your existing code. It will work perfect, but in this case you cannot apply auto-scale. There is no purpose of migrating web site to AWS Cloud without auto-scaling.

AWS Cloud Service: Following list has description of essential AWS Cloud service.

1. **EC2 (Elastic Compute Cloud) &nbsp;**- It supports operating systems that includes numerous Linux distributions, and Microsoft Windows Server. Amazon EC2 enables you to increase or decrease capacity within minutes, not hours or day.

2. **RDS (Relational Database Service)** \- Amazon RDS gives you access to the capabilities of a familiar MySql, Oracle, Microsoft SQL Server, or PostgreSql database engine.

3. **S3 (Simple Storage Service)** \- Amazon S3 provides a highly durable and available store for a variety of content, ranging from web applications to media files.

4. **CloudFront** \- CloudFront is content delivery network. It can be used to deliver your entire website, including dynamic, static, streaming, and interactive content using a global network of edge locations.

5. **ELB (Elastic Load Balancer)** \- Elastic Load Balancing automatically distributes incoming application traffic across multiple Amazon EC2 instances.

6. **Auto-Scaling** \- Auto Scaling allows you to scale your Amazon EC2 capacity up or down automatically according to conditions you define. Mainly It's based on incoming traffic or CPU utilization.

7. **Route 53 (DNS Service)** \- Amazon Route 53 is a highly available and scalable Domain Name System (DNS)

  

Architecture: &nbsp;Let's assume two different architecture, one deployed on dedicated server and another deployed in AWS Cloud. website developed in PHP/ASP/Java with MySql as backend.

Dedicated Server Architecture : This architecture has mainly three components load balancer, application servers and database.

  

![][2]

AWS Cloud Architecture: This architecture has Route 53, ELB, EC2, CloudFront, S3, RDS and Auto-Scaling services used.

![][3]

**Migration Phases**

1. **Planning** – It will include &nbsp;financial assessment (TOC/ROI), technical assessment, prototype creation or proof of concept, data migration planning and &nbsp;application migration planning. &nbsp;
2. **Execution** – It will have execution of planning, modification of application source code and testing.
3. **Deployment** – It will have deploy application and data migration, AWS Cloud has various tools like AWS Elastic Beanstalk, AWS CloudFormation, AWS OpsWorks, etc.. for deployment and management.
4. **Monitor** – AWS Cloud has AWS CloudTrail and Amazon CloudWatch services for monitor AWS resources.

Tips for the developers: &nbsp;Migrating to AWS Cloud require code and structure changes. &nbsp;

  

1. Migrate MySQL database to RDS, &nbsp;MySql database can directly migrate (export - import) &nbsp;to RDS-MySql engine.&nbsp;
2. As you are migrating to AWS Cloud, you have more storage options like SimpleDB and DynemoDB. &nbsp;You can take advantage of these storage services to off load data from MySql . It's call hybrid approach &nbsp;-[ SQL and NOSQL][4]
3. In dedicated architecture all files, (for eg:- images, videos, etc...)are stored in web space /some folder in server. &nbsp;In case of AWS Cloud all files (images, videos, etc &nbsp;...) should be stored on S3.
4. In dedicated architecture, all web assets (CSS, JS, Icons, and Images) are stored in virtual directory of web server and web server or application will serve these assets, which is unnecessary on servers. &nbsp;In AWS Cloud, all web assets (CSS, JS, Icons, and Images) should be stored in S3 and link with CloudFront.
5. In dedicated architecture, your cron jobs will run on same web server. In case of AWS Cloud, you may require dedicated EC2 instance for cron jobs or you can create schedule EC2 instance.
6. In dedicate architecture, you may have only application which serves all request. For AWS you can use two separate servers, Web Server (i.e. Apache HTTP Server, Nginx Server, etc...) and Application Server (Tomcat, IIS, etc...)
7. Few application services are available in AWS Cloud that you can use depending upon the requirement.
    1. Amazon SQS – Amazon Simple Queue Service (SQS) is a fast, reliable, scalable, fully managed message queuing service.
    2. Amazon SNS \- Amazon Simple Notification Service is a fast, flexible, fully managed push messaging service. &nbsp;It also supports push notifications to Apple, Google, Fire OS, and Windows devices.
    3. Amazon SES \- Amazon Simple Email Service is a cost-effective outbound-only email-sending service.
  
**Reference**  

1. http://aws.amazon.com/whitepapers/migrating-your-existing-applications-to-the-aws-cloud-with-3-example-scenarios/
2. http://highscalability.com/blog/2010/12/21/sql-nosql-yes.html
3. http://aws.amazon.com/products/

[1]: http://1.bp.blogspot.com/-WjKR67QALIU/U7eZyX33KaI/AAAAAAAAFEA/aLvBLgxspfM/s1600/it_photo_123370.jpg
[2]: http://1.bp.blogspot.com/-WD9K_bxbfME/U7eadfUi9pI/AAAAAAAAFEI/0_YvDeJWzxU/s1600/client-hosted.png
[3]: http://4.bp.blogspot.com/-5j5phQijJBc/U7eazw986GI/AAAAAAAAFEQ/F3HrLRHmcu4/s1600/Screen+Shot+2014-07-02+at+8.11.41+pm.png
[4]: http://highscalability.com/blog/2010/12/21/sql-nosql-yes.html
  