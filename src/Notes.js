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
    
        - useEffect(() => {}); ----> No dependency array
        - useEffect(() => {}, []); -----> empty dependency array
        - useEffect(() => {}, [data]); ----> value in the array
        - useEffect(() => {}, [data, count]); ----> values in the array
    
useEffect hook ----> performing a function each time it is rendered.
    - use cases:
        - fetching data (api)
        - reading from local storage
        - registering and deregistering event listeners
        - manually updating the DOM

Dependency array for useEffect ---> controls when the useEffect function is fired.

*/
    let [data, setData] = useEffect({}) // set to an empty object because using fetch will respond back with a json object.

    useEffect(() => { // 1st argument 
        fetch('https://www.example.component')
        .then(response = response.json())
        .then(resData = setData(resData))
    }, []) // 2nd argument, dependency array for identifying a variable that will change to trigger useEffect, or leave empty for it to happen without having an infinite loop, which would be without it at all. (hence 'Dependency Array')


/*


* by default useEffect will run on each render, but we can limit how often the useEffect fires.


    The component lifecycle:
    
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
    
    
    