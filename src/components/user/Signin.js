import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Layout from "../core/Layout"
// import '../../styles.css'
const Signin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleChange = (e) => {
    let target = e.target;
    let value = target.value;
    let name = target.name;

    if (name === 'username'){
      setUsername(value)
    }

    if (name === 'password'){
      setPassword(value)
    }
    
  }

  const handleSubmit = (e) =>{
    e.preventDefault()

    console.log(username, password)
  }

  return (
    <div className='signin'>
      <Layout title="Signin" description="Sign in to diet tracker app"></Layout>
      <form onSubmit={handleSubmit}>
        <div className='input-group mb-3 input-group-lg'>
          <input
            id='username'
            name='username'
            type='text'
            className='form-control'
            aria-label='Default'
            aria-describedby='inputGroup-sizing-default'
            value={username}
            onChange={handleChange}
            placeholder="Username"
            required
          />
        </div>
        <div className='input-group mb-3 input-group-lg'>
          <input
            id='password'
            name='password'
            type='text'
            className='form-control'
            aria-label='Default'
            aria-describedby='inputGroup-sizing-default'
            value={password}
            onChange={handleChange}
            placeholder='Password'
            required
          />
        </div>
        <div className='input-group mb-3 input-group-lg'>
          <button className='btn login-btn' type="submit">
            Log in
          </button>
        </div>
      </form>
      <hr />
      <div className="signin-signup-btn"><Link to="/signup">Create new account</Link></div>
    </div>
  )
}

export default Signin
