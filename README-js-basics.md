# JavaScript Basics

## Variables
Variables are used to store information. In JavaScript, we use `let` to create a variable.  
Example:
```javascript
let name = "Alex";
```
Now, `name` stores the value `"Alex"`.

---

## Strings and Concatenation
A string is text inside quotes.  
Concatenation means joining strings together using `+`.  
Example:
```javascript
let greeting = "Hello, " + name + "!";
```
This joins `"Hello, "`, the value of `name`, and `"!"` into one string.

---

## document.getElementById()
This is used to find an element on the web page by its `id`.  
Example:
```javascript
let button = document.getElementById("myButton");
```
Now, `button` refers to the element with `id="myButton"`.

---

## addEventListener()
This lets you run code when something happens, like a button click.  
Example:
```javascript
button.addEventListener("click", function() {
  // Code here runs when the button is clicked
});
```

---

## console.log()
This prints messages to the browser's console. It's useful for checking values while learning.  
Example:
```javascript
console.log("Hello, world!");
```

---

## textContent
This changes the text inside an HTML element.  
Example:
```javascript
let message = document.getElementById("message");
message.textContent = "Welcome!";
```
Now, the element with `id="message"` will show "Welcome!" on the page.
