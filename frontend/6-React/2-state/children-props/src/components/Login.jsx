import React from 'react'

const Login = () => {

  return (
    <form class="login-form">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required />
      </div>
    <button type="submit">Login</button>
    </form>
  )
}

export default Login;