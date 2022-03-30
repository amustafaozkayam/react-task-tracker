import "./App.css";
// import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";




const App = () => {


  return (
    <div className='container'>
      <Header />
      <Tasks></Tasks>
    </div>
  )
}

export default App
