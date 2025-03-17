 **`Paciam prisiminimas Naudojimas internetu rasta informacija apacioje sio puslapio.`**
1. **`window` vs `document`**

   - **`window`**: Represents the browser window or tab. It's the global object in browser JavaScript and holds properties like `innerWidth`, `innerHeight`, `location`, and methods like `alert()`, `setTimeout()`.  It also contains the `document` object.
   - **`document`**: Represents the HTML document loaded in the browser window. It's a property of the `window` object and provides methods to access and manipulate HTML elements (e.g., `getElementById`, `querySelector`).

2. **`window.onload` vs `document.onload`**

   - **`window.onload`**: Fires when the entire page, including images, scripts, and stylesheets, has finished loading.
   - **`document.onload`**:  Technically, there's no `document.onload` event in the standard. Some browsers might support it, but it's not reliable.  Use `DOMContentLoaded` instead, which fires when the HTML document has been completely parsed and the DOM is ready, even if external resources like images haven't finished loading.

3. **Attribute vs Property**

   - **Attribute**: Part of the HTML markup.  They are represented as strings in the HTML source code (e.g., `<img src="image.jpg" alt="My Image">`).
   - **Property**:  Represents the current state of a DOM element in JavaScript. They are dynamic and can change after the initial HTML parsing (e.g., `img.src = "newImage.jpg"`).  Properties can be of various types (strings, booleans, objects).

4. **Methods to get DOM elements:**

   - `getElementById(id)`: Gets an element by its unique ID.
   - `getElementsByClassName(className)`: Gets a live HTMLCollection of elements with the specified class name.
   - `getElementsByTagName(tagName)`: Gets a live HTMLCollection of elements with the specified tag name.
   - `querySelector(selector)`: Gets the first element that matches a CSS selector.
   - `querySelectorAll(selector)`: Gets a static NodeList of all elements that match a CSS selector.

5. **Fastest way to query the DOM:**

   - `getElementById()` is generally the fastest because it uses a direct lookup based on the element's ID.

6. **`forEach` and array methods on a NodeList:**

   - `querySelectorAll()` returns a NodeList, which is array-like but not a true array.  You can convert it to an array using `Array.from()` or the spread operator:

     ```javascript
     const nodeList = document.querySelectorAll('div');
     const array = Array.from(nodeList); // Or [...nodeList]

     array.forEach(element => { /* ... */ });
     ```

7. **Function to get elements by attribute:**

   ```javascript
   function getElementsByAttribute(attribute, value) {
       const elements = document.querySelectorAll(`[${attribute}${value ? `="${value}"` : ''}]`);
       return Array.from(elements); // Convert to array for easier use
   }

   // Example usage:
   const elementsWithTitle = getElementsByAttribute('title');
   const elementsWithDataValue = getElementsByAttribute('data-value', 'myValue');
   ```

8. **Function to add a class to an element:**

   ```javascript
   function addClass(element, className) {
       element.classList.add(className);
   }

   // Example usage:
   const myElement = document.getElementById('myElement');
   addClass(myElement, 'my-new-class');
   ```
   **`links`**
   ```
 **`A`**
  https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
 **`B`** 
 https://developer.mozilla.org/en-US/docs/Web/API/Window
 **`C`** 
 https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
```