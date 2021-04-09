import styled from 'styled-components'

const FormInput = styled.input`
// display: flex;
// justify-content: center;
// align-items: center;
border-radius: 8px;
margin:0 .8em;
border: ${props => props.invalidField ? '3px solid #FF6464' : '3px solid #F3F3F3'};
padding:.8em .5em;
width: 65%;
`

export default FormInput
