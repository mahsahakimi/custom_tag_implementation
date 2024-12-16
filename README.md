# Single-Page Website with Custom Tag Implementation

This project is a single-page website with a layout that has been implemented according to the assignment's requirements.

In this project, we aimed to implement a custom tag named 'post' and its attribute 'title' as a substitute for something like this:
```html
<article>
    <h1></h1>
    <p></p>
</article>
```

To do this, I used the [this](https://britmovietours.com/movie-locations/who-are-the-most-popular-superheros-today/) website for my post's content:


Additionally, I used some documents on Google and YouTube videos. I experimented with them and finally arrived at this:

I used JavaScript and created a class named Post that inherits from HTMLElement (the base class for all HTML elements in the DOM). My main task is completed by the constructor. The constructor initializes the element, creates its structure, and attaches a shadow DOM. It is called when a new instance of the class is created and sets up the element's structure. So, I overwrite its constructor; first, it invokes its parent (prototype) constructor, and then it continues with its own constructor for other tasks:
```js
class Post extends HTMLElement {
    constructor() {
        super();
        //...
    }
}
```
Here, "this" refers to the post element. After creating the `<h1>` element, I get the attribute value by the attribute name 'title'. In the next line, I set the style for it. Again, I created a `<p>` element and set its content using my new tag's text content:
```js
const titlePart = document.createElement('h1');
titlePart.innerText = this.getAttribute('title');
titlePart.style.backgroundColor = '#f8d154';

const contentPart = document.createElement('p');
contentPart.innerText = this.textContent;
```

I used Shadow DOM (a web standard that enables encapsulation of styles and markup, preventing them from being affected by the main document's styles) to avoid affecting other DOM elements. I created a node that doesn't relate to other elements using `.attachShadow()`. `{mode: 'open'}` means elements of the shadow root are accessible from JavaScript outside the root. This creates a shadow root for the element, allowing for encapsulated styling and markup:
```js
const shadowRoot = this.attachShadow({mode: 'open'});
```
The title and content elements are appended to the shadow root:
```js
shadowRoot.appendChild(titlePart);
shadowRoot.appendChild(contentPart);
```
This line registers the custom element <my-post> with the browser:
```js
customElements.define('my-post', Post);
```

## Usage Example

To use the custom element in an HTML document, you can include it as follows:
```html
<my-post title="My First Post Title">This is the content of my first post.</my-post>
```

## Related Links
- [GitHub Pages](https://mahsahakimi.github.io/custom_tag_implementation/)

