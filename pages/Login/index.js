import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

// Molecules
import FormInput from '../components/molecules/FormInput'
import FormLabel from '../components/molecules/FormLabel'
import LoginButton from '../components/molecules/ActionButton'

const Title = styled.h1`
font-size: 30px;
text-align: center;
font-family: Rockwell;
`

const ContentBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-basis: 100%;
  background-color: #057CE5;
  // background-color: ${props => props.Azure};
  padding: 0;
  margin 0;
  min-height: 100vh;
  `

const Form = styled.form`
  // display: flex;
  flex: 0 1;
  flex-direction: column;
  background-color: #28292B;
  height: 350px;
  margin-right: 35px;
  margin-left: 35px;
  margin-top: 35px;
  // border: 1px dashed #28292A;
  box-sizing: border-box;
  border-radius: 8px;
  `

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onClick = async (e) => {
    e.preventDefault()
    console.log('Starting Post')
    const LoginObj = {
      email: email,
      password: password
    }
    console.log(LoginObj)
    axios.post('http://localhost:8080/login', LoginObj)
    console.log('Made the post')
  }

  return (
    <ContentBlock>
      <Title>Login</Title>
      <FormLabel>email</FormLabel>
      <FormInput
        type='text'
        name='name'
        value={email}
        placeholder='email'
        onChange={(e) => { setEmail(e.target.value) }}
      />
      <FormLabel>Password</FormLabel>

      <FormInput
        type='password'
        name='name'
        value={password}
        placeholder='Password'
        onChange={(e) => { setPassword(e.target.value) }}
      />
      <LoginButton
        onClick={onClick}
      >
        Login
      </LoginButton>
      <Form />
    </ContentBlock>

  )
}

export default Login
