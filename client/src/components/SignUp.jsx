import React from 'react';


var SignUp = () => {
  return (
    <div id="sign-up">
      Sign-Up:
      <form>
        <input type="text" name="firstname" placeholder="First Name" autoFocus/>
        <input type="text" name="lastname" placeholder="Last Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />

        <button type="submit" value="Submit">Sign-Up</button>
      </form>
    </div>
  )
}

export default SignUp;
