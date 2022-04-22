// *** useContext example with FunctionalContextComponent.js ****

// // IMPORTS
// import React, { useState } from 'react';
// import FunctionContextComponent from './components/FunctionContextComponent';

// // CREATING CONTEXT
// export const ThemeContext = React.createContext();

// // FUNCTIONAL COMPONENT
// export default function App() {
//   // VANILLA JS SECTION
//   const [ darkTheme, setDarkTheme] = useState(false);

//   // functions
//   const toggleTheme = () => {
//     setDarkTheme(prevDarkTheme => !prevDarkTheme)
//   }

//   // JSX SECTION
//   return (
//     <>
//       {/* Everything wrapped inside of ThemeContext.Provider gets the value={darkTheme} passed down to any of the children below. */}
//       <ThemeContext.Provider value={darkTheme}>
//         <button onClick={toggleTheme}>Toggle Theme</button>
//         <FunctionContextComponent />
//       </ThemeContext.Provider>
//     </>
//   );
// }



// **** useRef example ****

// // IMPORTS
// import { render } from '@testing-library/react';
// import React, { useState, useEffect, useRef } from 'react';

// // FUNCTIONAL COMPONENTS
// export default function App () {

//   // VANILLA JS SECTION
//   const [name, setName] = useState('');
//   const prevName = useRef('')

//   //functions
//   useEffect (() => {
//     prevName.current = name
//   }, [name])


//   // JSX SECTION
//   return (
//     <>
//       <input value={name} onChange={e => setName(e.target.value)} />
//       <div>My name is {name} and it used to be {prevName.current}</div>
//     </>
//   )
// }



// Redux example with state;
import { createStore } from "redux";

export default function App (){}

const initialState = {
  counter: 0
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "increment":
      return { counter: state.counter + 1 };
      case "decrement":
        return { counter: state.counter - 1 };
        case "add":
          return { counter: state.counter + action.payload }
        default:
          return state;
  }
}
// reducer();

const increment = {
  type: "increment"
}

const decrement = {
  type: "decrement"
}

const add = {
  type: "add",
  payload: 5
}

const store = createStore(reducer)
store.getState()

// store.dispatch(increment)
// store.dispatch(decrement)

store.dispatch(add)

console.log(store.getState())