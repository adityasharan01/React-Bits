Link : https://dev.to/unalo_baayriyo/create-a-table-using-object-oriented-javascript-309e

Debounce and Throttle are two similar(but different) techniques to limit the amount of JavaScript you are executing based on DOM events for performance reasons.

Debounce -
In the debouncing technique, no matter how many times the user fires the event, the attached function will be executed only after the specified time once the user stops firing the event.

Implementing debouncing in JavaScript
function debounceFunction(func, delay) {
  return function (args) {
    let previousCall = this.lastCall;
    this.lastCall = Date.now();
    if (previousCall&&((this.lastCall - previousCall)<=delay)) 
      {
        clearTimeout(this.lastCallTimer);
      }
    this.lastCallTimer = setTimeout(() => func(args), delay);
  }
}
Throttle
Throttling is a technique in which, no matter how many times the user fires the event, the attached function will be executed only once in a given time interval.

Implementing Throttling in JavaScript
function throttleFunction(func, delay) {
  return function (args) {
    let previousCall = this.lastCall;
    this.lastCall = Date.now();
    if (previousCall === undefined
    || (this.lastCall - previousCall) > delay) { 
     // function is being called for the first time or throttle time has elapsed
      func(args);
    }
  }
}
Use of Debouncing and Throttling in Real Life
Gaming
Autocomplete search
We can throttle a button click event if we do not want the user to spam by clicking the button frequently.
In the case of window resize event, if we want to redraw the UI only when the user has fixed the size of the window, we can use debouncing.
Conclusion
Debouncing and Throttling are very important concepts in javascript and frequently asked in frontend interviews.
In this article, we understood the concepts of debouncing and throttling along with their implementation in javascript and uses in the real world.
