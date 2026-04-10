import React from 'react'

const Login = () => {
  return (
    <div>
        <h1>Login</h1>
            <div className='register-form'>
            <form>
                <div className='label-input'>
                    <label for="user">Username/Email:</label>
                    <input type="text" id="user" name="user" />
                </div>

                <div className='label-input'>
                    <label for="pass">Password:</label>
                    <input type="text" id="pass" user="pass"/>
                </div>
                <input id="submit" type="submit" value="Login" />
            </form>

            <div className='extra-register'>
            <a>Forgot password?</a>


            <a>Forgot email/username?</a>
            <a href="signup.html">Don't have an account?</a>
            </div>

            </div>
        </div>
  )
}

export default Login


