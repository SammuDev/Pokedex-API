import styled from "styled-components";

const PokeScrow = styled.div`
  width: 250px;
  height: 60vh;
  margin: 30px 0;
  text-align: left;
  overflow-y: scroll;
  float: right;

  &::-webkit-scrollbar {
    width: 5px;
    background-color: #F5F5F5;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #000000;
    border-radius: 5px;
  }
  & {
    scrollbar-color: #000000 #F5F5F5;
    scrollbar-width: thin;
  }
`;

export default PokeScrow;
