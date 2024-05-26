import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../assets/logo.svg';
import axios from 'axios';
import { loginRoute } from '../utils/APIRoutes';
const Login = () => {
   const navigate = useNavigate();
   const [passValid, setPassValid] = useState(true);
   const [value, setValues] = useState({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
   });
   useEffect(() => {
      if (localStorage.getItem('chat-app-user')) {
         navigate('/');
      }
   }, []);

   const handleSubmit = async (e) => {
      e.preventDefault();
      console.log('Validation', loginRoute);
      const { username, password } = value;
      const { data } = await axios.post(loginRoute, {
         username,
         password,
      });
      if (data.status === false) {
         setPassValid(false);
         return;
      }
      if (data.status === true) {
         localStorage.setItem('chat-app-user', JSON.stringify(data.user));
      }
      navigate('/');
   };
   const handleChange = (e) => {
      setValues({ ...value, [e.target.name]: e.target.value });
      setPassValid(true);
   };
   return (
      <FormContainer>
         <form onSubmit={(e) => handleSubmit(e)}>
            <div className="brand">
               <img src={Logo} alt="Logo" />
               <h1> HALo</h1>
            </div>
            <input
               type="text"
               placeholder="Username"
               name="username"
               onChange={(e) => handleChange(e)}
               min="3"
            ></input>
            <input
               type="password"
               placeholder="Password"
               name="password"
               onChange={(e) => handleChange(e)}
            />
            {!passValid && <h4 style={{ color: 'red' }}> Password is incorrect! </h4>}
            <button type="submit"> Login</button>
            <span>
               <Link to="/register">Create new Account</Link>
            </span>
         </form>
      </FormContainer>
   );
};

const FormContainer = styled.div`
   height: 100vh;
   width: 100vw;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   gap: 1rem;
   background-color: #131324;
   .brand {
      display: flex;
      align-items: center;
      justify-content: center;
      h1 {
         color: white;
         text-transform: uppercase;
      }
      img {
         height: 4rem;
      }
   }
   form {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      background-color: #00000076;
      border-radius: 2rem;
      padding: 3rem 5rem;
      input {
         background-color: transparent;
         padding: 1rem;
         border: 0.1rem solid #4e0eff;
         border-radius: 0.4rem;
         color: white;
         width: 100%;
         font-size: 1rem;
         &:focus {
            border: 0.1rem solid #997af0;
            outline: none;
         }
      }

      button {
         padding: 0.6rem 1rem;
         width: 100%;
         background-color: #997afa;
         border: none;
         cursor: pointer;
         border-radius: 0.4rem;
         font-weight: bold;
         &:hover {
            background-color: #997aaa;
         }
      }
      span {
         color: white;
         a {
            color: #4e0eff;
            text-decoration: none;
            font-weight: bold;
         }
      }
   }
`;

export default Login;
