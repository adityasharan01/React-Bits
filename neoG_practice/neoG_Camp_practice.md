```
practice questions for camp interview
As you might know by now that to get into levelOne you need to clear interviews.

Please worry about the interview only after you have filled the admissions form correctly.

what are practice questions?
As you have read in Interview Guide for beginners or Interview Guide for intermediate, you will have live coding round. These are few questions you can practive for the round and feel confident.

sample questions
Interviews are generally 15-20 minutes long only. Here's how it will go.

Introduction question

Give me your introduction and tell me why do you want to join neogcamp?

You answer should be in 1-2 minutes.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Sample Q1

Create a web app which would take two inputs. It would also have 4 buttons: +, -, x /. Based on the button clicked perform the operation on the two inputs. You can do this in React or vanillaJS based on your choice. Your time starts now.

See, you have 15 minutes to code this question. Questions are simple. We want to test whether:

a) You have done levelZero lectures properly. b) You can form logic like this and come up with a program.

All questions will be having one logic to implement it.

export default function App() {
  const [numA, setNumA] = useState();
  const [numB, setNumB] = useState();
  const [result, setResult] = useState();
  const handleA = () => {
    setResult(Number(numA) + Number(numB));
  };
  const handleB = () => {
    setResult(Number(numA) - Number(numB));
  };
  const handleC = () => {
    setResult(Number(numA) * Number(numB));
  };
  const handleD = () => {
    setResult(Number(numA) / Number(numB));
  };
  return (
    <div className="App">
      <div>
        <input
          type="number"
          value={numA}
          placeholder="Type the first number"
          onChange={(e) => {
            setNumA(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="number"
          value={numB}
          onChange={(e) => {
            setNumB(e.target.value);
          }}
          placeholder="Type the Second number"
        />
      </div>
      <p>
        {" "}
        <button onClick={handleA}> + </button>{" "}
      </p>
      <p>
        {" "}
        <button onClick={handleB}> - </button>{" "}
      </p>
      <p>
        {" "}
        <button onClick={handleC}> * </button>{" "}
      </p>
      <p>
        {" "}
        <button onClick={handleD}> / </button>{" "}
      </p>

      <p> Result is : {result} </p>
    </div>
  );
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Sample Q2

Create a web app where I can input a text. Now create two buttons + and -. On clicking + increase the fontSize by 2px and vice versa.

export default function App() {
  const [stringA, setStringA] = useState("");
  const handleA = () => {
    setSize(size + 1);
  };
  const handleB = () => {
    setSize(size - 1);
  };
  const [size, setSize] = useState(20);
  return (
    <div className="App">
      <div>
        <input
          type="text"
          value={stringA}
          placeholder="Type the Text"
          onChange={(e) => {
            setStringA(e.target.value);
          }}
        />
      </div>
      <p>
        <button onClick={handleA}> + </button>
      </p>
      <p>
        <button onClick={handleB}> - </button>
      </p>

      <p style={{ fontSize: `${size}px` }}>{stringA}</p>
    </div>
  );
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Sample Q3

Create a web app where I can input a text. Now, create three buttons h1, h2, h3. When I click on any of the button, the text should become h1, h2, or h3.

import { useState } from "react";

export default function App() {
  const [stringA, setStringA] = useState("");
  const [size, setSize] = useState(20);
  //Logic h1 h2 and h3 font size are 32px,24px,18.72,16px
  const handleA = () => {
    setSize(32);
  };
  const handleB = () => {
    setSize(24);
  };
  const handleC = () => {
    setSize(18.72);
  };

  return (
    <div className="App">
      <div>
        <input
          type="text"
          value={stringA}
          placeholder="Type the Text"
          onChange={(e) => {
            setStringA(e.target.value);
          }}
        />
      </div>
      <p>
        <button onClick={handleA}> h1 </button>
      </p>
      <p>
        <button onClick={handleB}> h2 </button>
      </p>
      <p>
        <button onClick={handleC}> h3 </button>
      </p>

      <p style={{ fontSize: `${size}px` }}>{stringA}</p>
    </div>
  );
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Sample Q4

Create a web app where I can input a text. Now, create three buttons: red, green, blue. Clicking on the button should change the text color.

export default function App() {
  const [stringA, setStringA] = useState("");
  const [color, setColor] = useState("black");
  //Logic h1 h2 and h3 font size are 32px,24px,18.72,16px
  const handleA = () => {
    setColor("red");
  };
  const handleB = () => {
    setColor("green");
  };
  const handleC = () => {
    setColor("blue");
  };

  return (
    <div className="App">
      <div>
        <input
          type="text"
          value={stringA}
          placeholder="Type the Text"
          onChange={(e) => {
            setStringA(e.target.value);
          }}
        />
      </div>
      <p>
        <button onClick={handleA}> red </button>
      </p>
      <p>
        <button onClick={handleB}> green </button>
      </p>
      <p>
        <button onClick={handleC}> blue </button>
      </p>

      <p style={{ color: `${color}` }}>{stringA}</p>
    </div>
  );
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Sample Q5

Create a CLI app which takes name, unit test marks, pre final marks, final marks of 5 students. And then print who has the highest marks. What if I ask you to print the average as well?

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Sample Q6

Create a web app with a button loded. Show a text loading... on a web app. However, hide it if I click on the button loaded.

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const visible = {
    display: "block"
  };
  const notvisible = {
    display: "none"
  };
  const handleChange = () => {
    setIsLoading((prev) => !prev);
  };
  return (
    <div className="App">
      <button onClick={handleChange}> Click Me </button>
      <p style={isLoading ? visible : notvisible}>Loading...!!</p>
    </div>
  );
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Sample Q7

Here's an API. Create a web app to call this API with your full name and print the response.
 This could be extended where we ask you to do something with the response. Like add a text, or capitalise etc.
 
 export default function App() {
  const [title, setTitle] = useState("");
  const [isCapital, setIsCapital] = useState(false);
  const capital = {
    textTransform: "capitalize"
  };
  const notcapital = {
    textTransform: "uppercase"
  };
  async function APIcall() {
    const output = await fetch("https://reqres.in/api/users");
    const result = await output.json();
    setTitle(result);
  }
  useEffect(() => {
    APIcall();
  }, []);
  const handleChange = () => {
    setIsCapital((prev) => !prev);
  };
  return (
    <div className="App">
      {title &&
        title.data.map((val, idx) => {
          return (
            <div key={idx} style={isCapital ? capital : notcapital}>
              {val.first_name}
            </div>
          );
        })}
      <button onClick={handleChange}> Capitalize </button>
    </div>
  );
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Sample Q8

Here' an API. It will give an error. Write a web app, call this API and read the error message. Show user the error message.

Sample Q9

Here's an API, it can give two errors. Either 404, or 401. If the error is 404, show the user 'page not found' and if the error is 401, show the user 'you are not logged in'.

Sample 10

Open your Github repo. Make a small change. And create a PR. Explain what you understand by Git, what's PR etc.

Sample Q11

Create a password checker web app. If password is lesser than 10 characters then show an error to user otherwise show success. Someone can ask to make the submit button disabled. Some can ask to make the input field green or red depending on input.

Sample Q12

Show me your portfolio. Okay, I like the button you have made. Can you re create the button without looking at source code? You're free to Google though.

Sample Q13

Create color variables in CSS. Two colors: primary and secondary. Now make your h1 of primary color, h2 of secondary color. Make two buttons, primary and secondary using the same color. Can you also set a font from Google Font?
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Sample Q14

Create two objects with name, age, and yuga as Ram, 25, Treta. Krishna, 31, Dwapar. Write a function which takes two objects and return the person with more age.
--->

let obj1={ name: "Ram", age:43}

let obj2={ name: "Shyam", age:31}

function compare(a,b) {
  if(a.age > b.age){
    return a.name;
  }
  return b.name;
}

console.log(compare(obj1,obj2));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Sample Q15

Create two objects with name, age, and power as Ram, 2500, Treta. Krishna, 2325, Dwapar Write a function which takes two objects and return the person with more power.
==>
let obj1={ name: "Ram", age:43 ,power:"Treta"}
let obj2={ name: "Shyam", age:31,power:"Dwapar"}

function compare(a,b) {
  let p=a.power.length;
  let q=b.power.length;
  if(p>q){
    return a.name;
  }
  return b.name;
}

console.log(compare(obj1,obj2));


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Sample Q16

Create two objects with name, age, and power as Ram, 2500, Treta. Krishna, 2325, Dwapar. Say if every character in name is worth 35 power points.

Write a function which takes two objects and return the person with more power based on their name and power both.
==>
let obj1={ name: "Ram", age:43 ,power:"Treta"}

let obj2={ name: "Shyam", age:31,power:"Dwapar"}

function compare(a,b) {
  let p=a.power.length;
  let q=b.power.length;
  if(p>q){
    return a.name;
  }
  return b.name;
}

console.log(compare(obj1,obj2));


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Sample Q17

Create a CLI app which would detect fake news. This app will take news as input and then source.

If source is Facebook or whatsapp then it will output user saying, "Don't believe things on FB and Whatsapp". Can you extend this to include telegram as well?

Note: You can now see how much you have learnt in levelZero! Nothing till here is outside what's being taught in levelZero.


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
also note
Extension questions will get you more marks. If you finish the first question fast and get an extension question and finish that too, you'll be marked much higher and will be considered for captaincy as well.

Questions will be variance of these or something simpler. Now, question is whether you can do these in 15 minutes. You'll be allowed to Google.

What we have seen as an issue is that some experienced programmers also couldn't do it in 15 minutes as they were over confident and didn't practise the syntax. That's why we are asking you to please practise.

Thank you, we hope you all practise well for the interviews. We really want you to succeed. Interviews are just to make sure that you are sincere and you have practised programming.

```
