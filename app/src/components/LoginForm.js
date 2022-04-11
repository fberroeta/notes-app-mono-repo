import React  from 'react';
import Togglable from './Togglable';
import PropTypes from 'prop-types'; 

//para tener un valor por defecto de una funcion 
const NO_OP = () => {};

const LoginForm = ({username, password, handleSubmit = NO_OP, handleUsernameChange, handlePasswordChange}) => {

  return ( 
    <Togglable buttonLabel='Show Login'>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              value={username}
              name="Username"
              placeholder='Username'
              onChange={handleUsernameChange}
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              name="Password"
              placeholder="Password"
              onChange={handlePasswordChange}
            />
          </div>
          <button id='form-login-button'>Login</button>
        </form>

      </div>
    </Togglable>		
		
  );
};

LoginForm.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleUsernameChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
};
export default LoginForm;