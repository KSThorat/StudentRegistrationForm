import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '../src/App.css'

export default function StudentRegistrationForm() {
 
  const [form,setForm] = useState({
    fullName : "",
    email : "",
    phone : "",
    Course : "",
    DOB : "",
    gender : "",
  });

  const [errors,setErrors] = useState({});

  const handleChange = (e) =>{
    setForm({
      ...form, 
      [e.target.name]:e.target.value
   });

    setErrors({
    ...errors,[e.target.name] : "",
  });
  };
 

  const validate = () => {
    let newErrors = {};

    if(!form.fullName.trim()){
      newErrors.fullName = "Full Name is required";
    }

    if(!form.email.trim()){
      newErrors.email = "Email is required";
    }else if(!/\S+@\S+\.\S+/.test(form.email)){
      newErrors.email = " Enter Valid email";
    }

    if(!form.phone.trim()){
      newErrors.phone = "Phone number is required";
    }else if(!/^[6-9]\d{9}$/.test(form.phone)){
      newErrors.phone = "Enter a valid 10-digit Number"
    }

    if(!form.Course){
      newErrors.Course = "Please select a course";
    }

    if(!form.DOB){
      newErrors.DOB = " Date of birth is required";
    }

    if(!form.gender){
      newErrors.gender = "Please select gender";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleSubmit = (e)=>{
    e.preventDefault();

    if(validate()){
      alert("Form Submitted!\n"+ JSON.stringify(form,null,2));
      console.log(form);
    }
  };

  return (
    <div 
  className="container d-flex justify-content-center align-items-start mt-5" 
  style={{ minHeight: "100vh" }}
>
  <div className="card shadow p-4" style={{ width: "450px" }}>

        <h2 className="text-center mb-4">
          Student Registration Form
        </h2>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label">Full Name : </label>
            <input 
              type="text" 
              name="fullName" 
              className="form-control" 
              placeholder="Enter full name "
              value={form.fullName} 
              onChange={handleChange} 
              />
              {errors.fullName && <small className="text-danger">{errors.fullName}</small>}
          </div>

          <div className="mb-3">
            <label className="form-label" >Email : </label>
            <input 
              type="email" 
              name="email" 
              className="form-control" 
              placeholder="Enter email  "
              value={form.email} 
              onChange={handleChange} 
            />
            {errors.email && <small className="text-danger">{errors.email}</small>}
          </div>

          <div className="mb-3">
            <label className="form-label"> Phone : </label>
            <input 
              type="text" 
              name="phone" 
              className="form-control" 
              placeholder="Enter Phone "
              value={form.phone} 
              onChange={handleChange} 
            />
            {errors.phone && <small className="text-danger">{errors.phone}</small>}
          </div>

           <div className="mb-3">
            <label className="form-label"> Course : </label>
            <select 
              name="Course" 
              className="form-select" 
              value={form.Course} 
              onChange={handleChange} 
              
            >
              <option value="">Select Course</option>
              <option value="React">React</option>
              <option value="Java">Java</option>
              <option value="MySQL">MySQL</option>
            </select>
            {errors.Course && <small className="text-danger">{errors.Course}</small>}
          </div>

          <div className="mb-3">
            <label className="form-label">Date of Birth : </label>
            <input 
              type="date" 
              name="DOB" 
              className="form-control" 
              placeholder="Enter year  "
              value={form.DOB} 
              onChange={handleChange} 
            />
            {errors.DOB && <small className="text-danger">{errors.DOB}</small>}
          </div>

          <div className="mb-3">
            <label className="form-label" >Gender : </label>
            <div>
              <input 
                type="radio" 
                name="gender" 
                value="Male" 
                onChange={handleChange} />
              <span>Male &nbsp;&nbsp;</span>
            
              <input 
                type="radio" 
                name="gender"  
                value="Female" 
                onChange={handleChange} />
              <span>Female</span>
            </div>
            {errors.gender && <small className="text-danger">{errors.gender}</small>}
          </div>
          
          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>

        </form>
      </div>
    </div>
  );
}
