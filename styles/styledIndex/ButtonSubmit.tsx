import styled from "styled-components";

const ButtonSubmit = styled.button.attrs({
})`
  border: none;
  border-radius: 3px;
  background-color: #0059ff;
  color: #fff;
  margin: -25px;
  padding: 10px 50px;
  transition: .5s;

  a {
    color: #fff;
    text-decoration: none;
  }

  &:hover {
    background-color: #0039a3;
  }
`;

export default ButtonSubmit;
