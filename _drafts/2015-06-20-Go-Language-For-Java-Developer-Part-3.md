---
layout: post
title:  "Go Language For Java Developer Part-2"
date:   2015-06-20 16:20:00
category: "Go"
tags: "Go, Go Language"
excerpt: This article series is designed in mind with Java Developer who would like to learn Go Language. 

image: "/golang.jpeg"
---

<img src="/assets/images/posts/golang.jpeg" alt="Go Language For Java Developer" title="Go Language For Java Developer" class="img-responsive">

**Java Language: Data Type**

In Java, We have premitive data types and objects. Java support 8 premitive data types for different purpose. 

<table >
<tbody><tr>
<th id="h1" align="left"><strong>Data Type</strong></th>
<th id="h2" align="left"><strong>Default Value</strong></th>
</tr>
<tr>
<td >byte</td>
<td >0</td>
</tr>
<tr>
<td >short</td>
<td >0</td>
</tr>
<tr>
<td >int</td>
<td >0</td>
</tr>
<tr>
<td >long</td>
<td >0L</td>
</tr>
<tr>
<td >float</td>
<td >0.0f</td>
</tr>
<tr>
<td >double</td>
<td >0.0d</td>
</tr>
<tr>
<td >char</td>
<td >'\u0000'</td>
</tr>
<tr>
<td >boolean</td>
<td >false</td>
</tr>
</tbody></table>

Reference: [https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

**Go Language: Type**

In Go language is statically typed programming language. It means that variable always has specific type that can't be change. Go language data type can be divide in main three categories. 

1. Boolean: A boolean type represents the set of Boolean truth values denoted by the predeclared constants true and false. The predeclared boolean type is bool.

2. Numaric: A numeric type represents sets of integer or floating-point values. The predeclared architecture-independent numeric types are:

3. String: A string type represents the set of string values. A string value is a (possibly empty) sequence of bytes. Strings are immutable: once created, it is impossible to change the contents of a string. The predeclared string type is string.


<table>
	<tr>
		<th id="h1" align="left"><strong>Data Type</strong></th>
		<th id="h2" align="left"><strong>Default Value</strong></th>
		<th>Range</th>
	</tr>
	<tr>
		<td >bool</td>
		<td >false</td>
		<td>true or false</td>
	</tr>
	<tr>
		<td >int</td>
		<td >0</td>
		<td>either int32 or int64</td>
	</tr>
	<tr>
		<td >int8</td>
		<td >0</td>
		<td>signed 16-bit integers (-32768 to 32767)</td>
	</tr>
	<tr>
		<td >int16</td>
		<td >0</td>
		<td>signed 16-bit integers (-32768 to 32767)</td>
	</tr>
	<tr>
		<td >int32</td>
		<td >0</td>
		<td>signed 32-bit integers (-2147483648 to 2147483647)</td>
	</tr>
	<tr>
		<td >int64</td>
		<td >0</td>
		<td>signed 64-bit integers (-9223372036854775808 to 9223372036854775807)</td>
	</tr>
	<tr>
		<td >uint</td>
		<td >0</td>
		<td>either 32 or 64 bits</td>
	</tr>
	<tr>
		<td >uint8</td>
		<td >0</td>
		<td>unsigned  8-bit integers (0 to 255)</td>
	</tr>
	<tr>
		<td >uint16</td>
		<td >0</td>
		<td>unsigned 16-bit integers (0 to 65535)</td>
	</tr>
	<tr>
		<td >uint32</td>
		<td >0</td>
		<td>unsigned 32-bit integers (0 to 4294967295)</td>
	</tr>
	<tr>
		<td >uint64</td>
		<td >0</td>
		<td>unsigned 64-bit integers (0 to 18446744073709551615)</td>
	</tr>
	<tr>
		<td >float32</td>
		<td >0</td>
		<td>IEEE-754 32-bit floating-point numbers</td>
	</tr>										
	<tr>
		<td >float64</td>
		<td >0</td>
		<td>IEEE-754 64-bit floating-point numbers</td>
	</tr>										
	<tr>
		<td >string</td>
		<td ></td>
		<td></td>
	</tr>										
</table>

Refernce: [https://golang.org/ref/spec#Types](https://golang.org/ref/spec#Types)

Next article we will larn about variable in Go Language