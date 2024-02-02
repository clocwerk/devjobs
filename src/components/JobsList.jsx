import React, {useState,useMemo } from 'react'
import Job from './Job'
import Filter from './Filter'
import {getJobs} from '../fakeApi'
import {filterJobs} from '../helpers'

function JobsList() {
  
  const data = getJobs();
  const [filter,setFilter]= useState({global:'',location:'',time:''})
  const filteredJobs = useMemo(() => {
      return filterJobs(data, filter);
      }, [filter,data]);
   
  return (
    <div className='jobs-sec '>
      
        <Filter filter={filter} setFilter={setFilter} />
          
          <div className='jobs container' >
        {filteredJobs.length ? 
        filteredJobs.map(d=>
                {
                    return <Job key={d.id} data={d}/>
                }) 
                :
             <h2 className='jobs'>no jobs</h2>   
        }
    </div>
    </div>
   
  )
}

export default JobsList