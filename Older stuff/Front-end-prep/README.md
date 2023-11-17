1. )https://www.thatjsdude.com/interview/

2.) https://codewithsimran.substack.com/p/comprehensive-front-end-interview

3.) https://leetcode.com/discuss/interview-question/1074798/Frontend-Interview-Preparation-(1-4-years)-Level-1-and-Level-2

4.) https://leetcode.com/discuss/interview-question/1147927/Useful-Front-End-preparation-material

5.) https://www.toptal.com/javascript/interview-questions

6.) https://bigfrontend.dev/problem

7.) https://www.w3schools.com/howto/howto_js_filter_lists.asp

8.) https://devchallenges.io/

### Linkedin People to follow 
- Milos Milovanovic
- Slobodan Gajic
- Nick Foscarini
- Sunny Puri
- mattupham github repo
- bigfrointend dev , dev challenges io

## Resources provided by companies:-
(These are mostly books but I would highly recommend to go through this if you have time. This will strengthen your core understanding of JS which is key to crack the interviews)

The Modern JavaScript Tutorial http://javascript.info/
JavaScript Garden: http://bonsaiden.github.io/JavaScript-Garden/
Eloquent JavaScript: http://eloquentjavascript.net/
https://www.youtube.com/watch?v=N233T0epWTs&ab_channel=FacebookDevelopers
A re-introduction to JavaScript | MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript
## //////////////////////////////////////////////////////////
Frontend Preparation (1-4) years experience

I have attended about 10 companies and got 3 offers for Frontend. Accepted Offer from Flipkart for UI Engineer

Will walk you through the questions and patterns for Frontend Interviews with my experience and share the learning resources for topics. (These materials are interview references and it helps when you are strong with fundamentals in html,css,Javascript ). Will add resources for fundamentals. Will add questions which I have faced in my interview under each topic.

1.Polyfills - Polyfill for Bind, Array.reduce, Promise
For answering polyfills you need to be familiar with how “this” and prototype inheritance works under the hood

Jsvault - http://jsvault.com

https://levelup.gitconnected.com/learn-javascript-promises-by-building-a-fully-working-promise-from-scratch-c9eabe73fa3

2.Javascript Snippets- In the first round they will be testing you the core fundamentals of javascript with some tricky questions. Topics to be covered hoisting, Es6, value of this , immutability , set timeouts.

I do recommend to learn Kyle Simpson “You don’t know JS” javascript book series. It strengthens your javascript core fundamentals. If you can afford some paid subscription I suggest “Frontend Masters” the best for all Frontend Development Career and not for interview prespective. Kyle Simpson talk about prototypal Inheritance gives you a strong base how Javascript works.

Namaste Javascript series for brushing up the concepts before interviews

For tricky questions examples - https://bit.ly/3dFIP4f

3.Eventloop - Javascript snippets with settimeout will be given and they ask for how this internally works. How Eventloop works
Js Conf -
http://latentflip.com/loupe/ - Do try executing snippets to understand event loop with some async tasks. priotitisation over settimeout and xhmlhttprequest. Understand microtask queue

JS conf Event loop

4.Functions - Function currying, Closures
Practical implementation of currrying and closures.

Most questions will be based on Function which inturn returns another function

test(2)(3)()

Problem solving with recursion will be asked in combination with Function currying

Arrow Functions.

Manipulation of Arrays and objects which they test for assessing knowledge on es6 features like spread, rest , object destructuring. Immutable techiniques

5.Given an Application what are all the factors you consider for web performance
Optimisation techniques
Memory leaks
Caching
Network Waterfall
Critical rendering path
Bundle size reduction- Tree shaking, code splitting , Dynamic imports
Script attributes- Async,defer, preconnect, prefetch, preload

https://frontendmasters.com/workshops/web-perf/

6.Security Related questions
please have hands-on experience on security issues
Cross site scripting XSS
CSRF
Clickjacking
CSP - Contend security policies

https://www.pluralsight.com/courses/defeating-cross-site-scripting-content-security-policy

https://frontendmasters.com/courses/web-security/

Algorithms and Datastructures
Easy to medium level questions.

https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/

All data structures implemented in Javascript

Assignment round

Most assignment round one will be in the format of getting data from api performing modifications should be mobile responsive, code should be modular you may some time have restrictions only to use vanilla javascript.Would recommend small UI tasks reference from w3schools/howto

https://www.w3schools.com/howto/

This will improve your UI building pace for component. you can follow you own approach you can refer W3schools for practice
I have faced questions like building modal , slider components

You can go through these interview questions

https://github.com/sudheerj/javascript-interview-questions - not mandatory sometimes it can help

Practice these challenges when you are free to gets hands on in machine coding. Learning common Layout patterns will help to solve problems quickly

https://devchallenges.io

Just to mention, if you have GitHub Student Developer pack - you can get the premium subscription for free 6 months on Frontend Master :)
This Front End Interview Handbook is also a great resource preparing for interviews: https://yangshun.github.io/front-end-interview-handbook/

I have not written any blog or post. Do forgive for mistakes and it may not be the proper way of delivering the content. I hope everyone understands

Will keep editing this post As I remember the resouces which I used.

Disclaimer- Don’t study new concepts in the prospective for interviews. Questions will be based on the things you have worked on.

I recommend these content for reference for interview questions.Understand the basic fundamentals it will be easier to build things on top of that while solving problems.

If you get rejected in an interview think that a better opportunity is waiting for you than this. All the best

Haven’t explored Recently got to know- https://bigfrontend.dev/question

Feel free to comment good resouces for Frontend preparation.

you can mail me at frontendprep@gmail.com for further clarifications ( As I am missing out Emails you can connect with me on LinkedIn If you are any queries which I can help)

https://www.linkedin.com/in/nageshwara-sairam-594335139/
## //////////////////////////////////////////////////////////
I have interviewed for Front end roles at Facebook, Amazon, and few other non-fang companies. I just wanted to share some resources as I know how hard it is to find useful resources for front-end preparation.
At the end of this post, I'll list down some resources shared by FANG recruiters for preparation. 😊

First and the most important thing:-

Get really comfortable with vanilla JS and it's primitives.
Know how the functions are implemented under the hood.
Know how to code some of the library(like Lodash, RxJs, etc) implementations from scratch, such as:                         
* Implementation of debounce
* Implementation of throttle
* Implement Observable
* Implement EvenEmitter
Know ES6 well.
Generally asked question covers:-

Explain "this" keyword
Know how to manipulate DOM API's, querying the structure of a DOM
Asynchronous programming
Closures
Callbacks
Implementation Promises
Prototypal inheritance
Polyfill for Call(), apply() and bind()
Polyfill for map, filter
let, const and var
Some HTML/CSS and javascript mix questions:-

Arrange 3 divs (which share a common parent) in a row.
Implement sum(a).(b).(c) in Javascript.
Event loop
Given a parent and child div (the dimensions of both parent and child are not pre determined). What are the various ways in which child can be aligned to centre of div.
Web security questions:-

Explain CORS.
What is CSRF attack? Explain with an example and how to prevent it.
Explain XSS, etc.
Don't forget to study DS & Algo as well, though the questions are JS heavy but it's still good to have DS knowledge (I have been asked medium to hard level LC)

I used freecodecamps DS series:
* https://www.youtube.com/watch?v=Gj5qBheGOEo&list=PLWKjhJtqVAbkso-IbgiiP48n-O-JQA9PJ&ab_channel=freeCodeCamp.org


Great resource for JS:-
https://www.youtube.com/channel/UC3N9i_KvKZYP4F84FPIzgPQ
https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q
https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw

I prepared mostly from the resources provided by recruiters, but this website helped to practise on some variety of problems:
https://bigfrontend.dev

Zalando and DeliveryHero:-
General interview questions + medium to hard level leetcode problem

https://www.toptal.com/javascript/interview-questions
https://leetcode.com/problems/trapping-rain-water/
Resources provided by companies:-
(These are mostly books but I would highly recommend to go through this if you have time. This will strengthen your core understanding of JS which is key to crack the interviews)

The Modern JavaScript Tutorial http://javascript.info/
JavaScript Garden: http://bonsaiden.github.io/JavaScript-Garden/
Eloquent JavaScript: http://eloquentjavascript.net/
https://www.youtube.com/watch?v=N233T0epWTs&ab_channel=FacebookDevelopers
A re-introduction to JavaScript | MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript


Practise stuff:-
https://www.w3resource.com/javascript-exercises/javascript-array-exercises.php#EDITOR

I couldn't find the actual JS quiz by David Shariff, but here is a nice explanation of that quiz:
https://medium.com/@jesspoemape/explaining-david-shariffs-javascript-quiz-65a8c9ebdc4

Going for Amazon- don't forget to prepare for the 14 leadership priciples (using STAR method)

https://interviewgenie.com/blog-1/2017/11/28/how-to-answer-amazon-leadership-principle-customer-obsession-interview-questions
https://interviewgenie.com/blog-1/how-to-interview-at-amazon-with-leadership-principles
https://www.themuse.com/advice/star-interview-method
Bonus:-

Asked to implement searchbar (I used trie)
Please feel free to add more questions or resources, this can help somebody who is preparing.
