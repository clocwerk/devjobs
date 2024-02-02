import React,{useState,useEffect} from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom';
import { getJobById } from "../fakeApi";
import {importSvgs} from '../helpers'

function About() {
 
  
  const { id } = useParams();  
  const job = getJobById(id);    
  const {position,logo,postedAt,contract,company,location,logoBackground,description,requirements={},role=[],website,apply} = job || {};
  
  const [darkMode,setDarkMode]= useState(true);

  const logoBg = {
    backgroundColor:logoBackground,
   }
   const [icon, setIcon] = useState('')
   useEffect(() => {
    importSvgs(logo, setIcon);

    
  }, [logo]);

        
  return (
    <div className='about' data-theme={darkMode ? "dark" : "light"}>
     <Header isChecked={darkMode} handleChange={()=>setDarkMode(!darkMode) }/>
       <div className='about-section'>
      <div className='container'>
      <div className='company'>
        <div className='company-name'>
        <div style={logoBg} className="logo">
                <img src={icon}
                 alt=''/></div>
            <h2>{company}</h2> 
        </div>
        <div className='button'>
        <a href={website} target="_blank" rel="noopener noreferrer">
        Company Site     
        </a>
        </div>
      </div>
       <div className='info'>
       <div className='main-info'>
        <div className='main-info-container' >
         <p className="time">{postedAt} &bull; {contract}</p>
         <h2 className="position">{position}</h2>
        <h4 className="location">{location}</h4>
        </div>
        <div className='button'>
        <a href={apply} target="_blank" rel="noopener noreferrer">
        Apply Now
        </a>
        </div>
        </div>
        <p  className='description'>{description}</p>
        <h3 className='requirements'  >Requirements</h3>
        <p className='requirements-text'>{requirements.content}</p>
        <ul className='requirements-list'>
          {requirements.items.map((item, index) => (
          <li className='list-item' key={index}>{item}</li>
        ))}
          </ul>
        <h3 className='role'>What You Will Do</h3>
        <p className='role-text'>{role.content}</p>
        <ol className='role-list'>
        {role.items.map((item, index) => (
          <li className='list-item' key={index}>{item}</li>
        ))}
        </ol>
       </div>
       </div>
      </div> 
      <div className='footer'>
      <div className='footer-info container'>
        <div className='footer-company'>
          <h3>{position}</h3>
          <p>So Digital Inc.</p>
        </div>
        <div className='button'>
        <a href={apply} target="_blank" rel="noopener noreferrer">
        Apply Now
        </a>
        </div>
      </div>
      </div>
    </div>
   
  )
}

export default About