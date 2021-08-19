const memoizedAdd = (value) => {
    let cache = [];
    return (num) => {
        if(cache[num]){
            console.log("Fetching from cache...");
        }else{
            console.log("Calculating the value...");
            const result = num + value;
            cache[num] = result;   
        }
        return cache[num];
    }
}


const addTen = memoizedAdd(10);

const addTwenty = memoizedAdd(20);

// Both addTen and addTwenty have different cache references, one of each call to the memoizedAdd function.

console.log(addTen(5)) // calculates and returns 15
console.log(addTen(20)) // calculates and returns 30
console.log(addTen(5)) // fetches result from cache as we stored result for input 5 in cache

console.log(addTewenty(5)) // calculates and returns 25
console.log(addTewenty(20)) // calculates and returns 40
console.log(addTewenty(5)) // fetches result from cache as we stored result for input 5 in cache
