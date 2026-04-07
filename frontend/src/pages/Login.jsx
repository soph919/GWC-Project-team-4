import React from 'react'

const Login = () => {
  return (
    <div>
        <h1>Login</h1>

    <form>
        <label for="user">Username/Email:</label>
        <input type="text" id="user" name="user" />

        <label for="pass">Password:</label>
        <input type="text" id="pass" user="pass"/>

        <input type="submit" value="Login" />
    </form>

   
    <a>Forgot password?</a>


    <a>Forgot email/username?</a>
    <a href="signup.html">Don't have an account?</a>
        </div>
  )
}

export default Login


