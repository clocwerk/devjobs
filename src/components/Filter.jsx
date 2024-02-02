import React from 'react'
import loc from "../assets/desktop/icon-location.svg"
import srch from '../assets/desktop/icon-search.svg'
import filt from '../assets/mobile/icon-filter.svg'

function Filter({filter,setFilter}) {
    
  return (
    <div className='filter container'>
        <span className='filter-all'>
            <img src={srch} alt="" />
            <input className='filter-input' type="text" placeholder='Filter all…' value ={filter.global} onChange={e=> setFilter({...filter, global : e.target.value} )}/>
        </span>
        <span className='filter-location'>
        <img src={loc} alt="" />
        <input className='filter-input' type="text" placeholder='Filter by location…' value ={filter.location} onChange={e=> setFilter({...filter, location : e.target.value} )}/>
        </span>
        <span className='filter-time'>
        <input className='checkbox' type="checkbox" checked ={filter.time} onChange={() => setFilter({ ...filter, time: !filter.time })} />
            <span>Full Time Only</span>
            
        </span>
        <span className='filter-mobile'>
          <img src={filt} alt="" />
        </span>
    </div>
  )
}

export default Filter