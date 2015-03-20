---
layout: post
title:  "Microservice Architecture - A Quick Guide"
date:   2014-06-06 16:20:00
category: "Architecture"
tags: "Architecture,Microservice"
excerpt: Architecture is the fundamental organization of a system embodied in its components (i.e. Web Server, Application Server, Databases,Storage, Communication layer, etc...), their relationships to each other, and to the environment (i.e. deployment environment shared server, dedicated server, cloud deployment, etc..), and the principles guiding its design and evolution.

---
# Microservice Architecture - A Quick Guide

**1\. What is Architecture (Software)?**

Architecture is the fundamental organization of a system embodied in its components (i.e. Web Server, Application Server, Databases,Storage, Communication layer, etc...), their relationships to each other, and to the environment (i.e. deployment environment shared server, dedicated server, cloud deployment, etc..), and the principles guiding its design and evolution.

**2\. What is microservice architecture ?**

Microservice means developing a single, small, meaningful functional feature as single service, each service has it's own process and communicate with lightweight mechanism, deployed in single or multiple servers.

**3\. Advantages of microservice architecture ?**

* Each micro service is small and focused on a specific feature / business requirement.
* Microservice can be developed independently by small team of developers (normally 2 to 5 developers).
* Microservice is loosely coupled, means services are independent, in terms of development and deployment both.
* Microservice can be developed using different programming language (Personally I don't suggest to do it).
* Microservice allows easy and flexible way to integrate automatic deployment with Continuous Integration tools (for e.g:&nbsp;[Jenkins][1],&nbsp;[Hudson][2],&nbsp;[bamboo][3]&nbsp;etc..).
* The productivity of a new team member will be quick enough.
* Microservice is easy to understand, modify and maintain for a developer because separation of code,small team and focused work.
* Microservice allows you to take advantage of emerging and latest technologies (framework, programming language , programming practice, etc.).
* Microservice has code for business logic only, No mixup with HTML,CSS or other UI component.
* Microservice is easy to scale based on demand.
* Microservice can deploy on commodity hardware or low / medium configuration servers.
* Easy to integrate 3rd party service.
* Every microservice has it's own storage capability but it depends on the project's requirement, you can have common database like MySQL or Oracle for all services.

**4\. Disadvantages of microservice architecture ?**

* Microservice architecture brings a lot of operations overhead.
* * Duplication of Effort.
* Distributed System is complicated to manage .
* Default to trace problem because of distributed deployment.
* Complicated to manage whole products when number of services increases.

**5\. In which case / requirement microservice architecture best fit ?**

When you need to support Desktop, web , mobile, Smart TVs, Wearable, etc... or you don't know in future which kind of devices you need to support.

**6\. Which products / companies are using Microservie architecture?**

Most large scale web sites including Twitter, Netflix, Amazon and eBay have evolved from a monolithic architecture to a microservices architecture.

**7\. How independent micro services communicate with each other?**

It's depend upon requirement, normally developers use HTTP/[REST][4]&nbsp;with&nbsp;[JSON][5]&nbsp;or&nbsp;[Protobuf][6](Binary protocol) but are free to use any communication protocol.

**8\. Why is it that everyone are talking about microservices now?**

It's been nearly 15 years since the concept of Service Oriented Architecture really took hold. With the improvement of RESTful web service and JSON as a data interchange format has made it easier than ever to build easily interconnectable services simply and quickly.

**9\. Presentation**

**10\. Video**

  

**11\. Picture:&nbsp;****Monolithic vs Modular vs Service oriented architecture**

![][7]

**Reference:**

1. [http://martinfowler.com/articles/microservices.html](http://martinfowler.com/articles/microservices.html)
2. [http://microservices.io/patterns/microservices.html](http://microservices.io/patterns/microservices.html)
3. [http://www.infoq.com/presentations/Micro-Services](http://www.infoq.com/presentations/Micro-Services)
4. [http://yobriefca.se/blog/2013/04/28/micro-service-architecture/](http://yobriefca.se/blog/2013/04/28/micro-service-architecture/)
5. [http://www.tomakehurst.com/microservices-and-monoliths-is-there-a-third-way/](http://www.tomakehurst.com/microservices-and-monoliths-is-there-a-third-way/)
6. [http://www.infoq.com/articles/microservices-intro](http://www.infoq.com/articles/microservices-intro)


[1]: http://jenkins-ci.org/
[2]: http://hudson-ci.org/
[3]: https://www.atlassian.com/software/bamboo
[4]: http://en.wikipedia.org/wiki/Representational_state_transfer
[5]: http://en.wikipedia.org/wiki/JSON
[6]: http://en.wikipedia.org/wiki/Protocol_Buffers
[7]: https://media.licdn.com/mpr/mpr/p/8/005/06b/29a/0d60cc3.jpg
