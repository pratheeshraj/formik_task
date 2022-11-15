import React from 'react'
import"../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';


const Table = () => {
  const [table,usetable]=useState([])
useEffect(()=>{

const TableData=async()=>{

  try {
   const data= await axios.get("https://634d8895f5d2cc648ea89ba8.mockapi.io/student")
    usetable(data.data)
    console.log(data)
   
  } catch (error) {
    alert("something went wrong")
  }
}
TableData()



},[])
const Deletedata=async(id)=>{
  try {
    await axios.delete(`https://634d8895f5d2cc648ea89ba8.mockapi.io/student/${id}`)

    const index=table.findIndex(p=>p.id==id)
    table.splice(index,1)
usetable([...table])
  } catch (error) {
    
  }
  }
const edit=(id)=>{

}

const view=(id)=>{

}

  return (
    <>
    
    <div className='countainer'>
    <div className='button'>
      <Link to={"/add_student"} className="Link">Add Student</Link>
    </div>
      <table>
        
        <tr>
          <th>name</th>
          <th>Email</th>
          <th>country</th>
          <th>State</th>
          <th>Action</th>
        </tr>
       {
        table.map((table)=>{
        return   <tr>
        <td>{table.Name}</td>
        <td>{table.email}</td>
        <td>{table.country}</td>
        <td>{table.state}</td>
        <td><Link to={`/view/${table.id}`} onClick={()=>view(table.id)} className='btn btn-primary'>view</Link>
        <Link to={`/edit/${table.id}`} className='btn btn-primary' onClick={()=>edit(table.id)}>Edit</Link>
        <button onClick={()=>Deletedata(table.id)}  className='btn btn-danger'>Delete</button></td>
      
        
      </tr>
        })
       }
         <tr>
          <th>name</th>
          <th>Email</th>
          <th>country</th>
          <th>State</th>
          <th>Action</th>
        </tr>
      </table>
    </div>


</>
  )
}

export default Table