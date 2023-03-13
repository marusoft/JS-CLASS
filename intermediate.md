Building an Interactive JavaScript Application
=================================================

 HTML script element
========================
The HTML `<script>` element can contain or reference JavaScript code in an HTML file. 
The `<script>` element needs both an opening and a closing tag, and JavaScript code 
can be embedded between the tags.

```
<script>
  console.log("Hello world!");
</script>
```

### DOCUMENT OBJECT MODEL

The DOM defines a standard for accessing documents:
It provides a way for programmers to interact with and 
manipulate the structure of a website. This allows them to create 
dynamic and interactive websites, where user interactions can trigger 
changes in the page's layout and content.

### JavaScript and The DOM
JavaScript is a programming language that helps us interact with the DOM.
JavaScript is like a magic wand that can change a website by 
using the map (DOM) to find the different parts of the website.

### The DOM Tree
The DOM tree represents the structure of a website in a way that 
computers can understand. Developers can use it to access and manipulate 
different elements in that structure to create dynamic web pages.
The top of the tree is called the "root" and it represents the entire website.

![dom tree representation](https://www.freecodecamp.org/news/content/images/2023/01/DOM-tree-5.png)


How to Access the DOM
======================
To access an element on a website, you need to know the 
specific element you want to access.

### Methods For accessing the DOM
The following methods are available in JavaScripts in order 
to access elements in the DOM.
* getElementById
* getElementByClass 
* getElementsByTagName
* querySelector 
* querySelectorAll

The above methods allow you to find an element based on its id, tagname, 
or classname and select it for manipulation.

For example, you can access a button on a webpage and change its text or 
color when a user clicks on it. Or, you can access an image on a webpage 
and change it to a different image when a user hovers over it.

*Examples on how to Access and manupulate the DOM can be found in the
Intermediate-js-and-illustration folder*  