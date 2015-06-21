---
layout: post
title:  "Go Language For Java Developer Part-2"
date:   2015-06-13 16:20:00
category: "Go"
tags: "Go, Go Language"
excerpt: This article series is designed keeping in mind,The Java Developers who would like to learn Go Language. 

image: "/golang.jpeg"
---

<img src="/assets/images/posts/golang.jpeg" alt="Go Language For Java Developer" title="Go Language For Java Developer" class="img-responsive">


Normally first program you write in any programming language is "Hello World". Hello World is simple program which print "Hello Word" text on console / screen.

**Java: Hello World**

As Java Developer you can easily understand following code. No need to explain. correct ? 

	package com.kpbird.gotutorial; 
	public class Main {
		public static void main(String[] args) {
			System.out.println("Hello World");	      
		}
	}

To compile & execute above code, you need to write following two commands in the Terminal. 

	javac Main.java
	java Main

**Go: Hello World**

Create directory where you need to keep the code. Create file named "main.go" and write following code


	package main  // line 1	import "fmt" // line 2	func main() { // line 3    	fmt.Println("Hello World") // line 4	} // line 5

To execute above code, you need to write following command in the Terminal
	
	go run main.go

You should see Hello World in terminal. If you don't see Hello World displayed then you may have mistake in typing program. The Go compiler will give you hint about where the mistake lies. 

**Understand Go : Hello Word program**

**1. Package Name (Line 1):** Go program start with package declaration. Every Go program must start with package declaration. Package declaration is used to organise source code. In Java we follow relative path but with "." (dot) format like com.kpbird.gotutorial represent physical path com/kpbird/gotutorial. While in Go language package name represent only current folder name "gotutorial". Go language support two type of program 1. Go Libraries 2. Go Executable. Package main is a way to tell compiler that this Go program is executable. When you declare "package main" you don't need to create folder / directory called "main". 

**2. Import (Line 2):**  import keyword is used to include code from other package or library. The "fmt" package is short form of Format. It is used to format input and output. In Java, we don't need to write java.lang package explicitly compiler will do it behalf of us.  

**3. fund main() (Line 3):** Functions are building block of Go language. All functions start with keywords "func". func followed by name of function in our case "main" is the name of function. If function takes any argument we need to write in parentheses. Main is special function because main gets called when we execute Go program. It's like public static void main() in Java.

**4. fmt.Println (Line 4):** Line 4 has three component 1. fmt package name. 2. Println function name 3. String argument "Hello World". In Java, we use System.out.println().

**Java vs Go**

We should not compare both languages because both are different. Go Language is functional features language in which functions are first-class citizen. Java Language is Object Oriented language in which Class / Object are first-class citizen.

To execute Java program, first we need to compile using "javac" command, after that we need to use "java" command execute a program. 

To execute Go program, we just need to write Go run main.go. Single command will compile and execute program. To build program Go language has command build. It will generate native executable file as per the platform, that you can directly execute. 
	
	$Go build main.go
	$./main

In Go Language don't have semi-colon (;) to end the statement. It means that you can't write two statement in single line.

In Java Language, As we have semi-colon (;) to end the statement we can write entire code in single line.

Next article we will learn about data types in Go Language.

