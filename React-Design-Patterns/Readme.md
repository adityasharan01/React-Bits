# Best Practices to write components
https://engineering.musefind.com/our-best-practices-for-writing-react-components-dec3eb5c3fc8

# React Design Patterns part 1
https://blog.kiprosh.com/react_design_patterns_part_one/

# React Design Patterns Basic to Advance Part 2
https://blog.kiprosh.com/react-design-patterns-part-two/

# One more reference
https://www.uxpin.com/studio/blog/react-design-patterns/





//////////////////////
React
React is a JavaScript library for building user interfaces. It lets you compose complex UI from small and isolated pieces of code called Components.

Component in React
Components are small, independent, and reusable pieces of code. They are like JavaScript functions. They accept arbitrary inputs (called props) and return React elements describing what should appear on the screen.

The simplest version of React component is the JavaScript function returning React element.

Element in ReactJS

Element in React
React elements are the building blocks of React applications. The element describes what you want to see on screen. Anything inside angle brackets is called as an element.

Typically, elements are not used directly, but get returned from components.

Refer to this CodePen example


As you can see here, the declared variable element is the React Element and the class Dashboard is a component in React.

JSX
JSX is syntax extension to JavaScript. React community recommends using it with React to describe what UI should look like. React embraces the fact that rendering logic is inherently coupled with other UI logic. So instead of separating Markup and Logic into separate files, React separates concerns with loosely coupled units called Components.

Although it is not mandatory to use JSX with React, but it is the preferred method due to helpful visual aid and styling options that it provides.

Before learning design patterns, first, we need to understand why design patterns are needed and its importance in software development.

Importance of Design Patterns
Design patterns are the repeatable solution to commonly occurring problems in software development. It serves as a basic template upon which we can build up the program’s functionality according to the given requirements.

Design patterns not only speed up the development process but also make the code easier to read and maintain. Also design patterns are the best practices to cover the attributes like how clean and expressive the code is, how fast its executing, and its cost to alter as the per the newer requirement.

There are numerous design patterns available in React, so I will be delving into the following two topics in this design pattern series.

Basic Design Patterns
Advanced Design Patterns
In this article, we will learn about the basic design patterns in React and then ill also shortly publish part-2 of this series covering advanced design patterns.

Basic Design Patterns
Conditional Rendering
Conditions are the most important tool required in software development. Conditional Rendering works the same way conditions work in JavaScript. While developing components the need often arises to render a certain JSX code based on states/props of component. And this is achieved using Conditional Rendering.
 

We can use JavaScript if or ternary operator to render elements representing the current state/props.

Element Variables
We can also use variables to store React Elements. This can help us to render a part of component while the rest of output doesn't change.
 
Refer to this CodePen example
 


Children Types
React can render children of almost all types. JSX expressions that contain both opening and closing tags, the content between those tags is passed as a special prop as props.children.
In React there are several different ways to pass children.
 
String Literal
We can put a normal string between the opening and closing tags and props.children will just be that string.
 
Array as children type
Providing array as a child is a very common approach in React. With the help of this pattern we can draw lists in React.
 
Refer to below CodePen example, I have used JavaScript map() to render React Element for every value in array.
And it is also equivalent to providing a literal array.
<ul> [<li>Child 1</li>, <li>Child 2</li>] </ul>
 



Children pass through
One of the biggest benefits of using React is component composition. Some components don't know their children ahead of time. This is especially common for Sidebar or Dialog that represents generic boxes.
So the recommended approach is to use children prop to pass children elements directly into the output.


Refer to this CodePen example




So here anything inside the <FancyBorder> JSX tag gets passes into FancyBorder component as children prop. As here FancyBorder is rendering the {props.children} inside div so the passed elements will appear in the output.

Slots Pattern (Passing Child as props)
The pattern discussed above is less common, sometimes we might need multiple holes in the component as per the layout. And as every React component receives props and there is no specific rule about what props are and what should be their type. And we can even pass React component as props.


Refer to this CodePen example




As in the above CodePen example, the layout is divided into two parts, left and right sections, so whatever may be the component we pass as left and right props will get render into their respective positions.

Patterns for sharing stateful logic between components
HOC and RenderProp all serve the same purpose : Share stateful logic between components. These are the two ways to build cross cutting code in React. And there is no way to tell which pattern is better or worst. It all depends on the use case.


Render Prop

As per React's official documentation Render prop refers to a technique of sharing code between components using a prop whose value is function.

Component implementing Render prop design pattern takes a function returning React Element as a prop and calls it instead of using its render logic.
Render props pattern comes handy when we want to share the same state across multiple component.

Refer to this CodePen example




Libraries such as Formik, ReactRouter follow the render prop approach.


What problems Render Prop pattern solves?

Reuse code across components.
It is clear that which component is called and the state is isolated.
No need to deal with boiler code.
Higher-Order Components (HOC's)
Higher-Order Components is an advanced technique in react for reusing component logic. They are a pattern that emerges from React's compositional nature.

HOC is a function that takes a component and returns new component. Just as components transform props into UI, HOC is used to transform a component into another component.


Refer to this CodePen example




The best example for explaining HOC is creating the PrivateRoute component.


There will be some cases in application where we may have to allow only several types of users to access the Route. In that case we can create an HOC as PrivateRoute which will take component as input and will check for permissions and will only allow component to return if everything matches.


Problems with HOC

Ensure that all relevant props are passed to the Wrapped component.
It creates a deeply nested tree when composed with several HOC's together making it difficult to debug.
What problems HOC pattern solves?

It also provides a way to reuse code.
It is easy to create small reusable pieces of code, thereby supporting the single responsibility principle.
These are all the basic design patterns which are widely used in React application development.

Hope this article was able to help you know about the Basic Design Patterns in React. In Part II , we will see the Advanced React Design Patterns.

Thank you for reading.
