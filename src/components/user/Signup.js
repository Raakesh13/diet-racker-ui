import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Layout from '../core/Layout'
import Axios from 'axios'
import {API} from '../../config'


const Signup = () => {

  const [values, setValues] = useState({
    firstName: 'Raakesh',
    lastName: 'Das',
    username: 'Raakesh',
    age: 21,
    emailAddress: 'raakesh.das13@gmail.com',
    password: 'password@123',
    confirmPassword: 'password@123',
    height: 168,
    weight: 74,
    dailyCalorieCount: 2100
  })

  const handleChange = (event) =>{
      setValues({...values, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) =>{
      event.preventDefault()

      if (typeof values.password !== "undefined" && typeof values.confirmPassword !== "undefined") {
        if (values.password !== values.confirmPassword) {
          alert('Passwords do not match')
          return
        }
    }

      console.log(values)

    fetch(`http://localhost:8000/users`,{
      method:"POST",
      headers:{
        Accept: "application/json",
        "Content-Type":"application/json"
      },
      body: JSON.stringify(values)
    }).then((response)=>{
      return response.json()
    }).catch((error)=>{
      console.log(error)
    })
  }


  return (
    <div className='signup'>
      <Layout title="Signup" description="Sign up to diet tracker app"></Layout>
      <form className='signup-form' onSubmit={handleSubmit}>
        <div className='input-group mb-3'>
          {/* <div className='input-group mb-3'> */}
          <div className='flex-container'>
            <input
              type='text'
              className='form-control'
              aria-label='Default'
              aria-describedby='inputGroup-sizing-default'
              placeholder='First name'
              value={values.firstName}
              name='firstName'
              onChange={handleChange}
              required
            />
            <input
              type='text'
              className='form-control'
              aria-label='Default'
              aria-describedby='inputGroup-sizing-default'
              placeholder='Last name'
              value={values.lastName}
              name='lastName'
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className='input-group mb-3'>
          <div className='flex-container'>
            <input
              type='text'
              className='form-control'
              aria-label='Default'
              aria-describedby='inputGroup-sizing-default'
              placeholder='Username'
              value={values.username}
              name='username'
              onChange={handleChange}
              required
            />
            <input
              type='number'
              className='form-control age'
              aria-label='Default'
              aria-describedby='inputGroup-sizing-default'
              placeholder='age'
              value={values.age}
              name='age'
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            aria-label='Default'
            aria-describedby='inputGroup-sizing-default'
            placeholder='Email address'
            value={values.emailAddress}
              name='emailAddress'
            onChange={handleChange}
            required
          />
        </div>
        <div className='input-group mb-3'>
          <input
            type='password'
            className='form-control'
            aria-label='Default'
            aria-describedby='inputGroup-sizing-default'
            placeholder='Password'
            value={values.password}
              name='password'
            onChange={handleChange}
            required
          />
        </div>
        <div className='input-group mb-3'>
          <input
            type='password'
            className='form-control'
            aria-label='Default'
            aria-describedby='inputGroup-sizing-default'
            placeholder='Confirm password'
            value={values.confirmPassword}
              name='confirmPassword'
            onChange={handleChange}
            required
          />
        </div>

        <div className='input-group mb-3'>
          <div className='flex-container'>
            <input
              type='number'
              className='form-control'
              aria-label='Default'
              aria-describedby='inputGroup-sizing-default'
              placeholder='height'
              value={values.height}
              name='height'
              onChange={handleChange}
            />

            <input
              type='number'
              className='form-control'
              aria-label='Default'
              aria-describedby='inputGroup-sizing-default'
              placeholder='weight'
              value={values.weight}
              name='weight'
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='input-group mb-3'>
          <input
            type='number'
            className='form-control'
            aria-label='Default'
            aria-describedby='inputGroup-sizing-default'
            placeholder='Daily calorie count'
            value={values.dailyCalorieCount}
              name='dailyCalorieCount'
            onChange={handleChange}
          />
        </div>
        <div className='input-group mb-3'>
          <button className='btn login-btn' type='submit'>
            Create account
          </button>
        </div>
      </form>
      <hr/>
      <p className="ahan">Already have an account?</p>
      <div className="signin-signup-btn"><Link to="/signin">Signin</Link></div>

    </div>
  )
}

export default Signup
