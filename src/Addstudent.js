
import axios from 'axios'
import {useFormik } from 'formik'
import React, { useState } from 'react'

const Addstudent = () => {
  const [data,setdata]=useState([])
  const formik=useFormik({
    initialValues:{
      Name:"",
      email:"",
      country:"",
      state:"",

    },
    validate:(values)=>{
const error={}

if(!values.Name){
  error.Name="please enter your Name"

}
if(values.Name && (values.Name.length<=3 || values.Name.length>=15)){

  error.Name="please enter you name between 4 to 15"
}
if(!values.email){
  error.email="please enter your Email"

}
if(values.email &&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
  error.email="please enter valid your Email"
}
if(!values.country){
  error.country="please enter your country"

}
if(!values.state){
  error.state="please enter your state"

}
return error
    },
 onSubmit:async(values)=>{
try {
 const student= await axios.post("https://634d8895f5d2cc648ea89ba8.mockapi.io/student",values)
 console.log(student)
 formik.resetForm()
} catch (error) {
  alert("something error")
}
 }
})
// use api for select the country




  
  return (
   <div className='container' style={{display:"flex",flexFlow:"column",justifyContent:"center",width:"600px",height:"600px",background:"wheat"}}>
    <form onSubmit={formik.handleSubmit}>

    {/* input name */}
    <div className='row'>
      <div className='col-lg-6'style={{display:"flex",justifyContent:"center",color:"white", flexFlow:"column"}}>
        <div style={{fontSize:"20px",marginTop:"20px"}}>Name:</div>
        <input type="text" style={{borderRadius:"10px",margin:"20px",width:"360px"}} 
        name="Name"
        value={formik.values.Name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
       className={`${formik.errors.Name ?'input':''}${formik.touched.Name && !formik.errors.Name?'input1':""}`}
        
        />
      
        {
          formik.errors.Name ? <div style={{color:"red"}}>{formik.errors.Name}</div>:null
        }
      </div>

      {/* input email */}

      <div className='col-lg-12'style={{display:"flex",justifyContent:"center",color:"white",flexFlow:"column"}}>
      <div style={{fontSize:"20px",marginTop:"20px"}}>Email:</div>
        <input type="text" style={{borderRadius:"10px",margin:"20px",width:"360px"}}
         name="email"
         value={formik.values.email}
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         className={`${formik.errors.email ?'input':''}${formik.touched.email && !formik.errors.email?'input1':""}`}/>
          {
          formik.errors.Name ? <div style={{color:"red"}}>{formik.errors.email}</div>:null
        }
      </div>
    </div>

{/* input country */}


    <div className='row'>
      <div className='col-lg-12'style={{display:"flex",justifyContent:"center",color:"white",flexFlow:"column"}}>
        <div style={{fontSize:"20px",marginTop:"20px"}}>Country:</div>
        <select style={{borderRadius:"10px",margin:"20px",width:"360px"}} name="country"
        value={formik.values.country}
        onChange={formik.handleChange}
        >
          <option >--select your country--</option>
          <option>india</option>
          <option>united state</option>
          <option>china</option>
          
        </select>
        {
          formik.errors.country ? <div style={{color:"red"}}>{formik.errors.country}</div>:null
        }
        
      </div>

{/* input state */}

      <div className='col-lg-12'style={{display:"flex",justifyContent:"center",color:"white",flexFlow:"column"}}>
      <div style={{fontSize:"20px",marginTop:"20px"}}>State:</div>
        <select type="text" style={{borderRadius:"10px",margin:"20px",width:"360px"}}
         name="state"
         value={formik.values.state}
         onChange={formik.handleChange}>
          <option >--select your country--</option>
          <option>tamil nadu</option>
          <option>kerala</option>
          <option>karnataka</option>
         </select>
         {
          formik.errors.state ? <div style={{color:"red"}}>{formik.errors.state}</div>:null
        }
      </div>
    </div>
    <div className='col-lg-6'><button type='submit' className='btn btn-primary'>submit</button></div>
    </form>
    
   </div>
  )
}

export default Addstudent