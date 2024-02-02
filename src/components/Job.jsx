import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import {importSvgs} from '../helpers'

function Job(props) {

   const{position,logo,postedAt,contract,company,location,logoBackground,id} =props.data
   
   const logoBg = {
    backgroundColor:logoBackground,
   }
   const [icon, setIcon] = useState('')
   useEffect(() => {
    importSvgs(logo, setIcon);
  }, [logo]);

    
  return (
    <Link to={`about/${id}`}>
       <div className="job"  >
         <div style={logoBg} className="logo">
             <img src={icon}
              alt=''/></div>
         <p className="time">{postedAt} &bull; {contract}</p>
         <h3 className="position">{position}</h3>
         <p className="company">{company}</p>
         <h4 className="location">{location}</h4>
     </div>
    </Link>
       
  )
}

export default Job