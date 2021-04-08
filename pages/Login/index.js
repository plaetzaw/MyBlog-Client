import React, { useState } from 'react'
import styled from 'styled-components'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const Title = styled.h1`
font-size: 24px;
text-align: center;
font-family: Rockwell;
`

  const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  background-color: teal;
  padding: 0;
  margin 0;
  min-height: 100vh;
  `

  const Form = styled.form`
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

  const FormLabel = styled.label`
color: ${props => props.invalidField ? '#FF6464' : '#ffffff'};
font-style: normal;
font-weight: bold;
font-size: 15px;
margin:0 .8em;
line-height: 18px;
display: flex;
align-items: center;
font-family: Helvetica Neu;
padding:1.6em 0 .2em 0;
`

  const FormInput = styled.input`
border-radius: 8px;
margin:0 .8em;
border: ${props => props.invalidField ? '3px solid #FF6464' : '3px solid #F3F3F3'};
padding:.8em .5em;
width: 30%;
`

  const LoginButton = styled.button`
width: 150px;
height: 50px;
text-align: center;
font-family: Rockwell;
border-radius: 8px;
margin: 2em 0 0 .8em;
`
  const onClick = async (e) => {
    e.preventDefault()
    console.log('hello')
  }

  return (
    <ContentBlock>
      <Title>Login</Title>
      <FormLabel>Username</FormLabel>
      <FormInput
        type='text'
        name='name'
        value={username}
        placeholder='Username'
        onChange={(e) => { setUsername(e.target.value) }}
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
