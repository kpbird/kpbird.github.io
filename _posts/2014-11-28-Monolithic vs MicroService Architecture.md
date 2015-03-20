---
layout: post
title:  "Monolithic vs MicroService Architecture"
date:   2014-11-28 16:20:00
category: "Architecture"
tags: "Architecture, Microservice, Monolithic"
excerpt: This is how industry move from monilighic to microservice... 

image: "/007ac2e.png"
---

<img src="/assets/images/posts/007ac2e.png" alt="Monolithic vs MicroService Architecture" class="img-responsive">

*Monolithic architecture is something that build from single piece of material, historically from rock. Monolith term normally use for object made from single large piece of material.”* - **Non-Technical Definition**

*“Monolithic application has single code base with multiple modules. Modules are divided as either for business features or technical features. It has single build system which build entire application and/or dependency. It also has single executable or deployable binary”* – **Technical Definition**

Industry is using this approach since long to develop enterprise application. Many companies have invested years to build enterprise application with monolithic approach. Sometime it also called multi-tier architecture because monolithic applications are divided in three or more layers or tire i.e. presentation, business, database, application, etc. It was a time of browser evaluation. Enterprise was focused on desktop/laptop devices with Web Browser as client, which doesn't require to expose data with API, mainly because browsers can understand only HTML, CSS and JavaScript. Although, Enterprise was using Enterprise Data Bus(EDB), Electronic Data Interchange(EDI) , Enterprise Data Exchange (EDX) and many more ([https://www.oasis-open.org/standards](http://www.oasis-open.org/standards)) data exchange format to interact with each other in back-end. Monolithic architecture need of enterprises' at that time.

Suddenly, entire paradigm shift from browser / desktop to mobile / smart devices. Enterprise need to serve data to different devices and form factors (smart phone, tablet, handheld, etc). Smart phone become always available, always on and personal device for everyone, which demand information anytime, anywhere, on fingertip. Mobile application is nearly useless without internet connectivity and backend services. Now is a time for mobile first, every enterprises are looking forward to develop mobile application before web. To developer mobile application enterprise need to expose data using API (REST or SOAP) because legacy data exchange format was not compatible with mobile application. With increasing demand of mobile application force to change back-end architecture. This is prime force behind migrating monolithic architecture to microservice architecture.

Microservice architecture is an approach of building large enterprise application with multiple small unit called service, each service develop, deploy and test individually. Each service intercommunicate with a common communication protocol like REST web service with JSON. Each service run individually either in single machine or different machine but they execute its own separate process. Each service may have own database or storage system or they can share common database or storage system. Microservice is all about distribute or break application in small chunks.

Microservice is more than code and structure. It’s way of working. Its culture in a way, every developer or team own some part of large application. Microservice is not ultimate solution for every application but it’s surely solution for large enterprise application. Microservice has some shortfalls like increase lot of operations overhead, DevOps skills required, complex to manage because of distributed system, bug tracking become challenging.

**Difficulties with monolithic application, when it grow**

* Large monolithic code base makes complicated to understand, especially for new developer
* Scaling become challenging
* Continuously integration / deployment become complex and time consuming. You may require dedicated team for build and deploy
* Overloaded IDE, Large code base makes IDE slow, build time increase.
* Extremely difficult to change technology or language or framework because everything is tightly coupled and depend up on each other.

**Privilege with Microservice architecture, when it grow**

* Each microservice is small and focused on a specific feature / business requirement.
* Microservice can be developed independently by small team of developers (normally 2 to 5 developers).
* Microservice is loosely coupled, means services are independent, in terms of development and deployment both.
* Microservice can be developed using different programming language (Personally I don't suggest to do it).
* Microservice allows easy and flexible way to integrate automatic deployment with Continuous Integration tools (for e.g: Jenkins, Hudson, bamboo etc..).
The productivity of a new team member will be quick enough.
* Microservice allows you to take advantage of emerging and latest technologies (framework, programming language, programming practice, etc.).
* Microservice is easy to scale based on demand.
In a nutshell, monolithic vs microservice architecture is like elephant vs ant approach. What you wants to build a giant system like elephant or army of ant, small, fast and effective.

**People to follow**

* Martin Fowler [@martinfowler](http://twitter.com/@martinfowler)
* Victor Klang [@viktorklang](http://twitter.com/@viktorklang)
* Jeppe Cramon [@jeppec](http://twitter.com/@jeppec)
* Benjamin Wootton [@benjaminwootton](http://twitter.com/@benjaminwootton)
* Russ Miles [@russmiles](http://twitter.com/@russmiles)

**Article & Presentation**

* [http://martinfowler.com/articles/microservices.html](http://martinfowler.com/articles/microservices.html)
* [http://yow.eventer.com/yow-2012-1012/micro-services-architecture-by-fred-george-1286](http://yow.eventer.com/yow-2012-1012/micro-services-architecture-by-fred-george-1286)
* [http://www.infoq.com/presentations/Breaking-the-Monolith](http://www.infoq.com/presentations/Breaking-the-Monolith)
* [https://www.linkedin.com/today/post/article/20140529022253-6461201-seven-micro-
services-architecture-advantages](http://www.linkedin.com/today/post/article/20140529022253-6461201-seven-micro-
services-architecture-advantages)

**Case Studies**

* Build Microservices at Krma [https://blog.yourkarma.com/building-microservices-at-karma](http://blog.yourkarma.com/building-microservices-at-karma)
* Migrating to Microservice [http://www.infoq.com/presentations/migration-cloud-native](http://www.infoq.com/presentations/migration-cloud-native)


**Event**

* µCon: The Microservices Conference : [https://skillsmatter.com/conferences/6312-mucon](http://killsmatter.com/conferences/6312-mucon)