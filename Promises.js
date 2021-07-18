The 3 Most Powerful JavaScript Promise Methods 🎅🎁
When working with promises in JavaScript, we have a lot of methods that can help us. In this post, we’re going to cover my 3 favorite methods.🎉

🔥 Promise.all()
The .all() expects an array of promises and returns a single promise. It will only resolve if all the promises passed have been resolved. If any promise in an array of promises fails, then it will reject.

🔥 Promise.allSettled()
The .allSettled() accepts an array of promises. It returns a new promise that will resolve if all the array promises are settled, regardless of whether the promises are resolved or rejected. Upon resolving, it returns an arr of objects. Each obj has property “status” regardless of whether the promise was fulfilled or rejected, and “value” returned when the promise is resolved or rejected.

🔥 Promise.any()
The .any() short-circuits and returns a value as soon as it hits the first resolved promise from the list/arr of promises. AggregateError obj represents an error where several errors are wrapped in a single error.

🔊 Promises are a way to manage asynchronous programming in #javascript.
They're perfect for when you need to execute something in the future, and they offer some benefits that will make your life easier!

                                                        The 3 Most Powerful JavaScript Promise Methods 
const promisel = new Promisel (resolve, reject) => resolve(' '))
const promise2 = new Promisel (resolve, reject) => reject('X'))
const promise3 = new Promise( (resolve, reject) => resolve('6'))
Promise.all()
(async () => {
try {
const result = await Promise.all([promisel, promise3])
console.log(result) // Output: ['', '6')
} catch (error) {
console.error('Error: ${error}')
// An exmple with promise2 rejected:
try {
const result = await Promise.all([promisel, promise2, promise3])
console.log(result)
} catch (error) {
console.error('Error: ${error}') // Output: . 'Error:
}
})


Promise.allsettled().
(async () => {
try {
const res = await Promise.allsettled( [promisel, promise2, promise3])
console.log(res)
// Output: [ { status: 'fulfilled', value: ''},
I/
{ status: 'rejected', reason: 'X' },
//
{ status: 'fulfilled', value: '6'} ]
} catch (error) {
console.error(error)
}
})
  
  
Promise.any().
Promise.any ( [
new Promise((resolve, reject) => setTimeout(reject, 200, 'Third')),
new Promise((resolve, reject) => setTimeout( resolve, 1000, Second')),
new Promisel (resolve, reject) => setTimeout(resolve, 2000, 'First')),
])
.then(value => console.log("Result:${value}')) // Output:.'Result: Second'
.catch(error >> console.log(error))


//////////////////////////////////////////////////////////
3 Most Powerful JavaScript Promise Methods 🎅🎁
When working with promises in JavaScript, we have a lot of methods that can help us. In this post, we’re going to cover my 3 favorite methods. 🎉

🔥 𝗣𝗿𝗼𝗺𝗶𝘀𝗲.𝗮𝗹𝗹()
This method expects an array of promises (Iterable) and returns a single promise.
It will only resolve if all the promises passed have been resolved. If any promise in an array of promises fails, then it will reject

🔥 𝗣𝗿𝗼𝗺𝗶𝘀𝗲.𝗮𝗹𝗹𝗦𝗲𝘁𝘁𝗹𝗲𝗱()
Promise.allSettled() accepts an array of promises. It returns a new promise that will resolve if all the array promises are settled,
regardless of whether the promises are resolved or rejected. Upon resolving, it returns an array of objects. 
Each object has property “status” regardless of whether the promise was fulfilled or rejected,
and “value” returned when the promise is resolved or rejected.

🔥 𝗣𝗿𝗼𝗺𝗶𝘀𝗲.𝗿𝗮𝗰𝗲()
This method also accepts an array of promises. Promise.race() 
returns a Promise that settles as soon as one of the promises in the iterable argument settles.
A settled Promise is simply a promise that either has been resolved or rejected.

⚠️Note: ES2021 will introduce a Promise.any(), So be ready!
  
                                                           The 3 Most Powerful JavaScript Promise Methods 11
const promisel = new Promisel (resolve, reject) => resolve(' '))
const promise2 = new Promisel (resolve, reject) => reject('X'))
const promise3 = new Promise( (resolve, reject) => resolve('6'))
Promise.all()
(async () => {
try {
const result = await Promise.all([promisel, promise3])
console.log(result) // Output: ['', '6')
} catch (error) {
console.error('Error: ${error}')
// An exmple with promise2 rejected:
try {
const result = await Promise.all([promisel, promise2, promise3])
console.log(result)
} catch (error) {
console.error('Error: ${error}') // Output: . 'Error:
}
})0
Promise.allsettled().
(async () => {
try {
const res = await Promise.allsettled( [promisel, promise2, promise3])
console.log(res)
// Output: [ { status: 'fulfilled', value: ''},
I/
{ status: 'rejected', reason: 'X' },
//
{ status: 'fulfilled', value: '6'} ]
} catch (error) {
console.error(error)
}
})0
Promise.any().
Promise.any ( [
new Promise((resolve, reject) => setTimeout(reject, 200, 'Third')),
new Promise((resolve, reject) => setTimeout( resolve, 1000, Second')),
new Promisel (resolve, reject) => setTimeout(resolve, 2000, 'First')),
])
.then(value => console.log("Result:${value}')) // Output:.'Result: Second'
.catch(error >> console.log(error))
