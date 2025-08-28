### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

ans: getElementById is dependant on id attribute where getElementsByClassName means select all elements who has a certain class name and querySelector means Selects the first element that matches a given CSS selector string which allows for flexible selection using any valid CSS selector such as tag names, ids, classes, attributes. querySelectorAll means Selects all elements that match a given CSS selector string, returning a collection of all matching elements.

2. How do you **create and insert a new element into the DOM**?

ans: to create and insert a new element into the DOM we need to create a element first like document.createElement() this is used to create a new HTML element node so that we can create "div", "p", "span", "img".

3. What is **Event Bubbling** and how does it work?

ans: Event bubbling is the default process in the browser event handling where an event, like a click first triggers on the innermost, targeted HTML element and then propagates or "bubbles up" through its parent, grandparent, and all ancestors in the DOM tree until it reaches the window object or the root of the DOM. This allows elements higher up the hierarchy to also respond to the event, even if they don't directly contain the triggered element

4. What is **Event Delegation** in JavaScript? Why is it useful?

ans: Event delegation in JavaScript is a technique where a single event listener is attached to a parent element to manage events triggered by its child elements. This approach leverages the concept of event bubbling, where an event triggered on a child element propagates up to it parent elements in the DOM tree.

it is useful because it can avoid the need to keep track of and manage individual event listeners for numerous elements, simplifying development.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

preventDefault() deals with the browser's default action for an event where stopPropagation() deals with the event's propagation through the DOM hierarchy.
