import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddStudent = () => {
    const [data,getData] = useState(
        {
            "name":"",
            "rollNo":"",
            "admNo":"",
            "college":""
        }
    )
    const inputHandler = (event)=>{
        getData({...data,[event.target.name]:event.target.value})
    }
    const readValue = ()=>{
        console.log(data)
        axios.post("http://localhost:8080/add",data).then(
            (response)=>{
                if (response.data.status === "success") {
                    alert("Successfully Added")
                } else {
                    alert("Error")
                }
            }
        ).catch()
    }

  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">AdmissionNo</label>
                            <input type="text" className="form-control" name='rollNo' value={data.rollNo} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">RollNo</label>
                            <input type="text" className="form-control" name='admNo' value={data.admNo} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">College</label>
                            <textarea name="college" id="" className="form-control" value={data.college} onChange={inputHandler}></textarea>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValue}>Add Student</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddStudent