import React from 'react'
import Button  from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './login.css';
import { useState} from 'react'
import {login} from '../../api/api'
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({username: '', password: ''})

  return (
    <div className='container'>
      <div className='input-wrapper'>
        <TextField id="standard-basic" label="Usuario o Correo electronico" variant="outlined" onChange={e => setCredentials({...credentials, username: e.target.value})}/>
        <TextField id="standard-basic" label="Contrasena" variant="outlined" onChange={e => setCredentials({...credentials, password: e.target.value})}/>
      </div>
        <div className='btn-wrapper'>
          <Button variant="contained" onClick={() => login(credentials)}>Iniciar sesion</Button>
          <Button variant="text" onClick={() => navigate('/signin')}>Registrarse</Button>
        </div>
    </div>
  )
}
