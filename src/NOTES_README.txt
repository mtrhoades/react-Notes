// REACT = 

/*

Take five minutes for the following activity:
1.Briefly review the JavaScript from your first milestone project.
2.Write down three things that you remember being tedious or confusing when 
writing this code.

    - remembering all the built in functions(methods)
        - * build a notes app that reviews all the methods for js.

* Babel is a tool that enables us to transpile javascript code.
    - a js compiler

Compiling🧮 ---> takes human readable code in one language, like javascript and produces one or sevearal output files in another language. Often this refers to, turning code into machine-readable code. (ones and zeros \\ 10101011110001010101)

Transpiling🧮 --->  takes human-readable code, like javascript and turns in into differenct code of the same abstract level, still human-readable code but allows us to add new features to programming languages.


a webpack bundle: is a bunch of js files merged together. (import/export)

babel + webpack = react

JS MODULES:
    - multiple files made easy ^webpack

in node.js
    *require() = import

    * module.exports = export

in REACT 
*import { name } = import
     
    *export const = export

example: (export where it is defined)
    export const greet = () => {
        console.log('hello world')
    }
    export const name = "Suzy" ---> from index.js file
    import { name, greet } from "./index.js" ---> in another file

        console.log(name);
        greet();

*defaults are exported after they are defined or infront of function.


Front-end libraries:
*React is the most popular UI library/framwork.

REACT = virtual DOM            

Vue - makes declarative rendering easier to implement and easy to integrate into existing projects. still works with HTML, CSS, & JS within the framework.

Angular - used mostly for enterprises applications because of complexity. provides a robust set of tools for building apps in a specific way, includes declarative rendering.

Declarative Rendering:

    imperative rendering: focusing on how it is to be done.
        vs.
    declarative rendering: focusing on what is to be done.


* React uses declarative programming and declarative rendering
    - uses .map instead of for loops

documentation * https://reactjs.org/


npx create-react-app (name of project)


capitalize first letter when nameing components

components are basically functions 

attributes to properties (props)

DevTools

learn these concepts for react = components, props, state


rfc - boiler plate for starting component files.


capturing events:
    - onclick event
    - onChange (key presses)

react files format:
    -import section
    - functional component section
    - vanilla js section:
        - variables section
        - functions section
    - jsx section
    - exports section (optional or export before function name)


MPA (multi-page apps)

    vs.

SPA (single-page apps)
    ^ REACT


useState --->  is used to store data inside of a component
    a hook from react
    a hook is another piece of code to use in your code from the react node package manager (npm)
    
    
    question of the day:
    make a counter that increments and decrements.
    
    
    */
  
    import { useState } from "react";

    export default function App() {
        const [count, setCount] = useState(0);
    
        return (
            <div className='App'>
                <div>Hello</div>
                <div>{count}</div>
                <button onClick={() => setCount(count + 1)}>+</button>
                <button onClick={() => setCount(count + 1)}>-</button>
            </div>
        )
    }
    
    /* 
    
    useEffect - import with useState from react
    
    Dependency array for useEffect ---> controls when the useEffect function is fired:
        - useEffect(() => {}); ----> No dependency array, (runs on window load, and runs anytime any state changes)
        - useEffect(() => {}, []); -----> empty dependency array, onMount (runs only once on window load)
        - useEffect(() => {}, [data]); ----> value in the array (runs on window load and anytime that values state in the array changes)
        - useEffect(() => {}, [data, count]); ----> values in the array (runs on window load and anytime both values states in the array changes)
    
useEffect hook ----> performing a function each time it is rendered.
    - use cases:
        - fetching data (api)
        - reading from local storage
        - registering and deregistering event listeners
        - manually updating the DOM


*/
    let [data, setData] = useEffect({}) // set to an empty object because using fetch will respond back with a json object.

    useEffect(() => { // 1st argument 
        fetch('https://www.example.component')
        .then(response = response.json())
        .then(resData = setData(resData))
    }, []) // 2nd argument, dependency array for identifying a variables state that will change to trigger useEffect, or leave empty for it to happen anytime any state changes and on window load. (hence 'Dependency Array')
    
    
    /*
    
* by default useEffect will run on each render, but we can limit how often the useEffect fires.

    useEffect clean-up functions:
    - use case: key press events with addEventListener() but after the addEventListener function runs you must clean it up so it doesn't keep running the same key press event over and over, so you remove it once it happens first:
        - removeEventListener()

        * example below *

*/

// funtion for pressing the keys and adding the text
const handleUserKeyPress = (event) => {
    if (event.keyCode === 32 || (event.keyCode >= 65 && event.keyCode <= 57)) {
        setText(`${text}${event.key}`);
    }
}

// useEffect function for event that happens when keys are pressed and calls above function
useEffect (() => {
    window.addEventListener("keydown", handleUserKeyPress);

    return () => {
        window.removeEventListener("keydown", handleUserKeyPress);
    }
});

/*

useContext: a hook to avoid prop drilling, which is passing the same props to ALL of the children. 
    (App.js level 1 ---> to level 2 child component ---> to level 3 child component.... and so forth...)
        -UseContext allows to pass props(data) to the exact child component you need. (directly)
            - Contains a wrapper div with a value={some data}  
 


/*



    The component (REACT) lifecycle:
    
    Mount
    
    Update
    
    Cleanup - return an anonymous function
        - unmounts the intitial mount
    
    
    Interview Questions of the Day
    Why is there a need for using keys in Lists (or when the map method is used)?
    
    Keys are very important in lists for the following reasons:
    A key is a unique identifier and it is used to identify which items have changed, been updated or deleted from the lists
    It also helps to determine which components need to be re-rendered instead of re-rendering all the components every time. Therefore, it increases performance, as only the updated components are re-rendered
    
    
    Module 4:
    
    React Dataflow
    
    You are A+ Full React Mastery up to this point in the class if you can do the following:
    Make a React Project that:
        Has multiple components
        Passes down info via props
        Uses an useState hook
        Uses an useEffect for fetching data from an API
        Has an useEffect with clean-up functions for inputting data via a keypress
        Passes down state via props that can update the state via the child component
        Has an useContext
        BONUS:  Form Submission and e.preventDefault()
    
    
    Module 5:
    
    
    
    * props is handled outside the component but gets passed through the component, where as useState is handled inside the component to start with.
    
    * useState is for updating data, and re-rendering it to the screen.
    
    
    
    useRef hook:
        - used to grab data from the DOM and use it
        - access DOM elements like document.querySelector in vanilla js.
        - use to gather previous states
    
    
    controlled components (keeping track of the state, data is stored in the DOM)
        vs.
    uncontrolled components 
    
    
    
Module 6:

react bootstrap - styling library for react

Module 7: 

styled components
    installing:
        - npm i styled-components
or      - npm i --save styled-components

&& import:
    - import styled from "styled-componenets";
    - use backticks ``
    example: portfolio file in my-sites folder.


Tailwind and material UI
    - styling libraries for react


******************************** USE TAILWIND!! ****************************************************************
import it and than use pre-determined classes to html attributes;


Suspense API ---> waiting for content to load and showcasing that through loading gifs. (spinner)

    - import from 'react'
    - <Suspense fallback={<Spinner />}>
    - react lazy-loading ---> allows you to load components lazily to allow for other critical items to render first.
        - React.lazy(() => import('./OtherComponent'));

    
Module 8:

    questions to ask the interviewer when they ask do you have any questions for them?
       - Is there anything else that we can talk about that would help your decision?
       - What do you like about working here?
       - As a junior developer how long should it be before I contribute to the codebase? Is there a training period for a while, or would I be contributing right away?
       - How satisfied have other people in this role been throughout their career here with the company?
       - How is the company ran daily?
       - What have past employees done to succeed in this position?
       - Where have past employees really struggle in this position?
       - What do you NOT like about the company?
       - What team member development does the company offer? Educational or team buillding.
       - How is the company good with employee retention?
       - How would you judge your work life balance?
       - What do you expect your employees to do to be successful in this position?
       - Is there the ability to make lateral moves? Like if I take a front end role, can I move to a backend role down the road?
       - Is there any remote work or is it all in the office?
       - What kind of project management are you running? Agile methodologies? Waterfall?
       - If I were to move onto the technical assessment, what does the assessment consist of?
       - Would you want me to send a GitHub link back to you or how does that work?
       - If I wanted to try out the backend assessment, would that be an option?


Foundations of testing and performance:
    - Test-Drivien Development (TDD) ---> process of writing tests before writing the code.
        - Types of tests:
            - Unit tests
            - Integration tests
            - Functional tests
            - End - End tests
            - Performance tests ---> Lighthouse;

    - Testing in react:
        - Rendering component trees
        - Running a complete app
    
        Jest & react testing library:
            - use test() method
            - npm run test

            - describe() method


    Mocking network events


1. Explain the use cases for, and differences between — bind, apply and call. 
    - 1) Call invokes the function and allows you to pass in arguments one by one. 2) Apply invokes the function and allows you to pass in arguments as an array. 3) Bind returns a new function, allowing you to pass in a this array and any number of arguments. 
2. Explain event delegation and why it is useful. 
    
3. What is the event loop? 
4. How does hoisting work in JavaScript? 



Module 9: REDUX

- You usually use redux with react, but you can use it on its own with other languages like javascript.
- With redux you gain access to global state: state that can be accessed from any component.
- Use Cases:
    - Large number of state variables needed across the application.
    - The application state changes often.
    - Application is built on a large codebase with many contributors.

- Store: core of a redux application


Redux concepts:
    - initial state
    - action - updates the initial state
    - reducer - function for a list of actions to update state
    - store - provides initial state and reducer
    - subscriptions
    - dispatching actions


React-Redux:
    - Provider
    - Selector 
    - Slice
    - Thunk

    
Everything learned so far in REACT/REDUX class:
    - componenets
    - props
    - state
    - useState
    - useEffect
    - useRef
    - useContext 
    - bootstrap 
    - Redux
    - testing 


    */