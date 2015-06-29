---
layout: post
title:  "Go Language For Java Developer Part-2"
date:   2015-06-27 16:20:00
category: "Go"
tags: "Go, Go Language"
excerpt: This article series is designed keeping in mind,The Java Developers who would like to learn Go Language. 

image: "/golang.jpeg"
---

<img src="/assets/images/posts/golang.jpeg" alt="Go Language For Java Developer" title="Go Language For Java Developer" class="img-responsive">


###**Variables**

Variable: A variable is a storage location for holding a value. The set of permissible values is determined by the variable's type.

####Java Variable

Java language has primitive type and objects, both has different syntax to declare variable

Primitive type variable

	int a
	String b
	float c

Object type variable
	
	Animal a = new Animal()
	Student s = new Student()
	

Java is object oriented language so that we can have access modifier for variable declaration

	private int a
	public String b
	protected float c
	private Animal a 

In Java we can declare variable at many places like Local variable, Parameters, Class level, Instance variable.


**Variable Naming**

1. Variable names are case-sensitive
2. An unlimited-length sequence of Unicode letters and digits
3. Beginning with a letter, the dollar sign "$", or the underscore character "_".
4. No special characters allowd as identifier of variable
5. We can't use reserved keywords


####Go Variable

Variables in Go are created by first using the *'var'* keyword, then specifying the variable name, the type and finally assigning a value to the variable.

	package main	import "fmt"	func main() {    	var x int  // Line 1	    x = 10 // Line 2		var y string = "Hello Go!" // Line 3    	fmt.Println(x)
		fmt.Println(y)	}

In Line 1, var indicate it's variable, x is name of variable and int is type of variable. 
In Line 2, we are assigning value in x variable. 
In Line 3, we have declare string variable and assign in single line

Since creating a new variable with a starting value is so common Go also supports a shorter statement:

	y := "Hello Go!"

With above shorter syntax Go compiler will automatically identify that y is variable of type string and value is "Hello Go!".

Declare multiple variable at same time

	var (
		name string
		age int
		location string
	)

Go is not object oriented language so we don't have access modifier like we have in Java. In Go language, We have two place to declare variables 1. Inside Function 2. Out Side Function.

**Function / Local Variable**

	package main
	import "fmt"
	func main(){
		var x int = 10	
		fmt.Println(x)
	}
	
**Global Variable**: Any function can access y variable, x is local variable only accessible inside main function

	package main
	import "fmt"
	var y int =10
	func main(){
		var x int = 10
		fmt.Println(x)
		fmt.Println(y)
	}
	func hello(){
		fmt.Println(y)
	}
	
**Variable Name**

1. Name must be start with letter
2. Name may contain letter, number and underscore (_)
3. Name is character sensetive Num and num consider as two different variable
