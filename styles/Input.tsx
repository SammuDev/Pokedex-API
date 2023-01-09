import styled from "styled-components"

const Input = styled.input.attrs({
  type: 'email',
  placeholder: 'Seu melhor e-mail'
  })`
  border: .5px solid #cecece;
  border-radius: 5px;
  width: 100%;
  padding: 10px;
`

export default Input
