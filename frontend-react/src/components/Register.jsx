import React, {useState} from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'


const Register = () => {
  const [username, setUserName] = useState('')
  const [email, setUserEmail] = useState('')
  const [password, setUserPassword] = useState('')
  const [errors, setErrors] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleRegistartion = async (e) =>{
    e.preventDefault()
    setLoading(true)
    const userData = {
      username, email, password
    }

    try{
        const response = await axios.post('http://127.0.0.1:8000/api/v1/register/', userData)
        console.log("response data = ", response.data)
        console.log("Registration succesful")
        setErrors({})
        setSuccess(true)
    }catch(error){
      setErrors(error.response.data)
      console.error("Registration error: ", error.response.data)
    }finally{
      setLoading(false)
    }
  }
  return (
    <>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 bg-light-dark p-5 rounded">
          <h3 className="text-light text-center mb-4">Create an Account</h3>
          <form onSubmit={handleRegistartion}>
            <div className="mb-3">
                <input type="text" className="form-control" placeholder='Username' value={username} onChange={(e)=>setUserName(e.target.value)}/>
                <small>{errors.username && <div className="text-danger">{errors.username}</div>}</small>
            </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder='Email' value={email} onChange={(e)=>setUserEmail(e.target.value)}/>
             </div>
              <div className="mb-3">
                <input type="password" className="form-control" placeholder='Set password' value={password} onChange={(e)=>setUserPassword(e.target.value)}/>
                <small>{errors.password && <div className="text-danger">{errors.password}</div>}</small>
              </div>

              {success && <div className='alert alert-success'>Registration Successful</div>}
              {loading ? (<button type="submit" className='btn btn-info d-block mx-auto' disabled> <FontAwesomeIcon icon={faSpinner} spin />Please wait...</button>)
              :
              (<button type="submit" className='btn btn-info d-block mx-auto'>Register</button>)}
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Register
