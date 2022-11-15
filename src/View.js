import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



const View = () => {
  const params=useParams()
  const [data,setdata]=useState([])
useEffect(()=>{

try {
  const view=async()=>{
 const student= await axios.get(`https://634d8895f5d2cc648ea89ba8.mockapi.io/student/${params.id}`)
  console.log(student.data.name)
  setdata(student.data)
  }
  view()
} catch (error) {
  
}

},[])

  return (
<div  className="container" style={{display:"flex",justifyContent:"center",width:"700px",height:"700px" ,flexFlow:"column"}}>
  <div className='row'>
    <div className='col-md-6 '  style={{display:"flex",flexFlow:"row" }}>
      <div style={{margin:"10px",fontSize:"20px"}}>Name:{data.Name}</div>
      
    </div>
    <div className='col-md-6 '  style={{display:"flex",flexFlow:"row" }}>
      <div style={{margin:"10px",fontSize:"20px"}}>Email:{data.email}</div>
      
    </div>
  </div>
  <div className='row'>
    <div className='col-md-6 '  style={{display:"flex",flexFlow:"row" }}>
      <div style={{margin:"10px",fontSize:"20px"}}>Country:{data.country}</div>
      
    </div>
    <div className='col-md-6 '  style={{display:"flex",flexFlow:"row" }}>
      <div style={{margin:"10px",fontSize:"20px"}}>State:{data.state}</div>
      
    </div>
  </div>
</div>
  )
}

export default View