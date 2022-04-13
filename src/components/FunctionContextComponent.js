// IMPORTS
import React, { useContext } from 'react'
import { ThemeContext } from '../App'

// FUNCTIONAL COMPONENT
export default function FunctionContextComponent() {
// VANILLA JS SECTION
const darkTheme = useContext(ThemeContext)

const themeStyles = {
    backgroundColor: darkTheme ? '#333' : '#CCC',
    color: darkTheme ? '#CCC' : '#333',
    padding: '2rem',
    margin: '2rem'
}

// JSX SECTION
  return (
    <div style={themeStyles} >Function Theme</div>
  )
}
