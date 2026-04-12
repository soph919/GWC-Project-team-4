import React from 'react'

const Signup = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      <div className="login-page">
            
            <div className='register-form'>
            
            <form>
              <div className='label-input'>
                    <label for="email">Email:</label>
                    <input type="text" id="email" name="email" />
                </div>
                <div className='label-input'>
                    <label for="user">Username:</label>
                    <input type="text" id="user" name="user" />
                </div>

                <div className='label-input'>
                    <label for="pass">Password:</label>
                    <input type="text" id="pass" user="pass"/>
                </div>
                <div className='label-input'>
                    <label for="pass">Confirm Password:</label>
                    <input type="text" id="pass" user="pass"/>
                </div>
                <input id="submit" type="submit" value="Login" />
            </form>
            

            <div className='extra-register'>
            <a>Forgot password?</a>


            <a>Forgot email/username?</a>
            <a href="/login">Already have an account?</a>
            </div>
            </div>

            
            </div>
    </div>
  )
}

export default Signup


