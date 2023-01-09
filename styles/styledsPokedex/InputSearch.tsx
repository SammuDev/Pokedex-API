import styled from "styled-components";

const InputSearch = styled.input.attrs({
  type: 'text',
  placeholder: 'Search by name',
  autoFocus: true,
})`
  border: none;
  border-radius: 40px;
  margin: 30px 0 15px;
  padding: 7px 15px;
`;

export default InputSearch;
