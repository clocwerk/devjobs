import React,{useState} from 'react'
import JobsList from '../components/JobsList';
import Header from '../components/Header';

function Jobs() {
    const [darkMode,setDarkMode]= useState(true);
    return (
      <div className="App" data-theme={darkMode ? "dark" : "light"}>
       <Header isChecked={darkMode} handleChange={()=>setDarkMode(!darkMode) }/>
       <JobsList />
      </div>
    );
}

export default Jobs